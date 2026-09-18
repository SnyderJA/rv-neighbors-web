/**
 * The Supabase project URL.
 *
 * A constant, not an environment variable, on purpose.
 *
 * The waitlist form used to read import.meta.env.VITE_SUPABASE_URL and
 * VITE_SUPABASE_ANON_KEY. Neither was ever set in Vercel, so Vite inlined the
 * string "undefined" at build time and the deployed site POSTed to
 * "undefined/rest/v1/waitlist". Every signup failed, for every visitor, and
 * nothing said so — the build succeeded, the page rendered, the button worked.
 *
 * This URL is not a credential. It ships in every copy of the mobile app and
 * is public by design. Hardcoding it removes the entire failure mode: a
 * constant cannot be unset in a dashboard.
 *
 * Nothing secret is needed here any more either — join-waitlist is a public
 * Edge Function that holds the service_role key server-side, so the browser
 * sends only an email address.
 */
export const SUPABASE_FUNCTIONS_URL = 'https://tybihehzpnggjcfnadxd.supabase.co/functions/v1'
