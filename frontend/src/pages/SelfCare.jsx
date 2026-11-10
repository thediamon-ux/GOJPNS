import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft, ArrowUpRight, HeartPulse, Leaf, Wind, Brain,
  Salad, Gem, Scale, Zap, Sparkles, Heart, Quote, Star,
} from "lucide-react";
import { Reveal, Overline, MaskedLines } from "../components/Reveal";
import { Diamond } from "../components/Motifs";
import { Seo } from "../components/Seo";
import { API } from "../data";

const PRODUCT_IMG = "/tea-jar.jpg";

const INGREDIENTS = [
  { n: "Ashwagandha", d: "Reduces stress, supports energy, balance & better sleep." },
  { n: "Gotu Kola", d: "Enhances memory, circulation & skin health; reduces anxiety." },
  { n: "Burdock Root", d: "Detoxifies blood, supports liver function & promotes clear, healthy skin." },
  { n: "Marshmallow Root", d: "Soothes the digestive tract, supports gut health & respiratory comfort." },
  { n: "Sarsaparilla", d: "Detoxifies, supports hormone balance & joint health." },
  { n: "Mulberry", d: "Rich in antioxidants, supports heart health & healthy blood sugar." },
  { n: "Mulberry Leaves", d: "Helps maintain healthy blood sugar, supports metabolism & weight balance." },
  { n: "Irish Moss", d: "Mineral-rich, supports thyroid, immunity, skin, hair & gut health." },
  { n: "Cardamom", d: "Aids digestion, freshens breath, supports heart health & reduces bloating." },
  { n: "Mullein Leaf", d: "Supports lung health, soothes coughs & helps clear mucus." },
  { n: "Cardamom Seeds", d: "Supports digestion, detoxification & healthy circulation." },
  { n: "Bladderwrack", d: "Supports thyroid function, metabolism & provides essential minerals." },
  { n: "Chamomile", d: "Promotes relaxation, better sleep, soothes stress & calms digestion." },
  { n: "Ginger", d: "Anti-inflammatory, supports digestion, boosts circulation & strengthens immunity." },
  { n: "Fenugreek", d: "Helps regulate blood sugar, supports hormone balance & aids digestion." },
  { n: "Maca Root", d: "Boosts energy, stamina, supports hormone balance, mood, mental clarity & libido." },
];

const BENEFITS = [
  { icon: HeartPulse, t: "Heart Health & Blood Pressure" },
  { icon: Leaf, t: "Detoxifies & Supports Liver Function" },
  { icon: Wind, t: "Respiratory & Immune Health" },
  { icon: Brain, t: "Mental Clarity & Reduced Stress" },
  { icon: Salad, t: "Digestion & Gut Health" },
  { icon: Gem, t: "Rich in Minerals & Nutrients" },
  { icon: Scale, t: "Hormone Balance & Vitality" },
  { icon: Zap, t: "Energizes Body & Uplifts Spirit" },
];

const CREED = [
  "Sip with intention. Live in alignment.",
  "Rooted in tradition. Crafted for transformation.",
  "Small batch. Ethically sourced. Sustainably packaged.",
];

const TESTIMONIALS = [
  { quote: "I replaced my afternoon coffee with the Herbal Magic Blend. Two weeks in, my energy is steadier and my mind is clearer — no crash, just calm focus.", name: "Denise W.", tag: "Daily sipper" },
  { quote: "The blend settled my digestion within days. You can taste the care in every cup — it's become my evening ritual.", name: "Marcus T.", tag: "Wellness convert" },
  { quote: "As a nurse on long shifts, this tea is my reset. It soothes, restores, and reminds me to pour back into myself.", name: "Angela R.", tag: "Night-shift nurse" },
];

