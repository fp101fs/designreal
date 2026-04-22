export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Designed by one. Built for many.
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Designjoy launched in 2017 as a one-person design studio run entirely by Brett. Every
            design request is handled directly — no outsourcing, no junior designers, no surprises.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            The subscription model was created to give businesses and founders access to senior-level
            design work at a predictable monthly rate, without the overhead of hiring full-time.
          </p>
          <p className="text-muted leading-relaxed">
            Whether you need a landing page, mobile app UI, or a complete brand identity — it all
            goes through one designer who cares deeply about the craft.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-10 flex flex-col items-center justify-center text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-4xl">
            😊
          </div>
          <h3 className="text-white font-bold text-xl mb-2">Brett Williams</h3>
          <p className="text-muted text-sm mb-4">Founder & Designer</p>
          <div className="flex gap-6 text-center">
            <div>
              <p className="text-white font-bold text-2xl">2017</p>
              <p className="text-muted text-xs mt-1">Founded</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-white font-bold text-2xl">48h</p>
              <p className="text-muted text-xs mt-1">Avg. delivery</p>
            </div>
            <div className="w-px bg-border" />
            <div>
              <p className="text-white font-bold text-2xl">1</p>
              <p className="text-muted text-xs mt-1">Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
