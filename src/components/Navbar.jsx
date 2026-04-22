export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-bold text-lg text-black">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4.5c2.49 0 4.5 2.01 4.5 4.5S13.49 15.5 11 15.5 6.5 13.49 6.5 11s2.01-4.5 4.5-4.5z" fill="black"/>
          </svg>
          Designjoy
        </a>
        <div className="flex items-center gap-2">
          <a href="https://billing.stripe.com/p/login/designjoy"
            className="text-black text-sm font-medium px-4 py-2 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors">
            Login
          </a>
          <a href="https://calendly.com/designjoy"
            className="text-black text-sm font-medium px-4 py-2 rounded-lg border border-border bg-white hover:bg-gray-50 transition-colors flex items-center gap-1.5">
            <span>📞</span> Book a call
          </a>
          <a href="#pricing"
            className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors">
            See pricing
          </a>
        </div>
      </div>
    </nav>
  )
}
