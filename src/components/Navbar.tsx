import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-dark/95 backdrop-blur shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img src="/topLogo.png" alt="RV Neighbors" className="h-24 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
          <a href="#how-it-works" className="text-white/80 hover:text-white text-sm font-medium transition-colors">How It Works</a>
          <a href="#download" className="bg-accent hover:bg-accent-light text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
            Download Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-primary-dark/98 backdrop-blur border-t border-white/10 px-6 py-4 space-y-3">
          <a href="#features"     onClick={() => setMenuOpen(false)} className="block text-white/80 hover:text-white py-2 text-sm font-medium">Features</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="block text-white/80 hover:text-white py-2 text-sm font-medium">How It Works</a>
          <a href="#download"     onClick={() => setMenuOpen(false)} className="block bg-accent text-white text-sm font-semibold px-5 py-3 rounded-full text-center mt-2">Download Free</a>
        </div>
      )}
    </nav>
  )
}
