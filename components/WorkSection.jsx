'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import mockupPromed from "@/assets/mockup-promed.png";
import mockupTown from "@/assets/mockup-town.jpg";
import mockupEnergy from "@/assets/mockup-energy.jpg";

/* ── Reveal hook ───────────────────────────────────────────── */
function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('work-visible'); io.disconnect() } },
      { threshold: 0.15, rootMargin: "0px 0px -18% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return ref
}

/* ── Sub-components ────────────────────────────────────────── */
function Num({ children }) {
  return (
    <span style={{
      fontFamily: "var(--font-didot), Didot, serif",
      fontSize:   "clamp(14px, 2.11vw, 32px)",
      fontWeight: 400,
      color:      "#fff",
      lineHeight: 1.25,
      flexShrink: 0,
    }}>
      {children}
    </span>
  )
}

function ProjectName({ children }) {
  return (
    <span style={{
      fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
      fontSize:   "clamp(24px, 4.22vw, 64px)",
      fontWeight: 400,
      color:      "#fff",
      lineHeight: 1.45,
      whiteSpace: "nowrap",
    }}>
      {children}
    </span>
  )
}

function Category({ children }) {
  return (
    <span style={{
      fontFamily: "var(--font-didot), Didot, serif",
      fontSize:   "clamp(16px, 2.64vw, 40px)",
      fontWeight: 400,
      color:      "#fff",
      lineHeight: 1.275,
      flexShrink: 0,
    }}>
      {children}
    </span>
  )
}

function LabelRow({ num, name, category, style, delay = 0 }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="work-reveal"
      style={{
        position:       "absolute",
        display:        "flex",
        flexDirection:  "row",
        justifyContent: "space-between",
        alignItems:     "flex-start",
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Num>{num}</Num>
        <ProjectName>{name}</ProjectName>
      </div>
      <Category>{category}</Category>
    </div>
  )
}

function MockupCard({ src, alt, sizes, style, delay = 0, from = 'left' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('work-visible'); io.disconnect() } },
      { threshold: 0.15, rootMargin: "0px 0px -18% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`work-reveal-x work-reveal-x--${from}`}
      style={{
        position: "absolute",
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={4000}
        height={3000}
        sizes={sizes}
        style={{ width: "100%", height: "auto", borderRadius: "10px", display: "block" }}
      />
    </div>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function WorkSection() {
  return (
    <>
      <style>{`
        .work-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .work-reveal.work-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .work-reveal-x {
          opacity: 0;
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .work-reveal-x--left  { transform: translateX(-60px); }
        .work-reveal-x--right { transform: translateX(60px); }
        .work-reveal-x.work-visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>

      <section style={{ background: "#141414", width: "100%", position: "relative", overflow: "clip" }}>

        {/* ── Sticky WORK label — poza kontenerem, przy prawej krawędzi ekranu ── */}
        <div style={{ position: "sticky", top: "8vh", height: 0, overflow: "visible", zIndex: 10, pointerEvents: "none", userSelect: "none" }}>
          <div style={{
            position:    "absolute",
            right:       "clamp(6px, 1.2vw, 20px)",
            top:         0,
            writingMode: "vertical-rl",
            fontFamily:  "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontSize:    "clamp(11px, 1.4vw, 26px)",
            fontWeight:  400,
            color:       "rgba(255,255,255,0.1)",
            letterSpacing: "0.05em",
            lineHeight:  1,
          }}>
            WORK
          </div>
        </div>

        <div style={{ position: "relative", width: "100%", maxWidth: "1515px", margin: "0 auto", aspectRatio: "1515 / 2188" }}>

          {/* ── 01 PRO-MED ── */}
          <MockupCard src={mockupPromed} alt="PRO-MED project"    sizes="72vw" from="left"  style={{ left: "2.64%",  top: "3.93%",  width: "72.08%" }} />
          <LabelRow   num="01/" name="PRO-MED"    category="CLIENT"    delay={120} style={{ left: "38.68%", top: "4.20%",  width: "38.09%" }} />

          {/* ── 02 PIXEL TOWN ── */}
          <MockupCard src={mockupTown}   alt="PIXEL TOWN project" sizes="48vw" from="right" style={{ left: "41.32%", top: "37.57%", width: "47.88%" }} />
          <LabelRow   num="02/" name="PIXEL TOWN" category="PORTFOLIO" delay={120} style={{ left: "42.64%", top: "37.57%", width: "52.11%" }} />

          {/* ── 03 ENERGY ── */}
          <MockupCard src={mockupEnergy} alt="ENERGY project"     sizes="54vw" from="left"  style={{ left: "10.63%", top: "67.71%", width: "53.47%" }} />
          <LabelRow   num="03/" name="ENERGY"     category="PORTFOLIO" delay={120} style={{ left: "7.13%",  top: "64.80%", width: "40.53%" }} />

        </div>
      </section>
    </>
  )
}
