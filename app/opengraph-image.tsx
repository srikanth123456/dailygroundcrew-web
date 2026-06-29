import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #262261 0%, #5046E6 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#ffffff",
            textAlign: "center",
            padding: "0 80px",
          }}
        >
          DailyGroundCrew
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#F4B400",
            fontWeight: 600,
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Find &amp; Hire Skilled Construction Workers Fast
        </div>
        <div
          style={{
            fontSize: 24,
            color: "rgba(255,255,255,0.8)",
            marginTop: 28,
            textAlign: "center",
          }}
        >
          25,000+ Workers · 8,000+ Contractors · 50+ Cities in India
        </div>
      </div>
    ),
    { ...size }
  );
}
