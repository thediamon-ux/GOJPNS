import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Reveal, Overline } from "../components/Reveal";
import { Diamond } from "../components/Motifs";
import { DIVISIONS } from "../data";
import { Seo } from "../components/Seo";

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
      <Seo title={`${d.name} — JPNS Enterprises LLC`} description={d.short} />
      {/* HERO */}
      <section ref={ref} className="relative h-[85vh] min-h-[560px] flex items-end overflow-hidden">
        {/* photo + tint fade out at the bottom so the hero melts into the page (no hard edge) */}
        <div className="absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,black_62%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_62%,transparent)]">
          <motion.img style={{ y }} src={d.hero} alt={d.name}
            className="absolute inset-0 w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-deepp/75 via-[#1a0a28]/60 to-vividp/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#150a21]/80 via-[#150a21]/20 to-transparent" />
        </div>
        <div className="absolute bottom-10 left-0 w-[620px] h-[340px] bg-[radial-gradient(closest-side,rgba(215,175,56,0.16),transparent)] pointer-events-none" />
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
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 aura-r aura-gold aura-gold-r">
        <Reveal className="lg:col-span-4">
          <Overline>Overview</Overline>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-8">
          <p className="font-serif text-2xl md:text-4xl leading-[1.25]">{d.intro}</p>
        </Reveal>
      </section>

      {/* FEATURES */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 aura-l">
        <Reveal><Overline className="mb-10">{d.featuresTitle || "What We Offer"}</Overline></Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-gold/20 lux-grid">
          {d.features.map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="lux-card p-8 flex items-start gap-5 h-full group">
                <span className="mt-1 shrink-0 w-9 h-9 border border-gold/40 flex items-center justify-center group-hover:bg-gold group-hover:text-void transition-colors">
                  <Check size={16} strokeWidth={1.5} />
                </span>
                <p className="text-lg">{f}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FRANCHISE STATS (optional) */}
      {d.franchiseStats && (
        <section className="py-8 max-w-[1400px] mx-auto px-6 lg:px-10 aura-c" data-testid="franchise-stats">
          <div className="grid sm:grid-cols-3 gap-px bg-gold/20 lux-grid border border-gold/15">
            {d.franchiseStats.map((s) => (
              <Reveal key={s.l}>
                <div className="lux-card p-10 text-center h-full">
                  <div className="font-serif text-5xl md:text-6xl text-gold mb-3">{s.v}</div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-lightgray">{s.l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* FRANCHISE STEPS (optional) */}
      {d.franchiseSteps && (
        <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-10 aura-r aura-gold" data-testid="franchise-steps">
          <Reveal><Overline className="mb-6">The Path to Ownership</Overline></Reveal>
          <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl mb-14 leading-[1.05]">How to own a <span className="italic gold-shimmer">franchise</span>.</h2></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 lux-grid">
            {d.franchiseSteps.map((step, i) => (
              <Reveal key={step.t} delay={i * 0.08}>
                <div className="lux-card p-8 h-full group">
                  <span className="font-serif text-5xl text-gold/30 group-hover:text-gold/60 transition-colors">0{i + 1}</span>
                  <h3 className="font-serif text-2xl mt-6 mb-3">{step.t}</h3>
                  <p className="text-lightgray text-sm leading-relaxed">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* IMAGE BAND */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 aura-c">
        <Reveal>
          <div className="lux-halo"><div className="relative overflow-hidden lux-edge group">
            <img src={d.image} alt={d.name} className="w-full h-[420px] md:h-[520px] object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepp/80 via-transparent to-vividp/10" />
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
              <Diamond size={24} />
              <span className="font-serif text-2xl italic gold-shimmer">{d.name}</span>
            </div>
          </div></div>
        </Reveal>
      </section>

      {/* GALLERY (optional per division) */}
      {d.gallery && (
        <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 aura-l aura-gold" data-testid="division-gallery">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <Reveal><Overline className="mb-6">{d.galleryOverline || "In the Field"}</Overline></Reveal>
              <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">{d.galleryTitle || "Moments of impact."}</h2></Reveal>
            </div>
          </div>
          <div className="grid md:grid-cols-12 gap-6">
            {d.gallery.map((g, i) => {
              const spans = d.gallery.length === 1
                ? ["md:col-span-12"]
                : ["md:col-span-7", "md:col-span-5", "md:col-span-12"];
              return (
                <Reveal key={i} delay={(i % 2) * 0.1} className={spans[i % spans.length]}>
                  <figure className="group relative overflow-hidden lux-edge hover:shadow-[0_0_0_1px_rgba(215,175,56,0.7),0_0_40px_rgba(215,175,56,0.2),0_40px_80px_-30px_rgba(109,39,147,1)] transition-shadow duration-500">
                    <img src={g.src} alt={g.caption} loading="lazy"
                      className="w-full h-[320px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a28]/85 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-6 left-6 right-6">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold">{g.place}</span>
                      <p className="font-serif text-xl md:text-2xl mt-1">{g.caption}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* CTA + NEXT */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-6 aura-c">
        <Reveal>
          <div className="lux-panel p-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-3xl mb-4">{d.ctaTitle || <>Interested in <span className="italic gold-shimmer">{d.name}?</span></>}</h3>
              <p className="text-lightgray leading-relaxed mb-8">{d.ctaText || "Reach out to learn more, book an experience, or explore a partnership."}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {d.externalUrl && (
                <a href={d.externalUrl} target="_blank" rel="noopener noreferrer" data-testid="division-external-link"
                  className="btn-shine group inline-flex items-center gap-3 bg-gold text-void px-7 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">
                  {d.externalLabel || "Visit Website"} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              )}
              <Link to="/contact" className="group inline-flex items-center gap-3 text-gold text-xs uppercase tracking-[0.2em] hover:text-white transition-colors">
                {d.ctaButton || "Get In Touch"} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to={`/divisions/${next.slug}`} className="group relative block overflow-hidden h-full min-h-[240px] lux-edge">
            <img src={next.image} alt={next.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-deepp/80 to-[#1a0a28]/60 group-hover:opacity-70 transition-opacity" />
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
