import MemberCard from './MemberCard'

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 pb-10 px-6 flex items-center">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h1 className="text-[72px] leading-[1.0] font-black text-black mb-5 tracking-tight">
            Design subscriptions for{' '}
            <span className="text-italics" style={{ fontSize: '72px' }}>everyone</span>
          </h1>
          <p className="text-muted text-lg">Pause or cancel anytime.</p>
        </div>

        {/* Right — tilt card + CTA */}
        <div className="flex flex-col items-center gap-6">
          <MemberCard />

          <div className="w-full max-w-sm space-y-3">
            <a href="#pricing"
              className="block w-full bg-black text-white font-semibold text-center py-3.5 rounded-xl hover:bg-gray-900 transition-colors text-base">
              See pricing
            </a>
            <a href="https://calendly.com/designjoy/15min"
              className="flex items-center justify-between bg-white border border-border rounded-xl px-4 py-3 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-2xl">😊</span>
                <div>
                  <p className="text-black font-medium text-sm">Book a 15-min intro call</p>
                  <p className="text-muted text-xs">Schedule now</p>
                </div>
              </div>
              <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
