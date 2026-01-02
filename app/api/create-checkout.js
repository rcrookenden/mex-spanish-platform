import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { priceId } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thanks`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pay`,
    });

    return res.status(200).json({ url: session.url });
  }

  catch (err) {
    console.error("🔥 STRIPE ERROR:", err.message);
    return res.status(500).json({ error: err.message });
  }
}
