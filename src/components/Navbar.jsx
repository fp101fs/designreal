export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl tracking-tight">
          designjoy.
        </a>
        <div className="flex items-center gap-6">
          <a
            href="https://billing.stripe.com/p/login/designjoy"
            className="text-muted hover:text-white text-sm transition-colors"
          >
            Login
          </a>
          <a href="#pricing" className="text-muted hover:text-white text-sm transition-colors">
            See pricing
          </a>
          <a
            href="https://calendly.com/designjoy"
            className="bg-accent text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-accent/90 transition-colors"
          >
            Book a call
          </a>
        </div>
      </div>
    </nav>
  )
}
