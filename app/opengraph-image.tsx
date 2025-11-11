import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Foody - Discover Amazing Recipes";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background:
            "linear-gradient(135deg, #14B8A6 0%, #06B6D4 50%, #3B82F6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui",
        }}
      >
        <div style={{ fontSize: 80, fontWeight: "bold", marginBottom: 20 }}>
          🍳 Foody
        </div>
        <div style={{ fontSize: 40, fontWeight: "normal", opacity: 0.9 }}>
          Discover Amazing Recipes
        </div>
        <div style={{ fontSize: 30, marginTop: 20, opacity: 0.8 }}>
          From Around the World
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
