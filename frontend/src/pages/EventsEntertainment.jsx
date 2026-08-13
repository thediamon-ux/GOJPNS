import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowLeft, ArrowUpRight, Mic, Tv, Star, Users,
  Calendar, MapPin, Clock, Sparkles,
} from "lucide-react";
import { Reveal, Overline, MaskedLines } from "../components/Reveal";
import { Diamond, Crown } from "../components/Motifs";

const ROLES = [
  { icon: Mic, t: "Motivational Speaker", d: "Keynotes and talks that move rooms and ignite purpose." },
  { icon: Star, t: "Featured Appearances", d: "A sought-after guest and host across premieres and galas." },
  { icon: Tv, t: "Executive Producer", d: "Hands-on creative and production leadership for hit shows." },
  { icon: Users, t: "Event Host & Curator", d: "Designing unforgettable experiences from concept to curtain." },
];

const SHOWS = [
  {
    name: "Industry Girl",
    network: "The Tronix Network",
    img: "/show-industry-girl.jpg",
    d: "A bold, unfiltered series following the women shaping the entertainment industry. Jewell assisted in producing the show and its red-carpet premieres.",
  },
  {
    name: "Making a Brand",
    network: "Original Production",
    img: null,
    d: "An entrepreneurial showcase spotlighting founders as they build brands from the ground up — mentorship, hustle, and transformation on screen.",
  },
];

const TOPICS = [
  "Empowerment & Purpose",
  "Women in Business",
  "Building Your Brand",
  "Faith, Family & Legacy",
];

