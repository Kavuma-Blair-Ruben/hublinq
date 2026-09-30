import fs from "fs";
import path from "path";
import { View, Image, Text } from "@react-pdf/renderer";

// Same asset and layout as the web Logo component (src/components/ui/Logo.tsx):
// the real cut-out icon at full color, paired with a text wordmark so the
// color works on any page background without a second logo asset.
const ICON_BUFFER = fs.readFileSync(path.join(process.cwd(), "public", "brand", "hublinq-icon.png"));
const ICON_ASPECT = 571 / 454;

export function PdfLogo({ height = 30, color = "#1c2530" }: { height?: number; color?: string }) {
  const iconHeight = height * 0.68;
  return (
    <View style={{ flexDirection: "column", alignItems: "center", gap: height * 0.06 }}>
      <Image src={ICON_BUFFER} style={{ height: iconHeight, width: iconHeight * ICON_ASPECT }} />
      <Text style={{ fontWeight: 600, fontSize: height * 0.36, color, textTransform: "uppercase" }}>Hublinq</Text>
    </View>
  );
}
