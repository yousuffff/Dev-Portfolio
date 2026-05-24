import { useState, useEffect, lazy } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
const GitHubActivity = lazy(() => import("./components/GithubActivity"));

import { injectFonts } from "./utils/injectFont";

// import "./styles/global.css";

export default function App() {
  const [activeNav, setActiveNav] = useState(null);
  const [activeTab, setActiveTab] = useState("web");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [dark, setDark] = useState(true);

  useEffect(() => {
    injectFonts();
  }, []);
  const scrollTo = (id) => {
    setActiveNav(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`root theme-${dark ? "dark" : "light"}`}>
      {/* Scroll progress */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, #c8f05a, #5af0c8)",
          transformOrigin: "0%",
          scaleX,
          zIndex: 200,
        }}
      />
      <div className="bg-grid" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <CursorGlow />

      <div className="wrap">
        <Navbar
          dark={dark}
          setDark={setDark}
          activeNav={activeNav}
          scrollTo={scrollTo}
        />

        <Hero scrollTo={scrollTo} />

        <ProjectsSection activeTab={activeTab} setActiveTab={setActiveTab} />

        <SkillsSection />

        <AboutSection />

        <GitHubActivity />
        
        <ContactSection />

        <Footer />
      </div>
    </div>
  );
}
