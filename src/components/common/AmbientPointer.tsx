import { useEffect, useEffectEvent, useState } from 'react'

type PointerState = {
  x: number
  y: number
  visible: boolean
}

type TrailPoint = {
  x: number
  y: number
  id: number
}

export function AmbientPointer() {
  const [pointer, setPointer] = useState<PointerState>({
    x: 0,
    y: 0,
    visible: false,
  })
  const [trail, setTrail] = useState<TrailPoint[]>([])

  const handleMove = useEffectEvent((event: MouseEvent) => {
    const point = {
      x: event.clientX,
      y: event.clientY,
      id: Date.now() + Math.random(),
    }

    setPointer({
      x: event.clientX,
      y: event.clientY,
      visible: true,
    })
    setTrail((current) => [point, ...current].slice(0, 8))
  })

  const handleLeave = useEffectEvent(() => {
    setPointer((current) => ({ ...current, visible: false }))
    setTrail([])
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (mediaQuery.matches) {
      return
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-x-[-10%] top-[-18rem] h-[34rem] rounded-full bg-brand-mint/24 blur-3xl" />
      <div className="absolute right-[-10%] top-[28rem] h-[28rem] w-[28rem] rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="absolute left-[12%] top-[38%] h-[22rem] w-[22rem] rounded-full bg-brand-mint/14 blur-[120px]" />
      {trail.map((point, index) => (
        <div
          className="absolute rounded-full"
          key={point.id}
          style={{
            left: point.x,
            top: point.y,
            width: `${58 - index * 5}px`,
            height: `${58 - index * 5}px`,
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, rgba(30, 140, 255, ${0.28 - index * 0.026}) 0%, rgba(30, 140, 255, ${0.14 - index * 0.015}) 36%, transparent 72%)`,
            filter: `blur(${8 + index * 1.5}px)`,
            opacity: pointer.visible ? 1 - index * 0.08 : 0,
            transition: 'opacity 180ms ease-out',
          }}
        />
      ))}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background: `
            radial-gradient(92px circle at ${pointer.x}px ${pointer.y}px, rgba(110, 192, 255, 0.92), transparent 36%),
            radial-gradient(180px circle at ${pointer.x}px ${pointer.y}px, rgba(30, 140, 255, 0.58), transparent 44%),
            radial-gradient(360px circle at ${pointer.x}px ${pointer.y}px, rgba(10, 99, 201, 0.24), transparent 54%),
            radial-gradient(720px circle at ${pointer.x}px ${pointer.y}px, rgba(30, 140, 255, 0.08), transparent 66%)
          `,
          opacity: pointer.visible ? 1 : 0,
        }}
      />
    </div>
  )
}
