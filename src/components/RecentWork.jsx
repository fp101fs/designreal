const services = [
  'Web design', 'Logos', 'Slide decks', 'Branding',
  'Social media', 'UI/UX design', 'Webflow development',
  'Mobile apps', 'Print design', 'Email', 'Display ads',
  'Icons', 'Brand guides', '+ more',
]

export default function RecentWork() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
        {/* Left — recent work */}
        <div className="bg-white rounded-3xl p-8 border border-border">
          <div className="flex gap-3 mb-6">
            <div className="bg-gray-100 rounded-xl h-20 flex-1 flex items-center justify-center text-3xl">🖥️</div>
            <div className="bg-gray-100 rounded-xl h-20 flex-1 flex items-center justify-center text-3xl">📱</div>
          </div>
          <div className="flex gap-3 mb-6">
            <div className="bg-lime-100 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium">
              <span>☕</span> Buy Me A Coffee
              <span className="text-muted text-xs">Fintech Product of the Year</span>
            </div>
            <div className="bg-gray-100 rounded-lg px-3 py-2 flex items-center gap-2 text-sm font-medium">
              <span>⚡</span> Switchboard
              <span className="text-muted text-xs">Remote Work Product of the Year</span>
            </div>
          </div>
          <h3 className="font-bold text-black text-xl mb-1">Recent work</h3>
          <p className="text-muted text-sm mb-4">We're talking "Product of the Year" good.</p>
          <button className="bg-black text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-gray-900 transition-colors">
            See recent work
          </button>
        </div>

        {/* Right — services */}
        <div className="bg-white rounded-3xl p-8 border border-border relative overflow-hidden">
          <div className="flex flex-wrap gap-2 mb-6">
            {services.map((s) => (
              <span key={s} className="border border-border rounded-full text-sm px-3 py-1.5 text-black">
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-bold text-black text-xl mb-1">Apps, websites, logos &amp; more</h3>
          <p className="text-muted text-sm">All the things you need under one roof.</p>
          {/* decorative smiley */}
          <div className="absolute -bottom-4 -right-4 text-8xl opacity-80 select-none">😊</div>
        </div>
      </div>
    </section>
  )
}
