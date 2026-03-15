import AppStoreBadges from './AppStoreBadges'

export default function DownloadCTA() {
  return (
    <section id="download" className="py-24 bg-cta-gradient relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
          <span className="text-accent text-lg">🎉</span>
          <span className="text-white/90 text-sm font-medium">Free to download, always</span>
        </div>

        <h2 className="text-5xl font-extrabold text-white mb-6 text-balance">
          Ready to find your people on the road?
        </h2>

        <p className="text-white/70 text-xl mb-12 max-w-xl mx-auto">
          Join RVers across the country who are already using RV Neighbors to build real friendships wherever they park.
        </p>

        <AppStoreBadges size="lg" center />

        <p className="text-white/30 text-sm mt-8">
          Available on iOS and Android · Free to download
        </p>
      </div>
    </section>
  )
}
