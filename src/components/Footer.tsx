export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink-deep text-sage-light/75 py-8 border-t border-line/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {year} RV Neighbors. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:text-gold-light transition-colors">Privacy Policy</a>
            <a href="mailto:support@rvneighborsapp.com" className="hover:text-gold-light transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
