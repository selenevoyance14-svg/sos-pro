import { ImageResponse } from "next/og";

export const alt = "SOS-Pro.fr — les bons réflexes avant d’appeler";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", color: "white", background: "linear-gradient(135deg, #020617, #7f1d1d)" }}>
      <div style={{ display: "flex", fontSize: 34, fontWeight: 800, color: "#fca5a5" }}>GUIDES GRATUITS · URGENCES</div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 86, fontWeight: 900, letterSpacing: "-4px" }}>SOS<span style={{ color: "#facc15" }}>Pro</span>.fr</div>
      <div style={{ display: "flex", marginTop: 24, maxWidth: 950, fontSize: 44, lineHeight: 1.2 }}>Les bons réflexes avant d’appeler un professionnel</div>
    </div>, size
  );
}
