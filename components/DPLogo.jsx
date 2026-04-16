import Image from "next/image";

// size can be a number (px) or CSS string e.g. "clamp(36px, 3vw, 60px)"
export default function DPLogo({ size = 48, opacity = 1 }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        opacity,
        flexShrink: 0,
      }}
    >
      <Image
        src="/dp.svg"
        alt="dp logo"
        fill
        priority
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
