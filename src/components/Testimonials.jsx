const quotes = [
  {
    text: '"Designjoy shows that they know the art of subtlety."',
    author: 'Webflow',
    role: 'webflow.com',
  },
  {
    text: '"Design is everything, and these guys have nailed it."',
    author: 'Kevin O\'Leary',
    role: 'Shark Tank',
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {quotes.map((q) => (
          <div key={q.author}>
            <p className="font-black text-black text-3xl md:text-4xl leading-tight mb-6 tracking-tight">
              {q.text}
            </p>
            <p className="text-black font-semibold">{q.author}</p>
            <p className="text-muted text-sm">{q.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
