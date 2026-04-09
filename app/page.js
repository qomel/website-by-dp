import DPLogo from "@/components/DPLogo";

const GitHubIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2.667C8.636 2.667 2.667 8.636 2.667 16c0 5.893 3.822 10.883 9.126 12.642.667.122.912-.29.912-.643V25.24c-3.714.807-4.497-1.787-4.497-1.787-.607-1.542-1.482-1.952-1.482-1.952-1.211-.827.091-.811.091-.811 1.338.094 2.043 1.374 2.043 1.374 1.189 2.038 3.119 1.449 3.879 1.108.12-.861.465-1.449.847-1.782-2.963-.337-6.077-1.481-6.077-6.594 0-1.457.521-2.649 1.374-3.583-.138-.337-.595-1.696.131-3.536 0 0 1.12-.358 3.666 1.366a12.756 12.756 0 0 1 3.333-.449c1.131.005 2.271.153 3.333.449 2.543-1.724 3.661-1.366 3.661-1.366.728 1.84.271 3.199.133 3.536.856.934 1.372 2.126 1.372 3.583 0 5.125-3.119 6.253-6.091 6.583.479.412.905 1.225.905 2.47v3.659c0 .356.242.772.918.641C25.514 26.879 29.333 21.891 29.333 16c0-7.364-5.969-13.333-13.333-13.333z"
      fill="rgba(255,255,255,0.8)"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2.75" y="2.75" width="26.5" height="26.5" rx="4.25" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" />
    <rect x="8" y="13" width="3.5" height="11" fill="rgba(255,255,255,0.8)" />
    <circle cx="9.75" cy="9.75" r="1.75" fill="rgba(255,255,255,0.8)" />
    <path
      d="M14.5 13h3.25v1.5c.6-1 1.75-1.75 3.25-1.75 2.75 0 3.25 1.75 3.25 4.25V24h-3.5v-5.5c0-1.25-.25-2.25-1.75-2.25S17.5 17.25 17.5 18.5V24H14.5V13z"
      fill="rgba(255,255,255,0.8)"
    />
  </svg>
);

const EmailIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="24" height="16" rx="2" stroke="rgba(255,255,255,0.8)" strokeWidth="2" />
    <path d="M4 11l12 8 12-8" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function WorkPage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background:
          "radial-gradient(100% 100% at 50% 0%, #1F1F1F 0%, #151515 45.67%, #080808 100%)",
        overflow: "hidden",
      }}
    >
      {/* ── Navbar ── */}
      <nav
        style={{
          position: "absolute",
          top: "46px",
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "clamp(32px, calc((100% - 1200px) / 2 + 57px), 186px)",
          paddingRight: "clamp(32px, calc((100% - 1200px) / 2 + 57px), 186px)",
        }}
      >
        <DPLogo size={48} />
        <div style={{ display: "flex", alignItems: "center", gap: "45px" }}>
          {[
            { label: "Work", href: "/", active: true },
            { label: "About", href: "/about", active: false },
            { label: "Resume", href: "#", active: false },
          ].map(({ label, href, active }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "Didot, var(--font-playfair), serif",
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

      {/* ── Hero Text ── */}
      <div
        style={{
          position: "absolute",
          top: "193px",
          left: "clamp(16px, calc((100% - 1401px) / 2 - 32px), 25px)",
          filter: "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))",
        }}
      >
        <p
          style={{
            fontFamily: "Didot, var(--font-playfair), serif",
            fontWeight: 400,
            fontSize: "32px",
            lineHeight: "43px",
            color: "rgba(255,255,255,0.8)",
            position: "relative",
            zIndex: 1,
            marginBottom: 0,
          }}
        >
          Web designer &amp; developer
        </p>
        <h1
          style={{
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontWeight: 400,
            fontSize: "clamp(60px, 15.84vw, 240px)",
            lineHeight: 1.45,
            color: "#ffffff",
            textShadow: "0px 18px 10.9px rgba(0,0,0,0.5)",
            marginTop: "clamp(-30px, -10.17vw, -154px)",
            whiteSpace: "nowrap",
          }}
        >
          DOMINIK
        </h1>
        <h2
          style={{
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontWeight: 400,
            fontSize: "clamp(28px, 4.22vw, 64px)",
            lineHeight: "177.59%",
            color: "#ffffff",
            textShadow: "0px 18px 10.9px rgba(0,0,0,0.25)",
          }}
        >
          PAZUREK
        </h2>
      </div>

      {/* ── Social Links ── */}
      <div
        style={{
          position: "absolute",
          left: "74px",
          bottom: "27px",
          height: "225px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* GitHub — tallest column (225px) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "13px",
            height: "225px",
          }}
        >
          <a href="https://github.com" aria-label="GitHub" style={{ display: "block", flexShrink: 0 }}>
            <GitHubIcon />
          </a>
          <div style={{ width: "1px", flex: 1, background: "rgba(255,255,255,0.8)" }} />
        </div>

        {/* LinkedIn — medium column (167px), centered → 29px from top */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "13px",
            height: "167px",
          }}
        >
          <a href="https://linkedin.com" aria-label="LinkedIn" style={{ display: "block", flexShrink: 0 }}>
            <LinkedInIcon />
          </a>
          <div style={{ width: "1px", flex: 1, background: "rgba(255,255,255,0.8)" }} />
        </div>

        {/* Email — shortest column (147px), centered → 39px from top */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "11px",
            height: "147px",
          }}
        >
          <a href="mailto:contact@dominikpazurek.com" aria-label="Email" style={{ display: "block", flexShrink: 0 }}>
            <EmailIcon />
          </a>
          <div style={{ width: "1px", flex: 1, background: "rgba(255,255,255,0.8)" }} />
        </div>
      </div>

      {/* ── Blurred Logo Decoration ── */}
      <div
        style={{
          position: "absolute",
          width: "549px",
          height: "536px",
          left: "947px",
          top: "537px",
          filter: "blur(11.35px)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <DPLogo size={481} color="rgba(235,235,235,0.2)" />
      </div>
    </div>
  );
}
