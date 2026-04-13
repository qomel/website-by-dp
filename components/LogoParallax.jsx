'use client'

import { useEffect, useState } from 'react'

export default function LogoParallax() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 2 // -1 … 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2 // -1 … 1
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      className="logo-deco anim-fade-in"
      style={{
        animationDelay: '0.05s',
        // parallax applied on top of the absolute positioning from .logo-deco
        translate: `${mouse.x * 12}px ${mouse.y * 10}px`,
        transition: 'translate 0.2s ease-out',
      }}
    >
      {/* ghost layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dp.svg"
        alt=""
        aria-hidden="true"
        className="absolute"
        style={{ left: '12.39%', top: 0, width: '130.97%', opacity: 0.2 }}
      />
      {/* solid layer */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/dp.svg"
        alt=""
        aria-hidden="true"
        className="absolute"
        style={{ left: 0, top: '3.54%', width: '131.88%', opacity: 1 }}
      />
    </div>
  )
}
