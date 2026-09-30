import Image from "next/image";

// The real Hublinq icon (public/brand/hublinq-icon.png — cut from the
// designed mark supplied by the user, background removed so it drops
// cleanly onto any surface) rendered at full color everywhere, paired
// with a CSS/font wordmark so light vs. dark surfaces are handled by
// `color`, not by a second baked-in image asset.
const ICON_ASPECT = 571 / 454;

export function Logo({ className, height = 44, white = false }: { className?: string; height?: number; white?: boolean }) {
  const iconHeight = Math.round(height * 0.86);
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: height * 0.14, height }}>
      <Image
        src="/brand/hublinq-icon.png"
        alt=""
        height={iconHeight}
        width={Math.round(iconHeight * ICON_ASPECT)}
        style={{ height: iconHeight, width: "auto", objectFit: "contain" }}
        unoptimized
        priority
      />
      <span
        style={{
          fontFamily: "var(--font-display), Georgia, serif",
          fontWeight: 600,
          fontSize: height * 0.52,
          letterSpacing: "0.01em",
          color: white ? "#ffffff" : "#1c2530",
          lineHeight: 1,
          textTransform: "uppercase",
        }}
      >
        Hublinq
      </span>
    </span>
  );
}
