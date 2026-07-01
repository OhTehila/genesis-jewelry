"use client";

import { use, useState } from "react";
import Image from "next/image";

const images: Record<string, string[]> = {
  rings: [
    "/jewelry/rings/ring1.jpg",
    "/jewelry/rings/ring2.jpg",
  ],
  necklaces: [
    "/jewelry/necklaces/necklace1.png",
    "/jewelry/necklaces/necklace2.png",
    "/jewelry/necklaces/necklace3.png",
  ],
  watches: [
    "/jewelry/watches/watch1.jpg",
  ],
  earrings: [
    "/jewelry/earrings/earring1.jpg",
    "/jewelry/earrings/earring2.png",
    "/jewelry/earrings/earring3.png",
    "/jewelry/earrings/earring4.png",
    "/jewelry/earrings/earring5.jpeg",
    "/jewelry/earrings/earring6.png",
    "/jewelry/earrings/earring7.png",
    "/jewelry/earrings/earring8.png",
    "/jewelry/earrings/earring9.png",
    "/jewelry/earrings/earring10.png",
    "/jewelry/earrings/earring11.png",
    "/jewelry/earrings/earring12.png",
    "/jewelry/earrings/earring13.jpeg",
  ],
  bracelets: [
    "/jewelry/bracelets/bracelet1.png",
    "/jewelry/bracelets/bracelet2.png",
  ],
  bridal_sets: [
  "/jewelry/bridal-sets/set1.jpg",
  "/jewelry/bridal-sets/set2.jpg",
  "/jewelry/bridal-sets/set3.jpg",
],
};

const titles: Record<string, string> = {
  rings: "טבעות",
  necklaces: "שרשראות",
  watches: "שעונים",
  earrings: "עגילים",
  bracelets: "צמידים",
  bridal_sets: "סטים לכלות",
};

export default function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categoryImages = images[category] || [];

  return (
    <div
      style={{
        padding: "60px 40px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "40px",
          color: "#B8860B",
          fontWeight: 300,
        }}
      >
        {titles[category]}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {categoryImages.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            style={{
              background: "#fff",
              border: "1px solid #ececec",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            }}
          >
            <Image
              src={image}
              alt={`תכשיט ${index + 1}`}
              width={400}
              height={400}
              style={{
                width: "100%",
                height: "320px",
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: "pointer",
          }}
        >
          <Image
            src={selectedImage}
            alt="תמונה מוגדלת"
            width={900}
            height={900}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </div>
  );
}