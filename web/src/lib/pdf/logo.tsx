import { Svg, Line, Circle, Text } from "@react-pdf/renderer";

// Same hub-and-spoke mark as the web Logo component (src/components/ui/Logo.tsx),
// redrawn with @react-pdf/renderer's Svg primitives since that renderer can't
// load next/image output or use CSS custom properties for the font.
export const LOGO_ASPECT = 176 / 44;

export function PdfLogo({ height = 30, color = "#1c1d22" }: { height?: number; color?: string }) {
  const width = height * LOGO_ASPECT;
  return (
    <Svg viewBox="0 0 176 44" style={{ height, width }}>
      <Line x1={22} y1={22} x2={10} y2={10} stroke={color} strokeWidth={2.75} strokeLinecap="round" />
      <Line x1={22} y1={22} x2={34} y2={10} stroke={color} strokeWidth={2.75} strokeLinecap="round" />
      <Line x1={22} y1={22} x2={22} y2={36} stroke={color} strokeWidth={2.75} strokeLinecap="round" />
      <Circle cx={10} cy={10} r={4} fill={color} />
      <Circle cx={34} cy={10} r={4} fill={color} />
      <Circle cx={22} cy={36} r={4} fill={color} />
      <Circle cx={22} cy={22} r={6.5} fill={color} />
      <Text x={47} y={31} style={{ fontWeight: 600, fontSize: 25, fill: color }}>
        Hublinq
      </Text>
    </Svg>
  );
}
