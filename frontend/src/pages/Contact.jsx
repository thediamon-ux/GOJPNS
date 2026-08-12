import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Overline } from "../components/Reveal";
import { SOCIALS, API } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message sent. Our team will respond shortly.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHeader
        testid="contact-header"
        overline="Contact"
        title="Let's start a"
        titleAccent="conversation."
        subtitle="Whether it's an inquiry, a booking, or simply a hello — our team would be delighted to hear from you."
      />

      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        {/* INFO */}
        <Reveal className="lg:col-span-5">
          <div className="space-y-10">
            {[
              { icon: Mail, label: "Email", value: "info@jpnsenterprise.net", href: "mailto:info@jpnsenterprise.net" },
              { icon: Phone, label: "Phone", value: "678.572.2368", href: "tel:+16785722368" },
              { icon: MapPin, label: "Headquarters", value: "Stockbridge, GA", href: null },
              { icon: Clock, label: "Hours", value: "Open 24/7", href: null },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-5">
                <span className="w-11 h-11 shrink-0 border border-gold/40 flex items-center justify-center">
                  <c.icon size={18} color="#D4AF37" strokeWidth={1.3} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold mb-1">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-lg text-white hover:text-gold transition-colors">{c.value}</a>
                  ) : (
                    <p className="text-lg text-white">{c.value}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="pt-6 border-t border-gold/15">
              <p className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Follow</p>
              <div className="flex flex-wrap gap-5">
                {SOCIALS.map((s) => (
                  <a key={s} href="#" className="text-sm text-lightgray hover:text-gold transition-colors uppercase tracking-wider">{s}</a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* FORM */}
        <Reveal delay={0.15} className="lg:col-span-7">
          <form onSubmit={submit} data-testid="contact-form" className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <input data-testid="contact-name" required placeholder="Full name" className="lux-input" value={form.name} onChange={set("name")} />
              <input data-testid="contact-email" required type="email" placeholder="Email address" className="lux-input" value={form.email} onChange={set("email")} />
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              <input data-testid="contact-phone" placeholder="Phone (optional)" className="lux-input" value={form.phone} onChange={set("phone")} />
              <input data-testid="contact-subject" placeholder="Subject" className="lux-input" value={form.subject} onChange={set("subject")} />
            </div>
            <textarea data-testid="contact-message" required rows={5} placeholder="Your message" className="lux-input" value={form.message} onChange={set("message")} />
            <button data-testid="contact-submit" disabled={loading} className="group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50">
              {loading ? "Sending…" : "Send Message"} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
