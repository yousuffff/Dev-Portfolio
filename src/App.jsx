import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";

import {injectFonts} from "./utils/injectFonts";

import "./styles/global.css";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    injectFonts();
  }, []);

  return (
    <div className={`root theme-${dark ? "dark" : "light"}`}>
      <CursorGlow />

      <Navbar dark={dark} setDark={setDark} />

      <Hero />

      <ProjectsSection />

      <SkillsSection />

      <AboutSection />

      <ContactSection />

      <Footer />
    </div>
  );
}