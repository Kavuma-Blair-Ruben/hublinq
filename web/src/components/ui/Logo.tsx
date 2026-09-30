// Hublinq wordmark: a small hub-and-spoke mark (the platform every branch
// and brand connects into) plus the name, set in the app's own display
// face so it never drifts from an external asset. Pure SVG/currentColor,
// so light/dark and the `white` prop need no separate asset to keep in sync.
const ASPECT = 176 / 44;

export function Logo({ className, height = 44, white = false }: { className?: string; height?: number; white?: boolean }) {
  const color = white ? "#ffffff" : "currentColor";
  return (
    <svg
      viewBox="0 0 176 44"
      height={height}
      width={Math.round(height * ASPECT)}
      className={className}
      style={{ height, width: "auto", maxWidth: "100%" }}
      role="img"
      aria-label="Hublinq"
    >
      <line x1="22" y1="22" x2="10" y2="10" stroke={color} strokeWidth="2.75" strokeLinecap="round" />
      <line x1="22" y1="22" x2="34" y2="10" stroke={color} strokeWidth="2.75" strokeLinecap="round" />
      <line x1="22" y1="22" x2="22" y2="36" stroke={color} strokeWidth="2.75" strokeLinecap="round" />
      <circle cx="10" cy="10" r="4" fill={color} />
      <circle cx="34" cy="10" r="4" fill={color} />
      <circle cx="22" cy="36" r="4" fill={color} />
      <circle cx="22" cy="22" r="6.5" fill={color} />
      <text x="47" y="30.5" fontFamily="var(--font-display), Georgia, serif" fontWeight={600} fontSize="25" letterSpacing="0.2" fill={color}>
        Hublinq
      </text>
    </svg>
  );
}
