export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-xl tracking-tight">designjoy.</span>
          <span className="text-2xl">😊</span>
        </div>

        <p className="text-muted text-sm">Headquartered in Phoenix, Arizona</p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-muted hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-muted hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}
