import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
        <a href="#">
          <img src="/topLogo.png" alt="RV Neighbors" className="h-24 w-auto" />
        </a>

        <a
          href="mailto:support@rvneighborsapp.com"
          className="text-white/70 hover:text-white text-sm font-medium transition-colors"
        >
          Contact Us
        </a>
      </div>
    </nav>
  )
}
