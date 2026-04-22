import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{
      background: '#101010',
      width: '100%',
      position: 'relative',
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '1515px',
        margin: '0 auto',
        height: 'clamp(224px, 31.4vw, 475px)',
      }}>

        {/* ── DP Logo ─────────────────────────────────────────
            Figma: left 107px (7.06%), top 145px (24.41%),
            size 303px (20% of 1515px)
        ──────────────────────────────────────────────────── */}
        <div style={{
          position: 'absolute',
          left: '7.06%',
          top: '24.41%',
          width: 'clamp(100px, 20vw, 303px)',
        }}>
          <Image
            src="/dp.svg"
            alt="DP Logo"
            width={303}
            height={303}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        {/* ── Social icons ─────────────────────────────────────
            Figma: centered horizontally, top 251px (42.26%)
        ──────────────────────────────────────────────────── */}
        <div style={{
          position: 'absolute',
          top: '42.26%',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 'clamp(28px, 3.96vw, 60px)',
        }}>
          {/* GitHub */}
          <a href="https://github.com/qomel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon-link" style={{ color: '#fff' }}>
            <svg width="clamp(20px,2.11vw,32px)" height="clamp(20px,2.11vw,32px)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 'clamp(20px,2.11vw,32px)', height: 'clamp(20px,2.11vw,32px)', display: 'block' }}>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/dominik-pazurek-7089282a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link" style={{ color: '#fff' }}>
            <svg width="clamp(20px,2.11vw,32px)" height="clamp(20px,2.11vw,32px)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" style={{ width: 'clamp(20px,2.11vw,32px)', height: 'clamp(20px,2.11vw,32px)', display: 'block' }}>
              <path d="M4.5 9.5H4C3.06 9.5 2.59 9.5 2.29 9.79 2 10.09 2 10.56 2 11.5V20c0 .94 0 1.41.29 1.71.29.29.77.29 1.71.29H4.5c.94 0 1.41 0 1.71-.29.29-.29.29-.77.29-1.71v-8.5c0-.94 0-1.41-.29-1.71C5.91 9.5 5.44 9.5 4.5 9.5z" />
              <path d="M6.5 4.25a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
              <path d="M12.33 9.5H11.5c-.94 0-1.41 0-1.71.29C9.5 10.09 9.5 10.56 9.5 11.5V20c0 .94 0 1.41.29 1.71.29.29.77.29 1.71.29H12c.94 0 1.41 0 1.71-.29C14 21.41 14 20.94 14 20v-3.5c0-1.66.53-3 2.09-3 .78 0 1.41.67 1.41 1.5v4.5c0 .94 0 1.41.29 1.71.29.29.77.29 1.71.29H20c.94 0 1.41 0 1.71-.29.29-.29.29-.77.29-1.71v-5.5C22 11.51 19.64 9.5 17.3 9.5c-1.33 0-2.52.65-3.3 1.67 0-.63 0-.95-.14-1.18a1.25 1.25 0 0 0-.5-.36c-.24-.13-.54-.13-1.03-.13z" />
            </svg>
          </a>

          {/* Mail */}
          <a href="mailto:dominik.pazurek@gmail.com" aria-label="Email" className="social-icon-link" style={{ color: '#fff' }}>
            <svg width="clamp(20px,2.11vw,32px)" height="clamp(20px,2.11vw,32px)" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 'clamp(20px,2.11vw,32px)', height: 'clamp(20px,2.11vw,32px)', display: 'block' }}>
              <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
              <path d="M3 7l9 6 9-6" />
            </svg>
          </a>
        </div>

        {/* ── Nav links ─────────────────────────────────────────
            Figma: left 1105px (72.94%), top 131px (22.05%),
            align right, gap 50px
        ──────────────────────────────────────────────────── */}
        <div style={{
          position: 'absolute',
          right: '7.26%',
          top: '22.05%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 'clamp(20px, 3.3vw, 50px)',
        }}>
          {['Work', 'About', 'Resume'].map(label => (
            <a
              key={label}
              href={label === 'Resume' ? '/resume.pdf' : label === 'Work' ? '/' : `/${label.toLowerCase()}`}
              target={label === 'Resume' ? '_blank' : undefined}
              rel={label === 'Resume' ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
                fontSize: 'clamp(22px, 3.17vw, 48px)',
                fontWeight: 400,
                color: '#fff',
                lineHeight: 1.46,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
