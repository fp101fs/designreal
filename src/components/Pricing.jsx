const features = [
  'One active request at a time',
  'Average 48-hour delivery',
  'Unlimited design requests',
  'Unlimited brands',
  'Unlimited stock photos',
  'Webflow development included',
  'Up to 2 team members',
  'Pause or cancel anytime',
  'Revisions until you\'re happy',
  'Full source file ownership',
  'Figma design files',
  'Direct designer access',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          One plan. No surprises.
        </h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">
          Simple, transparent pricing. Pause or cancel anytime.
        </p>

        <div className="max-w-lg mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-10">
            <div className="flex items-start justify-between mb-8">
              <div>
                <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
                  Monthly Club
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-white font-extrabold text-5xl">$4,995</span>
                  <span className="text-muted">/mo</span>
                </div>
                <p className="text-muted text-sm mt-1">
                  <span className="line-through">$5,995/mo</span>
                  &nbsp;— lifetime discount
                </p>
              </div>
              <span className="bg-accent/10 border border-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                Popular
              </span>
            </div>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="text-accent text-sm">✓</span>
                  <span className="text-white text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://buy.stripe.com/designjoy"
              className="block w-full bg-accent text-white text-center font-semibold py-4 rounded-full hover:bg-accent/90 transition-colors"
            >
              Join today
            </a>
            <p className="text-muted text-xs text-center mt-4">
              Pause or cancel anytime. No long-term contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
