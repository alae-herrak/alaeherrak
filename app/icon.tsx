import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#090d16",
          borderRadius: "8px",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          color: "#38bdf8",
          fontSize: "17px",
          fontWeight: 800,
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          letterSpacing: "-0.05em",
        }}
      >
        AH
      </div>
    ),
    {
      ...size,
    }
  );
}
