"use client";

import AppAppBar from "./components/AppAppBar";
import Hero from "./components/Hero";
// import LogoCollection from "./components/LogoCollection";
// import Features from "./components/Features";
// import Testimonials from "./components/Testimonials";
// import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
// import FAQ from "./components/FAQ";
import FeaturesSeperated from "./components/FeaturesSeperated";
import NetworkComponent from "./components/Network";
import Roadmap from "./components/Roadmap";
import NewsletterForm from "./components/NewsletterForm";
// import VerticalTabs from "./components/MuiTabs";
import TeamsComponent from "./components/Teams";
import BenefitsSectionComponent from "./components/BenefitsSection";

export default function Home() {
  return (
    <>
      <AppAppBar />
      <Hero />
      {/* <VerticalTabs /> */}
      {/* <LogoCollection /> */}
      {/* <Features /> */}
      {/* <FeaturesSeperated /> */}
      <BenefitsSectionComponent />
      {/* <NetworkComponent /> */}
      {/* <Roadmap /> */}
      <TeamsComponent />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      <NewsletterForm />
      <Footer />
    </>
  );
}
