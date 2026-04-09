export default function DPLogo({ size = 48, color = "#EBEBEB" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* d — vertical stem (center-left, full height) */}
      <rect x="32.15" y="0" width="16.11" height="76.52" fill={color} />
      {/* d — bowl (lower-left extension, connected to stem) */}
      <rect x="0" y="46.77" width="48.26" height="29.75" fill={color} />

      {/* p — vertical stem (center-right, full height) */}
      <rect x="51.66" y="23.38" width="16.11" height="76.62" fill={color} />
      {/* p — bowl (upper-right extension, connected to stem) */}
      <rect x="51.66" y="23.37" width="48.34" height="29.76" fill={color} />
    </svg>
  );
}
