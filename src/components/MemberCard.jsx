export default function MemberCard({ className = '' }) {
  return (
    <div className={`inline-block ${className}`} style={{ perspective: '900px' }}>
      <img
        src="/card.png"
        alt="Designjoy Monthly Club card"
        draggable={false}
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '420px',
          borderRadius: '16px',
          filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.35))',
          userSelect: 'none',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
          animation: 'cardFloat 6s ease-in-out infinite',
        }}
      />
    </div>
  )
}
