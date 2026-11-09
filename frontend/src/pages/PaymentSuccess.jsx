import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { CheckCircle2, Loader2, ArrowUpRight, XCircle } from "lucide-react";
import { Crown } from "../components/Motifs";
import { API } from "../data";

const MAX_ATTEMPTS = 12;

export default function PaymentSuccess() {
  const location = useLocation();
  const [status, setStatus] = useState("checking"); // checking | paid | failed | timeout

  useEffect(() => {
    const sessionId = new URLSearchParams(location.search).get("session_id");
    if (!sessionId) { setStatus("failed"); return; }
    let attempts = 0;
    let active = true;

    const poll = async () => {
      if (!active) return;
      if (attempts >= MAX_ATTEMPTS) { setStatus("timeout"); return; }
      attempts += 1;
      try {
        const { data } = await axios.get(`${API}/payments/status/${sessionId}`);
        if (data.payment_status === "paid") { setStatus("paid"); return; }
        if (["failed", "expired"].includes(data.payment_status)) { setStatus("failed"); return; }
      } catch { /* keep trying */ }
      setTimeout(poll, 2000);
    };
    poll();
    return () => { active = false; };
  }, [location.search]);

  return (
    <div data-testid="payment-success-page" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-vividp/25 blur-[160px] pointer-events-none" />
      <div className="relative max-w-xl w-full text-center border border-gold/25 p-12 md:p-16">
        {status === "checking" && (
          <>
            <Loader2 size={48} color="#D4AF37" className="mx-auto mb-8 animate-spin" />
            <h1 className="font-serif text-3xl md:text-4xl mb-4">Confirming your order…</h1>
            <p className="text-lightgray">One moment while we verify your payment.</p>
          </>
        )}
        {status === "paid" && (
          <>
            <Crown size={48} className="mx-auto mb-6" />
            <CheckCircle2 size={40} color="#D4AF37" className="mx-auto mb-6" />
            <h1 className="font-serif text-3xl md:text-4xl mb-4">Thank you — <span className="italic gold-shimmer">order confirmed!</span></h1>
            <p className="text-lightgray mb-10">Your Jewells Herbal Magic Blend is on its way. A receipt has been sent to your email, and we'll ship to the address you provided.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/" className="bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">Back Home</Link>
              <Link to="/shop" className="border border-gold/40 px-8 py-4 text-xs uppercase tracking-[0.2em] hover:border-gold hover:bg-gold/5 transition-colors">Order More</Link>
            </div>
          </>
        )}
        {(status === "failed" || status === "timeout") && (
          <>
            <XCircle size={44} color="#D4AF37" className="mx-auto mb-6" />
            <h1 className="font-serif text-3xl md:text-4xl mb-4">{status === "timeout" ? "Still processing…" : "Payment not completed"}</h1>
            <p className="text-lightgray mb-10">
              {status === "timeout"
                ? "Your payment is taking a little longer than usual. If you were charged, your order is confirmed — check your email for a receipt."
                : "We couldn't confirm a completed payment. No worries — you can try again anytime."}
            </p>
            <Link to="/shop" className="inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">
              Return to Shop <ArrowUpRight size={16} />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
