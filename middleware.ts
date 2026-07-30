/**
 * HTTP Basic Auth for the internal pages on this otherwise-public site.
 *
 * Protects /project-tracker (which lists unpatched security work in detail)
 * and /gitflow. The marketing site stays completely public.
 *
 * The password is read from Vercel environment variables and is NEVER stored
 * in this repo — this repo is public.
 *
 *   Vercel dashboard -> rv-neighbors-web -> Settings -> Environment Variables
 *     TRACKER_PASSWORD   (required)
 *     TRACKER_USER       (optional, defaults to "rvn")
 *
 * Fails CLOSED: if TRACKER_PASSWORD is not set, access is denied rather than
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

export default function middleware(request: Request) {
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

export const config = {
  matcher: [
    "/project-tracker",
    "/project-tracker/:path*",
    "/gitflow",
    "/gitflow/:path*",
  ],
};
