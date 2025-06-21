import PaymentInfo from "@/components/PaymentInfo";
import ProductCard from "../components/ProductCard";
import { products } from "@/data/products";
import Header from "@/components/Header";
import HeroMessage from "@/components/HeroMessage";
import HeroBanner from "@/components/HeroBanner";
import Fans from "@/components/Fans";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <HeroMessage />
      <main
        id="produtos"
        className="max-w-5xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mb-4"
      >
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            priority={index === 0}
          />
        ))}
      </main>
      <PaymentInfo />
      <Fans />
    </>
  );
}
