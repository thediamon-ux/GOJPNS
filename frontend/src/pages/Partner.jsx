import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Overline } from "../components/Reveal";
import { Crown } from "../components/Motifs";
import { API } from "../data";
import { Seo } from "../components/Seo";

const BENEFITS = [
  "Access to a diversified portfolio of luxury brands",
  "Co-branded events and cross-division exposure",
  "A partner in measurable, meaningful social impact",
  "Direct collaboration with our leadership team",
];

export default function Partner() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/partner`, form);
      toast.success("Inquiry received. Our partnerships team will reach out.");
      setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Seo title="Partner With Us — JPNS Enterprises LLC" description="Explore partnerships with JPNS Enterprises LLC — a diversified luxury enterprise spanning events, wellness, hospitality, automotive, and philanthropy." />
      <PageHeader
        testid="partner-header"
        overline="Partner With Us"
        title="Grow a legacy,"
        titleAccent="together."
        subtitle="We collaborate with investors, brands, and visionaries who want to build something enduring — and give back while doing it."
      />

      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <Reveal className="lg:col-span-5">
          <Crown size={44} className="mb-8" />
          <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-snug">Why partner with <span className="italic text-gold">JPNS?</span></h2>
          <ul className="space-y-5">
            {BENEFITS.map((b, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-0.5 w-7 h-7 shrink-0 border border-gold/40 flex items-center justify-center">
                  <Check size={14} color="#D7AF38" strokeWidth={1.5} />
                </span>
                <span className="text-lightgray leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="border border-gold/20 p-8 md:p-12">
            <Overline className="mb-8">Partnership Inquiry</Overline>
            <form onSubmit={submit} data-testid="partner-form" className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <input data-testid="partner-name" required placeholder="Full name" className="lux-input" value={form.name} onChange={set("name")} />
                <input data-testid="partner-email" required type="email" placeholder="Email address" className="lux-input" value={form.email} onChange={set("email")} />
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                <input data-testid="partner-company" placeholder="Company / Organization" className="lux-input" value={form.company} onChange={set("company")} />
                <input data-testid="partner-phone" placeholder="Phone (optional)" className="lux-input" value={form.phone} onChange={set("phone")} />
              </div>
              <input data-testid="partner-interest" placeholder="Area of interest (e.g. Events, Philanthropy)" className="lux-input" value={form.interest} onChange={set("interest")} />
              <textarea data-testid="partner-message" required rows={4} placeholder="Tell us about your vision" className="lux-input" value={form.message} onChange={set("message")} />
              <button data-testid="partner-submit" disabled={loading} className="btn-shine group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50">
                {loading ? "Sending…" : "Submit Inquiry"} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
