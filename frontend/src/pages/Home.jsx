import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Mic, UtensilsCrossed, Car, Heart } from "lucide-react";
import { MaskedLines, Reveal, Overline } from "../components/Reveal";
import { EditorialMarquee } from "../components/EditorialMarquee";
import { Crown, Diamond } from "../components/Motifs";
import { DIVISIONS } from "../data";
import { Seo } from "../components/Seo";

const PILLARS = [
  { n: "01", t: "Strength", d: "A diversified enterprise built on resilience, discipline, and an unshakeable standard of excellence." },
  { n: "02", t: "Vision", d: "Foresight that turns bold ideas into industries — always three moves ahead of the moment." },
  { n: "03", t: "Legacy", d: "Success measured not in profit alone, but in lives lifted and communities transformed." },
];

const HOME_CARDS = [
  { slug: "self-care", title: "Wellness", product: "Jewell's Herbal Magic Blend", caption: "Herbal Teas · Self-Care · Restoration", icon: Leaf, focus: "object-[32%_50%]" },
  { slug: "luxury-car-rentals", title: "Luxury Car Rentals", caption: "Premium Vehicles · Signature Experiences", icon: Car, focus: "object-[28%_60%]" },
  { slug: "restaurant-chains", title: "Restaurant Chains", caption: "Dining Experiences · Food · Hospitality", icon: UtensilsCrossed },
  { slug: "events-entertainment", title: "Events & Entertainment", caption: "Speaking · Productions · Live Events", icon: Mic, focus: "object-[25%_35%]" },
  { slug: "philanthropy", title: "Philanthropy", caption: "Women · Children · Community Impact", icon: Heart },
];

const HeroBg = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#35104F] via-[#6D2793] to-[#110819]">
    <div className="absolute -top-32 right-0 w-[720px] h-[720px] rounded-full bg-vividp/50 blur-[160px]" />
    <div className="absolute bottom-0 -left-32 w-[520px] h-[520px] rounded-full bg-deepp/70 blur-[150px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(215,175,56,0.12),transparent_55%)]" />
    <div className="absolute -left-56 top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border-2 border-gold/25 pointer-events-none" />
    <div className="absolute -left-72 top-1/2 -translate-y-1/2 w-[760px] h-[760px] rounded-full border border-gold/15 pointer-events-none" />
  </div>
);

