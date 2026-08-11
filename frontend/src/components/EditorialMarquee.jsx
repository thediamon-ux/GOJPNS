import Marquee from "react-fast-marquee";

const WORDS = ["Strength", "Vision", "Legacy", "Impact", "Excellence", "Prosperity"];

export const EditorialMarquee = () => (
  <div className="py-16 border-y border-gold/15 overflow-hidden select-none" data-testid="marquee">
    <Marquee speed={35} gradient={false}>
      {WORDS.concat(WORDS).map((w, i) => (
        <span key={i} className="font-serif italic text-6xl sm:text-8xl text-stroke-gold mx-10">
          {w} <span className="text-gold/40 not-italic">✦</span>
        </span>
      ))}
    </Marquee>
  </div>
);
