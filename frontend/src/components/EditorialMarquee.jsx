import Marquee from "react-fast-marquee";

const WORDS = ["Strength", "Vision", "Legacy", "Impact", "Excellence", "Prosperity"];

export const EditorialMarquee = () => (
  <div className="relative py-16 overflow-hidden select-none lux-band" data-testid="marquee">
    <div className="absolute top-0 inset-x-0 lux-hairline" />
    <div className="absolute bottom-0 inset-x-0 lux-hairline" />
    <Marquee speed={35} gradient={false}>
      {WORDS.concat(WORDS).map((w, i) => (
        <span key={i} className="font-serif italic text-6xl sm:text-8xl text-stroke-gold mx-10">
          {w} <span className="gold-shimmer not-italic">✦</span>
        </span>
      ))}
    </Marquee>
  </div>
);
