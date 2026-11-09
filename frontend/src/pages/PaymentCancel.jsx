import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function PaymentCancel() {
  return (
    <div data-testid="payment-cancel-page" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-deepp/50 blur-[160px] pointer-events-none" />
      <div className="relative max-w-xl w-full text-center border border-gold/25 p-12 md:p-16">
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Checkout <span className="italic gold-shimmer">cancelled</span></h1>
        <p className="text-lightgray mb-10">No payment was taken. Your tea is still waiting whenever you're ready.</p>
        <Link to="/shop" className="inline-flex items-center gap-3 bg-gold text-void px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-white transition-colors">
          Back to Shop <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
