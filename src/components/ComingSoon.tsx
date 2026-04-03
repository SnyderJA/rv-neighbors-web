import { useState } from 'react'

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: 'bg-primary-light/20 text-primary-light',
    title: 'See Who\'s Nearby',
    description: 'Discover fellow RVers within your chosen radius — from your campground to the whole region.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    iconBg: 'bg-accent/20 text-accent-light',
    title: 'Connect & Chat',
    description: 'Send messages, share campsite tips, and build connections that last beyond the campground.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    iconBg: 'bg-secondary/20 text-secondary-light',
    title: 'Travel as a Family',
    description: 'Add your crew under one account. Family profiles are perfect for convoys and meetups.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    iconBg: 'bg-slate/20 text-slate',
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
    iconBg: 'bg-primary-light/20 text-primary-light',
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
    iconBg: 'bg-accent/20 text-accent-light',
    title: 'Smart Check-ins',
    description: 'Auto or manual location updates — whatever fits your style. Stay visible without the effort.',
  },
]

export default function ComingSoon() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
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
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute top-10 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] animate-float" />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-6 py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-10 animate-fade-in-down">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="text-white/90 text-sm font-medium tracking-wide">Something great is brewing</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] text-balance mb-6 animate-fade-in-up">
          Your RV Community<br />
          <span className="bg-gradient-to-r from-accent-light via-accent to-secondary-light bg-clip-text text-transparent">
            is Almost Here
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-white/60 text-lg sm:text-xl leading-relaxed mb-12 max-w-2xl animate-fade-in-up animation-delay-200">
          RV Neighbors connects you with fellow RVers wherever you roam.
          Discover who's nearby, make real friends, and build community on the road.
        </p>

        {/* Phone mockups */}
        <div className="flex justify-center gap-4 sm:gap-6 items-end mb-16 animate-fade-in-up animation-delay-400">
          {/* Back phone */}
          <div className="hidden sm:block w-40 lg:w-48 translate-y-6 rotate-[-6deg] opacity-80">
            <PhoneMockup screenHeight={340}>
              <img src="/screenshots/screenshots-map.png" alt="Neighbors map" className="w-full h-full object-cover object-top" />
            </PhoneMockup>
          </div>

          {/* Center phone (hero) */}
          <div className="w-48 sm:w-52 lg:w-56 z-10">
            <PhoneMockup screenHeight={380}>
              <img src="/screenshots/screenshots-messages.png" alt="Private Messages" className="w-full h-full object-cover object-top" />
            </PhoneMockup>
          </div>

          {/* Right phone */}
          <div className="hidden sm:block w-40 lg:w-48 translate-y-6 rotate-[6deg] opacity-80">
            <PhoneMockup screenHeight={340}>
              <img src="/screenshots/screenshots-profile.png" alt="RV Profile" className="w-full h-full object-cover object-top" />
            </PhoneMockup>
          </div>
        </div>

        {/* Email signup */}
        <div className="w-full max-w-md animate-fade-in-up animation-delay-600">
          {submitted ? (
            <div className="bg-white/10 border border-white/15 rounded-2xl px-6 py-5 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white font-semibold">You're on the list!</span>
              </div>
              <p className="text-white/50 text-sm">We'll let you know as soon as we launch.</p>
            </div>
          ) : (
            <>
              <p className="text-white/50 text-sm mb-4">Be the first to know when we launch</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/15 rounded-full px-5 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 transition-all"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-light text-white text-sm font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-accent/25 shrink-0"
                >
                  Notify Me
                </button>
              </form>
            </>
          )}
        </div>

        {/* Social proof / trust */}
        <div className="mt-16 flex flex-col items-center gap-4 animate-fade-in-up animation-delay-800">
          <div className="flex items-center gap-3 text-white/30 text-sm">
            <span className="w-8 h-px bg-white/20" />
            <span>Launching on iOS & Android</span>
            <span className="w-8 h-px bg-white/20" />
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
              <svg className="w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-white/40 text-xs font-medium">App Store</span>
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
      <div className="relative border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-24">
          {/* Section heading */}
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What's Coming</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Features headed your way
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Built by RVers, for RVers. Here's a sneak peek at what we're cooking up.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.1] hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.iconBg}`}>
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup({ children, screenHeight = 380 }: { children: React.ReactNode; screenHeight?: number }) {
  return (
    <div className="relative group">
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-[1.02]">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-10" />
        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden" style={{ height: screenHeight }}>
          {children}
        </div>
      </div>
    </div>
  )
}
