export default function ValueProps() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-bg border border-border rounded-2xl p-10">
          <span className="text-4xl mb-6 block">⏸️</span>
          <h3 className="text-white font-bold text-2xl mb-4">Pause anytime.</h3>
          <p className="text-muted leading-relaxed">
            Need to take a break? No problem. Pause your subscription at any point during your
            billing cycle and the remaining days carry forward automatically — you never lose a
            single day you've paid for.
          </p>
        </div>

        <div className="bg-bg border border-border rounded-2xl p-10">
          <span className="text-4xl mb-6 block">🔒</span>
          <h3 className="text-white font-bold text-2xl mb-4">7-day guarantee.</h3>
          <p className="text-muted leading-relaxed">
            Not satisfied within your first week? Get 75% of your money back, no questions asked.
            We're confident in the quality — but your peace of mind matters more.
          </p>
        </div>
      </div>
    </section>
  )
}
