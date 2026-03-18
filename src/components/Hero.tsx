import AppStoreBadges from './AppStoreBadges'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)"/>
        </svg>
      </div>

      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: copy */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Now available on iOS & Android</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] text-balance mb-6">
            Find Your Community<br />
            <span className="text-accent">on the Road</span>
          </h1>

          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-lg">
            RV Neighbors connects you with fellow RVers in your area. See who's parked nearby,
            make real friends, share local tips, and build the community you've always wanted —
            wherever the road takes you.
          </p>

          <AppStoreBadges size="lg" />

          <p className="text-white/40 text-xs mt-5">Free to download · No credit card required</p>
        </div>

        {/* Right: phone mockups */}
        <div className="flex justify-center lg:justify-end gap-4 items-end">
          {/* Back phone */}
          <div className="hidden sm:block w-48 mb-0 translate-y-8 rotate-[-6deg]">
            <PhoneMockup label="Neighbors Map" bgColor="bg-primary-light/40" screenHeight={380}>
              <img src="/screenshots/screenshots-map.png" alt="Neighbors map" className="w-full h-full object-cover object-top" />
            </PhoneMockup>
          </div>

          {/* Front phone */}
          <div className="w-52 rotate-[3deg]">
            <PhoneMockup label="Nearby RVers" bgColor="bg-white">
              <img src="/screenshots/screenshots-profile.png" alt="Nearby RVers" className="w-full h-full object-cover object-top" />
            </PhoneMockup>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-white/40 text-xs">Scroll</span>
        <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

function PhoneMockup({ children, label, bgColor, screenHeight = 415 }: { children: React.ReactNode; label: string; bgColor: string; screenHeight?: number }) {
  return (
    <div className="relative">
      {/* Phone shell */}
      <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl ring-1 ring-white/10">
        {/* Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-10" />
        {/* Screen */}
        <div className={`${bgColor} rounded-[2rem] overflow-hidden`} style={{ height: screenHeight }}>
          {children}
        </div>
      </div>
      <p className="text-center text-white/40 text-[10px] mt-3">{label}</p>
    </div>
  )
}
