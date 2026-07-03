'use client'

import Image from "next/image";
import { useEffect, useRef } from "react";
import mockupPromed from "@/assets/mockup-promed.jpg";
import mockupEnergy from "@/assets/mockup-energy.jpg";
import { useLang } from "./LangContext";

/* ── Reveal hook ───────────────────────────────────────────── */
// Odpala gdy 55% wysokości elementu LUB 400px (co mniejsze) jest widoczne.
// Małe elementy (labele ~50px) → odpalają przy ~28px widocznych.
// Duże elementy (mockupy ~800px) → odpalają przy ~400px widocznych.
function useReveal(triggerDelay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return

    const check = () => {
      const rect          = el.getBoundingClientRect()
      const visibleTop    = Math.max(rect.top, 0)
      const visibleBottom = Math.min(rect.bottom, window.innerHeight)
      const visiblePx     = Math.max(visibleBottom - visibleTop, 0)
      const threshold     = Math.min(rect.height * 0.55, 400)

      if (visiblePx >= threshold) {
        window.removeEventListener('scroll', check)
        setTimeout(() => el.classList.add('work-visible'), triggerDelay)
      }
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
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
  const ref = useReveal(180)
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

function useMockupReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => {
      const rect          = el.getBoundingClientRect()
      const visibleTop    = Math.max(rect.top, 0)
      const visibleBottom = Math.min(rect.bottom, window.innerHeight)
      const visiblePx     = Math.max(visibleBottom - visibleTop, 0)
      const threshold     = Math.min(rect.height * 0.55, 400)
      if (visiblePx >= threshold) {
        el.classList.add('work-visible')
        window.removeEventListener('scroll', check)
      }
    }
    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])
  return ref
}

function MockupCard({ src, alt, sizes, style, delay = 0, from = 'left', href }) {
  const ref = useMockupReveal()
  const image = (
    <Image
      src={src}
      alt={alt}
      width={4000}
      height={3000}
      sizes={sizes}
      style={{ width: "100%", height: "auto", borderRadius: "10px", display: "block" }}
    />
  )
  return (
    <div
      ref={ref}
      className={`work-reveal-x work-reveal-x--${from}`}
      style={{ position: "absolute", transitionDelay: `${delay}ms`, ...style }}
    >
      {href
        ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>{image}</a>
        : image}
    </div>
  )
}

function MockupPlaceholder({ style, delay = 0, from = 'right', href }) {
  const ref = useMockupReveal()
  const inner = (
    <div style={{ width: "100%", aspectRatio: "4/3", background: "#1e1e1e", borderRadius: "10px" }} />
  )
  return (
    <div
      ref={ref}
      className={`work-reveal-x work-reveal-x--${from}`}
      style={{ position: "absolute", transitionDelay: `${delay}ms`, ...style }}
    >
      {href
        ? <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>{inner}</a>
        : inner}
    </div>
  )
}

/* ── Section ───────────────────────────────────────────────── */
export default function WorkSection() {
  const { tr } = useLang()
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
            fontSize:    "clamp(16px, 2vw, 38px)",
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
          <MockupCard src={mockupPromed} alt="PRO-MED project"   sizes="72vw" from="left"  href="https://www.promed-raciborz.pl/"    style={{ left: "2.64%",  top: "3.93%",  width: "72.08%" }} />
          <LabelRow   num="01/" name="PRO-MED"   category={tr.work.client}    delay={120} style={{ left: "38.68%", top: "4.20%",  width: "38.09%" }} />

          {/* ── 02 VIPPRINT ── */}
          <MockupPlaceholder                                       from="right" href="https://vipprint-pl.vercel.app/"              style={{ left: "41.32%", top: "37.57%", width: "47.88%" }} />
          <LabelRow   num="02/" name="VIPPRINT"  category={tr.work.portfolio} delay={120} style={{ left: "42.64%", top: "37.57%", width: "52.11%" }} />

          {/* ── 03 ENERGY ── */}
          <MockupCard src={mockupEnergy} alt="ENERGY project"    sizes="54vw" from="left"  href="https://github.com/qomel/RedBull-SP" style={{ left: "10.63%", top: "67.71%", width: "53.47%" }} />
          <LabelRow   num="03/" name="ENERGY"    category={tr.work.portfolio} delay={120} style={{ left: "7.13%",  top: "64.80%", width: "40.53%" }} />

        </div>
      </section>
    </>
  )
}
