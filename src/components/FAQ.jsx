import { useState } from 'react'

const faqs = [
  { q: 'How quickly will I receive my designs?', a: 'Most requests are completed within two business days on average.' },
  { q: 'How does the onboarding process work?', a: 'Once subscribed, you\'ll receive access to a private Trello board. Setup takes about an hour — add brand assets, share your first request, and we\'re off.' },
  { q: 'Who are the designers?', a: 'Brett — the founder. No outsourcing, no junior designers, no delegation. Every pixel is handled directly.' },
  { q: 'Is there a limit to how many requests I can make?', a: 'No limit on queuing. Stack as many requests as you\'d like. They\'re worked through one at a time.' },
  { q: 'How does the pause feature work?', a: 'Billing cycles are 31 days. Pause with 10 days remaining and those 10 days resume the next time you reactivate — no days are lost.' },
  { q: 'How do you handle larger requests?', a: 'Large projects are broken into manageable deliverables. Each chunk is completed and handed off before moving to the next.' },
  { q: 'What programs do you design in?', a: 'Primarily Figma for all UI and branding work. Source files are always delivered.' },
  { q: 'How does Webflow development work?', a: 'Webflow development is included in the subscription. You receive full ownership of the project when complete.' },
  { q: 'How will I request designs?', a: 'Through your Trello board. Write requests directly, link Google Docs, or attach Loom videos.' },
  { q: 'What if I don\'t like the design?', a: 'Revisions continue until you\'re completely satisfied. There\'s no cap.' },
  { q: 'Are there any requests you don\'t support?', a: '3D modeling, animations, video editing, complex print documents, and InDesign work fall outside scope.' },
  { q: 'What if I only have a single request?', a: 'Pause when your queue is empty and resume when new work comes up.' },
  { q: 'Are there any refunds?', a: 'A 75% refund is available within the first 7 days if you\'re not satisfied.' },
  { q: 'Can I use Designjoy for just a month?', a: 'Absolutely. Subscribe for a month, pause or cancel anytime with no penalties.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border">
      <button className="w-full flex items-center justify-between py-4 text-left gap-4 hover:opacity-70 transition-opacity"
        onClick={() => setOpen(!open)}>
        <span className="text-black font-medium text-sm">{q}</span>
        <span className="text-muted text-xl flex-shrink-0">{open ? '∧' : '∨'}</span>
      </button>
      {open && <p className="text-muted text-sm pb-4 leading-relaxed">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-black text-black text-4xl md:text-5xl mb-10 leading-tight">
            <span className="text-italics">Frequently</span> asked<br />questions
          </h2>
          <div>
            {faqs.map((item) => (
              <Item key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
        {/* Right — contact card */}
        <div className="space-y-4">
          <div className="rounded-2xl p-6 text-white"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}>
            <a href="https://calendly.com/designjoy/15min"
              className="flex items-center justify-between hover:opacity-90 transition-opacity">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📅</span>
                <div>
                  <p className="font-semibold text-sm">Book a 15-min call</p>
                  <p className="text-white/70 text-xs">Schedule now</p>
                </div>
              </div>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">→</span>
            </a>
          </div>
          <div className="rounded-2xl p-6 text-white"
            style={{ background: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)' }}>
            <a href="mailto:hello@designjoy.co"
              className="flex items-center justify-between hover:opacity-90 transition-opacity">
              <div className="flex items-center gap-3">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-semibold text-sm">Prefer to email?</p>
                  <p className="text-white/70 text-xs">hello@designjoy.co</p>
                </div>
              </div>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