export default function EventsEntertainment() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <div data-testid="events-page">
      {/* HERO */}
      <section ref={ref} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute -top-24 right-0 w-[620px] h-[620px] rounded-full bg-vividp/45 blur-[170px] pointer-events-none" />
        <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full bg-deepp/60 blur-[150px] pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <Link to="/divisions" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-lightgray hover:text-gold transition-colors mb-8">
                <ArrowLeft size={16} /> All Divisions
              </Link>
            </Reveal>
            <Reveal delay={0.05}><Overline className="mb-6">Events & Entertainment</Overline></Reveal>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.92] tracking-tight mb-6" data-testid="events-heading">
              <MaskedLines delay={0.15} lines={[<span key="1">The stage</span>, <span key="2">belongs to</span>, <span key="3" className="italic gold-shimmer">Jewell.</span>]} />
            </h1>
            <Reveal delay={0.4}>
              <p className="text-lightgray text-lg leading-relaxed max-w-md mb-8">
                Motivational speaker, event host, and executive producer — Jewell Proby Shine brings vision, glamour, and purpose to every stage, red carpet, and production she touches.
              </p>
            </Reveal>
            <Reveal delay={0.55}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" data-testid="book-jewell-btn" className="btn-shine group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">
                  Book Jewell <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <a href="#featured-event" className="inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors">
                  Featured Event
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <motion.div style={{ y }} className="relative">
              <div className="absolute -inset-3 border border-gold/30 pointer-events-none" />
              <img src="/jewell-sitting.jpg" alt="Jewell Proby Shine at an appearance"
                className="relative w-full h-[560px] object-cover object-top shadow-2xl shadow-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/45 via-transparent to-transparent" />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ROLES STRIP */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="events-roles">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15 border border-gold/15">
          {ROLES.map((r, i) => (
            <Reveal key={r.t} delay={(i % 4) * 0.06}>
              <div className="bg-[#150621] p-8 h-full group hover:bg-deepp/60 transition-colors duration-500">
                <span className="inline-flex w-12 h-12 border border-gold/40 items-center justify-center mb-6 group-hover:border-gold transition-colors">
                  <r.icon size={22} color="#D4AF37" strokeWidth={1.3} />
                </span>
                <h3 className="font-serif text-xl mb-2">{r.t}</h3>
                <p className="text-lightgray text-sm leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRODUCTIONS */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="events-productions">
        <Reveal><Overline className="mb-6">Productions</Overline></Reveal>
        <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl mb-14 leading-[1.05]">Shows she helped <span className="italic gold-shimmer">bring to life</span>.</h2></Reveal>
        <div className="grid md:grid-cols-2 gap-8">
          {SHOWS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.12}>
              <div className="group border border-gold/20 hover:border-gold/45 transition-colors duration-500 h-full flex flex-col">
                <div className="relative overflow-hidden h-[420px] bg-deepp/40">
                  {s.img ? (
                    <img src={s.img} alt={`${s.name} poster`} className="w-full h-full object-contain object-center bg-black group-hover:scale-[1.03] transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-5 bg-gradient-to-br from-deepp/70 to-void">
                      <Crown size={54} />
                      <span className="font-serif text-4xl italic gold-shimmer">{s.name}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-vividp/0 group-hover:bg-vividp/15 transition-colors duration-500 pointer-events-none" />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold">{s.network}</span>
                  <h3 className="font-serif text-3xl mt-2 mb-3">{s.name}</h3>
                  <p className="text-lightgray text-sm leading-relaxed">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED EVENT — GALA */}
      <section id="featured-event" className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="events-featured">
        <div className="relative border border-gold/25 overflow-hidden grid lg:grid-cols-2">
          <div className="absolute -top-20 -right-16 w-[420px] h-[420px] rounded-full bg-vividp/30 blur-[130px] pointer-events-none" />
          <Reveal>
            <div className="relative p-4">
              <img src="/event-gala-flyer.jpg" alt="Legacy in Motion Gala flyer presented by JPNS" className="w-full object-cover border border-gold/20" />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative p-10 md:p-14 flex flex-col justify-center h-full">
              <Overline className="mb-6">Featured Event</Overline>
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.04] mb-4">The Power of the Village:<br /><span className="italic gold-shimmer">Legacy in Motion Gala</span></h2>
              <p className="text-lightgray leading-relaxed mb-8 max-w-lg">
                Proudly presented by JPNS Enterprises in support of <em className="text-gold not-italic">She Is The Village</em> — an evening celebrating the women, children, and families we serve. Together, we build a stronger village.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { icon: Calendar, v: "Saturday, August 29, 2026" },
                  { icon: Clock, v: "5:00 PM – 9:00 PM EDT" },
                  { icon: MapPin, v: "Hope Banquet Hall · 990 Pointe South Parkway, Jonesboro, GA 30238" },
                ].map((d) => (
                  <div key={d.v} className="flex items-start gap-4">
                    <span className="w-9 h-9 shrink-0 border border-gold/40 flex items-center justify-center">
                      <d.icon size={16} color="#D4AF37" strokeWidth={1.4} />
                    </span>
                    <p className="text-white/90">{d.v}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-shine group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors self-start">
                RSVP / Enquire <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPEAKING + GALLERY */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center" data-testid="events-speaking">
        <Reveal>
          <Overline className="mb-6">Speaking & Appearances</Overline>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-6">Book Jewell for your <span className="italic gold-shimmer">next moment</span>.</h2>
          <p className="text-lightgray leading-relaxed mb-8 max-w-lg">
            From keynotes and panels to hosting and red-carpet appearances, Jewell delivers presence, purpose, and glamour. Signature talks include:
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-gold/15 border border-gold/15">
            {TOPICS.map((t) => (
              <div key={t} className="bg-[#150621] p-5 flex items-center gap-3">
                <Diamond size={14} />
                <span className="text-sm">{t}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden border border-gold/15 col-span-2 group">
              <img src="/event-ig-redcarpet.jpg" alt="Industry Girl red carpet" className="w-full h-[320px] object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/70 to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-gold">Industry Girl · Red Carpet</span>
            </div>
            <div className="relative overflow-hidden border border-gold/15 group">
              <img src="/event-appearance.jpg" alt="Jewell appearance" className="w-full h-[300px] object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="relative overflow-hidden border border-gold/15 group">
              <img src="/jewell-sitting.jpg" alt="Jewell appearance" className="w-full h-[300px] object-cover object-top group-hover:scale-105 transition-transform duration-700" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative border border-gold/25 p-12 md:p-20 overflow-hidden text-center">
            <div className="absolute inset-0 bg-vividp/15 blur-[110px]" />
            <div className="relative">
              <Sparkles size={30} color="#D4AF37" strokeWidth={1.2} className="mx-auto mb-6" />
              <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-2xl mx-auto">Bring the <span className="italic gold-shimmer">glamour</span> to your stage.</h2>
              <p className="text-lightgray max-w-lg mx-auto mb-10 leading-relaxed">Speaking engagements, hosting, event production, and appearances — let's create something unforgettable.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn-shine bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">Book Jewell</Link>
                <Link to="/partner" className="border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors">Partner With Us</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
