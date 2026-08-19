"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "85vh",
        backgroundColor: "#f5f5f5",
        backgroundImage: "url('/home.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#2C2C2C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "60px 20px",
        position: "relative",
      }}
    >
      {/* שכבה לבנה עדינה כדי שהטקסט יהיה ברור */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(255,255,255,0.15)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >

        <p
          style={{
            marginTop: "455px",
            color: "#B8860B",
            maxWidth: "400px",
            fontSize: "1.1rem",
          }}
        >
          תכשיטי יוקרה בסטנדרט אחר
        </p>
        <br />
        <br />

        <Link
          href="/collections"
          style={{
            marginTop: "45px",
            background: "transparent",
            color: "#B8860B",
            border: "1px solid #B8860B",
            padding: "14px 38px",
            cursor: "pointer",
            fontSize: "16px",
            letterSpacing: "2px",
            transition: "all 0.3s ease",
            backdropFilter: "blur(4px)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#B8860B";
            e.currentTarget.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#B8860B";
          }}
        >
          לצפייה בקולקציה
        </Link>
      </div>
    </section>
  );
}