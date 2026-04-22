export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 4.5c2.49 0 4.5 2.01 4.5 4.5S13.49 15.5 11 15.5 6.5 13.49 6.5 11s2.01-4.5 4.5-4.5z" fill="white"/>
            </svg>
            <span className="font-bold text-lg">Designjoy</span>
          </div>
          <h2 className="font-black text-4xl md:text-5xl leading-tight mb-2">
            See if Designjoy is<br />the right fit for you
          </h2>
          <h2 className="font-black text-4xl md:text-5xl leading-tight mb-8">
            <span className="italic-serif font-normal text-white">(it totally is)</span>
          </h2>
          <a href="https://calendly.com/designjoy/15min"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Book a 15-min intro call
          </a>
        </div>

        {/* Calendar placeholder */}
        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <p className="text-white font-semibold">April <span className="text-gray-400">2026</span></p>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:text-white">‹</button>
              <button className="text-gray-400 hover:text-white">›</button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
            {['SUN','MON','TUE','WED','THU','FRI','SAT'].map(d => <span key={d}>{d}</span>)}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm text-gray-300">
            {[...Array(6)].map((_, i) => <span key={i} />)}
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i}
                className={`py-1 rounded-full cursor-pointer hover:bg-gray-700 ${i + 1 === 15 ? 'bg-white text-black font-bold' : ''}`}>
                {i + 1}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-16 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">Headquartered in Phoenix, Arizona</p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
