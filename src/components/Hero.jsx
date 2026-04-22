export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-surface border border-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm text-muted">Accepting new clients</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Design subscriptions
          <br />
          <span className="text-accent">for everyone.</span>
        </h1>

        <p className="text-muted text-lg md:text-xl mb-10 max-w-xl mx-auto">
          Pause or cancel anytime.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#pricing"
            className="bg-accent text-white font-semibold px-8 py-3.5 rounded-full hover:bg-accent/90 transition-colors text-base w-full sm:w-auto text-center"
          >
            See plans &amp; pricing
          </a>
          <a
            href="https://calendly.com/designjoy"
            className="border border-border text-white font-semibold px-8 py-3.5 rounded-full hover:border-white/40 transition-colors text-base w-full sm:w-auto text-center"
          >
            Book a call
          </a>
        </div>

        <a
          href="https://calendly.com/designjoy/15min"
          className="inline-flex items-center gap-2 text-muted hover:text-white text-sm transition-colors"
        >
          Book a 15-min intro call
          <span>→</span>
        </a>
      </div>
    </section>
  )
}
