const benefits = [
  {
    icon: '🗂️',
    gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b, #ea580c)',
    title: 'Design board',
    desc: 'Easily manage your design queue with a Trello board.',
  },
  {
    icon: '🔒',
    gradient: 'linear-gradient(135deg, #06b6d4, #6366f1, #8b5cf6)',
    title: 'Fixed monthly rate',
    desc: 'No surprises here! Pay the same fixed price each month.',
  },
  {
    icon: '⚡',
    gradient: 'linear-gradient(135deg, #8b5cf6, #f97316, #fbbf24)',
    title: 'Fast delivery',
    desc: 'Get your design one at a time in just a couple days on average.',
  },
  {
    icon: '⭐',
    gradient: 'linear-gradient(135deg, #ec4899, #22c55e, #86efac)',
    title: 'Top-notch quality',
    desc: 'Senior-level design quality at your fingertips, whenever you need it.',
  },
  {
    icon: '🔄',
    gradient: 'linear-gradient(135deg, #ef4444, #f97316, #6366f1)',
    title: 'Flexible and scalable',
    desc: 'Scale up or down and pause or cancel at any time.',
  },
  {
    icon: '✅',
    gradient: 'linear-gradient(135deg, #3b82f6, #6366f1, #a855f7)',
    title: 'Unique and all yours',
    desc: 'Each design is made especially for you and owned by you 100%.',
  },
]

export default function Benefits() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-4 leading-tight">
          It&apos;s{' '}
          <span className="text-italics">&ldquo;you&apos;ll never go</span>
          <br />
          <span className="text-italics">back&rdquo;</span> better
        </h2>
        <p className="text-muted text-center mb-12 max-w-xl mx-auto">
          Designjoy replaces unreliable freelancers and expensive agencies for one flat monthly fee,
          with designs delivered so fast you won&apos;t want to go anywhere else.
        </p>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl overflow-hidden border border-border">
              <div className="h-36 flex items-center justify-center text-5xl"
                style={{ background: b.gradient }}>
                {b.icon}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-black text-base mb-1">{b.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
