import { PageHeader } from "../components/PageHeader";
import { Reveal, Overline } from "../components/Reveal";
import { EditorialMarquee } from "../components/EditorialMarquee";
import { Crown } from "../components/Motifs";
import { Seo } from "../components/Seo";

const VALUES = [
  { t: "Excellence", d: "We refuse the ordinary. Every division operates at the highest standard of craft and care." },
  { t: "Integrity", d: "Trust is our currency. We honor our word to partners, clients, and communities alike." },
  { t: "Empowerment", d: "We create opportunity — especially for women seeking mentorship, inspiration, and a seat at the table." },
  { t: "Purpose", d: "Profit with meaning. A share of everything we build returns to those who need it most." },
];

export default function About() {
  return (
    <div>
      <Seo title="About Us — JPNS Enterprises LLC" description="The story of JPNS Enterprises LLC and founder Jewell Proby Shine — a diversified luxury enterprise built on strength, vision, and legacy, giving back to communities worldwide." />
      <PageHeader
        testid="about-header"
        overline="About Us"
        title="One enterprise."
        titleAccent="Unlimited impact."
        subtitle="JPNS Enterprises LLC is a diversified holding company uniting luxury, experience, wellness, hospitality, and philanthropy under a single, purpose-driven vision."
      />

      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center aura-l">
        <Reveal>
          <div className="lux-halo"><div className="relative overflow-hidden lux-edge">
            <img src="https://images.unsplash.com/photo-1688614598602-0a71fbfed6c5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="JPNS Enterprises" className="w-full h-[520px] object-cover grayscale-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-deepp/60 via-transparent to-vividp/10" />
          </div></div>
        </Reveal>
        <Reveal delay={0.15}>
          <Overline className="mb-6">Our Story</Overline>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-8">Founded on the belief that <span className="italic gold-shimmer">success should serve.</span></h2>
          <div className="space-y-5 text-lightgray leading-relaxed">
            <p>What began as a single vision has grown into a constellation of brands — each distinct in its industry, yet united by an unwavering commitment to quality and community.</p>
            <p>JPNS Enterprises was built to prove that luxury and philanthropy are not opposites but partners. From exotic automobiles to unforgettable galas, from restorative wellness to fine dining — every venture is engineered to create beauty, and to give back.</p>
            <p>At the heart of it all is a mission to empower women, uplift children, and strengthen the communities that make our success possible.</p>
          </div>
        </Reveal>
      </section>

      <EditorialMarquee />

      {/* FOUNDER SPOTLIGHT */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center aura-r aura-gold aura-gold-r" data-testid="founder-spotlight">
        <Reveal className="lg:col-span-5">
          <div className="relative lux-halo">
            <div className="absolute -inset-3 border border-gold/30 pointer-events-none" />
            <div className="relative overflow-hidden lux-edge">
              <img src="/jewel-proby-shine.jpg" alt="Jewell Proby Shine, Founder & CEO of JPNS Enterprises LLC"
                className="w-full h-[560px] object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/50 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15} className="lg:col-span-7">
          <Overline className="mb-6">The Founder</Overline>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.02] mb-6">
            Jewell <span className="italic gold-shimmer">Proby Shine</span>
          </h2>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-8">Founder &amp; Chief Executive Officer</p>
          <div className="space-y-5 text-lightgray leading-relaxed max-w-xl">
            <p>Jewell Proby Shine founded JPNS Enterprises LLC on a singular conviction: that ambition and compassion belong together. Under her leadership, the enterprise has grown into a family of distinct luxury brands — each held to an uncompromising standard, each built to give back.</p>
            <p>A believer in the power of women to lead and to lift others, Jewell champions mentorship, opportunity, and community at every level of the organization. From orphanage support in Athi River, Kenya to women's empowerment initiatives at home, her leadership turns every venture into a vehicle for impact — proving that a legacy is measured not by what you build, but by whom you raise along the way.</p>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <Crown size={30} />
            <span className="font-serif italic text-xl text-white/80">Strength. Vision. Legacy.</span>
          </div>
        </Reveal>
      </section>

      {/* STRENGTH · VISION · LEGACY */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 aura-c aura-gold" data-testid="about-creed">
        <Reveal><Overline className="mb-6">The Creed</Overline></Reveal>
        <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl mb-16 leading-[1.05]">What <span className="italic gold-shimmer">Strength. Vision. Legacy.</span> means to us.</h2></Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-gold/20 lux-grid">
          {[
            { t: "Strength", d: "Leadership, resilience, and the confidence to build — an enterprise that stands firm through every season and sets the standard in every industry it enters." },
            { t: "Vision", d: "Innovation and entrepreneurship — seeing opportunity where others see limits, and turning bold ideas into exceptional experiences and growing businesses." },
            { t: "Legacy", d: "Generational impact — empowering women, uplifting children, and giving back to the communities that make our success possible." },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 0.1}>
              <div className="lux-card p-10 h-full group">
                <span className="font-serif text-5xl text-gold/30 group-hover:text-gold/60 transition-colors">0{i + 1}</span>
                <h3 className="font-serif text-3xl mt-6 mb-4">{v.t}</h3>
                <p className="text-lightgray text-sm leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-24 aura-r" data-testid="mission-vision">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-px bg-gold/20 lux-grid">
        {[
          { k: "Mission", t: "To build enduring brands that set new standards of excellence — while channeling our success into lasting change for women, children, and communities worldwide." },
          { k: "Vision", t: "A world where enterprise and empathy rise together; where every achievement leaves a legacy larger than itself." },
        ].map((b, i) => (
          <Reveal key={b.k} delay={i * 0.12}>
            <div className="lux-card p-10 md:p-14 h-full">
              <Crown size={36} className="mb-8" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">{b.k}</p>
              <p className="font-serif text-2xl md:text-3xl leading-snug">{b.t}</p>
            </div>
          </Reveal>
        ))}
        </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 aura-l aura-gold">
        <Reveal><Overline className="mb-6">What We Stand For</Overline></Reveal>
        <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl mb-16">Our core <span className="italic gold-shimmer">values</span>.</h2></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 lux-grid">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="lux-card p-8 h-full group">
                <span className="font-serif text-4xl text-gold/30 group-hover:text-gold/60 transition-colors">0{i + 1}</span>
                <h3 className="font-serif text-2xl mt-6 mb-3">{v.t}</h3>
                <p className="text-lightgray text-sm leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
