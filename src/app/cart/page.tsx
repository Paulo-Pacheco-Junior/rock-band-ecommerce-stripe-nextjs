"use client";

import Image from "next/image";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function CartPage() {
  const { items, removeItem, updateQty, total, clearCart } = useCart();

  if (items.length === 0)
    return (
      <div className="max-w-5xl mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Seu carrinho está vazio</h1>
        <Link
          href="/"
          className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
        >
          Voltar à loja
        </Link>
      </div>
    );

  async function handleCheckout() {
    const stripe = await stripePromise;

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items }),
    });

    if (!res.ok) {
      alert("Erro ao iniciar checkout");
      return;
    }

    const { sessionId } = await res.json();
    await stripe?.redirectToCheckout({ sessionId });
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-yellow-600">Carrinho</h1>

      <ul className="space-y-6">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 border border-yellow-300 rounded-lg p-4 shadow-sm"
          >
            <div className="relative w-full h-48 sm:w-24 sm:h-24 flex-shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
                sizes="100%"
              />
            </div>

            <div className="flex-1 w-full sm:w-auto">
              <h2 className="text-xl font-semibold text-neutral-900">
                {item.name}
              </h2>
              <p className="mt-1 text-yellow-700 font-bold text-lg">
                R${((item.price * item.quantity) / 100).toFixed(2)}
              </p>
            </div>

            <div className="flex w-full sm:w-auto justify-between sm:justify-start items-center gap-4 mt-4 sm:mt-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQty(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className={`w-8 h-8 flex justify-center items-center rounded border border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-100 transition ${
                    item.quantity <= 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label={`Diminuir quantidade de ${item.name}`}
                >
                  −
                </button>

                <span className="w-8 text-center font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => updateQty(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex justify-center items-center rounded border border-yellow-600 text-yellow-600 font-bold hover:bg-yellow-100 transition"
                  aria-label={`Aumentar quantidade de ${item.name}`}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-600 font-semibold hover:text-red-800 transition"
                aria-label={`Remover ${item.name}`}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>

      <span
        onClick={clearCart}
        className="block text-yellow-700 underline font-semibold rounded-lg transition hover:text-yellow-900 mt-4 text-end"
      >
        Esvaziar carrinho
      </span>

      <div className="mt-4 flex flex-col sm:flex-row justify-between items-center border-t border-yellow-300 pt-6 gap-4">
        <h2 className="text-2xl font-bold text-yellow-700">
          Total: R${(total / 100).toFixed(2)}
        </h2>

        <div className="flex gap-4 flex-wrap justify-center sm:justify-start">
          <Link
            href="/"
            className="inline-block bg-yellow-600 text-white px-3 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
          >
            voltar à loja
          </Link>

          <button
            onClick={handleCheckout}
            className="bg-white border border-yellow-600 text-yellow-600 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-100 hover:border-yellow-100 transition"
          >
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
