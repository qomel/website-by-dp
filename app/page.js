import DPLogo from "@/components/DPLogo";
import LogoParallax from "@/components/LogoParallax";
import WorkSection from "@/components/WorkSection";
import SectionDivider from "@/components/Divider";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

/* ─── Icon components ─────────────────────────────────────── */

const GitHubIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinejoin="round"
  >
    <path d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z" />
    <path d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z" />
    <path d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

/* ─── Page ────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <div style={{ position: "relative" }}>
    <div
      className="relative w-full min-h-svh"
      style={{
        background:
          "radial-gradient(100% 100% at 50% 0%, #1F1F1F 0%, #151515 45.67%, #080808 100%)",
      }}
    >
      {/* ── Navbar ────────────────────────────────────────── */}
      <nav
        className="absolute top-[46px] left-0 right-0 flex items-center justify-between"
        style={{ padding: "0 40px" }}
      >
        <div className="anim-fade-in-down" style={{ animationDelay: "0.1s" }}>
          <DPLogo size={48} />
        </div>

        <div className="flex items-center gap-[45px]">
          {[
            { label: "Work", href: "/", active: true },
            { label: "About", href: "/about", active: false },
            { label: "Resume", href: "#", active: false },
          ].map(({ label, href, active }, i) => (
            <a
              key={label}
              href={href}
              className={`anim-fade-in-down no-underline nav-link${
                active ? " nav-link-active" : ""
              }`}
              style={{
                fontFamily: "var(--font-didot), Didot, serif",
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "27px",
                animationDelay: `${0.1 + i * 0.12}s`,
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
      <div className="absolute left-[40px]" style={{ top: "max(80px, 30vh)" }}>
        {/* Subtitle — sits in the leading above DOMINIK's caps */}
        <p
          className="anim-fade-in-up relative z-20 m-0"
          style={{
            fontFamily: "var(--font-didot), Didot, serif",
            fontWeight: 300,
            fontSize: "clamp(8px, 1.8vw, 35px)",
            lineHeight: 1.35,
            animationDelay: "0.95s",
          }}
        >
          Web designer &amp; developer
        </p>

        {/* DOMINIK */}
        <h1
          className="anim-fade-in-up relative z-10 whitespace-nowrap"
          style={{
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontWeight: 400,
            fontSize: "clamp(36px, 8.45vw, 162px)",
            lineHeight: 1.445,
            color: "#ffffff",
            textShadow: "0px 8px 4px rgba(0,0,0,0.25)",
            margin: "-0.3375em 0 -0.601em 0",
            animationDelay: "0.3s",
          }}
        >
          DOMINIK
        </h1>

        {/* PAZUREK — gap from DOMINIK scales with font-size via em */}
        <h2
          className="anim-fade-in-up relative z-10 whitespace-nowrap m-0"
          style={{
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontWeight: 400,
            fontSize: "clamp(36px, 8.45vw, 162px)",
            lineHeight: 1.445,
            color: "#ffffff",
            textShadow: "0px 8px 4px rgba(0,0,0,0.25)",
            animationDelay: "0.6s",
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
      {/*
        Staircase alignment — wszystkie kolumny mają tę samą wysokość,
        ikony przesunięte padding-top o wielokrotność step:
          step = icon(24px) + gap(clamp(6px,0.86vw,14px))
          GitHub  → padding-top: 0
          LinkedIn → padding-top: 1×step
          Email    → padding-top: 2×step
        Dzięki temu wszystkie kropki są zawsze na tym samym poziomie (dół kontenera).
      */}
      <div
        className="absolute left-[40px] flex flex-row overflow-visible"
        style={{
          bottom: "clamp(20px, 4.99vh, 70px)",
          gap: "clamp(10px, 1.32vw, 22px)",
          height: "clamp(140px, 16.38vh, 222px)",
          alignItems: "stretch",
        }}
      >
        {/* GitHub — brak offsetu */}
        <div style={{ overflow: "hidden", height: "100%", paddingTop: "6px" }}>
          <div
            className="anim-reveal-up flex flex-col items-center"
            style={{
              gap: "clamp(6px, 0.86vw, 14px)",
              height: "100%",
              color: "rgba(255,255,255,0.8)",
              animationDelay: "0.78s",
            }}
          >
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="social-icon-link"
            >
              <GitHubIcon />
            </a>
            <div
              style={{
                width: "1px",
                minWidth: "1px",
                flex: 1,
                background: "rgba(255,255,255,0.8)",
              }}
            />
            <div
              className="shrink-0 rounded-full"
              style={{
                width: "5px",
                height: "5px",
                background: "rgba(255,255,255,0.8)",
              }}
            />
          </div>
        </div>

        {/* LinkedIn — ikona zaczyna się tam gdzie kreska GitHuba */}
        <div style={{ overflow: "hidden", height: "100%", paddingTop: "6px" }}>
          <div
            className="anim-reveal-up flex flex-col items-center"
            style={{
              gap: "clamp(6px, 0.86vw, 14px)",
              height: "100%",
              paddingTop: "calc(18px + clamp(6px, 0.86vw, 14px))",
              color: "rgba(255,255,255,0.8)",
              animationDelay: "0.88s",
            }}
          >
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="social-icon-link"
            >
              <LinkedInIcon />
            </a>
            <div
              style={{
                width: "1px",
                minWidth: "1px",
                flex: 1,
                background: "rgba(255,255,255,0.8)",
              }}
            />
            <div
              className="shrink-0 rounded-full"
              style={{
                width: "5px",
                height: "5px",
                background: "rgba(255,255,255,0.8)",
              }}
            />
          </div>
        </div>

        {/* Email — ikona zaczyna się tam gdzie kreska LinkedIna */}
        <div style={{ overflow: "hidden", height: "100%", paddingTop: "6px" }}>
          <div
            className="anim-reveal-up flex flex-col items-center"
            style={{
              gap: "clamp(6px, 0.86vw, 14px)",
              height: "100%",
              paddingTop: "calc(36px + 2 * clamp(6px, 0.86vw, 14px))",
              color: "rgba(255,255,255,0.8)",
              animationDelay: "0.98s",
            }}
          >
            <a
              href="mailto:contact@dominikpazurek.com"
              aria-label="Email"
              className="social-icon-link"
            >
              <EmailIcon />
            </a>
            <div
              style={{
                width: "1px",
                minWidth: "1px",
                flex: 1,
                background: "rgba(255,255,255,0.8)",
              }}
            />
            <div
              className="shrink-0 rounded-full"
              style={{
                width: "5px",
                height: "5px",
                background: "rgba(255,255,255,0.8)",
              }}
            />
          </div>
        </div>
      </div>

    </div>

    {/* ── Blurred Logo Decoration — poza hero divem, nad Work section ── */}
    <LogoParallax />

    <WorkSection />
    <SectionDivider />
    <ExperienceSection />
    <Footer />
    </div>
  );
}
