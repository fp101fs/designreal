import { useState } from 'react'

const faqs = [
  {
    q: 'How quickly will I receive my designs?',
    a: 'Most requests are completed within two business days. More complex work is broken into smaller deliverables so you always see progress quickly.',
  },
  {
    q: 'How does onboarding work?',
    a: 'Once you subscribe, you\'ll receive access to a private Trello board. Setup takes about an hour — add your brand assets, share your first request, and we\'re off.',
  },
  {
    q: 'Who will be doing my design work?',
    a: 'Brett — the founder. There\'s no outsourcing, no junior designers, no delegation. Every pixel is handled directly.',
  },
  {
    q: 'Is there a limit to how many requests I can make?',
    a: 'No limit on queuing. You can stack as many requests as you\'d like in your board. They\'re worked through one at a time.',
  },
  {
    q: 'How does pausing work?',
    a: 'Billing cycles are 31 days. If you pause with 10 days remaining, those 10 days resume the next time you reactivate — no days are lost.',
  },
  {
    q: 'What if I have a large project?',
    a: 'Large projects are broken into manageable deliverables. Each chunk is completed and handed off before moving to the next.',
  },
  {
    q: 'What software do you use?',
    a: 'Primarily Figma for all UI and branding work. Source files are always delivered.',
  },
  {
    q: 'Is Webflow development included?',
    a: 'Yes. Webflow development is included in the subscription. You receive full ownership of the project when complete.',
  },
  {
    q: 'How do I submit design requests?',
    a: 'Through your Trello board. You can write requests directly, link Google Docs, or attach Loom videos — whatever is easiest for you.',
  },
  {
    q: 'Are revisions included?',
    a: 'Absolutely. Revisions continue until you\'re completely satisfied. There\'s no cap.',
  },
  {
    q: 'What types of work are not supported?',
    a: '3D modeling, animations, video editing, medical forms, complex multi-page print documents, and extensive InDesign work fall outside the scope of this subscription.',
  },
  {
    q: 'What if I only have one or two requests per month?',
    a: 'Pause when your queue is empty and resume when new work comes up. You only pay for the days you actually need.',
  },
  {
    q: 'What is the refund policy?',
    a: 'A 75% refund is available within the first 7 days if you\'re not satisfied. After that, or once design work has been delivered, refunds are not available.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
      >
        <span className="text-white font-medium">{q}</span>
        <span className="text-muted text-xl flex-shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p className="text-muted text-sm leading-relaxed pb-5">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 text-center">
          FAQ
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Questions, answered.
        </h2>

        <div>
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
