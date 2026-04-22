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
            <p className="font-medium text-black mb-6" style={{ fontSize: '38px', lineHeight: '1.1' }}>
              {q.text}
            </p>
            <p className="text-black font-medium" style={{ fontSize: '20px' }}>{q.author}</p>
            <p className="text-muted" style={{ fontSize: '20px', lineHeight: '24px' }}>{q.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
