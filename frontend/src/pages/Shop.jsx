import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Minus, Plus, CreditCard, Smartphone, DollarSign, Truck, Leaf, ShieldCheck } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { Diamond } from "../components/Motifs";
import { Seo } from "../components/Seo";
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
  const [selected, setSelected] = useState("herbal_blend_weekly");
  const [mode, setMode] = useState("once");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${API}/shop/product`).then(({ data }) => setProduct(data)).catch(() => {});
  }, []);

  const option = product?.options?.find((o) => o.lookup_key === selected) || null;
  const useSub = mode === "sub" && !!option?.sub;
  const activeKey = useSub ? option.sub.lookup_key : selected;
  const active = useSub ? option.sub : option;
  const price = active ? active.amount / 100 : null;
  const currency = product?.currency?.toUpperCase() || "USD";

  const pickSize = (key) => {
    setSelected(key);
    const opt = product?.options?.find((o) => o.lookup_key === key);
    if (opt && !opt.sub) setMode("once");
  };

  const checkout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/payments/checkout`, {
        lookup_key: activeKey, quantity: qty, origin_url: window.location.origin,
      });
      window.location.href = data.checkout_url;
    } catch {
      toast.error("Could not start checkout. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div data-testid="shop-page">
      <Seo title="Shop Jewell's Herbal Magic Blend — JPNS Enterprises" description="Order Jewell's Herbal Magic Blend online: a handcrafted, caffeine-free herbal tea. Secure checkout with Apple Pay, card, or Cash App. Ships within the US." />
      <section className="relative pt-36 lg:pt-40 pb-24">
        {/* royal-purple atmosphere, masked to fade into the page */}
        <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-br from-deepp/80 via-vividp/20 to-deepp/50" />
          <div className="absolute -top-24 right-0 w-[640px] h-[640px] rounded-full bg-vividp/45 blur-[170px]" />
          <div className="absolute top-1/4 -left-32 w-[560px] h-[560px] rounded-full bg-vividp/35 blur-[150px]" />
          <div className="absolute top-24 right-[8%] w-[520px] h-[300px] bg-[radial-gradient(closest-side,rgba(215,175,56,0.14),transparent)]" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-14 items-start">
          {/* IMAGE */}
          <Reveal className="lg:sticky lg:top-32">
            <div className="relative lux-halo">
              <div className="absolute -inset-3 border border-gold/40 pointer-events-none" />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[70%] h-24 rounded-full bg-gold/15 blur-[60px] pointer-events-none" />
              <img src="/tea-jar.jpg" alt="Jewell's Herbal Magic Blend glass jar and freshly brewed cup"
                className="relative w-full object-cover lux-edge" />
            </div>
          </Reveal>

          {/* DETAILS */}
          <Reveal delay={0.12}>
            <div className="lux-panel p-6 sm:p-8 lg:p-10" data-testid="purchase-panel">
            <Overline className="mb-6">Shop the Tea</Overline>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.98] mb-4" data-testid="shop-heading">
              Jewell's <span className="italic gold-shimmer">Herbal Magic</span> Blend
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
              <span className="text-xs uppercase tracking-[0.2em] text-lightgray mb-2">{currency}{option ? ` · ${option.size}` : ""}{useSub ? ` · every ${option.sub.interval}` : ""}</span>
            </div>

            {/* SIZE SELECTOR */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.2em] text-gold block mb-4">Choose Your Size</span>
              <div className="grid grid-cols-3 gap-px bg-gold/25 border border-gold/30" data-testid="size-selector">
                {(product?.options || []).map((o) => (
                  <button key={o.lookup_key} type="button" data-testid={`size-${o.lookup_key}`}
                    onClick={() => pickSize(o.lookup_key)}
                    className={`p-4 text-left transition-colors duration-300 ${selected === o.lookup_key ? "bg-gold text-void" : "bg-[#230f33] hover:bg-deepp"}`}>
                    <p className={`text-[10px] uppercase tracking-[0.15em] mb-1 ${selected === o.lookup_key ? "text-void/70" : "text-gold/80"}`}>{o.label}</p>
                    <p className="font-serif text-lg leading-tight">{o.size}</p>
                    <p className={`text-sm mt-1 ${selected === o.lookup_key ? "text-void" : "text-gold"}`}>${(o.amount / 100).toFixed(2)}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* PURCHASE TYPE */}
            {option?.sub && (
              <div className="mb-8" data-testid="purchase-type">
                <span className="text-xs uppercase tracking-[0.2em] text-gold block mb-4">Purchase Type</span>
                <div className="grid grid-cols-2 gap-px bg-gold/25 border border-gold/30">
                  <button type="button" data-testid="mode-once" onClick={() => setMode("once")}
                    className={`p-4 text-left transition-colors duration-300 ${!useSub ? "bg-gold text-void" : "bg-[#230f33] hover:bg-deepp"}`}>
                    <p className={`text-[10px] uppercase tracking-[0.15em] mb-1 ${!useSub ? "text-void/70" : "text-gold/80"}`}>One-Time</p>
                    <p className="font-serif text-lg">${(option.amount / 100).toFixed(2)}</p>
                  </button>
                  <button type="button" data-testid="mode-sub" onClick={() => setMode("sub")}
                    className={`p-4 text-left transition-colors duration-300 ${useSub ? "bg-gold text-void" : "bg-[#230f33] hover:bg-deepp"}`}>
                    <p className={`text-[10px] uppercase tracking-[0.15em] mb-1 ${useSub ? "text-void/70" : "text-gold/80"}`}>Subscribe</p>
                    <p className="font-serif text-lg">${(option.sub.amount / 100).toFixed(2)}<span className="text-sm font-sans"> / {option.sub.interval}</span></p>
                  </button>
                </div>
                {useSub && (
                  <p className="mt-3 text-xs text-lightgray/80">Recurring delivery — billed automatically every {option.sub.interval}.</p>
                )}
              </div>
            )}

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
                  <m.icon size={14} color="#D7AF38" strokeWidth={1.5} /> {m.label}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 text-xs text-lightgray">
              <span className="inline-flex items-center gap-2"><Truck size={14} color="#D7AF38" strokeWidth={1.5} /> Ships within the US</span>
              <span className="inline-flex items-center gap-2"><Leaf size={14} color="#D7AF38" strokeWidth={1.5} /> Caffeine free</span>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-lightgray/70">
              <ShieldCheck size={14} color="#D7AF38" strokeWidth={1.5} /> Secure checkout by Stripe
            </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 max-w-[1400px] mx-auto px-6 lg:px-10 aura-c">
        <Reveal>
          <div className="lux-panel p-10 md:p-14 text-center relative overflow-hidden">
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
