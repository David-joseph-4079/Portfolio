import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    'Control & Systems': [
      'MATLAB / Simulink',
      'Model-Based Design',
      'Control Systems (PID, LQR, Fuzzy)',
      'V-Cycle'
    ],
    'Embedded & Hardware': [
      'STM32',
      'Arduino',
      'Raspberry Pi',
      'Embedded C / C++',
      'PCB Design',
      'Sensors & Actuators'
    ],
    'Testing & Validation': [
      'MIL / SIL / HIL Testing',
      'System Integration',
      'Functional Safety'
    ],
    'Tools': [
      'Git / GitHub',
      'ROS',
      'CAN',
      'SPI',
      'I2C',
      'UART'
    ]
  };

  const projects = [
    {
      title: '2-Wheel Self-Balancing Electric Wheelchair',
      description: 'Developed a sophisticated Simulink-based control architecture for a self-balancing wheelchair system with real-world vehicle testing and STM32 deployment.',
      technologies: ['MATLAB/Simulink', 'STM32', 'Control Systems', 'Embedded C'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop'
    },
    {
      title: 'Mobile Manipulation Robot (MSc Project)',
      description: 'Designed and implemented a mobile manipulation robot featuring a rack and pinion pickup mechanism with autonomous navigation and comprehensive systems integration.',
      technologies: ['ROS', 'Autonomous Navigation', 'Mechanical Design', 'System Integration'],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
    },
    {
      title: 'SAE Electric 2-Wheeler',
      description: 'Led a team of 10 engineers to design and build a complete electric 2-wheeler vehicle system, achieving Top 10 nationwide ranking in SAE competition.',
      technologies: ['Vehicle Design', 'Team Leadership', 'System Architecture', 'Electrical Systems'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
    }
  ];

  const experiences = [
    {
      title: 'Lead Robotics Engineer',
      company: 'Centaur Robotics Limited',
      period: '2025',
      responsibilities: [
        'Leading ISO 26262-compliant Simulink development for safety-critical vehicle systems',
        'Architecting and deploying control algorithms on STM32 embedded platforms',
        'Overseeing HIL/SIL testing infrastructure and validation workflows',
        'Spearheading PCB design and hardware integration for robotics platforms',
        'Driving technical strategy for prototype delivery and fundraising initiatives'
      ]
    },
    {
      title: 'Robotics Engineer',
      company: 'Centaur Robotics Limited',
      period: '2023–2025',
      responsibilities: [
        'Developed ISO 26262-compliant MATLAB/Simulink models for vehicle control systems',
        'Implemented and tested embedded software on STM32 microcontrollers',
        'Conducted MIL, SIL, and HIL testing to validate control algorithms',
        'Designed and fabricated custom PCBs for sensor integration and motor control',
        'Delivered full functional prototype contributing to successful fundraising round'
      ]
    }
  ];

  return (
    <div className="bg-[#0a1628] text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-[#f59e0b]">DJ</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-[#f59e0b] ${
                    activeSection === item.toLowerCase() ? 'text-[#f59e0b]' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                  David Joseph
                </h1>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#f59e0b] leading-tight">
                  Model-Based Systems Engineer<br />
                  Robotics Engineer
                </h2>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                Robotics and Model-Based Systems Engineer with 3+ years of experience building and validating electromechanical systems using MATLAB/Simulink, MIL/SIL/HIL workflows, and embedded platforms.
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
                  href="mailto:david@example.com"
                  className="p-3 border border-gray-700 rounded-lg hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all"
                >
                  <Mail className="h-6 w-6" />
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

            {/* Right: Portrait */}
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

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0f1b2e]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-left">
            My Story
          </h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              As an MSc Robotics graduate from the University of Sheffield, I've dedicated my career to pushing the boundaries of what's possible in electromechanical systems. My journey in robotics combines rigorous academic training with hands-on startup experience, giving me a unique perspective on building systems that work in the real world.
            </p>
            <p>
              At Centaur Robotics, I've taken full ownership of projects from concept to deployment, leading the development of ISO 26262-compliant vehicle control systems. My approach centers on model-based design philosophy—using MATLAB/Simulink to create robust, validated systems before deployment on embedded platforms like STM32.
            </p>
            <p>
              What drives me is the intersection of mechanical, electrical, and software engineering. I believe the best robotics solutions emerge when you understand all three domains deeply. Whether it's designing PCBs, implementing control algorithms, or validating systems through HIL testing, I bring a cross-disciplinary mindset to every challenge.
            </p>
            <p>
              Beyond technical skills, I'm passionate about building systems that matter. From self-balancing wheelchairs that improve mobility to competition vehicles that push performance limits, I focus on projects where engineering excellence translates to real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
            Experience
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">{exp.title}</h3>
                      <p className="text-xl text-gray-300">{exp.company}</p>
                    </div>
                    <div className="text-gray-400 font-semibold mt-2 md:mt-0">{exp.period}</div>
                  </div>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-[#0f1b2e]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-bold text-[#f59e0b] mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2e] to-transparent"></div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-[#0f1b2e]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-left">
            Achievements
          </h2>
          <Card className="bg-gradient-to-r from-[#f59e0b]/10 to-transparent border-[#f59e0b]/30">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="text-5xl">🏆</div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">
                    Ada Lovelace Award
                  </h3>
                  <p className="text-lg text-gray-300">
                    Best MSc Robotics Project – University of Sheffield
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Any type of query & discussion.
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's build something remarkable together. Whether it's a technical discussion, collaboration opportunity, or project inquiry, I'm always open to connecting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => window.location.href = 'mailto:david@example.com'}
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" /> Send Email
            </Button>
            <Button
              onClick={() => window.open('https://linkedin.com', '_blank')}
              variant="outline"
              className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
            >
              <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 David Joseph. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm italic">
              "Engineering is the art of directing the great sources of power in nature for the use and convenience of man."
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;