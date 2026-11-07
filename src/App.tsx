import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AnimatedBackground } from './components/AnimatedBackground';
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';

// Scroll to top helper on route change (unless hash exists)
const ScrollToTopOnRoute = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Animated route container
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-transparent text-[#c6d0f5] selection:bg-[#7b2fff]/30 selection:text-[#00f5ff] flex flex-col justify-between relative overflow-x-hidden">
        {/* Animated Cybernetic Visual Background */}
        <AnimatedBackground />

        {/* Scroll restoration helper */}
        <ScrollToTopOnRoute />

        {/* Persistent Sticky Navbar */}
        <Navbar />

        {/* Main Routed Content */}
        <div className="flex-grow relative z-10">
          <AnimatedRoutes />
        </div>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
