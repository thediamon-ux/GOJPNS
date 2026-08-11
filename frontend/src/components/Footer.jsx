import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { ArrowUpRight } from "lucide-react";
import { API, DIVISIONS, SOCIALS } from "../data";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("Welcome to the JPNS Circle. Check your inbox.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="footer" className="relative pt-32 pb-10 overflow-hidden border-t border-gold/15">
      <div className="absolute -top-40 left-1/3 w-[680px] h-[680px] rounded-full bg-vividp/30 blur-[150px] pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <img src="/jpns-logo.png" alt="JPNS Enterprise LLC logo" className="w-40 sm:w-48 mb-8" />
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[0.95] text-white">
              JPNS<br /><span className="text-stroke-gold">ENTERPRISE</span>
            </h2>
            <p className="mt-6 text-lightgray max-w-md leading-relaxed">
              One enterprise, unlimited impact. Building a legacy across industries while lifting communities worldwide.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-12">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-6">Divisions</p>
              <ul className="space-y-3">
                {DIVISIONS.map((d) => (
                  <li key={d.slug}>
                    <Link to={`/divisions/${d.slug}`} className="text-lightgray hover:text-white transition-colors duration-300 text-sm">{d.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-6">Newsletter</p>
              <form onSubmit={subscribe} data-testid="newsletter-form" className="mb-8">
                <input
                  data-testid="newsletter-input"
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" className="lux-input mb-4"
                />
                <button data-testid="newsletter-submit" disabled={loading} className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-white transition-colors disabled:opacity-50">
                  {loading ? "Subscribing…" : "Subscribe"}
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
              <div className="flex flex-wrap gap-4">
                {SOCIALS.map((s) => (
                  <a key={s} href="#" className="text-xs uppercase tracking-[0.15em] text-lightgray hover:text-gold transition-colors">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/10 text-xs text-lightgray/60">
          <span>© {new Date().getFullYear()} JPNS Enterprise LLC. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Strength · Vision · Legacy</span>
          <a href="mailto:info@jpnsenterprise.net" className="hover:text-gold transition-colors">info@jpnsenterprise.net</a>
        </div>
      </div>
    </footer>
  );
};
