const steps = [
  {
    number: '01',
    title: 'Subscribe',
    description: 'Subscribe to a plan and request as many designs as you\'d like.',
  },
  {
    number: '02',
    title: 'Request',
    description: 'Request whatever you\'d like, from mobile apps to logos and everything in between.',
  },
  {
    number: '03',
    title: 'Receive',
    description: 'Receive your design within two business days on average, ready to use.',
  },
]

export default function HowItWorks() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          How it works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Membership perks
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-bg border border-border rounded-2xl p-8"
            >
              <span className="text-accent font-bold text-sm mb-4 block">{step.number}</span>
              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
