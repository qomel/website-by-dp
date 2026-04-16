/* Injected as inline <style> — bypasses Tailwind/Turbopack CSS pipeline */
export default function HoverStyles() {
  return (
    <style>{`
      /* ── Navbar links ─────────────────────────────────────── */
      .nav-link {
        position: relative;
        color: rgba(255, 255, 255, 0.55);
        transition: color 0.25s ease;
      }
      .nav-link:hover {
        color: rgba(255, 255, 255, 1);
      }
      .nav-link-active {
        color: rgba(255, 255, 255, 1);
      }
      /* kropka pod aktywnym linkiem */
      .nav-link-active::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: var(--dot-size, 4px);
        height: var(--dot-size, 4px);
        transition: width 0.2s ease, height 0.2s ease;
        border-radius: 50%;
        background: currentColor;
      }

      /* ── Social icon hover ────────────────────────────────── */
      .social-icon-link {
        display: block;
        flex-shrink: 0;
        transition:
          transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
          filter    0.3s ease,
          opacity   0.25s ease;
      }
      .social-icon-link:hover {
        transform: translateY(-5px);
        filter: drop-shadow(0 0 7px rgba(255, 255, 255, 0.55));
        opacity: 1 !important;
      }

    `}</style>
  );
}
