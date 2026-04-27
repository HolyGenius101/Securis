import { useEffectEvent, useState } from 'react'
import type { PointerEvent } from 'react'

type PointerAmbientState = {
  active: boolean
  x: number
  y: number
  rotateX: number
  rotateY: number
}

const neutralPointerState: PointerAmbientState = {
  active: false,
  x: 50,
  y: 50,
  rotateX: 0,
  rotateY: 0,
}

export function usePointerAmbient(disabled = false) {
  const [pointer, setPointer] = useState<PointerAmbientState>(neutralPointerState)

  const handlePointerMove = useEffectEvent((event: PointerEvent<HTMLElement>) => {
    if (disabled) {
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()

    if (!bounds.width || !bounds.height) {
      return
    }

    const x = ((event.clientX - bounds.left) / bounds.width) * 100
    const y = ((event.clientY - bounds.top) / bounds.height) * 100
    const offsetX = x - 50
    const offsetY = y - 50

    setPointer({
      active: true,
      x,
      y,
      rotateX: Number((-offsetY / 18).toFixed(2)),
      rotateY: Number((offsetX / 20).toFixed(2)),
    })
  })

  const handlePointerLeave = useEffectEvent(() => {
    setPointer(neutralPointerState)
  })

  return {
    pointer,
    pointerHandlers: disabled
      ? {}
      : {
          onPointerMove: handlePointerMove,
          onPointerLeave: handlePointerLeave,
        },
  }
}
