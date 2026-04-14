'use client'

import { useEffect, useRef } from 'react'

// Dużo powtórzeń — przy speed 0.5 i ~8000px scrolla przesuwa się max 4000px.
// Każdy item ~600px szerokości × 40 sztuk = ~24000px tracka.
// Start od środka (−12000px) → bufor 12000px w każdą stronę. Wystarczy na każdy scroll.
const makeItems = (base, count = 16) =>
  Array.from({ length: count }, (_, i) => base[i % base.length])

const ITEMS_1 = makeItems(['WEB DESIGNER', 'WEB DEVELOPER'])
const ITEMS_2 = makeItems(['DOMINIK', 'DP', 'PAZUREK', 'DP'])

function MarqueeStrip({ items, angle, direction, speed = 0.5 }) {
  const trackRef = useRef(null)
  const offsetRef = useRef(null) // null = nie zainicjowane jeszcze
  const lastScrollY = useRef(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Inicjalizujemy od środka DOPIERO gdy fonty są gotowe i scrollWidth jest prawidłowe
    const init = () => {
      offsetRef.current = -(track.scrollWidth / 2)
      lastScrollY.current = window.scrollY
    }

    document.fonts.ready.then(init)

    const onScroll = () => {
      if (offsetRef.current === null) return
      const currentY = window.scrollY
      const delta = currentY - lastScrollY.current
      lastScrollY.current = currentY
      offsetRef.current += delta * speed * direction
    }

    const animate = () => {
      if (track && offsetRef.current !== null) {
        track.style.transform = `translateX(${offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [direction, speed])

  return (
    <div style={{
      transform: `rotate(${angle}deg)`,
      width: '160%',
      marginLeft: '-30%',
      background: '#101010',
      border: '1px solid rgba(255,255,255,0.6)',
      padding: '10px 0',
      boxSizing: 'border-box',
    }}>
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(40px, 8.9vw, 135px)',
          whiteSpace: 'nowrap',
          willChange: 'transform',
          padding: '3px 0',
        }}
      >
        {items.map((text, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
              fontSize: 'clamp(24px, 3.17vw, 48px)',
              fontWeight: 400,
              color: '#fff',
              lineHeight: 1.46,
              flexShrink: 0,
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SectionDivider() {
  return (
    <section style={{
      background: '#141414',
      width: '100%',
      overflowX: 'clip',
      paddingTop: 'clamp(30px, 5vw, 80px)',
      paddingBottom: 'clamp(30px, 5vw, 80px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 'clamp(8px, 1.5vw, 22px)',
    }}>
      <MarqueeStrip items={ITEMS_1} angle={3.27}  direction={1}  speed={0.5} />
      <MarqueeStrip items={ITEMS_2} angle={-3.27} direction={-1} speed={0.5} />
    </section>
  )
}
