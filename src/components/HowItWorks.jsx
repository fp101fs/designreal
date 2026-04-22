const cards = [
  {
    title: 'Subscribe',
    desc: 'Subscribe to a plan & request as many designs as you\'d like.',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #ea580c 100%)',
    preview: (
      <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-white text-xs">
        <div className="font-bold text-sm mb-2">$5,995 <span className="font-normal text-white/70">/month</span></div>
        <div className="space-y-1.5 text-white/80">
          {['One request at a time','Unlimited stock photos','Avg. 48 hour delivery','Up to 2 users','Unlimited brands','Pause or cancel anytime','Webflow development'].map(f => (
            <div key={f} className="flex items-center gap-1.5"><span className="text-white">✓</span> {f}</div>
          ))}
        </div>
        <div className="mt-3 bg-black text-white text-center rounded-lg py-2 font-semibold text-sm flex items-center justify-center gap-2">
          <span>😊</span> Join today
        </div>
      </div>
    ),
  },
  {
    title: 'Request',
    desc: 'Request whatever you\'d like, from mobile apps to logos.',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #8b5cf6 100%)',
    preview: (
      <div className="flex flex-wrap gap-2">
        {['e apps','Presentations','Logos','Social M…','ow','Print des…','king','Ad creat…','Email','Display ads','Packaging'].map(tag => (
          <span key={tag} className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur border border-white/20">{tag}</span>
        ))}
      </div>
    ),
  },
  {
    title: 'Receive',
    desc: 'Receive your design within two business days on average.',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #f97316 50%, #fbbf24 100%)',
    preview: (
      <div className="flex gap-2 justify-center">
        <div className="bg-white/20 rounded-xl h-28 w-32 flex items-center justify-center text-4xl">📱</div>
        <div className="bg-white/20 rounded-xl h-28 w-32 flex items-center justify-center text-4xl">💻</div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-4 leading-tight">
          The way design{' '}
          <span className="text-italics">should've</span>
          <br />been done in the first place
        </h2>
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {cards.map((c) => (
            <div key={c.title} className="rounded-3xl overflow-hidden" style={{ background: c.gradient }}>
              <div className="p-6 min-h-64 flex flex-col justify-between">
                <div>{c.preview}</div>
                <div className="mt-6">
                  <h3 className="text-white font-bold text-2xl mb-2">{c.title}</h3>
                  <p className="text-white/80 text-sm">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
