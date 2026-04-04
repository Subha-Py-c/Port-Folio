import Lenis from "lenis";
import { useRef, useEffect } from "react";

import "./scrollbar.css";
import IntroSection from "./IntroSection/IntroSection";
import ExperienceSection from "./ExperienceSection/ExperienceSection";
import AcademicsSection from "./AcademicsSection/AcademicsSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";
import ThanksSection from "./ThanksSection/ThanksSection";
import Cursor from "./Cursor/Cursor";

const Main = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Store reference for cleanup
    lenisRef.current = lenis;

    // Animation frame loop
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main role="main">
      <IntroSection />
      <ExperienceSection />
      <AcademicsSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <ThanksSection />
      <Cursor />
    </main>
  );
};

export default Main;
