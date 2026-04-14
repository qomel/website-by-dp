import Image from "next/image";
import mockupPromed from "@/assets/mockup-promed.png";
import mockupTown from "@/assets/mockup-town.jpg";
import mockupEnergy from "@/assets/mockup-energy.jpg";

function Num({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-didot), Didot, serif",
        fontSize: "clamp(14px, 2.11vw, 32px)",
        fontWeight: 400,
        color: "#fff",
        lineHeight: 1.25,
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

function ProjectName({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
        fontSize: "clamp(24px, 4.22vw, 64px)",
        fontWeight: 400,
        color: "#fff",
        lineHeight: 1.45,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );
}

function Category({ children }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-didot), Didot, serif",
        fontSize: "clamp(16px, 2.64vw, 40px)",
        fontWeight: 400,
        color: "#fff",
        lineHeight: 1.275,
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

function LabelRow({ num, name, category, style }) {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        ...style,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Num>{num}</Num>
        <ProjectName>{name}</ProjectName>
      </div>
      <Category>{category}</Category>
    </div>
  );
}

export default function WorkSection() {
  return (
    /*
      overflow: clip — przycina wizualnie label który wychodzi poza sekcję,
      ale w przeciwieństwie do overflow:hidden NIE tworzy nowego scroll
      containera, więc position:sticky działa poprawnie.
    */
    <section
      style={{
        background: "#141414",
        width: "100%",
        position: "relative",
        overflow: "clip",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1515px",
          margin: "0 auto",
          aspectRatio: "1515 / 2188",
        }}
      >
        {/* ── Sticky WORK label ────────────────────────────────
            Umieszczony WEWNĄTRZ content diva z aspectRatio —
            jego granicą sticky jest właśnie ten div, czyli
            dokładnie cała sekcja Work.
            position:sticky + top:50vh → wyśrodkowany w pionie.
            Żaden przodek nie ma overflow:hidden → sticky działa.
        ──────────────────────────────────────────────────────── */}
        <div
          style={{
            position: "sticky",
            top: "8vh",
            height: 0,
            overflow: "visible",
            zIndex: 10,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              writingMode: "vertical-rl",
              fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
              fontSize: "clamp(32px, 4.22vw, 64px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.1)",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            WORK
          </div>
        </div>

        {/* ── 01 PRO-MED ──────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            left: "2.64%",
            top: "3.93%",
            width: "72.08%",
          }}
        >
          <Image
            src={mockupPromed}
            alt="PRO-MED project"
            width={4000}
            height={3000}
            sizes="72vw"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              display: "block",
            }}
          />
        </div>
        <LabelRow
          num="01/"
          name="PRO-MED"
          category="CLIENT"
          style={{ left: "38.68%", top: "4.20%", width: "38.09%" }}
        />

        {/* ── 02 PIXEL TOWN ───────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            left: "41.32%",
            top: "37.57%",
            width: "47.88%",
          }}
        >
          <Image
            src={mockupTown}
            alt="PIXEL TOWN project"
            width={4000}
            height={3000}
            sizes="48vw"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              display: "block",
            }}
          />
        </div>
        <LabelRow
          num="02/"
          name="PIXEL TOWN"
          category="PORTFOLIO"
          style={{ left: "42.64%", top: "37.57%", width: "52.11%" }}
        />

        {/* ── 03 ENERGY ───────────────────────────────────────── */}
        <div
          style={{
            position: "absolute",
            left: "10.63%",
            top: "67.71%",
            width: "53.47%",
          }}
        >
          <Image
            src={mockupEnergy}
            alt="ENERGY project"
            width={4000}
            height={3000}
            sizes="54vw"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              display: "block",
            }}
          />
        </div>
        <LabelRow
          num="03/"
          name="ENERGY"
          category="PORTFOLIO"
          style={{ left: "7.13%", top: "64.80%", width: "40.53%" }}
        />
      </div>
    </section>
  );
}
