"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export default function ProductCard({ product, priority }: ProductCardProps) {
  const { addItem } = useCart();
  const router = useRouter();

  function handleAddToCart() {
    addItem(product);
    router.push("/cart");
  }

  return (
    <div className="border border-yellow-600 border-0_5 p-4 rounded shadow-sm flex flex-col">
      <div className="relative w-full h-96 mb-4">
        <Image
          src={product.image ?? "/placeholder.png"}
          alt={product.name}
          fill
          className="object-contain"
          sizes="100%"
          priority={priority}
        />
      </div>

      <h2 className="font-bold mb-1 text-neutral-900">{product.name}</h2>

      <p className="whitespace-pre-line text-neutral-900 text-sm mb-4">
        {product.description}
      </p>

      <button
        onClick={handleAddToCart}
        className="bg-white text-neutral-900 font-semibold py-2 mb-2 rounded hover:bg-gray-300 transition"
      >
        Comprar por R$ {product.price / 100}
      </button>
      <button
        onClick={handleAddToCart}
        className="bg-white text-neutral-900 font-semibold py-2 rounded hover:bg-gray-300 transition"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
}
