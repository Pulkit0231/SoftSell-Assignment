
import React from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  // Set page title and meta description
  React.useEffect(() => {
    document.title = "SoftSell | Unlock Value in Your Unused Software";

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "SoftSell helps businesses recover costs from unused software licenses with secure, hassle-free resale solutions.");
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.setAttribute("name", "description");
      newMetaDescription.setAttribute("content", "SoftSell helps businesses recover costs from unused software licenses with secure, hassle-free resale solutions.");
      document.getElementsByTagName('head')[0].appendChild(newMetaDescription);
    }
  }, []);

  return (
    <Layout>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </Layout>
  );
};

export default Index;
