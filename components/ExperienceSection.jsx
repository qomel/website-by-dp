'use client'

import { useState } from 'react'

/* ─── Data ────────────────────────────────────────────────── */
const ENTRIES = [
  {
    id: 'kostar',
    company: 'KOSTAR',
    date: '/06. 2025 - Obecnie',
    tags: ['Helpdesk', 'Server', 'SQL', 'mMEDICA', 'Network'],
    description:
      'Responsible for hardware assembly, diagnostics and repair, alongside deployment and maintenance of SQL, SMTP and web servers.',
    defaultOpen: true,
  },
  {
    id: 'giganci',
    company: 'GIGANCI PROGRAMOWANIA',
    date: '/09. 2024 - 06. 2025',
    tags: ['Ipsum'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
    defaultOpen: false,
  },
  {
    id: 'promed',
    company: 'PRO-MED',
    date: '/03. 2023 - 09. 2024',
    tags: ['Ipsum'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.',
    defaultOpen: false,
  },
]

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

/* ─── Divider ─────────────────────────────────────────────── */
function Divider() {
  return <div style={{ width: '100%', height: '1px', background: '#fff' }} />
}

/* ─── Single entry ────────────────────────────────────────── */
function Entry({ entry, open, onToggle }) {

  return (
    <div>
      <Divider />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 'clamp(16px, 2.1vw, 32px) 0',
        gap: '16px',
      }}>
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
          onClick={onToggle}
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
  const [openId, setOpenId] = useState(ENTRIES[0].id)

  return (
    <section style={{
      background: '#141414',
      width: '100%',
      position: 'relative',
      overflow: 'clip',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1515px',
        margin: '0 auto',
        paddingBottom: 'clamp(40px, 5vw, 80px)',
      }}>

        {/* ── Sticky EXPERIENCE label ─────────────────────────
            top: 0 zamiast 50vh — label zaczyna się od góry
            sekcji i jedzie z nami do końca. Nie wychodzi
            ponad sekcję bo overflow:clip to przycina.
        ──────────────────────────────────────────────────── */}
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
            right: 0,
            top: 0,
            writingMode: 'vertical-rl',
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontSize: 'clamp(32px, 4.22vw, 64px)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.1)',
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}>
            EXPERIENCE
          </div>
        </div>

        {/* ── Content — wyśrodkowany ──────────────────────── */}
        <div style={{
          width: '72.8%',       /* 1103/1515 ≈ 72.8% — środek layoutu */
          margin: '0 auto',
          paddingTop: 'clamp(40px, 16.06vw, 243px)',
        }}>
          {ENTRIES.map(entry => (
            <Entry
              key={entry.id}
              entry={entry}
              open={openId === entry.id}
              onToggle={() => setOpenId(id => id === entry.id ? null : entry.id)}
            />
          ))}
          <Divider />
        </div>

      </div>
    </section>
  )
}
