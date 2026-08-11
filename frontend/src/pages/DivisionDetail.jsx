import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { Diamond } from "../components/Motifs";
import { DIVISIONS } from "../data";

export default function DivisionDetail() {
  const { slug } = useParams();
  const d = DIVISIONS.find((x) => x.slug === slug);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);

  if (!d) return <Navigate to="/divisions" replace />;
  const idx = DIVISIONS.findIndex((x) => x.slug === slug);
  const next = DIVISIONS[(idx + 1) % DIVISIONS.length];

  return (
    <div data-testid="division-detail">
      {/* HERO */}
      <section ref={ref} className="relative h-[85vh] min-h-[560px] flex items-end overflow-hidden">
        <motion.img style={{ y }} src={d.hero} alt={d.name}
          className="absolute inset-0 w-full h-[120%] object-cover" />
        <div className="absolute inset-0 bg-void/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full pb-16">
          <Reveal>
            <Link to="/divisions" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lightgray hover:text-gold transition-colors mb-8">
              <ArrowLeft size={16} /> All Divisions
            </Link>
          </Reveal>
          <div className="flex items-center gap-6 mb-4">
            <span className="font-serif text-3xl text-gold/60">{d.index}</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-lightgray border border-gold/30 px-3 py-1">{d.tag}</span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.9] tracking-tight">{d.name}</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <Overline>Overview</Overline>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <p className="font-serif text-2xl md:text-4xl leading-[1.25]">{d.intro}</p>
        </Reveal>
      </section>

      {/* FEATURES */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal><Overline className="mb-10">What We Offer</Overline></Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-gold/15">
          {d.features.map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-void p-8 flex items-start gap-5 h-full group hover:bg-deepp/30 transition-colors duration-500">
                <span className="mt-1 shrink-0 w-9 h-9 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:text-void transition-colors">
                  <Check size={16} strokeWidth={1.5} />
                </span>
                <p className="text-lg">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMAGE BAND */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden border border-gold/20 group">
            <img src={d.image} alt={d.name} className="w-full h-[420px] md:h-[520px] object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <Diamond size={24} />
              <span className="font-serif text-2xl italic text-gold">{d.name}</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA + NEXT */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="border border-gold/25 p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl mb-4">Interested in <span className="italic text-gold">{d.name}?</span></h3>
              <p className="text-lightgray leading-relaxed mb-8">Reach out to learn more, book an experience, or explore a partnership.</p>
            </div>
            <Link to="/contact" className="group inline-flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">
              Get In Touch <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to={`/divisions/${next.slug}`} className="group relative block overflow-hidden h-full min-h-[240px] border border-white/10 hover:border-gold/40 transition-colors">
            <img src={next.image} alt={next.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-void/60 group-hover:bg-void/40 transition-colors" />
            <div className="relative p-10 h-full flex flex-col justify-between">
              <span className="text-[10px] uppercase tracking-[0.25em] text-gold">Next Division</span>
              <h3 className="font-serif text-3xl md:text-4xl group-hover:text-gold transition-colors">{next.name}</h3>
            </div>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
