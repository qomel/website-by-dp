'use client'

import { useEffect, useRef } from 'react'

const BASE_1 = ['WEB DESIGNER', 'WEB DEVELOPER']
const BASE_2 = ['DOMINIK', 'DP', 'PAZUREK', 'DP']
const GAP    = 'clamp(40px, 8.9vw, 135px)'
const COPIES = 8

function MarqueeStrip({ base, angle, direction, speed = 0.5 }) {
  const trackRef   = useRef(null)
  const setWRef    = useRef(null)
  const offsetRef  = useRef(0)
  const lastScroll = useRef(0)
  const rafRef     = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const measure = () => {
      const sets = track.querySelectorAll('[data-set]')
      if (sets.length < 2) return
      // Odległość między lewą krawędzią set[0] a set[1] = szerokość setu + gap
      const r0 = sets[0].getBoundingClientRect()
      const r1 = sets[1].getBoundingClientRect()
      setWRef.current    = r1.left - r0.left
      offsetRef.current  = 0
      lastScroll.current = window.scrollY
    }

    document.fonts.ready.then(measure)
    window.addEventListener('resize', measure)

    const onScroll = () => {
      if (!setWRef.current) return
      const curr  = window.scrollY
      const delta = curr - lastScroll.current
      lastScroll.current = curr
      offsetRef.current += delta * speed * direction
    }

    const animate = () => {
      if (track && setWRef.current) {
        const setW = setWRef.current
        // Normalizuj do (-setW, 0]
        offsetRef.current = ((offsetRef.current % setW) - setW) % setW
        track.style.transform = `translateX(${offsetRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', measure)
      cancelAnimationFrame(rafRef.current)
    }
  }, [direction, speed])

  return (
    <div style={{
      transform:  `rotate(${angle}deg)`,
      width:      '160%',
      marginLeft: '-30%',
      background: '#101010',
      border:     '1px solid rgba(255,255,255,0.6)',
      padding:    '10px 0',
      boxSizing:  'border-box',
      overflow:   'hidden',
    }}>
      {/* Track — flex row, gap między setami taki sam jak wewnątrz setu */}
      <div
        ref={trackRef}
        style={{
          display:    'flex',
          alignItems: 'center',
          gap:        GAP,
          whiteSpace: 'nowrap',
          willChange: 'transform',
          padding:    '3px 0',
        }}
      >
        {Array.from({ length: COPIES }, (_, i) => (
          // Set — też flex, gap wewnętrzny = GAP, żeby spacing był spójny
          <div
            key={i}
            data-set
            style={{ display: 'flex', alignItems: 'center', gap: GAP, flexShrink: 0 }}
          >
            {base.map((text, j) => (
              <span
                key={j}
                style={{
                  fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
                  fontSize:   'clamp(24px, 3.17vw, 48px)',
                  fontWeight: 400,
                  color:      '#fff',
                  lineHeight: 1.46,
                  flexShrink: 0,
                }}
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function SectionDivider() {
  return (
    <section style={{
      background:     '#141414',
      width:          '100%',
      overflow:       'clip',
      paddingTop:     'clamp(30px, 5vw, 80px)',
      paddingBottom:  'clamp(30px, 5vw, 80px)',
      display:        'flex',
      flexDirection:  'column',
      justifyContent: 'center',
      gap:            'clamp(8px, 1.5vw, 22px)',
    }}>
      <MarqueeStrip base={BASE_1} angle={3.27}  direction={1}  speed={0.5} />
      <MarqueeStrip base={BASE_2} angle={-3.27} direction={-1} speed={0.5} />
    </section>
  )
}
