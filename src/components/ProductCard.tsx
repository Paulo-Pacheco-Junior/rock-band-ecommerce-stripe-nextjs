"use client";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Image from "next/image";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

type Product = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
};

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export default function ProductCard({ product, priority }: ProductCardProps) {
  async function handleBuy() {
    const stripe = await stripePromise;

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: product.id }),
    });

    if (!res.ok) {
      alert("Erro ao iniciar compra");
      return;
    }

    const { sessionId } = await res.json();
    await stripe?.redirectToCheckout({ sessionId });
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
        onClick={handleBuy}
        className="bg-white text-neutral-900 font-semibold py-2 rounded hover:bg-gray-300 transition"
      >
        Comprar por R$ {product.price / 100}
      </button>
    </div>
  );
}
