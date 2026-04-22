const categories = [
  'Mobile apps', 'Presentations', 'Logos', 'Social media', 'Email design',
  'Webflow', 'Print design', 'Packaging', 'Ad creative', 'Landing pages',
  'Branding', 'Display ads', 'User interface', 'Icons', 'Brand guides',
  'Slide decks', 'UI/UX design', 'Web design',
]

export default function Services() {
  const doubled = [...categories, ...categories]

  return (
    <section className="py-20 overflow-hidden border-y border-border">
      <p className="text-center text-muted text-sm uppercase tracking-widest mb-10">
        Design services included
      </p>
      <div className="relative">
        <div className="flex gap-4 animate-[marquee_30s_linear_infinite] w-max">
          {doubled.map((cat, i) => (
            <span
              key={i}
              className="bg-surface border border-border text-white text-sm font-medium px-5 py-2.5 rounded-full whitespace-nowrap"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
