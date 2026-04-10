import DPLogo from "@/components/DPLogo";

/* ─── Icon components ─────────────────────────────────────── */

const GitHubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 5.893 3.822 10.883 9.126 12.642.667.122.912-.29.912-.643V25.24c-3.714.807-4.497-1.787-4.497-1.787-.607-1.542-1.482-1.952-1.482-1.952-1.211-.827.091-.811.091-.811 1.338.094 2.043 1.374 2.043 1.374 1.189 2.038 3.119 1.449 3.879 1.108.12-.861.465-1.449.847-1.782-2.963-.337-6.077-1.481-6.077-6.594 0-1.457.521-2.649 1.374-3.583-.138-.337-.595-1.696.131-3.536 0 0 1.12-.358 3.666 1.366a12.756 12.756 0 0 1 3.333-.449c1.131.005 2.271.153 3.333.449 2.543-1.724 3.661-1.366 3.661-1.366.728 1.84.271 3.199.133 3.536.856.934 1.372 2.126 1.372 3.583 0 5.125-3.119 6.253-6.091 6.583.479.412.905 1.225.905 2.47v3.659c0 .356.242.772.918.641C25.514 26.879 29.333 21.891 29.333 16c0-7.364-5.969-13.333-13.333-13.333z"
      fill="rgba(255,255,255,0.8)"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect
      x="2.75"
      y="2.75"
      width="26.5"
      height="26.5"
      rx="4.25"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="1.5"
    />
    <rect x="8" y="13" width="3.5" height="11" fill="rgba(255,255,255,0.8)" />
    <circle cx="9.75" cy="9.75" r="1.75" fill="rgba(255,255,255,0.8)" />
    <path
      d="M14.5 13h3.25v1.5c.6-1 1.75-1.75 3.25-1.75 2.75 0 3.25 1.75 3.25 4.25V24h-3.5v-5.5c0-1.25-.25-2.25-1.75-2.25S17.5 17.25 17.5 18.5V24H14.5V13z"
      fill="rgba(255,255,255,0.8)"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect
      x="4"
      y="8"
      width="24"
      height="16"
      rx="2"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="2"
    />
    <path
      d="M4 11l12 8 12-8"
      stroke="rgba(255,255,255,0.8)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ─── Page ────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        background:
          "radial-gradient(100% 100% at 50% 0%, #1F1F1F 0%, #151515 45.67%, #080808 100%)",
        overflow: "hidden",
      }}
    >
      {/* ── Navbar ────────────────────────────────────────── */}
      {/*
        Figma: left calc(50% - 1200.79px/2 + 29.02px), top: 46.05px
        Nav spans 1200px, offset +29px from center → left ~186px at 1515px
      */}
      <nav
        style={{
          position: "absolute",
          top: "46px",
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <DPLogo size={48} />

        <div style={{ display: "flex", alignItems: "center", gap: "45px" }}>
          {[
            { label: "Work",   href: "/",      active: true  },
            { label: "About",  href: "/about", active: false },
            { label: "Resume", href: "#",      active: false },
          ].map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "var(--font-didot), Didot, serif",
                fontSize: "20px",
                lineHeight: "27px",
                color: active ? "#ffffff" : "rgba(255,255,255,0.7)",
                textDecoration: "none",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── Hero Text ─────────────────────────────────────── */}
      {/*
        Container anchored by top/left (vw+vh).
        Internal gaps expressed in `em` so they scale with font-size (vw),
        not with viewport height — fixes overlap on wider/taller screens.

        Figma baseline (1515×983px, font 128px):
          subtitle height  = 1.35 × 0.25em = 0.3375em  (32/128 = 0.25 ratio)
          DOMINIK→PAZUREK gap = 108/128   = 0.844em

        DOMINIK margins:
          marginTop    = –0.3375em  → pulls DOMINIK up to share top with subtitle
          marginBottom = –0.601em   → PAZUREK starts 0.844em below DOMINIK top
                         (1.445 lineHeight – 0.844 gap = 0.601 to subtract)
      */}
      <div
        style={{
          position: "absolute",
          top: "max(80px, 31.84vh)",
          left: "40px",
        }}
      >
        {/* Subtitle — sits in the leading above DOMINIK's caps */}
        <p
          style={{
            position: "relative",
            zIndex: 2,
            fontFamily: "var(--font-didot), Didot, serif",
            fontWeight: 400,
            fontSize: "max(12px, 2.11vw)",
            lineHeight: 1.35,
            color: "rgba(255,255,255,0.8)",
            margin: 0,
          }}
        >
          Web designer &amp; developer
        </p>

        {/* DOMINIK */}
        <h1
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontWeight: 400,
            fontSize: "max(36px, 8.45vw)",
            lineHeight: 1.445,
            color: "#ffffff",
            textShadow: "0px 8px 4px rgba(0,0,0,0.25)",
            margin: "-0.3375em 0 -0.601em 0",
            whiteSpace: "nowrap",
          }}
        >
          DOMINIK
        </h1>

        {/* PAZUREK — gap from DOMINIK scales with font-size via em */}
        <h2
          style={{
            position: "relative",
            zIndex: 1,
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontWeight: 400,
            fontSize: "max(36px, 8.45vw)",
            lineHeight: 1.445,
            color: "#ffffff",
            textShadow: "0px 8px 4px rgba(0,0,0,0.25)",
            margin: 0,
            whiteSpace: "nowrap",
          }}
        >
          PAZUREK
        </h2>
      </div>

      {/* ── Social Links ──────────────────────────────────── */}
      {/*
        Figma: left 40px (2.64vw), top 774px → bottom ~49px (4.99vh)
        align-items: flex-end → all columns bottom-aligned in container.
        Different column heights create descending staircase of icons left→right:
          GitHub  (16.38vh) → icon at top, long line   (116px → 11.8vh)
          LinkedIn(11.70vh) → icon 45px lower,  medium line (70px → 7.12vh)
          Email   ( 6.61vh) → icon 95px lower,  short line  (22px → 2.24vh)
      */}
      <div
        style={{
          position: "absolute",
          left: "40px",
          bottom: "clamp(20px, 4.99vh, 70px)",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: "clamp(10px, 1.32vw, 22px)",
          height: "clamp(80px, 16.28vh, 220px)",
          overflow: "visible",
        }}
      >
        {/* GitHub — tallest column (full container height) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(8px, 0.86vw, 14px)",
            height: "clamp(82px, 16.38vh, 222px)",
          }}
        >
          <a
            href="https://github.com"
            aria-label="GitHub"
            style={{ display: "block", flexShrink: 0 }}
          >
            <GitHubIcon />
          </a>
          <div
            style={{
              width: "1px",
              flex: 1,
              background: "rgba(255,255,255,0.8)",
            }}
          />
        </div>

        {/* LinkedIn — medium column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(8px, 0.86vw, 14px)",
            height: "clamp(60px, 11.70vh, 158px)",
          }}
        >
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            style={{ display: "block", flexShrink: 0 }}
          >
            <LinkedInIcon />
          </a>
          <div
            style={{
              width: "1px",
              flex: 1,
              background: "rgba(255,255,255,0.8)",
            }}
          />
        </div>

        {/* Email — shortest column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "clamp(4px, 0.73vw, 10px)",
            height: "clamp(36px, 6.61vh, 90px)",
          }}
        >
          <a
            href="mailto:contact@dominikpazurek.com"
            aria-label="Email"
            style={{ display: "block", flexShrink: 0 }}
          >
            <EmailIcon />
          </a>
          <div
            style={{
              width: "1px",
              flex: 1,
              background: "rgba(255,255,255,0.8)",
            }}
          />
        </div>
      </div>

      {/* ── Blurred Logo Decoration ───────────────────────── */}
      {/*
        Figma Frame 78: 549×536px at left:796px (52.54vw), top:331px (33.67vh).
        Inner frames OVERFLOW the container (719/724px > 549px container)
        → intentional: logo bleeds beyond right & bottom edges.

        As % of 549px container width:
          Ghost frame: 719px wide → 131.0%, left:12.39%, top:0%,    opacity:0.2 (below)
          Solid frame: 724px wide → 131.9%, left:0%,    top:3.54%,  opacity:1   (on top)

        At any viewport: solid frame right edge ≈ viewport right edge (auto-clips via overflow:hidden on parent).
      */}
      <div
        style={{
          position: "absolute",
          left: "52.54vw",
          top: "33.67vh",
          width: "36.24vw",
          aspectRatio: "549 / 536",
          filter: "blur(clamp(6px, 0.75vw, 13px))",
          overflow: "visible",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        {/* Layer 1 — ghost, upper-right, 0.2 opacity (rendered below) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dp.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "12.39%",
            top: 0,
            width: "130.97%",
            opacity: 0.2,
          }}
        />
        {/* Layer 2 — solid, lower-left, full opacity (rendered on top) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/dp.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: "3.54%",
            width: "131.88%",
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}
