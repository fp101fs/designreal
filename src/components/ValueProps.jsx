export default function ValueProps() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-8 border border-dashed border-gray-300">
          <p className="text-muted text-xl mb-3">⊘</p>
          <h3 className="font-bold text-black text-xl mb-2">Pause anytime</h3>
          <p className="text-muted text-sm leading-relaxed">
            Temporarily pause your subscription anytime, no sweat.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-8 border border-dashed border-gray-300">
          <p className="text-muted text-xl mb-3">✓</p>
          <h3 className="font-bold text-black text-xl mb-2">Try it for a week</h3>
          <p className="text-muted text-sm leading-relaxed">
            Not loving it after a week? Get 75% back, no questions asked.
          </p>
        </div>
      </div>
    </section>
  )
}
