import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { DIVISIONS } from "../data";

export default function Divisions() {
  return (
    <div>
      <PageHeader
        testid="divisions-header"
        overline="Our DBAs"
        title="Five divisions."
        titleAccent="One legacy."
        subtitle="Each brand under JPNS Enterprises operates as its own world of excellence — bound together by a shared standard and a shared purpose."
      />

      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 space-y-6" data-testid="divisions-list">
        {DIVISIONS.map((d, i) => (
          <Reveal key={d.slug} delay={i * 0.05}>
            <Link to={`/divisions/${d.slug}`} data-testid={`division-row-${d.slug}`}
              className="group grid md:grid-cols-12 gap-6 items-center border border-white/10 hover:border-gold/40 transition-colors duration-500 overflow-hidden">
              <div className={`md:col-span-5 relative overflow-hidden h-[300px] ${i % 2 ? "md:order-2" : ""}`}>
                <img src={d.image} alt={d.name} loading="lazy"
                  className={`w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${d.slug === "philanthropy" ? "object-[50%_30%]" : "object-center"}`} />
                <div className="absolute inset-0 bg-vividp/0 group-hover:bg-vividp/28 transition-colors duration-500" />
              </div>
              <div className="md:col-span-7 p-8 md:p-12">
                <div className="flex items-center gap-6 mb-6">
                  <span className="font-serif text-5xl text-gold/40">{d.index}</span>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-lightgray border border-gold/30 px-3 py-1">{d.tag}</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl mb-4 group-hover:text-gold transition-colors duration-300">{d.name}</h2>
                <p className="text-lightgray leading-relaxed max-w-xl mb-8">{d.short}</p>
                <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
                  Discover <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
