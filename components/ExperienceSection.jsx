'use client'

import { useState, useEffect, useRef } from 'react'
import { useLang } from './LangContext'

/* ─── Reveal hook ────────────────────────────────────────── */
function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.68) {
        setTimeout(() => el.classList.add('exp-visible'), delay)
        window.removeEventListener('scroll', check)
      }
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])
  return ref
}

/* ─── Tag pill ────────────────────────────────────────────── */
function Tag({ label }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      padding: 'clamp(3px, 0.29vw, 4.4px) clamp(7px, 0.77vw, 11.7px)',
      border: '1px solid rgba(255,255,255,0.75)',
      borderRadius: '12px',
      fontFamily: 'var(--font-roboto), Roboto, sans-serif',
      fontSize: 'clamp(11px, 1.19vw, 18px)',
      lineHeight: 1.2,
      color: 'rgba(255,255,255,0.75)',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

/* ─── Plus / Minus icon ───────────────────────────────────── */
function ToggleIcon({ open }) {
  return (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="19" cy="19" r="17.5" stroke="white" strokeWidth="2" />
      <line x1="19" y1="10" x2="19" y2="28" stroke="white" strokeWidth="2"
        style={{ transition: 'opacity 0.3s', opacity: open ? 0 : 1 }}
      />
      <line x1="10" y1="19" x2="28" y2="19" stroke="white" strokeWidth="2" />
    </svg>
  )
}

/* ─── Single entry ────────────────────────────────────────── */
function Entry({ entry, open, onToggle, index = 0 }) {
  const ref = useReveal(index * 100)

  return (
    <div
      ref={ref}
      className="exp-entry"
    >
      <div
        onClick={() => { if (!open) onToggle() }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 'clamp(16px, 2.1vw, 32px) 0',
          gap: '16px',
          cursor: open ? 'default' : 'pointer',
        }}
      >
        {/* Left: date + name + expanded details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <span style={{
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontSize: 'clamp(12px, 1.19vw, 18px)',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: 1.44,
            marginBottom: 'clamp(2px, 0.3vw, 4px)',
          }}>
            {entry.date}
          </span>

          <span style={{
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontSize: 'clamp(28px, 4.75vw, 72px)',
            fontWeight: 400,
            color: '#fff',
            lineHeight: 1.1,
          }}>
            {entry.company}
          </span>

          {/* Expandable details */}
          <div style={{
            display: 'grid',
            gridTemplateRows: open ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}>
            <div style={{ overflow: 'hidden' }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(10px, 0.9vw, 14px)',
                marginTop: 'clamp(10px, 1vw, 16px)',
              }}>
                {entry.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(5px, 0.53vw, 8px)' }}>
                    {entry.tags.map(t => <Tag key={t} label={t} />)}
                  </div>
                )}
                {entry.description && (
                  <p style={{
                    fontFamily: 'var(--font-roboto), Roboto, sans-serif',
                    fontSize: 'clamp(14px, 2.11vw, 32px)',
                    lineHeight: 1.19,
                    letterSpacing: '0.04em',
                    color: 'rgba(255,255,255,0.8)',
                    margin: 0,
                    maxWidth: '78.3%',
                  }}>
                    {entry.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={e => { e.stopPropagation(); onToggle() }}
          style={{
            background: 'none', border: 'none', padding: 0, cursor: 'pointer',
            marginTop: 'clamp(8px, 1.5vw, 24px)', flexShrink: 0,
          }}
          aria-label={open ? 'Zwiń' : 'Rozwiń'}
        >
          <ToggleIcon open={open} />
        </button>
      </div>
    </div>
  )
}

/* ─── Section ─────────────────────────────────────────────── */
export default function ExperienceSection() {
  const { tr } = useLang()

  const ENTRIES = [
    {
      id: 'kostar',
      company: 'KOSTAR',
      date: `/06. 2025 - ${tr.experience.currently}`,
      tags: ['Helpdesk', 'Server', 'SQL', 'mMEDICA', 'Network'],
      description: tr.experience.kostar.description,
      defaultOpen: true,
    },
    {
      id: 'giganci',
      company: 'GIGANCI PROGRAMOWANIA',
      date: '/09. 2024 - 06. 2025',
      tags: ['Python', 'Nauczanie'],
      description: tr.experience.giganci.description,
      defaultOpen: false,
    },
    {
      id: 'promed',
      company: 'PRO-MED',
      date: '/03. 2023 - 09. 2024',
      tags: ['Windows', 'Hardware', 'Helpdesk'],
      description: tr.experience.promed.description,
      defaultOpen: false,
    },
  ]

  const [openId, setOpenId] = useState(ENTRIES[0].id)

  return (
    <>
    <style>{`
      .exp-entry {
        opacity: 0;
        transform: translateY(36px);
        transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
      }
      .exp-entry.exp-visible {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
    <section style={{
      background: '#141414',
      width: '100%',
      position: 'relative',
      overflow: 'clip',
    }}>

      {/* ── Sticky EXPERIENCE label — poza kontenerem, przy prawej krawędzi ekranu ── */}
      <div style={{
        position: 'sticky',
        top: '8vh',
        height: 0,
        overflow: 'visible',
        zIndex: 10,
        pointerEvents: 'none',
        userSelect: 'none',
      }}>
        <div style={{
          position: 'absolute',
          right: 'clamp(6px, 1.2vw, 20px)',
          top: 0,
          writingMode: 'vertical-rl',
          fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
          fontSize: 'clamp(16px, 2vw, 38px)',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.1)',
          letterSpacing: '0.05em',
          lineHeight: 1,
        }}>
          EXPERIENCE
        </div>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1515px',
        margin: '0 auto',
        paddingBottom: 'clamp(40px, 5vw, 80px)',
      }}>

        {/* ── Content — wyśrodkowany ──────────────────────── */}
        <div style={{
          width: '72.8%',       /* 1103/1515 ≈ 72.8% — środek layoutu */
          margin: '0 auto',
          paddingTop: 'clamp(40px, 16.06vw, 243px)',
        }}>
          {ENTRIES.map((entry, i) => (
            <Entry
              key={entry.id}
              entry={entry}
              index={i}
              open={openId === entry.id}
              onToggle={() => setOpenId(id => id === entry.id ? null : entry.id)}
            />
          ))}
        </div>

      </div>
    </section>
    </>
  )
}
