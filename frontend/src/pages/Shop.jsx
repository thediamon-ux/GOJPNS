import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Minus, Plus, CreditCard, Smartphone, DollarSign, Truck, Leaf, ShieldCheck } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { Diamond } from "../components/Motifs";
import { API } from "../data";

const HIGHLIGHTS = [
  "16 intentional botanicals",
  "Caffeine free & all natural",
  "Small batch, ethically sourced",
  "Made with love & purpose",
];

const PAY_METHODS = [
  { icon: Smartphone, label: "Apple Pay" },
  { icon: CreditCard, label: "Card" },
  { icon: DollarSign, label: "Cash App" },
];

export default function Shop() {
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${API}/shop/product`).then(({ data }) => setProduct(data)).catch(() => {});
  }, []);

  const price = product ? product.amount / 100 : null;
  const currency = product?.currency?.toUpperCase() || "USD";

  const checkout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/payments/checkout`, {
        lookup_key: "herbal_blend_tin", quantity: qty, origin_url: window.location.origin,
      });
      window.location.href = data.checkout_url;
    } catch {
      toast.error("Could not start checkout. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div data-testid="shop-page">
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full bg-vividp/40 blur-[170px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[460px] h-[460px] rounded-full bg-emerald-900/40 blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-3 border border-gold/40 pointer-events-none" />
              <img src="/jewells-herbal-blend.jpg" alt="Jewells Herbal Magic Blend"
                className="relative w-full object-cover shadow-2xl shadow-black/60" />
            </div>
          </Reveal>

          {/* DETAILS */}
          <Reveal delay={0.12}>
            <Overline className="mb-6">Shop the Tea</Overline>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.98] mb-4" data-testid="shop-heading">
              Jewells <span className="italic gold-shimmer">Herbal Magic</span> Blend
            </h1>
            <p className="text-lightgray leading-relaxed max-w-md mb-6">
              A powerful handcrafted herbal tea — rooted in nature, made to nourish, heal &amp; restore. Body · Mind · Spirit.
            </p>

            <div className="flex items-end gap-3 mb-8" data-testid="shop-price">
              {price !== null ? (
                <span className="font-serif text-5xl gold-shimmer">${price.toFixed(2)}</span>
              ) : (
                <span className="font-serif text-4xl text-lightgray">—</span>
              )}
              <span className="text-xs uppercase tracking-[0.2em] text-lightgray mb-2">{currency} · 2 oz tin</span>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm text-white/90">
                  <Diamond size={13} /> {h}
                </li>
              ))}
            </ul>

            {/* QUANTITY */}
            <div className="flex items-center gap-6 mb-8">
              <span className="text-xs uppercase tracking-[0.2em] text-gold">Quantity</span>
              <div className="flex items-center border border-gold/30">
                <button data-testid="qty-decrease" onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors" aria-label="Decrease quantity">
                  <Minus size={16} />
                </button>
                <span data-testid="qty-value" className="w-12 text-center font-serif text-xl">{qty}</span>
                <button data-testid="qty-increase" onClick={() => setQty((q) => Math.min(50, q + 1))}
                  className="w-11 h-11 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors" aria-label="Increase quantity">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button data-testid="checkout-btn" onClick={checkout} disabled={loading || price === null}
              className="btn-shine group inline-flex items-center gap-3 bg-gold text-void px-10 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50 mb-6">
              {loading ? "Redirecting…" : "Checkout"}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              {PAY_METHODS.map((m) => (
                <span key={m.label} className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-lightgray border border-gold/25 px-3 py-2">
                  <m.icon size={14} color="#D4AF37" strokeWidth={1.5} /> {m.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-lightgray">
              <span className="inline-flex items-center gap-2"><Truck size={14} color="#D4AF37" strokeWidth={1.5} /> Ships within the US</span>
              <span className="inline-flex items-center gap-2"><Leaf size={14} color="#D4AF37" strokeWidth={1.5} /> Caffeine free</span>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-lightgray/70">
              <ShieldCheck size={14} color="#D4AF37" strokeWidth={1.5} /> Secure checkout by Stripe
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="border border-gold/20 p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-emerald-900/15 blur-[100px]" />
            <p className="relative font-serif text-2xl md:text-3xl max-w-2xl mx-auto leading-snug">
              Want the full story of the blend and all 16 botanicals?
            </p>
            <Link to="/divisions/self-care" className="relative mt-6 inline-flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">
              Explore the Self-Care world <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
