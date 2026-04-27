import { useEffect, useMemo, useRef, useState } from 'react'

let revealSequence = 0

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const order = useMemo(() => revealSequence++, [])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionPreference = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
      setVisible((currentVisible) => currentVisible || event.matches)
    }

    setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleMotionPreference)

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener('change', handleMotionPreference)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(node)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreference)
      observer.disconnect()
    }
  }, [])

  return { ref, visible, prefersReducedMotion, order }
}
