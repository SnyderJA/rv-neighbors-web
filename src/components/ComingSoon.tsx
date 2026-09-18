import { useState } from 'react'
import { SUPABASE_FUNCTIONS_URL } from '../config'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: 'bg-gold/15 text-gold-light ring-1 ring-gold/25',
    title: 'See Who\'s Nearby',
    description: 'Discover fellow RVers within your chosen radius — from your campground to the whole region.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    iconBg: 'bg-sage/15 text-sage-light ring-1 ring-sage/25',
    title: 'Your Privacy, Your Rules',
    description: 'Control your visibility with separate radii for connections and strangers. Go off-grid with one tap.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    iconBg: 'bg-cream/10 text-cream ring-1 ring-cream/20',
    title: 'RV Profiles',
    description: 'Show off your rig — make, model, year, and photos. Spark conversations before you even say hello.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    iconBg: 'bg-amber/15 text-amber-light ring-1 ring-amber/25',
    title: 'Know When Friends Are Close',
    description: 'Get a heads up when someone you have connected with rolls into your area — within a distance you choose.',
  },
]

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || submitting) return
    setError(null)
    setSubmitting(true)
    try {
      // Posts to an Edge Function rather than straight at the REST API, so the
      // browser needs no Supabase credentials at all. See src/config.ts for
      // why that matters.
      const res = await fetch(`${SUPABASE_FUNCTIONS_URL}/join-waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() }),
      })
      if (!res.ok) {
        // The function explains itself for a bad address or a flood of
        // signups; those are worth repeating rather than flattening into
        // "something went wrong".
        const body = await res.json().catch(() => null)
        throw new Error(body?.error ?? 'Request failed')
      }
      setSubmitted(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Request failed')
    } finally {
      setSubmitting(false)
    }
  }


  return (
    <section className="relative bg-hero-gradient">
      {/* Background decorations (contained to prevent horizontal scroll) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)"/>
          </svg>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-forest/25 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gold/[0.07] rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-amber/[0.06] rounded-full blur-[80px] animate-float" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-surface-deep/70 border border-line rounded-full px-5 py-2 mb-10 animate-fade-in-down">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold" />
          </span>
          <span className="text-cream text-sm font-medium tracking-wide">Something great is brewing</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-cream leading-[1.05] text-balance mb-6 animate-fade-in-up">
          Your RV Community<br />
          <span className="bg-gradient-to-r from-gold-light via-gold to-amber bg-clip-text text-transparent">
            is Almost Here
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-sage-light/85 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl animate-fade-in-up animation-delay-200">
          RV Neighbors connects you with fellow RVers wherever you roam.
          Discover who's nearby, make real friends, and build community on the road.
        </p>

        {/* One screenshot of what the app actually does. This replaced three
            mockups, the centre one of which showed a messaging screen — a
            feature that is not in the app. */}
        <div className="flex justify-center mb-16 animate-fade-in-up animation-delay-400">
          {/* No PhoneMockup: the device frame is part of the image. Wrapping
              it would put a frame around a picture of a frame, and the
              mockup's fixed 520px screen cropped the bottom off — the Nearby
              Neighbors row and the tab bar, the part that shows what the app
              does. Rendered at its own aspect ratio so nothing is cut.

              The PNG has an alpha channel and the corners outside the phone
              are transparent, so this takes drop-shadow (which follows the
              alpha) rather than shadow-2xl, and no rounding or ring — those
              would trace a rectangle around a phone-shaped image. */}
          <div className="w-60 sm:w-64 lg:w-72">
            <img
              src="/iphoneHeroImage.png"
              alt="The RV Neighbors map, showing nearby RVers and how far away they are"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Email signup */}
        <div className="w-full max-w-md animate-fade-in-up animation-delay-600">
          {submitted ? (
            <div className="bg-surface-deep/70 border border-line rounded-2xl px-6 py-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <svg className="w-5 h-5 text-gold-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-cream font-semibold">You're on the list!</span>
              </div>
              <p className="text-sage-light/80 text-sm">We'll let you know as soon as we launch.</p>
            </div>
          ) : (
            <>
              <p className="text-sage-light/80 text-sm mb-4">Be the first to know when we launch</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 bg-surface-deep/80 border border-line rounded-full px-5 py-3 text-cream placeholder:text-sage/70 text-sm focus:outline-none focus:border-gold/60 focus:ring-2 focus:ring-gold/20 transition-all"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-gold hover:bg-gold-light text-ink text-sm font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-gold/30 shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Adding…' : 'Notify Me'}
                </button>
              </form>
              {error && (
                <p className="text-amber-light text-sm mt-3">
                  {error} If it keeps happening, email{' '}
                  <a href="mailto:support@rvneighborsapp.com" className="underline">
                    support@rvneighborsapp.com
                  </a>
                  .
                </p>
              )}
            </>
          )}
        </div>

        {/* Social proof / trust */}
        <div className="mt-16 flex flex-col items-center gap-4 animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-3 text-sage/90 text-sm">
            <span className="w-8 h-px bg-line" />
            <span>Launching on iOS & Android</span>
            <span className="w-8 h-px bg-white/20" />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-surface-deep/60 border border-line rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-sage-light/80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-sage-light/80 text-xs font-medium">App Store</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.71c.34.47.81.64 1.24.35l17.09-9.83c.44-.26.44-.68 0-.93L4.42.47c-.43-.28-.9-.12-1.24.35-.16.22-.18.5-.18.78v21.33c0 .28.02.56.18.78zm2.3-19.65L15.5 12 5.48 19.94V4.06z"/>
              </svg>
              <span className="text-white/40 text-xs font-medium">Google Play</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Preview Section */}
      <div className="relative border-t border-line/60">
        <div className="max-w-6xl mx-auto px-6 py-24">
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-gold-light font-semibold text-sm uppercase tracking-widest mb-3">What's Coming</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-cream mb-4">
              Features headed your way
            </h2>
            <p className="text-sage-light/85 text-lg max-w-xl mx-auto">
              Built by RVers, for RVers. Here's a sneak peek at what we're cooking up.
            </p>
          </div>

          {/* Feature cards grid — 2x2. There are four cards, so the old
              lg:grid-cols-3 laid out three and left the fourth alone on a
              row of its own. Capped narrower than the 6xl container so the
              two columns do not stretch to ~550px each. */}
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-surface-deep/70 backdrop-blur-sm border border-line/70 rounded-2xl p-6 hover:bg-surface/70 hover:border-gold/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.iconBg}`}>
                  {f.icon}
                </div>
                <h3 className="text-cream font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sage-light/85 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
