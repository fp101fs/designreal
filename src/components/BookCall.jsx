export default function BookCall() {
  return (
    <section className="bg-surface py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Book a 15-min intro call.
        </h2>
        <p className="text-muted mb-10 text-lg">
          Schedule a quick, 15-minute guided tour through Designjoy and get all your questions
          answered before subscribing.
        </p>
        <a
          href="https://calendly.com/designjoy/15min"
          className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-full hover:bg-accent/90 transition-colors text-base"
        >
          Book a call →
        </a>
        <p className="text-muted text-sm mt-6">
          Or email us at{' '}
          <a
            href="mailto:hello@designjoy.co"
            className="text-white hover:text-accent transition-colors"
          >
            hello@designjoy.co
          </a>
        </p>
      </div>
    </section>
  )
}
