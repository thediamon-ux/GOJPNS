// Gold line-art crown + diamond motifs
export const Crown = ({ className = "", size = 28, color = "#D4AF37" }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}
    stroke={color} strokeWidth="1.25" strokeLinejoin="round" strokeLinecap="round">
    <path d="M6 16l6 20h24l6-20-10 8-8-14-8 14-10-8z" />
    <circle cx="6" cy="14" r="2" /><circle cx="42" cy="14" r="2" />
    <circle cx="24" cy="8" r="2" /><path d="M12 40h24" />
  </svg>
);

export const Diamond = ({ className = "", size = 20, color = "#D4AF37" }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}
    stroke={color} strokeWidth="1.25" strokeLinejoin="round">
    <path d="M6 12l10-8 10 8-10 16L6 12z" />
    <path d="M6 12h20M11 4l-5 8 10 16M21 4l5 8-10 16" />
  </svg>
);
