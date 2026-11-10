import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Sparkles } from "@/components/Sparkles";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Divisions from "@/pages/Divisions";
import DivisionDetail from "@/pages/DivisionDetail";
import SelfCare from "@/pages/SelfCare";
import EventsEntertainment from "@/pages/EventsEntertainment";
import Shop from "@/pages/Shop";
import PaymentSuccess from "@/pages/PaymentSuccess";
import PaymentCancel from "@/pages/PaymentCancel";
import Impact from "@/pages/Impact";
import Contact from "@/pages/Contact";
import Partner from "@/pages/Partner";
import "@/App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    let raf;
    const loop = (t) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);
  return null;
}

function App() {
  return (
    <div className="App grain min-h-screen bg-transparent text-white">
      <Sparkles />
      <BrowserRouter>
        <SmoothScroll />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/divisions" element={<Divisions />} />
            <Route path="/divisions/self-care" element={<SelfCare />} />
            <Route path="/divisions/events-entertainment" element={<EventsEntertainment />} />
            <Route path="/divisions/:slug" element={<DivisionDetail />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/payment/cancel" element={<PaymentCancel />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      <Toaster theme="dark" position="bottom-right" toastOptions={{ style: { background: "#1A0E26", border: "1px solid rgba(215,175,56,0.3)", color: "#fff" } }} />
    </div>
  );
}

export default App;
