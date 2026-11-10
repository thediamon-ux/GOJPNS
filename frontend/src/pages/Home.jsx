import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Leaf, Mic, UtensilsCrossed, Car, Heart } from "lucide-react";
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

const DIVISION_ICONS = {
  "self-care": Leaf,
  "events-entertainment": Mic,
  "restaurant-chains": UtensilsCrossed,
  "luxury-car-rentals": Car,
  "philanthropy": Heart,
};

const HeroBg = () => (
  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2B0B3D] via-[#6B1FAF] to-[#140321]">
    <div className="absolute -top-32 right-0 w-[720px] h-[720px] rounded-full bg-vividp/50 blur-[160px]" />
    <div className="absolute bottom-0 -left-32 w-[520px] h-[520px] rounded-full bg-deepp/70 blur-[150px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(212,175,55,0.12),transparent_55%)]" />
  </div>
);

export default function Home() {
  const dbaRef = useRef(null);

  return (
    <div>
      <Seo title="JPNS Enterprises LLC — Strength. Vision. Legacy." description="A diversified enterprise of luxury car rentals, events and entertainment, self-care wellness, restaurant chains, and philanthropy led by Jewell Proby Shine." />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 border-b border-gold/20" data-testid="hero">
        <HeroBg />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <Overline className="mb-8">JPNS Enterprises LLC</Overline>
              </motion.div>
              <h1 className="font-serif font-bold text-white text-5xl sm:text-6xl lg:text-6xl leading-[1.05] tracking-tight" data-testid="hero-heading">
                <MaskedLines delay={0.35} lines={["Strength.", "Vision.", <em key="l" className="italic gold-shimmer inline-block pr-2">Legacy.</em>]} />
              </h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
                className="mt-10 max-w-md text-lightgray text-lg leading-relaxed">
                A diversified enterprise of luxury brands, wellness solutions, unforgettable experiences, and world-changing philanthropy — built to empower, uplift, and give back.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8 }}
                className="mt-8 flex flex-wrap gap-4">
                <Link to="/divisions" data-testid="hero-explore-btn" className="btn-shine group inline-flex items-center justify-center gap-2 bg-gold text-black font-semibold text-sm tracking-wide px-8 py-3.5 rounded-full hover:bg-[#E5C158] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                  Explore Divisions <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link to="/partner" data-testid="hero-partner-btn" className="inline-flex items-center justify-center gap-3 border border-gold text-gold font-semibold text-sm tracking-widest uppercase px-8 py-3.5 rounded-full hover:bg-gold/10 transition-all duration-300">
                  Partner With Us
                </Link>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                <img src="/jewell-sitting.jpg" alt="Jewell Proby Shine, Founder & CEO of JPNS Enterprises LLC"
                  className="w-full h-[420px] sm:h-[520px] lg:h-[600px] object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#140321]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 z-10 backdrop-blur-md bg-black/40 border border-gold/20 p-4 rounded-xl flex items-center justify-between gap-4">
                  <span className="font-serif italic text-gold text-xl sm:text-2xl tracking-wide">Jewell Proby Shine</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-300 font-medium">Founder &amp; CEO</span>
                </div>
              </div>
            </motion.div>
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
              <div className="bg-[#150621] p-10 h-full group hover:bg-deepp/60 transition-colors duration-500">
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

      {/* DBA PREVIEW GRID */}
      <section ref={dbaRef} className="py-28 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="divisions-preview">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal><Overline className="mb-6">Our Divisions</Overline></Reveal>
            <Reveal delay={0.1}><h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05]">Five worlds.<br />One <span className="italic gold-shimmer">standard</span>.</h2></Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/divisions" className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold hover:text-white transition-colors">
              View All <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {DIVISIONS.map((d, i) => {
            const Icon = DIVISION_ICONS[d.slug] || Diamond;
            return (
              <Reveal key={d.slug} delay={i * 0.06}>
                <Link to={`/divisions/${d.slug}`} data-testid={`dba-card-${d.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-gold/30 bg-[#12041D]/80 hover:border-gold hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:-translate-y-2 transition-all duration-500 min-h-[340px]">
                  <div className="p-5 pb-0 flex flex-col items-start z-10">
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-gold/10 border border-gold/20 mb-3 group-hover:scale-110 transition-transform duration-300">
                      <Icon size={18} color="#D4AF37" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-serif text-xl text-white group-hover:text-gold transition-colors duration-300">{d.name}</h3>
                  </div>
                  <div className="relative w-full h-44 mt-4 overflow-hidden">
                    <img src={d.image} alt={d.name} loading="lazy"
                      className={`w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out ${d.focus || "object-center"}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-black/20 to-transparent" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
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
