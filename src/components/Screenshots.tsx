const screens = [
  {
    title: 'See Neighbors on an Interactive Map',
    description:
      'The neighbors map shows fellow RVers within your visibility radius in real time. Tap any pin to see their profile, RV info, and connect — all without leaving the map.',
    highlights: ['Real-time location updates', 'Adjustable visibility radius', 'One-tap connection requests'],
    side: 'right',
    screenContent: (
      <div className="w-full h-full bg-gradient-to-b from-primary/30 to-primary-dark/60 flex flex-col p-4 gap-3">
        {/* Fake map pins */}
        <div className="relative flex-1 rounded-xl bg-primary/20 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-accent rounded-full border-2 border-white shadow-lg -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-secondary rounded-full border-2 border-white shadow" />
          <div className="absolute top-2/3 left-2/3 w-4 h-4 bg-slate rounded-full border-2 border-white shadow" />
          <div className="absolute bottom-3 right-3 bg-white/90 rounded-lg px-2 py-1">
            <p className="text-[8px] font-semibold text-primary">3 nearby</p>
          </div>
        </div>
        {/* Bottom drawer */}
        <div className="bg-white/90 rounded-xl p-2">
          <p className="text-[9px] font-semibold text-gray-800">Tom & Lisa B.</p>
          <p className="text-[8px] text-gray-400">0.3 mi · Full-time · 2022 Airstream</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Rich Profiles for Every RVer',
    description:
      'Show off your rig and travel style with a full profile — your RV make, model, a photo, bio, and interests. It\'s your digital campsite welcome sign that travels with you.',
    highlights: ['RV photo & details', 'Interests & travel style', 'Social media handle'],
    side: 'left',
    screenContent: (
      <div className="w-full h-full bg-bg flex flex-col">
        {/* Header */}
        <div className="bg-primary h-20 relative flex-shrink-0">
          <div className="absolute -bottom-7 left-4 w-14 h-14 bg-secondary rounded-full border-3 border-white shadow-lg" />
        </div>
        <div className="pt-10 px-4 pb-4 flex-1">
          <p className="text-[10px] font-bold text-gray-900">Tom & Lisa B.</p>
          <p className="text-[8px] text-gray-400 mb-2">Full-time since 2021 · Arizona</p>
          <div className="bg-white rounded-lg p-2 shadow-sm mb-2">
            <p className="text-[8px] font-semibold text-gray-700">Our Rig</p>
            <p className="text-[8px] text-gray-500">2022 Airstream Bambi 19CB</p>
          </div>
          <div className="flex gap-1">
            {['Hiking', 'Dogs', 'Coffee'].map((t) => (
              <span key={t} className="bg-primary/10 text-primary text-[7px] font-medium px-1.5 py-0.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Message Neighbors Directly',
    description:
      'Once you\'re connected, chat directly with neighbors — ask about the best spots in town, find a dog-walking buddy, or just say hi. Real conversations, real community.',
    highlights: ['Direct messaging', 'Connection-based privacy', 'Available on iOS & Android'],
    side: 'right',
    screenContent: (
      <div className="w-full h-full bg-bg flex flex-col">
        {/* Chat header */}
        <div className="bg-primary px-3 py-2 flex items-center gap-2">
          <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0" />
          <p className="text-white text-[9px] font-semibold">Tom & Lisa</p>
        </div>
        {/* Messages */}
        <div className="flex-1 p-3 space-y-2">
          <div className="flex">
            <div className="bg-white rounded-xl rounded-tl-none px-2.5 py-1.5 shadow-sm max-w-[75%]">
              <p className="text-[8px] text-gray-700">Hey! Love your Airstream 👋</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-primary rounded-xl rounded-tr-none px-2.5 py-1.5 max-w-[75%]">
              <p className="text-[8px] text-white">Thanks! We saw you pulled in yesterday — welcome to the park!</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-white rounded-xl rounded-tl-none px-2.5 py-1.5 shadow-sm max-w-[75%]">
              <p className="text-[8px] text-gray-700">Any good hiking nearby? 🥾</p>
            </div>
          </div>
        </div>
        {/* Input */}
        <div className="px-3 py-2">
          <div className="bg-white rounded-full px-3 py-1.5 flex items-center">
            <p className="text-[8px] text-gray-400 flex-1">Message...</p>
            <div className="w-4 h-4 bg-accent rounded-full" />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Privacy You Can Count On',
    description:
      'You decide who sees you and from how far. Set different visibility distances for connections vs. strangers, or go completely Off The Grid when you need a break.',
    highlights: ['Separate radii for friends & strangers', 'Off The Grid mode', 'Automatic or manual check-ins'],
    side: 'left',
    screenContent: (
      <div className="w-full h-full bg-bg flex flex-col p-3 gap-2">
        <p className="text-[9px] font-bold text-gray-800">Privacy Settings</p>
        {[
          { label: 'Connections can see me', value: '25 mi', on: true },
          { label: 'Non-connections',        value: '10 mi', on: true },
          { label: 'Off The Grid',           value: '',      on: false },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl px-3 py-2 flex items-center justify-between shadow-sm">
            <div>
              <p className="text-[8px] font-semibold text-gray-800">{s.label}</p>
              {s.value && <p className="text-[7px] text-gray-400">{s.value} radius</p>}
            </div>
            <div className={`w-7 h-4 rounded-full flex items-center px-0.5 transition-colors ${s.on ? 'bg-primary justify-end' : 'bg-gray-300 justify-start'}`}>
              <div className="w-3 h-3 bg-white rounded-full shadow" />
            </div>
          </div>
        ))}
      </div>
    ),
  },
]

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-24 bg-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">The App</p>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Designed for life on the road
          </h2>
          <p className="text-gray-500 text-lg">
            A clean, intuitive experience that gets out of your way and connects you to the people around you.
          </p>
        </div>

        <div className="space-y-28">
          {screens.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col ${s.side === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-14`}
            >
              {/* Phone mockup */}
              <div className="flex-shrink-0">
                <div className="relative bg-gray-900 rounded-[3rem] p-2.5 shadow-2xl ring-1 ring-white/10 w-56">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-4 bg-gray-900 rounded-full z-10" />
                  <div className="bg-white rounded-[2.5rem] overflow-hidden" style={{ height: 440 }}>
                    {s.screenContent}
                  </div>
                </div>
              </div>

              {/* Copy */}
              <div className="flex-1 max-w-lg">
                <p className="text-accent font-semibold text-sm mb-3">0{i + 1}</p>
                <h3 className="text-3xl font-extrabold text-gray-900 mb-4 text-balance">{s.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed mb-7">{s.description}</p>
                <ul className="space-y-2.5">
                  {s.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-3 text-gray-700 text-sm">
                      <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