export default function SelfCare() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div data-testid="self-care-page">
      <Seo title="Jewell's Herbal Magic Blend — JPNS Self-Care" description="Jewell's Herbal Magic Blend: a handcrafted, caffeine-free herbal tea of 16 intentional botanicals, made to nourish, heal and restore. Body, mind and spirit." />
      {/* HERO */}
      <section ref={ref} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[560px] h-[560px] rounded-full bg-emerald-900/40 blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full bg-vividp/35 blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <Link to="/divisions" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lightgray hover:text-gold transition-colors mb-8">
                <ArrowLeft size={16} /> All Divisions
              </Link>
            </Reveal>
            <Reveal delay={0.05}><Overline className="mb-6">Self-Care · Wellness</Overline></Reveal>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.92] tracking-tight mb-6" data-testid="wellness-heading">
              <MaskedLines delay={0.15} lines={[<span key="1">Jewell's</span>, <span key="2" className="italic gold-shimmer">Herbal Magic</span>, <span key="3">Blend</span>]} />
            </h1>
            <Reveal delay={0.4}>
              <p className="text-lightgray text-lg leading-relaxed max-w-md mb-8">
                A powerful blend. Rooted in nature. Made to nourish, heal &amp; restore — a handcrafted herbal tea for body, mind &amp; spirit.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <div className="flex flex-wrap items-center gap-3 mb-10">
                {["Handcrafted Herbal Tea", "Caffeine Free", "All Natural"].map((tag) => (
                  <span key={tag} className="text-[10px] uppercase tracking-[0.2em] text-emerald-200/90 border border-emerald-400/30 px-4 py-2">{tag}</span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <Link to="/shop" data-testid="wellness-order-btn" className="btn-shine group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">
                  Buy Now <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <a href="#ingredients" className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors">
                  View Ingredients
                </a>
              </div>
              <p className="mt-5 text-sm text-lightgray">
                Looking for larger or wholesale orders?{" "}
                <Link to="/contact" data-testid="wellness-bulk-link" className="text-gold underline underline-offset-4 hover:text-white transition-colors">Click here to enquire to order</Link>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <motion.div style={{ y }} className="relative">
              <div className="absolute -inset-3 border border-gold/30 pointer-events-none" />
              <img src={PRODUCT_IMG} alt="Jewell's Herbal Magic Blend handcrafted herbal tea label"
                className="relative w-full object-cover shadow-2xl shadow-black/60" />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT DETAIL STRIP */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15 border border-gold/15">
          {[
            { k: "Sizes", v: "1.25 · 2.5 · 10 oz" },
            { k: "Form", v: "Loose Leaf Tea" },
            { k: "Ritual", v: "Body · Mind · Spirit" },
            { k: "Crafted", v: "With Love & Purpose" },
          ].map((d) => (
            <div key={d.k} className="bg-[#0d1410] p-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-emerald-300/80 mb-3">{d.k}</p>
              <p className="font-serif text-xl text-white">{d.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4"><Overline>The Ritual</Overline></Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <p className="font-serif text-2xl md:text-4xl leading-[1.25]">
            Every cup is a small act of devotion — a pause to <span className="italic gold-shimmer">nourish, heal &amp; restore</span>. You deserve to feel magic.
          </p>
        </Reveal>
      </section>

      {/* BENEFITS */}
      <section className="py-8 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="wellness-benefits">
        <Reveal><Overline className="mb-10">Benefits</Overline></Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.t} delay={(i % 4) * 0.06}>
              <div className="bg-[#0d1410] p-8 h-full group hover:bg-emerald-950/60 transition-colors duration-500">
                <span className="inline-flex w-12 h-12 border border-gold/40 items-center justify-center mb-6 group-hover:border-gold transition-colors">
                  <b.icon size={22} color="#D4AF37" strokeWidth={1.3} />
                </span>
                <p className="font-serif text-lg leading-snug">{b.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INGREDIENTS */}
      <section id="ingredients" className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="wellness-ingredients">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal><Overline className="mb-6">The Blend · 16 Botanicals</Overline></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">Every ingredient, <span className="italic gold-shimmer">intentional</span>.</h2></Reveal>
          </div>
          <Reveal delay={0.2}>
            <span className="inline-flex items-center gap-3 text-emerald-300/80 text-xs uppercase tracking-[0.2em]">
              <Leaf size={16} strokeWidth={1.3} /> Rooted in nature
            </span>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
          {INGREDIENTS.map((ing, i) => (
            <Reveal key={ing.n} delay={(i % 3) * 0.05}>
              <div className="bg-[#0d1410] p-7 h-full group hover:bg-emerald-950/60 transition-colors duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <Diamond size={14} />
                  <h3 className="font-serif text-xl group-hover:text-gold transition-colors duration-300">{ing.n}</h3>
                </div>
                <p className="text-lightgray text-sm leading-relaxed">{ing.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="wellness-testimonials">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal><Overline className="mb-6">Reviews</Overline></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">Loved by every <span className="italic gold-shimmer">sip</span>.</h2></Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="bg-[#0d1410] p-8 h-full flex flex-col group hover:bg-emerald-950/60 transition-colors duration-500">
                <Quote size={24} color="#D4AF37" strokeWidth={1.2} className="mb-6" />
                <blockquote className="font-serif text-lg leading-relaxed text-white/95 flex-1">“{t.quote}”</blockquote>
                <figcaption className="mt-8 pt-6 border-t border-gold/15">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={14} color="#D4AF37" fill="#D4AF37" strokeWidth={1} />
                    ))}
                  </div>
                  <p className="text-sm text-white">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/70 mt-1">{t.tag}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CREED BAND */}
      <section className="py-8 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-3 gap-px bg-gold/15 border-y border-gold/15">
          {CREED.map((c, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-[#0d1410] p-8 flex items-center gap-4 h-full">
                <Sparkles size={20} color="#D4AF37" strokeWidth={1.3} className="shrink-0" />
                <p className="text-sm uppercase tracking-[0.15em] text-emerald-100/90">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative border border-gold/25 p-12 md:p-20 overflow-hidden text-center">
            <div className="absolute inset-0 bg-emerald-900/20 blur-[110px]" />
            <div className="absolute -top-16 right-10 w-[360px] h-[360px] rounded-full bg-vividp/25 blur-[130px]" />
            <div className="relative">
              <Heart size={30} color="#D4AF37" strokeWidth={1.2} className="mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-2xl mx-auto">You deserve to <span className="italic gold-shimmer">feel magic</span>.</h2>
              <p className="text-lightgray max-w-lg mx-auto mb-10 leading-relaxed">Handcrafted in small batches and ethically sourced. Order your tin today — or reach out for larger orders and wellness partnerships.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/shop" data-testid="wellness-cta-buy-btn" className="btn-shine bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">
                  Buy Now
                </Link>
                <Link to="/partner" className="border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors">Partner With Us</Link>
              </div>
              <p className="mt-6 text-sm text-lightgray/80">
                Looking for larger or wholesale orders?{" "}
                <Link to="/contact" className="text-gold underline underline-offset-4 hover:text-white transition-colors">Click here to enquire to order</Link>
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
