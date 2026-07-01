"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(212,175,55,0.25)",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <img src="/L5.png" alt="Genesis" width={140} height={60} />

      <div style={{ display: "flex", gap: "25px", fontSize: "14px" ,color: "#3A3A3A",fontWeight: "500",}}>
        <Link href="/">דף הבית</Link>
        <Link href="/about">אודות</Link>
        <Link href="/collections">קולקציות</Link>
        <Link href="/services">שירותים</Link>
        <Link href="/contact">צור קשר</Link>
      </div>
    </nav>
  );
}