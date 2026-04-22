import MemberCard from './MemberCard'

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
        <p className="text-center font-normal uppercase text-muted mb-3" style={{ fontSize: '10px', letterSpacing: '0.05em' }}>Pricing</p>
        <h1 className="font-medium text-black text-center mb-0" style={{ fontSize: '82px', lineHeight: '78px' }}>
          One subscription,
        </h1>
        <h1 className="text-black text-center mb-12" style={{ fontSize: '82px', lineHeight: '78px' }}>
          <span className="text-italics">endless possibilities</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-4 items-center max-w-3xl mx-auto">
          {/* Left — card image */}
          <div className="bg-white rounded-3xl p-8 border border-border flex flex-col items-center">
            <MemberCard className="mb-6" />
            <div className="self-start">
              <div className="inline-flex items-center gap-2 bg-black text-white text-sm font-medium px-4 py-2 rounded-full mb-3">
                <span className="w-2 h-2 rounded-full bg-yellow-400" /> Start today
              </div>
              <h3 className="font-medium text-black" style={{ fontSize: '50px', lineHeight: '1.1' }}>Join<br />Designjoy</h3>
            </div>
          </div>

          {/* Right — pricing details */}
          <div className="bg-black rounded-3xl p-8 border border-blue-600 relative overflow-hidden">
            <span className="inline-block border border-pink-500 text-pink-400 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              Lifetime Discount — Limited Time
            </span>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-medium" style={{ fontSize: '56px', lineHeight: '56px' }}>$4,995</span>
              <span className="text-gray-400 text-sm">/month</span>
              <span className="text-gray-500 font-medium line-through ml-1" style={{ fontSize: '38px', lineHeight: '38px' }}>$5,995</span>
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
          </div>
        </div>
      </div>
    </section>
  )
}
