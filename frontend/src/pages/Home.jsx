import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ExperienceSection from '../sections/ExperienceSection';
import SkillsSection from '../sections/SkillsSection';
import ProjectsSection from '../sections/ProjectsSection';
import AchievementsSection from '../sections/AchievementsSection';
import EducationSection from '../sections/EducationSection';
import ContactSection from '../sections/ContactSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-[#0a1628] text-white min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;