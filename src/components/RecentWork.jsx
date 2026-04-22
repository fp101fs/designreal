const workTypes = [
  { label: 'Web design', span: 'col-span-2' },
  { label: 'Logos', span: '' },
  { label: 'Slide decks', span: '' },
  { label: 'Branding', span: '' },
  { label: 'Social media', span: '' },
  { label: 'UI/UX design', span: 'col-span-2' },
  { label: 'Webflow development', span: '' },
  { label: 'Mobile apps', span: '' },
  { label: 'Print design', span: '' },
  { label: 'Email design', span: '' },
  { label: 'Display ads', span: 'col-span-2' },
  { label: 'Icons', span: '' },
  { label: 'Brand guides', span: '' },
]

const colors = [
  'from-purple-900/40', 'from-blue-900/40', 'from-green-900/40',
  'from-yellow-900/40', 'from-pink-900/40', 'from-indigo-900/40',
  'from-red-900/40', 'from-cyan-900/40', 'from-orange-900/40',
]

export default function RecentWork() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          Recent work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Designs that speak for themselves.
        </h2>
        <p className="text-muted text-center mb-16 max-w-xl mx-auto">
          From logos to full product interfaces — here's a glimpse of what's possible.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {workTypes.map((w, i) => (
            <div
              key={w.label}
              className={`${w.span} bg-gradient-to-br ${colors[i % colors.length]} to-bg border border-border rounded-2xl h-32 flex items-end p-5`}
            >
              <span className="text-white font-semibold text-sm">{w.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
