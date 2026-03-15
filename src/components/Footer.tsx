export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <img src="/topLogo.png" alt="RV Neighbors" className="h-8 w-auto opacity-80" />

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
