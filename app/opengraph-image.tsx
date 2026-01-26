import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Alae Herrak | Full Stack Product Engineer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom right, #000000, #0a0a0a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.2,
          backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(34, 197, 94, 0.1)",
          border: "1px solid rgba(34, 197, 94, 0.2)",
          padding: "8px 20px",
          borderRadius: "50px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            width: 10,
            height: 10,
            background: "#22c55e",
            borderRadius: "50%",
          }}
        />
        <span style={{ color: "#22c55e", fontSize: 20, fontWeight: 600 }}>
          Available for Hire
        </span>
      </div>

      <h1
        style={{
          fontSize: 100,
          fontWeight: 900,
          color: "white",
          margin: 0,
          letterSpacing: "-0.05em",
        }}
      >
        Alae Herrak
      </h1>

      <p
        style={{
          fontSize: 42,
          color: "#a1a1aa",
          textAlign: "center",
          maxWidth: "900px",
          marginTop: "20px",
          lineHeight: 1.4,
        }}
      >
        Full Stack Product Engineer bridging ambiguous needs with
        high-performance systems.
      </p>

      <div style={{ display: "flex", gap: "20px", marginTop: "60px" }}>
        {["Next.js", "TypeScript", "Tauri", "PostgreSQL"].map((tech) => (
          <div
            key={tech}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "10px 24px",
              borderRadius: "12px",
              color: "white",
              fontSize: 24,
              fontWeight: 500,
            }}
          >
            {tech}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
