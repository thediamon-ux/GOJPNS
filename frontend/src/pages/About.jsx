import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Overline } from "../components/Reveal";
import { EditorialMarquee } from "../components/EditorialMarquee";
import { Crown } from "../components/Motifs";

const VALUES = [
  { t: "Excellence", d: "We refuse the ordinary. Every division operates at the highest standard of craft and care." },
  { t: "Integrity", d: "Trust is our currency. We honor our word to partners, clients, and communities alike." },
  { t: "Empowerment", d: "We create opportunity — especially for women seeking mentorship, inspiration, and a seat at the table." },
  { t: "Purpose", d: "Profit with meaning. A share of everything we build returns to those who need it most." },
];

export default function About() {
  return (
    <div>
      <PageHeader
        testid="about-header"
        overline="About Us"
        title="One enterprise."
        titleAccent="Unlimited impact."
        subtitle="JPNS Enterprise LLC is a diversified holding company uniting luxury, experience, wellness, hospitality, and philanthropy under a single, purpose-driven vision."
      />

      <section className="py-20 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative overflow-hidden border border-gold/20">
            <img src="https://images.unsplash.com/photo-1688614598602-0a71fbfed6c5?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
              alt="JPNS Enterprise" className="w-full h-[520px] object-cover grayscale-[0.2]" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/60 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <Overline className="mb-6">Our Story</Overline>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] mb-8">Founded on the belief that <span className="italic text-gold">success should serve.</span></h2>
          <div className="space-y-5 text-lightgray leading-relaxed">
            <p>What began as a single vision has grown into a constellation of brands — each distinct in its industry, yet united by an unwavering commitment to quality and community.</p>
            <p>JPNS Enterprise was built to prove that luxury and philanthropy are not opposites but partners. From exotic automobiles to unforgettable galas, from restorative wellness to fine dining — every venture is engineered to create beauty, and to give back.</p>
            <p>At the heart of it all is a mission to empower women, uplift children, and strengthen the communities that make our success possible.</p>
          </div>
        </Reveal>
      </section>

      <EditorialMarquee />

      {/* MISSION / VISION */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-px bg-gold/15" data-testid="mission-vision">
        {[
          { k: "Mission", t: "To build enduring brands that set new standards of excellence — while channeling our success into lasting change for women, children, and communities worldwide." },
          { k: "Vision", t: "A world where enterprise and empathy rise together; where every achievement leaves a legacy larger than itself." },
        ].map((b, i) => (
          <Reveal key={b.k} delay={i * 0.12}>
            <div className="bg-void p-10 md:p-14 h-full">
              <Crown size={36} className="mb-8" />
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">{b.k}</p>
              <p className="font-serif text-2xl md:text-3xl leading-snug">{b.t}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* VALUES */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10">
        <Reveal><Overline className="mb-6">What We Stand For</Overline></Reveal>
        <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl mb-16">Our core <span className="italic text-gold">values</span>.</h2></Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15">
          {VALUES.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.08}>
              <div className="bg-void p-8 h-full group hover:bg-deepp/30 transition-colors duration-500">
                <span className="font-serif text-4xl text-gold/30 group-hover:text-gold/60 transition-colors">0{i + 1}</span>
                <h3 className="font-serif text-2xl mt-6 mb-3">{v.t}</h3>
                <p className="text-lightgray text-sm leading-relaxed">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="leadership">
        <Reveal><Overline className="mb-6">Leadership</Overline></Reveal>
        <Reveal delay={0.1}><h2 className="font-serif text-4xl md:text-5xl mb-16">Guided by <span className="italic text-gold">vision</span>.</h2></Reveal>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Founder & CEO", img: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
            { name: "Chief Operating Officer", img: "https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
            { name: "Head of Philanthropy", img: "https://images.unsplash.com/photo-1758599668429-121d54188b9c?crop=entropy&cs=srgb&fm=jpg&q=85&w=800" },
          ].map((m, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="group">
                <div className="relative overflow-hidden border border-gold/15 mb-6">
                  <img src={m.img} alt={m.name} className="w-full h-[420px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-vividp/0 group-hover:bg-vividp/10 transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl">Leadership Name</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gold mt-2">{m.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16 flex justify-center">
            <Link to="/partner" className="group inline-flex items-center gap-3 border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors">
              Join Our Journey <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
