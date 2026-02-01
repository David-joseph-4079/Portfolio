import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const projectsData = [
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

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
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
  );
};

export default ProjectsSection;