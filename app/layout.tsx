import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Navbar />
        {children}

    <footer
  style={{
    textAlign: "center",
    padding: "30px 20px",
    color: "#8B6B2E",
    fontSize: "13px",
    borderTop: "1px solid rgba(212,175,55,0.3)",
    marginTop: "40px",
    letterSpacing: "1px",
    background: "linear-gradient(to bottom, rgba(255,255,255,0.95), #F8F4EC)",
  }}
>
  © כל הזכויות שמורות T.A
</footer>
      </body>
    </html>
  );
}