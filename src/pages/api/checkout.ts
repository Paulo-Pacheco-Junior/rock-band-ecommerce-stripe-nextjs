import stripe from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Items inválidos" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items
        .filter((item) => item.quantity > 0)
        .map((item) => ({
          price_data: {
            currency: "brl",
            product_data: {
              name: item.name,
              images: [item.image || "https://via.placeholder.com/300"],
            },
            unit_amount: Math.round(item.price),
          },
          quantity: item.quantity,
        })),
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cart`,
    });

    return res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.error("Erro ao criar checkout:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}
