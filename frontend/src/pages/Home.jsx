import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { MaskedLines, Reveal, Overline } from "../components/Reveal";
import { EditorialMarquee } from "../components/EditorialMarquee";
import { Crown, Diamond } from "../components/Motifs";
import { DIVISIONS } from "../data";

const PILLARS = [
  { n: "01", t: "Strength", d: "A diversified enterprise built on resilience, discipline, and an unshakeable standard of excellence." },
  { n: "02", t: "Vision", d: "Foresight that turns bold ideas into industries — always three moves ahead of the moment." },
  { n: "03", t: "Legacy", d: "Success measured not in profit alone, but in lives lifted and communities transformed." },
];

const HeroBg = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.15]);
  return (
    <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
      <img
        src="https://images.unsplash.com/photo-1760172287483-02d382f63a6f?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000"
        alt="Abstract luxury texture" className="w-full h-[120%] object-cover" />
      <div className="absolute inset-0 bg-void/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-void via-deepp/45 to-transparent" />
      <div className="absolute -bottom-24 right-0 w-[780px] h-[560px] rounded-full bg-vividp/45 blur-[170px]" />
      <div className="absolute top-1/4 -left-32 w-[520px] h-[520px] rounded-full bg-deepp/60 blur-[150px]" />
    </motion.div>
  );
};

export default function Home() {
  const dbaRef = useRef(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden pb-20 pt-32" data-testid="hero">
        <HeroBg />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <Overline className="mb-8">JPNS Enterprises LLC</Overline>
          </motion.div>
          <h1 className="font-serif text-white text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.88] tracking-tighter" data-testid="hero-heading">
            <MaskedLines delay={0.35} lines={["Strength.", "Vision.", <em key="l" className="italic gold-shimmer">Legacy.</em>]} />
          </h1>
          <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
              className="max-w-md text-lightgray text-lg leading-relaxed">
              A diversified enterprise of luxury brands, unforgettable experiences, and world-changing philanthropy. One enterprise. Unlimited impact.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.8 }}
              className="flex flex-wrap gap-4">
              <Link to="/divisions" data-testid="hero-explore-btn" className="btn-shine group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors duration-300">
                Explore Divisions <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link to="/partner" data-testid="hero-partner-btn" className="inline-flex items-center gap-3 border border-gold/40 text-white px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors duration-300">
                Partner With Us
              </Link>
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
        <div className="grid md:grid-cols-12 gap-6">
          {DIVISIONS.map((d, i) => {
            const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-12"];
            return (
              <Reveal key={d.slug} delay={(i % 2) * 0.1} className={spans[i]}>
                <Link to={`/divisions/${d.slug}`} data-testid={`dba-card-${d.slug}`}
                  className="group relative block overflow-hidden h-[340px] md:h-[420px] border border-white/10 hover:border-gold/40 transition-colors duration-500">
                  <img src={d.image} alt={d.name} loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/50 to-transparent" />
                  <div className="absolute inset-0 bg-vividp/0 group-hover:bg-vividp/28 transition-colors duration-500" />
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-2xl text-gold/70">{d.index}</span>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-lightgray border border-gold/30 px-3 py-1">{d.tag}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl mb-2 group-hover:text-gold transition-colors duration-300">{d.name}</h3>
                      <p className="text-lightgray text-sm max-w-md opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">{d.short}</p>
                    </div>
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
