import NeuralBackground from "@/components/NeuralBackground";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      {/* Animated background canvas */}
      <NeuralBackground />

      {/* Background gradient layers */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(0, 102, 255, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(0, 212, 255, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 50%, rgba(136, 68, 255, 0.03) 0%, transparent 70%)
          `,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Content wrapper */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <HeroSection />

        {/* Separator */}
        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)", margin: "0 5%" }} />

        <AboutSection />

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.08), transparent)", margin: "0 5%" }} />

        <SkillsSection />

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)", margin: "0 5%" }} />

        <ExperienceSection />

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.08), transparent)", margin: "0 5%" }} />

        <ProjectsSection />

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)", margin: "0 5%" }} />

        <EducationSection />

        <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(0,102,255,0.08), transparent)", margin: "0 5%" }} />

        <ContactSection />

        <Footer />
      </div>
    </main>
  );
}
