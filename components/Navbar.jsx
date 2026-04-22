'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import DPLogo from './DPLogo'

const lerp  = (a, b, t) => a + (b - a) * t
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))
const ease  = (t) => t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t+2, 2)/2

const NAV_LINKS = [
  { label: 'Work',   href: '/'      },
  { label: 'About',  href: '/about' },
  { label: 'Resume', href: '/resume.pdf', target: '_blank' },
]

export default function Navbar() {
  const pathname = usePathname()

  const navRef        = useRef(null)
  const bgRef         = useRef(null)
  const logoWrapRef   = useRef(null)
  const linksWrapRef  = useRef(null)
  const linkRefs      = useRef([])

  useEffect(() => {
    let rafId

    const loop = () => {
      const p = ease(clamp(window.scrollY / 200, 0, 1))

      // Background reveals top→bottom AFTER text settles (starts at scrollY 150px)
      const bgP = ease(clamp((window.scrollY - 150) / 70, 0, 1))

      const nav = navRef.current
      if (nav) {
        nav.style.top           = `${lerp(46, 0, p)}px`
        nav.style.paddingTop    = `${lerp(0, 8, p)}px`
        nav.style.paddingBottom = `${lerp(0, 8, p)}px`
        // dot size: 4px → 2.5px
        nav.style.setProperty('--dot-size', `${lerp(4, 2.5, p)}px`)
      }

      // Background div: scaleY 0→1 from top, blur + border fade in too
      const bg = bgRef.current
      if (bg) {
        bg.style.transform             = `scaleY(${bgP})`
        bg.style.opacity               = `${bgP}`
        bg.style.backdropFilter        = `blur(${lerp(0, 14, bgP)}px)`
        bg.style.WebkitBackdropFilter  = `blur(${lerp(0, 14, bgP)}px)`
        bg.style.borderBottomColor     = `rgba(255,255,255,${0.07 * bgP})`
      }

      if (logoWrapRef.current) {
        const logoDiv = logoWrapRef.current.querySelector('div')
        if (logoDiv) {
          const size = `${lerp(48, 32, p)}px`
          logoDiv.style.width  = size
          logoDiv.style.height = size
        }
      }

      if (linksWrapRef.current) {
        linksWrapRef.current.style.gap = `${lerp(45, 24, p)}px`
      }

      linkRefs.current.forEach(el => {
        if (el) el.style.fontSize = `${lerp(20, 15, p)}px`
      })

      rafId = requestAnimationFrame(loop)
    }

    rafId = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position:       'fixed',
        top:            46,
        left:           0,
        right:          0,
        zIndex:         300,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding:        '0 40px',
      }}
    >
      {/* Background — reveals top→bottom after text settles */}
      <div
        ref={bgRef}
        style={{
          position:        'absolute',
          inset:           0,
          background:      'rgba(10,10,10,0.82)',
          borderBottom:    '1px solid transparent',
          transformOrigin: 'top',
          transform:       'scaleY(0)',
          opacity:         0,
          pointerEvents:   'none',
          zIndex:          -1,
        }}
      />
      {/* Logo */}
      <div
        ref={logoWrapRef}
        className="anim-fade-in-down"
        style={{ animationDelay: '0.1s' }}
      >
        <DPLogo size={48} />
      </div>

      {/* Links */}
      <div
        ref={linksWrapRef}
        style={{ display: 'flex', alignItems: 'center', gap: '45px' }}
      >
        {NAV_LINKS.map(({ label, href, target }, i) => {
          const active = href === '/' ? pathname === '/' : pathname.startsWith(href)
          return (
            <a
              key={label}
              ref={el => { linkRefs.current[i] = el }}
              href={href}
              target={target}
              rel={target === '_blank' ? 'noopener noreferrer' : undefined}
              className={`anim-fade-in-down no-underline nav-link${active ? ' nav-link-active' : ''}`}
              style={{
                fontFamily:     'var(--font-didot), Didot, serif',
                fontSize:       '20px',
                fontWeight:     300,
                lineHeight:     '27px',
                animationDelay: `${0.1 + i * 0.12}s`,
              }}
            >
              {label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
