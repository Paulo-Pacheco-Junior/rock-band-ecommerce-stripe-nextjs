import ProductCard from "../components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index === 0}
        />
      ))}
    </main>
  );
}
