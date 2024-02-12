"use client";

import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
import LogoCollection from "./components/LogoCollection";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <AppAppBar />
      <Hero />
      <LogoCollection />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
