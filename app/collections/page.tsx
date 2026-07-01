import Link from "next/link";

export default function Collections() {
  const categories = [
    { name: "טבעות", slug: "rings", icon: "💍" },
    { name: "שרשראות", slug: "necklaces", icon: "📿" },
    { name: "שעונים", slug: "watches", icon: "⌚" },
    { name: "עגילים", slug: "earrings", icon: "💎" },
    { name: "צמידים", slug: "bracelets", icon: "✨" },
    { name: "סטים לכלות", slug: "bridal_sets", icon: "👰" },
  ];

  return (
    <div className="container">
      <h1>קולקציות</h1>

      <div className="cardGrid">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/collections/${category.slug}`}
            className="card"
          >
            {category.icon} {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}