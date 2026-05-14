'use client'
import { useEffect, useRef } from 'react'

type Theme = 'home' | 'about' | 'coe' | 'ai' | 'data' | 'cyber' | 'cloud' | 'testing' | 'gcc' | 'startit' | 'contact' | 'careers'

interface Props {
  theme: Theme
  animKey?: string
}

declare global {
  interface Window {
    __straditAnimInit?: () => void
    __straditAnimSingle?: (canvas: HTMLCanvasElement) => void
  }
}

type HeroCanvas = HTMLCanvasElement & { __straditCareersStop?: () => void }

function runOnCanvas(canvas: HTMLCanvasElement, retries = 20) {
  if (window.__straditAnimSingle) {
    window.__straditAnimSingle(canvas)
    return
  }
  if (retries > 0) {
    setTimeout(() => runOnCanvas(canvas, retries - 1), 100)
  }
}

export default function AnimCanvas({ theme, animKey }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rafId = requestAnimationFrame(() => {
      if (window.__straditAnimSingle) {
        window.__straditAnimSingle(canvas)
        return
      }

      const existing = document.getElementById('stradit-anim-engine')
      if (existing) {
        runOnCanvas(canvas)
        return
      }

      const script = document.createElement('script')
      script.id = 'stradit-anim-engine'
      script.src = '/anim-engine.js'
      script.onload = () => {
        if (window.__straditAnimSingle) {
          document.querySelectorAll<HTMLCanvasElement>('canvas[data-hero-anim]').forEach(c => {
            window.__straditAnimSingle!(c)
          })
        }
      }
      document.head.appendChild(script)
    })

    return () => {
      cancelAnimationFrame(rafId)
      const c = canvasRef.current as HeroCanvas | null
      if (c && typeof c.__straditCareersStop === 'function') {
        c.__straditCareersStop()
        c.__straditCareersStop = undefined
      }
    }
  }, [theme, animKey])

  return (
    <canvas
      ref={canvasRef}
      data-hero-anim={theme}
      style={{ width: '100%', height: '100%', display: 'block' }}
    />
  )
}
