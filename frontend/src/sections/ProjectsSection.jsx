import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import MMRImg from "../Assets/Mobile_robot.jpg";
import saeImg from "../Assets/sae.jpeg";
import selfImg from "../Assets/self_balancing.jpeg"
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={selfImg}
                alt="2-Wheel Self-Balancing Electric Wheelchair"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2e] to-transparent"></div>
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-[#f59e0b] font-bold"> 2 Wheel Self-Balancing Electric Wheelchair</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Developed a sophisticated Simulink-based control architecture for a self-balancing wheelchair system with joystick control.Control stratergies were tested in siumualtions and in real time. Proof of concept vehicle built successfully.</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">MATLAB/Simulink</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Electrical system architecture</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Control Systems(PID,LQR,Fuzzy Logic)</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Raspberry pi</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">PCB design</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Hardware assembly and build</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Simulation (Simscape)</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={MMRImg}
                alt="Mobile Manipulation Robot"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2e] to-transparent"></div>
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-[#f59e0b] font-bold">Mobile Robot</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Designed and implemented a mobile robot featuring a rack and pinion pickup mechanism using AutoCAD. Used Arduino UNO as robot's processor. Goal of this project was to design and build a mobile robot capable of picking up a load and navigating from point A to point B. </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Mechatronics</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Arduino/Arduino IDE</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Robot Navigation</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">AutoCAD</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">System Integration</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all overflow-hidden group">
            <div className="relative h-48 overflow-hidden">
              <img
                src={saeImg}
                alt="SAE Electric 2-Wheeler"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b2e] to-transparent"></div>
            </div>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-[#f59e0b] font-bold">Electric 2-Wheeler(SAE Competition)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">Led a team of 10 engineers to design and build a complete electric 2-wheeler vehicle system, achieving Top 10 nationwide ranking in SAE competition in India. Duties included powertrain design and calculations, EV hardware, system requirements, programming and project management. </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Vehicle Design</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Team Leadership</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">System Architecture</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Electrical Systems</Badge>
                <Badge className="bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/30 text-xs">Electric Powertrain</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;