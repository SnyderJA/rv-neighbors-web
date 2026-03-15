const screens = [
  {
    title: 'See Neighbors on an Interactive Map',
    description:
      'The neighbors map shows fellow RVers within your visibility radius in real time. Tap any pin to see their profile, RV info, and connect — all without leaving the map.',
    highlights: ['Real-time location updates', 'Adjustable visibility radius', 'One-tap connection requests'],
    side: 'right',
    screenContent: (
      <img src="/screenshots-map.png" alt="Neighbors Map" className="w-full h-full object-cover object-top" />
    ),
  },
  {
    title: 'Rich Profiles for Every RVer',
    description:
      'Show off your rig and travel style with a full profile — your RV make, model, a photo, bio, and interests. It\'s your digital campsite welcome sign that travels with you.',
    highlights: ['RV photo & details', 'Interests & travel style', 'Social media handle'],
    side: 'left',
    screenContent: (
      <img src="/screenshots-profile.png" alt="User Profile" className="w-full h-full object-cover object-top" />
    ),
  },
  {
    title: 'Message Neighbors Directly',
    description:
      'Once you\'re connected, chat directly with neighbors — ask about the best spots in town, find a dog-walking buddy, or just say hi. Real conversations, real community.',
    highlights: ['Direct messaging', 'Connection-based privacy', 'Available on iOS & Android'],
    side: 'right',
    screenContent: (
      <img src="/screenshots-messages.png" alt="Messages" className="w-full h-full object-cover object-top" />
    ),
  },
  {
    title: 'Privacy You Can Count On',
    description:
      'You decide who sees you and from how far. Set different visibility distances for connections vs. strangers, or go completely Off The Grid when you need a break.',
    highlights: ['Separate radii for friends & strangers', 'Off The Grid mode', 'Automatic or manual check-ins'],
    side: 'left',
    screenContent: (
      <img src="/screenshots-privacy.png" alt="Privacy Settings" className="w-full h-full object-cover object-top" />
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
                  <div className="bg-white rounded-[2.5rem] overflow-hidden" style={{ height: 380 }}>
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
