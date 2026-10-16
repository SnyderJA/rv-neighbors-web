/**
 * Access gates for two pages on this otherwise-public site. The marketing
 * site stays completely public.
 *
 *   /gitflow   internal page, HTTP Basic Auth (username + password)
 *   /roadmap   tester roadmap, a single access code Justin shares with beta
 *              testers. A correct code sets a cookie for about 30 days.
 *
 * /project-tracker used to live here and was protected for a time, because it
 * published detailed descriptions of unpatched security work. It was removed
 * entirely on 2026-09-18 — progress now lives only in the private Storybloq
 * ledger, and nothing about the plan is published from this repo.
 *
 * The rule that made it dangerous still applies to anything added here,
 * /roadmap included: this repo is public and so is the site, and the access
 * code only keeps casual visitors out — the page's text is readable in this
 * repo. Never publish ticket titles, gate-test names or defect descriptions.
 * Naming unpatched work on a live app hands an attacker a remediation
 * checklist. /roadmap carries user-facing summaries only.
 *
 * Secrets are read from Vercel environment variables and are NEVER stored in
 * this repo — this repo is public.
 *
 *   Vercel dashboard -> rv-neighbors-web -> Settings -> Environment Variables
 *     TRACKER_PASSWORD   (required for /gitflow)
 *     TRACKER_USER       (optional, defaults to "rvn")
 *     ROADMAP_CODE       (required for /roadmap; changing it signs everyone out)
 *
 * Fails CLOSED: if a page's variable is not set, access is denied rather than
 * silently left open. To make a page public again, remove it from `matcher`.
 */

const REALM = "RV Neighbors internal";

