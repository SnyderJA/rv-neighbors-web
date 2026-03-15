const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description:
      'Sign up in seconds with Google, Facebook, or email. Add your name, a photo, your RV details, and a bit about yourself. The more you share, the easier it is to connect.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Share Your Location',
    description:
      'Enable location sharing and set your visibility preferences. You control exactly who can see you and from how far away. Automatic daily updates or manual check-ins — your choice.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Meet Your Neighbors',
    description:
      'Browse the map, tap profiles, and send connection requests. Once connected, chat directly, share tips, and start building the kind of RV community you\'ve always wanted.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-primary-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Getting Started</p>
          <h2 className="text-4xl font-extrabold text-white mb-4">Up and running in minutes</h2>
          <p className="text-white/60 text-lg">No complicated setup. Just download, sign up, and start meeting people.</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-white/10" />

          {steps.map((s, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {/* Step number ring */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white">
                  {s.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
