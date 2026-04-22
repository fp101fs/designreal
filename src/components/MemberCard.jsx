import { useRef, useCallback } from 'react'

export default function MemberCard({ className = '' }) {
  const cardRef = useRef(null)
  const frameRef = useRef(null)
  const currentRef = useRef({ rx: -12, ry: 8 })

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    const targetRx = -dy * 18
    const targetRy = dx * 18

    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const animate = () => {
      currentRef.current.rx += (targetRx - currentRef.current.rx) * 0.12
      currentRef.current.ry += (targetRy - currentRef.current.ry) * 0.12
      if (el) {
        el.style.transform = `perspective(900px) rotateX(${currentRef.current.rx}deg) rotateY(${currentRef.current.ry}deg) scale(1.02)`
      }
      frameRef.current = requestAnimationFrame(animate)
    }
    animate()
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const el = cardRef.current
    if (!el) return
    const targetRx = -12
    const targetRy = 8
    const relax = () => {
      currentRef.current.rx += (targetRx - currentRef.current.rx) * 0.08
      currentRef.current.ry += (targetRy - currentRef.current.ry) * 0.08
      if (el) {
        el.style.transform = `perspective(900px) rotateX(${currentRef.current.rx}deg) rotateY(${currentRef.current.ry}deg) scale(1)`
      }
      if (Math.abs(currentRef.current.rx - targetRx) > 0.05 || Math.abs(currentRef.current.ry - targetRy) > 0.05) {
        frameRef.current = requestAnimationFrame(relax)
      }
    }
    relax()
  }, [])

  return (
    <div
      className={`inline-block ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <img
        ref={cardRef}
        src="/card.png"
        alt="Designjoy Monthly Club card"
        draggable={false}
        style={{
          transform: 'perspective(900px) rotateX(-12deg) rotateY(8deg)',
          transition: 'box-shadow 0.3s ease',
          borderRadius: '16px',
          display: 'block',
          width: '100%',
          maxWidth: '420px',
          filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.35))',
          userSelect: 'none',
        }}
      />
    </div>
  )
}
