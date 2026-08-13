import { Reveal, MaskedLines, Overline } from "./Reveal";

export const PageHeader = ({ overline, title, titleAccent, subtitle, testid, image, imageAlt }) => (
  <section className="relative pt-40 pb-16 overflow-hidden" data-testid={testid}>
    <div className="absolute -top-20 -right-20 w-[560px] h-[560px] rounded-full bg-vividp/28 blur-[150px] pointer-events-none" />
    <div className="absolute top-10 -left-32 w-[420px] h-[420px] rounded-full bg-deepp/60 blur-[150px] pointer-events-none" />
    <div className={`relative max-w-[1400px] mx-auto px-6 lg:px-10 ${image ? "grid lg:grid-cols-12 gap-12 lg:gap-16 items-center" : ""}`}>
      <div className={image ? "lg:col-span-7" : ""}>
        <Reveal><Overline className="mb-8">{overline}</Overline></Reveal>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight max-w-4xl">
          <MaskedLines delay={0.2} lines={[<span key="t">{title} <span className="italic gold-shimmer">{titleAccent}</span></span>]} />
        </h1>
        {subtitle && (
          <Reveal delay={0.3}><p className="mt-8 text-lightgray text-lg max-w-xl leading-relaxed">{subtitle}</p></Reveal>
        )}
      </div>
      {image && (
        <Reveal delay={0.2} className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/30 pointer-events-none" />
            <div className="relative overflow-hidden">
              <img src={image} alt={imageAlt || ""} className="w-full h-[440px] lg:h-[520px] object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/45 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      )}
    </div>
  </section>
);
