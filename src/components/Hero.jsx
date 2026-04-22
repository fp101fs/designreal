export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-10 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h1 className="text-[72px] leading-[1.0] font-black text-black mb-5 tracking-tight">
            Design subscriptions for{' '}
            <span className="italic-serif text-[72px] font-normal">everyone</span>
          </h1>
          <p className="text-muted text-lg">Pause or cancel anytime.</p>
        </div>

        {/* Right — hero card */}
        <div className="rounded-3xl overflow-hidden shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 40%, #c084fc 70%, #f472b6 100%)' }}>
          <div className="p-8">
            {/* sticker row */}
            <div className="flex justify-end gap-3 mb-6">
              <span className="text-5xl">😊</span>
              <span className="text-5xl">🤩</span>
              <span className="text-5xl" style={{ transform: 'rotate(-10deg)', display: 'inline-block' }}>😄</span>
            </div>
            <h2 className="text-white font-black text-4xl leading-tight mb-2">Join<br/>Designjoy</h2>
            <p className="text-white/80 text-sm mb-6">One subscription to rule them all.</p>
            <a href="#pricing"
              className="block w-full bg-white text-black font-semibold text-center py-4 rounded-xl hover:bg-gray-100 transition-colors mb-4">
              See pricing
            </a>
            <a href="https://calendly.com/designjoy/15min"
              className="flex items-center justify-between bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">😊</span>
                <div>
                  <p className="text-white font-medium text-sm">Book a 15-min intro call</p>
                  <p className="text-white/60 text-xs">Schedule now</p>
                </div>
              </div>
              <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold text-sm">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