export default function Home() {
  const dbaRef = useRef(null);

  return (
    <div>
      <Seo title="JPNS Enterprises LLC — Strength. Vision. Legacy." description="A diversified enterprise of luxury car rentals, events and entertainment, self-care wellness, restaurant chains, and philanthropy led by Jewell Proby Shine." />
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-gold/20" data-testid="hero">
        <HeroBg />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full pt-32 pb-14 lg:pt-36 lg:pb-20">
          <div className="lg:max-w-[46%]">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
              <Overline className="mb-8">JPNS Enterprises LLC</Overline>
            </motion.div>
            <h1 className="font-serif font-bold text-white text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight" data-testid="hero-heading">
              <MaskedLines delay={0.35} lines={["Strength.", "Vision.", <em key="l" className="italic gold-shimmer inline-block pr-2">Legacy.</em>]} />
            </h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
              className="mt-10 max-w-md text-gray-200 text-base sm:text-lg leading-relaxed">
              A diversified enterprise of luxury brands, wellness solutions, unforgettable experiences, and world-changing philanthropy — built to empower, uplift, and give back.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8 }}
              className="mt-10 flex flex-wrap gap-4">
              <Link to="/divisions" data-testid="hero-explore-btn" className="btn-shine group inline-flex items-center justify-center gap-3 bg-gold text-void font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-md hover:bg-[#E5C158] hover:shadow-[0_0_20px_rgba(215,175,56,0.4)] transition-all duration-300">
                Explore Divisions <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/partner" data-testid="hero-partner-btn" className="inline-flex items-center justify-center gap-3 border border-gold text-gold font-semibold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-md hover:bg-gold/10 transition-all duration-300">
                Partner With Us
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[440px] sm:h-[520px] lg:absolute lg:inset-y-0 lg:right-0 lg:w-[52%] lg:h-auto">
          <img src="/jewell-sitting.jpg" alt="Jewell Proby Shine, Founder & CEO of JPNS Enterprises LLC"
            className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#35104F] via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#110819]/85 via-transparent to-transparent" />
          <div className="absolute bottom-10 right-6 lg:right-12 z-10 text-center">
            <div className="absolute -inset-6 bg-black/50 blur-2xl rounded-full pointer-events-none" />
            <Crown size={20} className="relative mx-auto mb-1" />
            <p className="relative text-gold text-4xl sm:text-5xl leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.95)]" style={{ fontFamily: "'Great Vibes', cursive" }}>Jewell Proby Shine</p>
            <div className="relative w-16 h-px bg-gold mx-auto my-2" />
            <p className="relative text-[11px] uppercase tracking-[0.35em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">Founder &amp; CEO</p>
          </div>
        </motion.div>
      </section>

      {/* DIVISION CARDS */}
      <section ref={dbaRef} className="py-14 lg:py-20 bg-gradient-to-b from-[#110819] via-[#110819] to-transparent" data-testid="divisions-preview">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-5 lg:overflow-visible">
            {HOME_CARDS.map((c, i) => {
              const d = DIVISIONS.find((x) => x.slug === c.slug);
              const Icon = c.icon;
              return (
                <Reveal key={c.slug} delay={i * 0.06} className="min-w-[250px] sm:min-w-[280px] lg:min-w-0 snap-center">
                  <Link to={`/divisions/${c.slug}`} data-testid={`dba-card-${c.slug}`}
                    className="group relative block overflow-hidden rounded-2xl border-2 border-gold/50 h-[400px] hover:border-gold hover:shadow-[0_0_25px_rgba(215,175,56,0.3)] hover:-translate-y-2 transition-all duration-500">
                    <img src={d.image} alt={c.title} loading="lazy"
                      className={`absolute inset-0 w-full h-full object-cover ${c.bright || "brightness-105"} group-hover:scale-105 group-hover:brightness-110 transition-all duration-700 ease-out ${c.focus || d.focus || "object-center"}`} />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#110819]/90 via-[#110819]/15 to-[#110819]/95 pointer-events-none" />
                    <div className="relative h-full flex flex-col justify-between">
                      <div className="pt-6 px-4 text-center">
                        <Icon size={26} color="#D7AF38" strokeWidth={1.4} className="mx-auto mb-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="font-serif text-xl text-white leading-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] group-hover:text-gold transition-colors duration-300">{c.title}</h3>
                        {c.product && <p className="font-serif italic text-gold text-sm mt-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]">{c.product}</p>}
                      </div>
                      <p className="pb-4 px-3 text-center text-[10px] uppercase tracking-[0.12em] text-gold/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">{c.caption}</p>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <EditorialMarquee />

      {/* PILLARS / MANIFESTO */}
      <section className="py-28 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="pillars">
        <Reveal><Overline className="mb-6">The Manifesto</Overline></Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl mb-20">
            Three principles that <span className="italic gold-shimmer">define</span> everything we build.
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-gold/15">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <div className="bg-[#1A0E26] p-10 h-full group hover:bg-deepp/60 transition-colors duration-500">
                <div className="flex items-center justify-between mb-10">
                  <span className="font-serif text-5xl text-gold/30 group-hover:text-gold/60 transition-colors">{p.n}</span>
                  <Diamond size={18} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-serif text-3xl mb-4">{p.t}</h3>
                <p className="text-lightgray leading-relaxed text-sm">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ONE ENTERPRISE */}
      <section className="py-28 relative overflow-hidden" data-testid="one-enterprise">
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-deepp/50 blur-[150px] -translate-y-1/2" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Crown size={44} className="mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.02] mb-8">
              One Enterprise.<br /><span className="italic gold-shimmer">Unlimited Impact.</span>
            </h2>
            <p className="text-lightgray leading-relaxed mb-6 max-w-2xl">
              JPNS Enterprises LLC is the parent brand uniting five distinct divisions under a single vision — where luxury and purpose move as one. Every venture strengthens the whole, and a portion of everything we create flows back into the communities we serve.
            </p>
            <Link to="/about" data-testid="about-cta" className="group inline-flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">
              Our Story <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28" data-testid="home-cta">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="relative border border-gold/25 p-12 md:p-20 overflow-hidden">
            <div className="absolute -top-20 -right-10 w-[460px] h-[460px] rounded-full bg-vividp/35 blur-[130px]" />
            <div className="relative">
              <Reveal><h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] max-w-3xl mb-8">Build a legacy <span className="italic gold-shimmer">with us</span>.</h2></Reveal>
              <Reveal delay={0.1}><p className="text-lightgray max-w-xl mb-10 leading-relaxed">Whether you're an investor, partner, or visionary talent — there's a place for you inside the enterprise.</p></Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/partner" className="btn-shine bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">Partner With Us</Link>
                  <Link to="/contact" className="border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors">Get In Touch</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
