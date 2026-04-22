'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

function useReveal(triggerDelay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const check = () => {
      const rect          = el.getBoundingClientRect()
      const visibleTop    = Math.max(rect.top, 0)
      const visibleBottom = Math.min(rect.bottom, window.innerHeight)
      const visiblePx     = Math.max(visibleBottom - visibleTop, 0)
      const threshold     = Math.min(rect.height * 0.45, 320)

      if (visiblePx >= threshold) {
        window.removeEventListener('scroll', check)
        setTimeout(() => el.classList.add('about-photo-visible'), triggerDelay)
      }
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])
  return ref
}

function RevealPhoto({ src, alt, width, height, style, from = 'left', delay = 0 }) {
  const ref = useReveal(delay)

  return (
    <div
      ref={ref}
      className={`about-photo about-photo--${from}`}
      style={{ position: 'absolute', borderRadius: '10px', overflow: 'hidden', ...style }}
    >
      <Image
        src={src} alt={alt} width={width} height={height}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
  )
}

export default function AboutPhotos() {
  return (
    <>
      <style>{`
        .about-photo {
          opacity: 0;
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .about-photo--left  { transform: translateX(-50px); }
        .about-photo--right { transform: translateX(50px); }
        .about-photo.about-photo-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      <div style={{
        position:   'relative',
        width:      '100%',
        maxWidth:   '1515px',
        margin:     '0 auto',
        paddingTop: 'clamp(60px, 8vw, 120px)',
        height:     'clamp(600px, 100vw, 1600px)',
      }}>

        {/* Zielone — largest, center-left, from left */}
        <RevealPhoto
          src="/zielone.jpg" alt="Zielone" width={856} height={1284} from="left" delay={0}
          style={{ left: 'clamp(40px, 18.94vw, 287px)', top: 0, width: 'clamp(200px, 56.5vw, 856px)' }}
        />

        {/* Ferrari — small left, from left */}
        <RevealPhoto
          src="/ferrari.jpg" alt="Ferrari" width={390} height={585} from="left" delay={120}
          style={{ left: 'clamp(40px, 7.86vw, 119px)', top: 'clamp(200px, 43.7vw, 662px)', width: 'clamp(120px, 25.76vw, 390px)' }}
        />

        {/* McLaren — right, from right */}
        <RevealPhoto
          src="/mclaren.jpg" alt="McLaren" width={500} height={667} from="right" delay={80}
          style={{ right: 'clamp(40px, 8.11vw, 123px)', top: 'clamp(40px, 6vw, 90px)', width: 'clamp(140px, 33.07vw, 500px)' }}
        />

        {/* Mandarynka — bottom right, from right */}
        <RevealPhoto
          src="/mandarynka.jpg" alt="Mandarynka" width={330} height={440} from="right" delay={200}
          style={{ right: 'clamp(40px, 8.11vw, 123px)', top: 'clamp(340px, 55vw, 830px)', width: 'clamp(120px, 22vw, 330px)' }}
        />

        {/* SIDE QUEST */}
        <div style={{
          position:  'absolute',
          left:      '50%',
          top:       '30%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          width:     'clamp(280px, 43.05vw, 652px)',
        }}>
          <h2 style={{
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontSize:   'clamp(32px, 4.22vw, 64px)',
            fontWeight: 400,
            lineHeight: 1.45,
            color:      '#fff',
            margin:     '0 0 12px 0',
          }}>
            SIDE QUEST.
          </h2>
          <p style={{
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontSize:   'clamp(16px, 2.11vw, 32px)',
            lineHeight: '1.19',
            color:      'rgba(255,255,255,0.8)',
            margin:     0,
          }}>
            Photography — completed course, still shooting.
          </p>
        </div>

      </div>
    </>
  )
}
