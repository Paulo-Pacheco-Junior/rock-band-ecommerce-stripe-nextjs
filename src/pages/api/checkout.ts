import { NextApiRequest, NextApiResponse } from "next";
import stripe from "../../lib/stripe";

const products = [
  {
    id: "",
    name: "",
    description: "",
    image: "",
    price: 0,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { productId } = req.body;

  const product = products.find((p) => p.id === productId);

  if (!product)
    return res.status(404).json({ error: "Produto não encontrado" });

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "brl",
            product_data: {
              name: product.name,
              description: product.description,
              images: [product.image],
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    res.status(200).json({ sessionId: session.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao criar sessão Stripe" });
  }
}
