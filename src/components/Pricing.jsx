const features = [
  ['One request at a time', 'Unlimited stock photos'],
  ['Avg. 48 hour delivery', 'Up to 2 users'],
  ['Unlimited brands', 'Pause or cancel anytime'],
  ['Webflow development', ''],
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-muted mb-3">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-black text-black text-center mb-2 leading-tight">
          One subscription,
        </h2>
        <h2 className="text-4xl md:text-5xl text-black text-center mb-12 leading-tight">
          <span className="italic-serif font-normal">endless possibilities</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-4 items-start max-w-3xl mx-auto">
          {/* Left — image card */}
          <div className="bg-white rounded-3xl p-8 border border-border">
            <div className="rounded-2xl mb-6 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f97316 50%, #fbbf24 100%)', height: 160 }}>
              <div className="h-full flex items-center justify-center">
                <div className="flex gap-2 text-4xl">😊 🤩 😄</div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400" /> Start today
            </div>
            <h3 className="font-black text-black text-2xl">Join<br/>Designjoy</h3>
          </div>

          {/* Right — pricing details */}
          <div className="bg-black rounded-3xl p-8 border border-blue-600 relative overflow-hidden">
            <span className="inline-block border border-pink-500 text-pink-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Lifetime Discount — Limited Time
            </span>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-black text-5xl">$4,995</span>
              <span className="text-gray-400 text-sm">/month</span>
              <span className="text-gray-500 text-lg line-through ml-1">$5,995</span>
            </div>

            <div className="mt-5 mb-6 rounded-2xl border border-gray-700 p-5">
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Included</p>
              <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                {features.flat().filter(Boolean).map((f) => (
                  <p key={f} className="text-white text-sm">{f}</p>
                ))}
              </div>
            </div>

            <a href="https://buy.stripe.com/designjoy"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-white text-base hover:opacity-90 transition-opacity"
              style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}>
              <span>😊</span> Join today
            </a>

            {/* decorative smiley */}
            <div className="absolute -bottom-6 -right-4 text-8xl opacity-60 select-none">😊</div>
          </div>
        </div>
      </div>
    </section>
  )
}
