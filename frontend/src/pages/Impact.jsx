import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Overline } from "../components/Reveal";
import { Counter } from "../components/Counter";
import { EditorialMarquee } from "../components/EditorialMarquee";
import { Crown, Diamond } from "../components/Motifs";
import { Seo } from "../components/Seo";

const METRICS = [
  { v: 300, s: "+", l: "Kids' Lives Impacted" },
  { v: 107, s: "K+", p: "$", l: "Donations Raised" },
  { v: 4, s: "", l: "Charity Partners" },
  { v: 2, s: "", l: "Countries Reached" },
];

const INITIATIVES = [
  { t: "Orphanage Support", d: "Funding shelter, education, and care for children across nine countries." },
  { t: "Women's Empowerment", d: "Mentorship, scholarships, and entrepreneurship programs that open doors." },
  { t: "Community Outreach", d: "Local partnerships providing food, healthcare, and opportunity where it's needed most." },
];

export default function Impact() {
  return (
    <div>
      <Seo title="Our Impact — JPNS Enterprises LLC" description="Impact is the truest measure of a legacy: orphanage support, women's empowerment, and community outreach from Athi River, Kenya to home." />
      <PageHeader
        testid="impact-header"
        overline="Our Impact"
        title="Success measured in"
        titleAccent="lives changed."
        subtitle="Every division feeds a single purpose. A portion of everything we build flows back into the communities and causes at the heart of our enterprise."
      />

      {/* BIG COUNTERS */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 aura-c" data-testid="impact-metrics">
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-px bg-gold/20 lux-grid">
          {METRICS.map((m, i) => (
            <Reveal key={m.l} delay={i * 0.08} className="lg:col-span-2">
              <div className="lux-card p-10 md:p-12 h-full group">
                <Diamond size={18} className="mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-white mb-4">
                  <Counter value={m.v} prefix={m.p} suffix={m.s} />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">{m.l}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.4} className="sm:col-span-2 lg:col-span-4">
            <div className="bg-gold text-void p-10 md:p-12 h-full flex flex-col justify-center">
              <Crown size={40} color="#110819" className="mb-6" />
              <p className="font-serif text-3xl md:text-4xl leading-snug max-w-xl">Impact is the truest measure of a legacy.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <EditorialMarquee />

      {/* INITIATIVES */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 aura-l aura-gold">
        <Reveal><Overline className="mb-6">Where It Goes</Overline></Reveal>
        <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl mb-16">Our <span className="italic gold-shimmer">initiatives</span>.</h2></Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {INITIATIVES.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.1}>
              <div className="lux-row p-10 h-full group">
                <span className="font-serif text-5xl text-gold/30 group-hover:text-gold/60 transition-colors">0{i + 1}</span>
                <h3 className="font-serif text-2xl mt-6 mb-4">{it.t}</h3>
                <p className="text-lightgray text-sm leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-10 aura-c">
        <Reveal>
          <div className="relative lux-panel p-12 md:p-16 overflow-hidden text-center">
            <div className="relative">
              <h2 className="font-serif text-3xl md:text-5xl mb-8 max-w-3xl mx-auto">Join us in writing the next chapter of <span className="italic gold-shimmer">impact</span>.</h2>
              <Link to="/partner" className="group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">
                Become a Partner <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
