import React from 'react';
import { Mail, Linkedin, Github, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                David Joseph Premkumar
              </h1>
              <h2 className="text-3xl lg:text-3xl font-bold text-[#f59e0b] leading-tight">
                
                Robotics | Control Systems Engineer
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Robotics/Control system Engineer with 3+ years of experience building and validating electrical vehicles using MATLAB/Simulink, MIL/SIL/HIL workflows, and embedded platforms.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-6 text-base font-semibold transition-all hover:scale-105"
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => window.open('https://customer-assets.emergentagent.com/job_model-engineer/artifacts/vs60di5n_DavidJosephResume.pdf', '_blank')}
                variant="outline"
                className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white px-6 py-6 text-base font-semibold transition-all hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f59e0b]/20 rounded-2xl blur-3xl"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_model-engineer/artifacts/51qqx5n6_WhatsApp%20Image%202026-01-05%20at%2016.38.45.jpeg"
                alt="David Joseph"
                className="relative rounded-2xl w-full max-w-md object-cover shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <ChevronDown className="h-8 w-8 text-[#f59e0b]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;