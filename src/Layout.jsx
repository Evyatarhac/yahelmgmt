import React from "react";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <SmoothScroll>
      <div className="grain relative min-h-screen bg-brand-cream font-sans text-brand-ink" dir="rtl">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
