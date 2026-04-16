import Navbar from "@/components/Navbar";
import LogoParallax from "@/components/LogoParallax";
import WorkSection from "@/components/WorkSection";
import SectionDivider from "@/components/Divider";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

/* ─── Page ────────────────────────────────────────────────── */

export default function WorkPage() {
  return (
    <div style={{ position: "relative" }}>
    <div
      id="hero-section"
      className="relative w-full min-h-svh"
      style={{
        background:
          "radial-gradient(100% 100% at 50% 0%, #1F1F1F 0%, #151515 45.67%, #080808 100%)",
      }}
    >
      {/* ── Navbar ────────────────────────────────────────── */}
      <Navbar />

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
