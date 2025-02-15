"use client"
import { useParams } from "next/navigation";

export default function CategoryPage() {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category; // Ensure category is a string

  const categoryMap: Record<string, string[]> = {
    "production": ["Social Media", "Film / Content"],
    "company-related": ["Company Formation", "Income Tax", "GST", "Other Services"],
    "web-services": [], // No subcategories for web services
    "graphic-design-printing-services": [], // No subcategories for graphic design & printing
  };

  return (
    <div>
      <h1>{category.replace(/-/g, " ")}</h1>
      {categoryMap[category]?.length ? (
        <ul>
          {categoryMap[category].map((sub: string) => ( // Explicitly type `sub`
            <li key={sub}>
              <a href={`/services/${category}/${sub.toLowerCase().replace(/ /g, "-")}`}>{sub}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No subcategories available.</p>
      )}
    </div>
  );
}
