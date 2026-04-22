const quotes = [
  {
    text: 'Designjoy shows that they know the art of subtlety — the designs are clean, purposeful, and always on brand.',
    author: 'Webflow',
    role: 'Official recognition',
  },
  {
    text: "Design is everything, and these guys have nailed it. If you're serious about your brand, this is where you go.",
    author: 'Kevin O\'Leary',
    role: 'Shark Tank',
  },
]

const awards = [
  { label: 'Product Hunt', sub: 'Official Badge' },
  { label: 'Buy Me A Coffee', sub: 'Top Creator' },
  { label: 'Fintech Awards', sub: 'Product of the Year' },
  { label: 'Switchboard', sub: 'Remote Work Product of the Year' },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          Social proof
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Trusted by founders &amp; brands.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {quotes.map((q) => (
            <div key={q.author} className="bg-surface border border-border rounded-2xl p-8">
              <p className="text-white text-lg leading-relaxed mb-6">"{q.text}"</p>
              <div>
                <p className="text-white font-semibold">{q.author}</p>
                <p className="text-muted text-sm">{q.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {awards.map((a) => (
            <div
              key={a.label}
              className="bg-surface border border-border rounded-xl p-5 text-center"
            >
              <p className="text-white font-semibold text-sm">{a.label}</p>
              <p className="text-muted text-xs mt-1">{a.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
