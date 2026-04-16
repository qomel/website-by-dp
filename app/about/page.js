import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import mockupPromed from "@/assets/mockup-promed.png";
import AboutPhotos from "@/components/AboutPhotos";

/* ─── Page ─────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <div style={{ position: "relative", background: "#141414", minHeight: "100vh" }}>

      <Navbar />

      {/* ── Main content ─────────────────────────────────────── */}
      <div style={{
        position: "relative",
        width: "100%",
        maxWidth: "1515px",
        margin: "0 auto",
      }}>

        {/* ── ABOUT + ME hero ───────────────────────────────── */}
        <div style={{ position: "relative", height: "clamp(400px, 66vh, 680px)" }}>

          {/* ABOUT */}
          <h1 style={{
            position:   "absolute",
            left:       "clamp(40px, 9.39vw, 142px)",
            top:        "clamp(140px, 31.8vh, 312px)",
            fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
            fontSize:   "clamp(64px, 8.45vw, 128px)",
            fontWeight: 400,
            lineHeight: 1.45,
            color:      "#fff",
            margin:     0,
          }}>
            ABOUT
          </h1>

          {/* ME */}
          <span style={{
            position:   "absolute",
            left:       "clamp(300px, 43.52vw, 658px)",
            top:        "calc(clamp(140px, 31.8vh, 312px) + clamp(64px, 8.45vw, 128px) * 1.45)",
            fontFamily: "var(--font-didot), Didot, serif",
            fontSize:   "clamp(28px, 3.17vw, 48px)",
            fontWeight: 400,
            lineHeight: 1.27,
            color:      "#fff",
          }}>
            ME
          </span>

          {/* Personal photo placeholder (no photo yet) */}
          <div style={{
            position:     "absolute",
            right:        "clamp(40px, 7vw, 107px)",
            top:          "clamp(160px, 45.8vh, 450px)",
            width:        "clamp(200px, 28.97vw, 438px)",
            aspectRatio:  "438 / 560",
            background:   "#2a2a2a",
            borderRadius: "4px",
          }} />

        </div>

        {/* ── WHO ───────────────────────────────────────────── */}
        <div style={{
          position: "absolute",
          left:     "clamp(40px, 9.39vw, 142px)",
          top:      "clamp(500px, 62.3vh, 612px)",
          width:    "clamp(280px, 36.6vw, 554px)",
        }}>
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
            I'm Dominik — a frontend developer and web designer based in PL/Gliwice. I design in Figma, reach for Tailwind CSS on every project, and I'm currently getting serious about Next.js.
          </p>
        </div>

        {/* ── PRO-MED mockup — left side ────────────────────── */}
        <div style={{
          position:     "absolute",
          left:         "clamp(40px, 4.49vw, 68px)",
          top:          "clamp(600px, 119.4vh, 1171px)",
          width:        "clamp(280px, 44.55vw, 675px)",
          borderRadius: "10px",
          overflow:     "hidden",
        }}>
          <Image src={mockupPromed} alt="PRO-MED mockup" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* ── WHAT I DO ─────────────────────────────────────── */}
        <div style={{
          position:  "absolute",
          right:     "clamp(40px, 7.06vw, 107px)",
          top:       "clamp(700px, 114.5vh, 1124px)",
          width:     "clamp(260px, 37.88vw, 573px)",
          textAlign: "right",
        }}>
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
            Design and code, both. Layouts, components, the whole thing. My current stack is Figma + Next.js — I go from wireframe to deployed product without handing things off.
          </p>
        </div>

        {/* ── So far ────────────────────────────────────────── */}
        <div style={{
          position:  "absolute",
          right:     "clamp(40px, 7.06vw, 107px)",
          top:       "clamp(900px, 155.6vh, 1527px)",
          width:     "clamp(260px, 37.88vw, 573px)",
          textAlign: "right",
        }}>
          <p style={{
            fontFamily: "var(--font-roboto), Roboto, sans-serif",
            fontSize:   "clamp(16px, 2.11vw, 32px)",
            lineHeight: "1.19",
            color:      "rgba(255,255,255,0.8)",
            margin:     0,
          }}>
            So far: three client projects, several prototypes, and a thesis e-commerce project for a medical company built with Tailwind + Django as part of a team. Still figuring out where I want to go next — open to freelance and full-time.
          </p>
        </div>

        {/* ── Tech stack ────────────────────────────────────── */}
        <div style={{
          position:       "absolute",
          left:           "50%",
          top:            "clamp(1100px, 191.3vh, 1877px)",
          transform:      "translateX(-50%)",
          display:        "flex",
          flexDirection:  "row",
          alignItems:     "center",
          gap:            "clamp(40px, 6.94vw, 105px)",
        }}>
          {[
            { name: "Tailwind CSS", src: "/tailwindcss.svg" },
            { name: "Next.js",      src: "/nextjs.svg"      },
            { name: "Figma",        src: "/figma.svg"       },
            { name: "Django",       src: "/django.svg"      },
          ].map(({ name, src }) => (
            <div key={name} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image
                src={src}
                alt={name}
                width={192}
                height={192}
                style={{ width: "clamp(48px, 12.7vw, 192px)", height: "clamp(48px, 12.7vw, 192px)", objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
          ))}
        </div>

      </div>

      {/* ── BACKGROUND — full width section ────────────────────── */}
      <div style={{
        width:          "100%",
        maxWidth:       "1515px",
        margin:         "0 auto",
        paddingTop:     "clamp(600px, 160vh, 2236px)",
        paddingBottom:  "clamp(60px, 8vw, 120px)",
        paddingLeft:    "clamp(40px, 4.22vw, 64px)",
        paddingRight:   "clamp(40px, 4.22vw, 64px)",
        boxSizing:      "border-box",
      }}>
        <h2 style={{
          fontFamily: "var(--font-dela-gothic), 'Dela Gothic One', cursive",
          fontSize:   "clamp(32px, 4.22vw, 64px)",
          fontWeight: 400,
          lineHeight: 1.45,
          color:      "#fff",
          margin:     "0 0 clamp(16px, 3.1vw, 47px) 0",
        }}>
          BACKGROUND.
        </h2>

        <p style={{
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontSize:   "clamp(18px, 2.64vw, 40px)",
          lineHeight: "1.175",
          color:      "#fff",
          margin:     "0 0 clamp(16px, 3.1vw, 47px) 0",
          maxWidth:   "1398px",
        }}>
          B.Eng. Computer Science — Frontend specialization<br />
          Mertio WSB, Chorzów /2026<br />
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2.11vw, 32px)" }}>
            Three years of frontend-focused curriculum — HTML, CSS, JavaScript, the usual stack. Capped with a team e-commerce project for a medical client.
          </span>
        </p>

        <p style={{
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontSize:   "clamp(18px, 2.64vw, 40px)",
          fontWeight: 700,
          lineHeight: "1.175",
          color:      "#fff",
          margin:     "0 0 clamp(16px, 3.1vw, 47px) 0",
          maxWidth:   "1199px",
        }}>
          Game Design — currently studying<br />
          TEB Edukacja /2026<br />
          <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.7)", fontSize: "clamp(14px, 2.11vw, 32px)" }}>
            Theory, emotion-driven design, Unity and Unreal in practice. Feeds directly into what I build as a hobby.
          </span>
        </p>

        <p style={{
          fontFamily: "var(--font-roboto), Roboto, sans-serif",
          fontSize:   "clamp(14px, 2.11vw, 32px)",
          lineHeight: "1.175",
          color:      "#fff",
          margin:     0,
          maxWidth:   "1199px",
        }}>
          IT Technical School — before all of that.
        </p>
      </div>

      {/* ── Photos + SIDE QUEST ─────────────────────────────────── */}
      <AboutPhotos />

      <Footer />
    </div>
  );
}
