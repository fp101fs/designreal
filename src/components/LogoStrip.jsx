const logos = ['nectar ■', 'Buy me a coffee', 'beehiiv', 'Laravel', 'xfinity']

export default function LogoStrip() {
  return (
    <div className="py-8 px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-center flex-wrap gap-10">
        {logos.map((l) => (
          <span key={l} className="text-black font-semibold text-lg opacity-70">{l}</span>
        ))}
      </div>
    </div>
  )
}
