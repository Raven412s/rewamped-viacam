"use client"
import { useParams } from "next/navigation";

export default function SubcategoryPage() {
  const params = useParams();
  const { category, subcategory } = params;

  return (
    <div>
      <h1>{subcategory.toString().replace("-", " ")}</h1>
      <p>Content for {subcategory.toString().replace("-", " ")} under {category.toString().replace("-", " ")}.</p>
    </div>
  );
}
