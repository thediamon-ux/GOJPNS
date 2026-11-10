import { Reveal, MaskedLines, Overline } from "./Reveal";

export const PageHeader = ({ overline, title, titleAccent, subtitle, testid, image, imageAlt }) => (
  <section className="relative pt-40 pb-20 overflow-hidden" data-testid={testid}>
    {/* royal-purple atmosphere (echoes the homepage hero); masked so it fades into the page with no hard edge */}
    <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,black_55%,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black_55%,transparent)]">
    <div className="absolute inset-0 bg-gradient-to-br from-deepp/80 via-vividp/25 to-transparent pointer-events-none" />
    <div className="absolute -top-24 -right-24 w-[640px] h-[640px] rounded-full bg-vividp/45 blur-[150px] pointer-events-none" />
    <div className="absolute top-10 -left-32 w-[480px] h-[480px] rounded-full bg-deepp/80 blur-[150px] pointer-events-none" />
    {/* champagne-gold ambient light behind the heading */}
    <div className="absolute top-24 left-0 w-[640px] h-[320px] bg-[radial-gradient(closest-side,rgba(215,175,56,0.16),transparent)] pointer-events-none" />
    </div>
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
          <div className="relative lux-halo">
            <div className="absolute -inset-3 border border-gold/30 pointer-events-none" />
            <div className="relative overflow-hidden lux-edge">
              <img src={image} alt={imageAlt || ""} className="w-full h-[440px] lg:h-[520px] object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-void/45 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      )}
    </div>
  </section>
);
