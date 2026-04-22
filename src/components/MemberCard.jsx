import { useRef, useCallback } from 'react'

const RESTING_RX = -12
const RESTING_RY = 8

export default function MemberCard({ className = '' }) {
  const cardRef = useRef(null)
  const rafRef = useRef(null)
  const current = useRef({ rx: RESTING_RX, ry: RESTING_RY })

  const handleMouseMove = useCallback((e) => {
    const el = cardRef.current
    if (!el) return
    // Cancel any in-progress return animation
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    const rx = -dy * 16
    const ry = dx * 16
    current.current = { rx, ry }
    el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (!el) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    const step = () => {
      current.current.rx += (RESTING_RX - current.current.rx) * 0.1
      current.current.ry += (RESTING_RY - current.current.ry) * 0.1
      el.style.transform = `perspective(900px) rotateX(${current.current.rx}deg) rotateY(${current.current.ry}deg) scale(1)`
      if (
        Math.abs(current.current.rx - RESTING_RX) > 0.05 ||
        Math.abs(current.current.ry - RESTING_RY) > 0.05
      ) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        current.current = { rx: RESTING_RX, ry: RESTING_RY }
        rafRef.current = null
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }, [])

  return (
    <div
      className={`inline-block cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={cardRef}
        src="/card.png"
        alt="Designjoy Monthly Club card"
        draggable={false}
        style={{
          transform: `perspective(900px) rotateX(${RESTING_RX}deg) rotateY(${RESTING_RY}deg)`,
          borderRadius: '16px',
          display: 'block',
          width: '100%',
          maxWidth: '420px',
          filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.35))',
          userSelect: 'none',
          willChange: 'transform',
        }}
      />
    </div>
  )
}