function deny(message: string, withPrompt: boolean) {
  return new Response(message, {
    status: 401,
    headers: {
      // Triggers the browser's native username/password dialog.
      ...(withPrompt ? { "WWW-Authenticate": `Basic realm="${REALM}"` } : {}),
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function gitflowGate(request: Request) {
  const expectedPassword = process.env.TRACKER_PASSWORD;
  const expectedUser = process.env.TRACKER_USER || "rvn";

  if (!expectedPassword) {
    return deny(
      "This page is locked: TRACKER_PASSWORD is not set on the Vercel project.\n" +
        "Set it under Settings -> Environment Variables, then redeploy.",
      false,
    );
  }

  const header = request.headers.get("authorization") || "";
  if (!header.toLowerCase().startsWith("basic ")) {
    return deny("Authentication required.", true);
  }

  let decoded = "";
  try {
    decoded = atob(header.slice(6).trim());
  } catch {
    return deny("Malformed credentials.", true);
  }

  // Split on the FIRST colon only — passwords may contain colons.
  const sep = decoded.indexOf(":");
  const user = sep === -1 ? "" : decoded.slice(0, sep);
  const password = sep === -1 ? "" : decoded.slice(sep + 1);

  if (user !== expectedUser || password !== expectedPassword) {
    return deny("Incorrect username or password.", true);
  }

  // Authenticated — let the request continue to the static file.
  return undefined;
}

/* ------------------------------- /roadmap -------------------------------- */

const ROADMAP_COOKIE = "rvn_roadmap";
const ROADMAP_MAX_AGE = 60 * 60 * 24 * 30; // about 30 days
// Fixed label the cookie value is derived from. The cookie never holds the
// code itself; bumping "v1" signs everyone out.
const ROADMAP_COOKIE_LABEL = "rv-neighbors-roadmap-access-v1";
const MAX_CODE_LENGTH = 200;

const encoder = new TextEncoder();

function toHex(buf: ArrayBuffer) {
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

// HMAC-SHA-256 keyed with the code: only someone who knows the code can
// produce a valid cookie, and a new code invalidates every old cookie.
async function cookieValueFor(code: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(code),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  return toHex(await crypto.subtle.sign("HMAC", key, encoder.encode(ROADMAP_COOKIE_LABEL)));
}

// Constant-time comparison: hash both sides to the same length, then compare
// every byte without stopping early.
async function safeEqual(a: string, b: string) {
  const [ha, hb] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(a)),
    crypto.subtle.digest("SHA-256", encoder.encode(b)),
  ]);
  const x = new Uint8Array(ha);
  const y = new Uint8Array(hb);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

function readCookie(request: Request, name: string) {
  const header = request.headers.get("cookie") || "";
  for (const part of header.split(";")) {
    const eq = part.indexOf("=");
    if (eq !== -1 && part.slice(0, eq).trim() === name) return part.slice(eq + 1).trim();
  }
  return "";
}

const NO_STORE_HEADERS = {
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
  "Referrer-Policy": "no-referrer",
};

// The small page shown instead of the roadmap. Only fixed strings go into it;
// nothing from the request is echoed back.
function roadmapGatePage(message: string, showForm: boolean, status = 401) {
  const form = showForm
    ? `<form method="post" action="/roadmap">
      <label for="code">Access code</label>
      <input id="code" name="code" type="password" autocomplete="off" autocapitalize="off"
             spellcheck="false" maxlength="${MAX_CODE_LENGTH}" required autofocus>
      <button type="submit">Open roadmap</button>
    </form>`
    : "";
  const note = message ? `<p class="msg" role="alert">${message}</p>` : "";
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="robots" content="noindex, nofollow">
<title>RV Neighbors Roadmap</title>
<link rel="icon" href="/favicon.svg">
<style>
:root { --bg: #f6f4ec; --surface: #ffffff; --fg: #16261d; --muted: #5b6b61; --line: #d9dccf; --accent: #b86a14; --sage: #2d5a42; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #0f2419; --surface: #15301f; --fg: #f5f5f0; --muted: #a9b8ad; --line: #28463a; --accent: #df8b29; --sage: #8fc2a3; color-scheme: dark; }
}
* { box-sizing: border-box; }
html { -webkit-text-size-adjust: 100%; text-size-adjust: 100%; }
body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: var(--bg); color: var(--fg);
  font-family: "Figtree", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px; line-height: 1.5;
  padding: max(24px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(24px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left)); }
main { width: 100%; max-width: 380px; background: var(--surface); border: 1px solid var(--line); border-radius: 12px; padding: 24px; display: grid; gap: 14px; }
.eyebrow { font-size: 12px; letter-spacing: .14em; text-transform: uppercase; color: var(--accent); font-weight: 700; }
h1 { font-size: 24px; line-height: 1.2; margin: 0; }
p { margin: 0; color: var(--muted); }
form { display: grid; gap: 10px; }
label { font-weight: 600; font-size: 14px; }
input { font: inherit; width: 100%; padding: 10px 12px; border-radius: 8px; border: 1px solid var(--line); background: var(--bg); color: var(--fg); }
input:focus { outline: 2px solid var(--accent); outline-offset: 1px; }
button { font: inherit; font-weight: 700; padding: 11px 14px; border: 0; border-radius: 8px; background: var(--sage); color: var(--surface); cursor: pointer; }
.msg { color: var(--accent); font-weight: 600; }
</style>
</head>
<body>
<main>
  <div class="eyebrow">RV Neighbors · Testers</div>
  <h1>Product roadmap</h1>
  ${note}
  ${form}
</main>
</body>
</html>
`;
  return new Response(html, {
    status,
    headers: { "Content-Type": "text/html; charset=utf-8", ...NO_STORE_HEADERS },
  });
}

async function roadmapGate(request: Request) {
  const expectedCode = process.env.ROADMAP_CODE;
  if (!expectedCode) {
    return roadmapGatePage("Roadmap access isn't set up yet.", false);
  }
  const expectedCookie = await cookieValueFor(expectedCode);

  if (request.method === "POST") {
    let submitted = "";
    try {
      const value = (await request.formData()).get("code");
      submitted = typeof value === "string" ? value.trim().slice(0, MAX_CODE_LENGTH) : "";
    } catch {
      submitted = "";
    }
    if (submitted && (await safeEqual(submitted, expectedCode))) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: "/roadmap",
          "Set-Cookie":
            `${ROADMAP_COOKIE}=${expectedCookie}; Path=/roadmap; Max-Age=${ROADMAP_MAX_AGE}; ` +
            "HttpOnly; Secure; SameSite=Lax",
          ...NO_STORE_HEADERS,
        },
      });
    }
    return roadmapGatePage("That code didn't work.", true);
  }

  const cookie = readCookie(request, ROADMAP_COOKIE);
  if (cookie && (await safeEqual(cookie, expectedCookie))) {
    // Valid access cookie — let the request continue to the static page.
    return undefined;
  }
  return roadmapGatePage("", true);
}

/* ------------------------------------------------------------------------- */

// "/roadmap", "/roadmap/", "/roadmap/index.html" and any capitalisation of
// them. Everything else the matcher sends here is /gitflow.
const ROADMAP_PATH = /^\/roadmap(\/|$)/i;

export default function middleware(request: Request) {
  if (ROADMAP_PATH.test(new URL(request.url).pathname)) {
    return roadmapGate(request);
  }
  return gitflowGate(request);
}

export const config = {
  matcher: [
    "/gitflow",
    "/gitflow/:path*",
    // Case-insensitive, so the gate never depends on whether the host treats
    // "/Roadmap" and "/roadmap" as the same page.
    "/([Rr][Oo][Aa][Dd][Mm][Aa][Pp])",
    "/([Rr][Oo][Aa][Dd][Mm][Aa][Pp])/:path*",
  ],
};
