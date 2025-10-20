import CheckoutButton from '../components/CheckoutButton';

const API_BASE = 'https://dynasty-stripe-api-deploy.vercel.app';

export default function Pricing() {
  return (
    <section className="pricing grid gap-6">
      <article className="card">
        <h3>Credit Basic</h3>
        <p>Kickstart dispute workflows.</p>
        <CheckoutButton
          priceId="price_live_credit_basic"    // TODO: replace with your real live Price ID
          brand="credit"
          apiBase={API_BASE}
        />
      </article>

      <article className="card">
        <h3>Credit Premium</h3>
        <p>Priority disputes + automation.</p>
        <CheckoutButton
          priceId="price_live_credit_premium"  // TODO: replace with your real live Price ID
          brand="credit"
          apiBase={API_BASE}
        />
      </article>
    </section>
  );
}
