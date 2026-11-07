import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { FeaturedProjectsSlider } from '../components/FeaturedProjectsSlider';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState('Website Development');
  const location = useLocation();

  // Scroll to hash on mount if present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.hash]);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForInquiry(serviceTitle);
    scrollToContact();
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {/* 01 Hero Section */}
      <Hero
        onExploreServices={scrollToServices}
        onGetInTouch={scrollToContact}
      />

      {/* Thin Gradient Divider */}
      <div className="h-[1px] w-full bg-glow-line" />

      {/* 02 Agency Vision & Telemetry (No video) */}
      <AboutSection />

      {/* Thin Gradient Divider */}
      <div className="h-[1px] w-full bg-glow-line" />

      {/* 03 Core Capabilities & Services (With responsive slider) */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Thin Gradient Divider */}
      <div className="h-[1px] w-full bg-glow-line" />

      {/* 04 Featured Works & Concept Specimens Slider */}
      <FeaturedProjectsSlider />

      {/* Thin Gradient Divider */}
      <div className="h-[1px] w-full bg-glow-line" />

      {/* 05 Why Choose Us (With Fast Delivery & Interactive Carousel Slider) */}
      <WhyChooseUs />

      {/* Thin Gradient Divider */}
      <div className="h-[1px] w-full bg-glow-line" />

      {/* 06 Direct Intake & Contact */}
      <ContactSection initialService={selectedServiceForInquiry} />
    </motion.main>
  );
};

export default HomePage;
