import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal } from "../components/Reveal";
import { DIVISIONS } from "../data";
import { Seo } from "../components/Seo";

export default function Divisions() {
  return (
    <div>
      <Seo title="Our Divisions — JPNS Enterprises LLC" description="Five divisions, one legacy: Self-Care, Events & Entertainment, Restaurant Chains, Luxury Car Rentals, and Philanthropy — each held to a single standard of excellence." />
      <PageHeader
        testid="divisions-header"
        overline="Our DBAs"
        title="Five divisions."
        titleAccent="One legacy."
        subtitle="Each brand under JPNS Enterprises operates as its own world of excellence — bound together by a shared standard and a shared purpose."
      />

      <section className="relative py-12 lg:py-20 aura-c" data-testid="divisions-list">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-12 lg:space-y-16">
          {DIVISIONS.map((d, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal key={d.slug} delay={i * 0.05}>
                <div className="relative">
                  {/* purple ambient light behind the imagery */}
                  <div className={`pointer-events-none absolute top-1/2 -translate-y-1/2 w-[70%] h-[105%] rounded-full bg-vividp/25 blur-[120px] ${flip ? "-right-10" : "-left-10"}`} />
                  {/* champagne-gold glow near the title */}
                  <div className={`pointer-events-none absolute top-0 w-[380px] h-[260px] rounded-full bg-gold/10 blur-[90px] ${flip ? "left-[10%]" : "right-[10%]"}`} />
                  <Link to={`/divisions/${d.slug}`} data-testid={`division-row-${d.slug}`}
                    className="lux-row group relative grid md:grid-cols-12 items-stretch overflow-hidden">
                    {/* image edge fades into the plum panel (no hard seam) */}
                    <div className={`md:col-span-7 relative overflow-hidden h-[280px] sm:h-[380px] lg:h-[480px] [mask-image:linear-gradient(to_bottom,black_75%,transparent)] ${flip ? "md:order-2 md:[mask-image:linear-gradient(to_left,black_72%,transparent)]" : "md:[mask-image:linear-gradient(to_right,black_72%,transparent)]"}`}>
                      <img src={d.image} alt={d.name} loading="lazy"
                        className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${d.focus || "object-center"}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-deepp/40 via-transparent to-vividp/10 pointer-events-none" />
                      <div className="absolute inset-0 bg-vividp/0 group-hover:bg-vividp/15 transition-colors duration-500" />
                    </div>
                    <div className="md:col-span-5 relative p-8 md:p-10 lg:p-14 flex flex-col justify-center">
                      <div className="flex items-center gap-6 mb-6">
                        <span className="font-serif text-5xl lg:text-6xl text-gold/70 drop-shadow-[0_0_18px_rgba(215,175,56,0.35)]">{d.index}</span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-ivory/85 border border-gold/45 bg-gold/5 px-3 py-1">{d.tag}</span>
                      </div>
                      <h2 className="font-serif text-4xl md:text-5xl mb-4 text-ivory group-hover:text-gold transition-colors duration-300">{d.name}</h2>
                      <div className="w-16 h-px bg-gradient-to-r from-gold to-transparent mb-5" />
                      <p className="text-lightgray leading-relaxed max-w-xl mb-8">{d.short}</p>
                      <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gold">
                        Discover <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </div>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </div>
  );
}
