const benefits = [
  {
    icon: '📋',
    title: 'Design board',
    description:
      'Manage your design queue easily using a Trello board. Add requests, track progress, and leave feedback — all in one place.',
  },
  {
    icon: '💳',
    title: 'Fixed monthly rate',
    description:
      'No hourly billing, no surprise invoices. Pay one flat rate each month and request as much as you need.',
  },
  {
    icon: '⚡',
    title: 'Lightning fast delivery',
    description:
      'Most requests are completed within two business days, keeping your projects moving at speed.',
  },
  {
    icon: '🏆',
    title: 'Senior-level quality',
    description:
      'Every design is crafted by Brett — a senior designer with nearly a decade of experience across startups and brands.',
  },
  {
    icon: '🔄',
    title: 'Flexible & scalable',
    description:
      'Pause your subscription when work slows down and resume when you need it again. Scale up or down with zero friction.',
  },
  {
    icon: '✅',
    title: 'Unique and all yours',
    description:
      'Everything designed for you is 100% yours. Full source files and ownership transferred on delivery.',
  },
]

export default function Benefits() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          Benefits
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Everything you need. Nothing you don't.
        </h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">
          One subscription unlocks a full suite of design services, on demand.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-bg border border-border rounded-2xl p-8">
              <span className="text-3xl mb-4 block">{b.icon}</span>
              <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
