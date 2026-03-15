export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-white font-semibold">RV Neighbors</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#features"     className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            <a href="#download"     className="hover:text-white transition-colors">Download</a>
            <a href="/privacy"      className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms"        className="hover:text-white transition-colors">Terms of Use</a>
            <a href="mailto:support@rvneighborsapp.com" className="hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <p className="text-sm">© {year} RV Neighbors</p>
        </div>
      </div>
    </footer>
  )
}
