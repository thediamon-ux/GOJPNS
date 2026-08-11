import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import { Reveal, Overline } from "../components/Reveal";
import { API, ROLES } from "../data";

export default function Careers() {
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "" });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const apply = (role) => {
    setForm((f) => ({ ...f, role }));
    document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/careers`, form);
      toast.success("Application received. We'll be in touch soon.");
      setForm({ name: "", email: "", role: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PageHeader
        testid="careers-header"
        overline="Careers"
        title="Build your legacy"
        titleAccent="with ours."
        subtitle="We're always seeking exceptional talent who share our obsession with excellence and our commitment to purpose."
      />

      {/* CULTURE */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-8">
        {[
          { t: "A Culture of Excellence", d: "Work alongside people who refuse to settle — and who lift each other higher." },
          { t: "Purpose in Every Role", d: "Your work directly fuels initiatives that change lives around the world." },
          { t: "Room to Rise", d: "We invest in our people, championing growth, mentorship, and opportunity." },
        ].map((c, i) => (
          <Reveal key={c.t} delay={i * 0.1}>
            <div className="border border-gold/15 p-8 h-full">
              <span className="font-serif text-4xl text-gold/30">0{i + 1}</span>
              <h3 className="font-serif text-2xl mt-5 mb-3">{c.t}</h3>
              <p className="text-lightgray text-sm leading-relaxed">{c.d}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ROLES */}
      <section className="py-16 max-w-[1400px] mx-auto px-6 lg:px-10" data-testid="roles-list">
        <Reveal><Overline className="mb-10">Open Positions</Overline></Reveal>
        <div className="border-t border-gold/15">
          {ROLES.map((r, i) => (
            <Reveal key={i}>
              <div data-testid={`role-${i}`} className="group grid md:grid-cols-12 gap-4 items-center py-8 border-b border-gold/15 hover:bg-deepp/20 transition-colors duration-400 px-2">
                <h3 className="md:col-span-5 font-serif text-2xl md:text-3xl group-hover:text-gold transition-colors">{r.title}</h3>
                <span className="md:col-span-2 text-xs uppercase tracking-[0.2em] text-lightgray">{r.dept}</span>
                <span className="md:col-span-2 text-xs uppercase tracking-[0.2em] text-lightgray">{r.type}</span>
                <span className="md:col-span-2 text-xs uppercase tracking-[0.2em] text-lightgray">{r.location}</span>
                <button data-testid={`apply-btn-${i}`} onClick={() => apply(r.title)}
                  className="md:col-span-1 justify-self-start md:justify-self-end inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-white transition-colors">
                  Apply <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply-form" className="py-24 max-w-[1400px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <Overline className="mb-6">Apply Now</Overline>
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05]">Tell us your <span className="italic text-gold">story</span>.</h2>
          <p className="text-lightgray mt-6 leading-relaxed max-w-md">Send us your details and a note about why you'd thrive at JPNS Enterprise. We review every application personally.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <form onSubmit={submit} data-testid="careers-form" className="space-y-8">
            <input data-testid="careers-name" required placeholder="Full name" className="lux-input" value={form.name} onChange={set("name")} />
            <input data-testid="careers-email" required type="email" placeholder="Email address" className="lux-input" value={form.email} onChange={set("email")} />
            <input data-testid="careers-role" required placeholder="Role you're applying for" className="lux-input" value={form.role} onChange={set("role")} />
            <textarea data-testid="careers-message" required rows={4} placeholder="Why you?" className="lux-input" value={form.message} onChange={set("message")} />
            <button data-testid="careers-submit" disabled={loading} className="group inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors disabled:opacity-50">
              {loading ? "Sending…" : "Submit Application"} <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
