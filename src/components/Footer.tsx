export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-white/50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {year} RV Neighbors. All rights reserved.</p>
          <nav className="flex gap-6 text-sm">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="mailto:support@rvneighborsapp.com" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
