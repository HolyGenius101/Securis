import type { CSSProperties, PropsWithChildren } from 'react'
import { useReveal } from '../../hooks/useReveal'
import { usePointerAmbient } from '../../hooks/usePointerAmbient'
import { cn } from '../../lib/cn'

type RevealProps = PropsWithChildren<{
  className?: string
}>

export function Reveal({ className, children }: RevealProps) {
  const { ref, visible, prefersReducedMotion, order } = useReveal<HTMLDivElement>()
  const { pointer, pointerHandlers } = usePointerAmbient(prefersReducedMotion)
  const delay = prefersReducedMotion ? 0 : Math.min((order % 6) * 80, 320)

  const style: CSSProperties | undefined = prefersReducedMotion
    ? undefined
    : {
        transitionDelay: `${delay}ms`,
        transitionDuration: visible ? '960ms' : '720ms',
        transitionTimingFunction: visible
          ? 'cubic-bezier(0.16, 1, 0.3, 1)'
          : 'cubic-bezier(0.3, 0, 0.2, 1)',
        transform: visible
          ? `translate3d(0, 0, 0) scale3d(1, 1, 1) perspective(1200px) rotateX(${pointer.rotateX}deg) rotateY(${pointer.rotateY}deg)`
          : 'translate3d(0, 30px, 0) scale3d(0.985, 0.985, 1)',
        willChange: 'transform, opacity',
      }

  return (
    <div
      className={cn('reveal relative isolate overflow-hidden', visible && 'reveal-visible', className)}
      ref={ref}
      style={style}
      {...pointerHandlers}
    >
      {!prefersReducedMotion ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-500 ease-out"
            style={{
              background: `radial-gradient(30rem circle at ${pointer.x}% ${pointer.y}%, rgba(255, 255, 255, 0.16), transparent 32%)`,
              opacity: pointer.active && visible ? 1 : 0,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity duration-500 ease-out"
            style={{
              opacity: pointer.active && visible ? 0.7 : 0,
            }}
          />
        </>
      ) : null}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  )
}
