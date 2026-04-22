'use client'

import { useEffect, useRef } from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import mockupPromed from "@/assets/mockup-promed.png";
import AboutPhotos from "@/components/AboutPhotos";
import { useLang } from "@/components/LangContext";

/* ── Reveal hook ─────────────────────────────────────────────── */
function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.72) {
        window.removeEventListener('scroll', check)
        setTimeout(() => el.classList.add('ab-visible'), delay)
      }
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])
  return ref
}

/* ─── Page ─────────────────────────────────────────────────── */
export default function AboutPage() {
  const { tr } = useLang()
  const whoRef      = useReveal(0)
  const whoMockRef  = useReveal(100)
  const whatRef     = useReveal(0)
  const sofarRef    = useReveal(120)
  const tech0Ref    = useReveal(0)
  const tech1Ref    = useReveal(100)
  const tech2Ref    = useReveal(200)
  const tech3Ref    = useReveal(300)
  const bgTitleRef  = useReveal(0)
  const bgP1Ref     = useReveal(80)
  const bgP2Ref     = useReveal(160)
  const bgP3Ref     = useReveal(240)

  return (
    <>
      <style>{`
        /* scroll-triggered */
        .ab-from-left  { opacity: 0; transform: translateX(-60px); transition: opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1); }
        .ab-from-right { opacity: 0; transform: translateX(60px);  transition: opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1); }
        .ab-from-below { opacity: 0; transform: translateY(36px);  transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1); }
        .ab-visible    { opacity: 1 !important; }
        .ab-from-left.ab-visible, .ab-from-right.ab-visible { transform: translateX(0) !important; }
        .ab-from-below.ab-visible { transform: translateY(0) !important; }
      `}</style>

      <div style={{ position: "relative", background: "#141414", minHeight: "100vh" }}>
        <Navbar />

        {/* ── Main content ─────────────────────────────────────── */}
        <div style={{ position: "relative", width: "100%", maxWidth: "1515px", margin: "0 auto" }}>

          {/* ── ABOUT + ME hero ─── fade in down jak DOMINIK/PAZUREK */}
          <div style={{ position: "relative", height: "clamp(400px, 66vh, 680px)" }}>

            <h1
              className="anim-fade-in-down"
              style={{
                position:      "absolute",
                left:          "clamp(40px, 9.39vw, 142px)",
                top:           "clamp(140px, 31.8vh, 312px)",
                fontFamily:    "var(--font-dela-gothic), 'Dela Gothic One', cursive",
                fontSize:      "clamp(64px, 8.45vw, 128px)",
                fontWeight:    400,
                lineHeight:    1.45,
                color:         "#fff",
                margin:        0,
                animationDelay: "0.2s",
              }}
            >
              ABOUT
            </h1>

            <span
              className="anim-fade-in-down"
              style={{
                position:      "absolute",
                left:          "clamp(300px, 43.52vw, 658px)",
                top:           "calc(clamp(140px, 31.8vh, 312px) + clamp(64px, 8.45vw, 128px) * 1.45)",
                fontFamily:    "var(--font-didot), Didot, serif",
                fontSize:      "clamp(28px, 3.17vw, 48px)",
                fontWeight:    400,
                lineHeight:    1.27,
                color:         "#fff",
                animationDelay: "0.38s",
              }}
            >
              ME
            </span>

            {/* Personal photo placeholder */}
            <div
              className="anim-fade-in"
              style={{
                position:      "absolute",
                right:         "clamp(40px, 7vw, 107px)",
                top:           "clamp(160px, 45.8vh, 450px)",
                width:         "clamp(200px, 28.97vw, 438px)",
                aspectRatio:   "438 / 560",
                background:    "#2a2a2a",
                borderRadius:  "4px",
                animationDelay: "0.3s",
              }}
            />
          </div>

          {/* ── WHO — from left ───────────────────────────────── */}
          <div
            ref={whoRef}
            className="ab-from-left"
            style={{
              position: "absolute",
              left:     "clamp(40px, 9.39vw, 142px)",
              top:      "clamp(500px, 62.3vh, 612px)",
              width:    "clamp(280px, 36.6vw, 554px)",
            }}
          >
            <h2 style={{
              fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
              fontSize:   "clamp(32px, 4.22vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.45,
              color:      "#fff",
              margin:     "0 0 12px 0",
            }}>
              WHO.
            </h2>
            <p style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize:   "clamp(16px, 2.11vw, 32px)",
              lineHeight: "1.19",
              color:      "rgba(255,255,255,0.8)",
              margin:     0,
            }}>
              {tr.about.who.text}
            </p>
          </div>

          {/* ── PRO-MED mockup — from left ────────────────────── */}
          <div
            ref={whoMockRef}
            className="ab-from-left"
            style={{
              position:     "absolute",
              left:         "clamp(40px, 4.49vw, 68px)",
              top:          "clamp(600px, 119.4vh, 1171px)",
              width:        "clamp(280px, 44.55vw, 675px)",
              borderRadius: "10px",
              overflow:     "hidden",
            }}
          >
            <Image src={mockupPromed} alt="PRO-MED mockup" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>

          {/* ── WHAT I DO — from right ────────────────────────── */}
          <div
            ref={whatRef}
            className="ab-from-right"
            style={{
              position:  "absolute",
              right:     "clamp(40px, 7.06vw, 107px)",
              top:       "clamp(700px, 114.5vh, 1124px)",
              width:     "clamp(260px, 37.88vw, 573px)",
              textAlign: "right",
            }}
          >
            <h2 style={{
              fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
              fontSize:   "clamp(32px, 4.22vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.45,
              color:      "#fff",
              margin:     "0 0 12px 0",
            }}>
              WHAT I DO.
            </h2>
            <p style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize:   "clamp(16px, 2.11vw, 32px)",
              lineHeight: "1.19",
              color:      "rgba(255,255,255,0.8)",
              margin:     0,
            }}>
              {tr.about.whatIDo.text}
            </p>
          </div>

          {/* ── So far — from right ───────────────────────────── */}
          <div
            ref={sofarRef}
            className="ab-from-right"
            style={{
              position:  "absolute",
              right:     "clamp(40px, 7.06vw, 107px)",
              top:       "clamp(900px, 155.6vh, 1527px)",
              width:     "clamp(260px, 37.88vw, 573px)",
              textAlign: "right",
            }}
          >
            <p style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize:   "clamp(16px, 2.11vw, 32px)",
              lineHeight: "1.19",
              color:      "rgba(255,255,255,0.8)",
              margin:     0,
            }}>
              {tr.about.soFar.text}
            </p>
          </div>

          {/* ── Tech stack — każda ikonka osobno fade in ─────── */}
          <div style={{
            position:      "absolute",
            left:          "50%",
            top:           "clamp(1100px, 191.3vh, 1877px)",
            transform:     "translateX(-50%)",
            display:       "flex",
            flexDirection: "row",
            alignItems:    "center",
            gap:           "clamp(40px, 6.94vw, 105px)",
          }}>
            {[
              { name: "Tailwind CSS", src: "/tailwindcss.svg", ref: tech0Ref },
              { name: "Next.js",      src: "/nextjs.svg",      ref: tech1Ref },
              { name: "Figma",        src: "/figma.svg",       ref: tech2Ref },
              { name: "Django",       src: "/django.svg",      ref: tech3Ref },
            ].map(({ name, src, ref }) => (
              <div
                key={name}
                ref={ref}
                className="ab-from-below"
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <Image
                  src={src} alt={name} width={192} height={192}
                  style={{ width: "clamp(48px, 12.7vw, 192px)", height: "clamp(48px, 12.7vw, 192px)", objectFit: "contain", filter: "brightness(0) invert(1)" }}
                />
              </div>
            ))}
          </div>

        </div>

        {/* ── BACKGROUND ──────────────────────────────────────────── */}
        <div style={{
          width:         "100%",
          maxWidth:      "1515px",
          margin:        "0 auto",
          paddingTop:    "clamp(600px, 160vh, 2236px)",
          paddingBottom: "clamp(60px, 8vw, 120px)",
          paddingLeft:   "clamp(40px, 4.22vw, 64px)",
          paddingRight:  "clamp(40px, 4.22vw, 64px)",
          boxSizing:     "border-box",
        }}>

          <h2
            ref={bgTitleRef}
            className="ab-from-below"
            style={{
              fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
              fontSize:   "clamp(32px, 4.22vw, 64px)",
              fontWeight: 400,
              lineHeight: 1.45,
              color:      "#fff",
              margin:     "0 0 clamp(16px, 3.1vw, 47px) 0",
            }}
          >
            BACKGROUND.
          </h2>

          <p
            ref={bgP1Ref}
            className="ab-from-below"
            style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize:   "clamp(18px, 2.64vw, 40px)",
              lineHeight: "1.175",
              color:      "#fff",
              margin:     "0 0 clamp(16px, 3.1vw, 47px) 0",
              maxWidth:   "1398px",
            }}
          >
            {tr.about.background.p1Title}<br />
            {tr.about.background.p1Sub}<br />
            <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2.11vw, 32px)" }}>
              {tr.about.background.p1Body}
            </span>
          </p>

          <p
            ref={bgP2Ref}
            className="ab-from-below"
            style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize:   "clamp(18px, 2.64vw, 40px)",
              fontWeight: 700,
              lineHeight: "1.175",
              color:      "#fff",
              margin:     "0 0 clamp(16px, 3.1vw, 47px) 0",
              maxWidth:   "1199px",
            }}
          >
            {tr.about.background.p2Title}<br />
            {tr.about.background.p2Sub}<br />
            <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2.11vw, 32px)" }}>
              {tr.about.background.p2Body}
            </span>
          </p>

          <p
            ref={bgP3Ref}
            className="ab-from-below"
            style={{
              fontFamily: "var(--font-roboto), Roboto, sans-serif",
              fontSize:   "clamp(14px, 2.11vw, 32px)",
              lineHeight: "1.175",
              color:      "#fff",
              margin:     0,
              maxWidth:   "1199px",
            }}
          >
            {tr.about.background.p3}
          </p>
        </div>

        {/* ── Photos + SIDE QUEST ─────────────────────────────────── */}
        <AboutPhotos />

        <Footer />
      </div>
    </>
  );
}
