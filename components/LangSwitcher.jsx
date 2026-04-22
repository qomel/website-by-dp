'use client'

import { useLang } from './LangContext'

export default function LangSwitcher() {
  const { lang, setLang } = useLang()

  const next  = lang === 'en' ? 'pl'  : 'en'
  const label = lang === 'en' ? 'PL'  : 'ANG'

  return (
    <button
      onClick={() => setLang(next)}
      aria-label={`Switch to ${next.toUpperCase()}`}
      style={{
        position:       'fixed',
        bottom:         'clamp(20px, 4.99vh, 70px)',
        right:          'clamp(12px, 2.64vw, 40px)',
        zIndex:         200,
        width:          '36px',
        height:         '36px',
        borderRadius:   '50%',
        background:     'rgba(10,10,10,0.82)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border:         '1px solid rgba(255,255,255,0.12)',
        cursor:         'pointer',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        fontFamily:     'var(--font-didot), Didot, serif',
        fontSize:       '13px',
        fontWeight:     300,
        lineHeight:     1,
        paddingTop:     '2px',
        color:          'rgba(255,255,255,0.45)',
        letterSpacing:  '0.04em',
        transition:     'opacity 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'}
    >
      {label}
    </button>
  )
}
