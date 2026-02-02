import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
          Experience
        </h2>
        <div className="space-y-12">
          <Card className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">Lead Robotics Engineer</h3>
                  <p className="text-xl text-gray-300">Centaur Robotics Limited (Personal mobility manufacturer)</p>
                </div>
                <div className="text-gray-400 font-semibold mt-2 md:mt-0">Jan 2025 - Nov 2025</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Leading ISO 26262-compliant Simulink development for safety-critical vehicle systems</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Architecting and deploying control algorithms on STM32 embedded platforms</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Overseeing HIL/SIL testing infrastructure and validation workflows</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Spearheading PCB design and hardware integration for robotics platforms</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Driving technical strategy for prototype delivery and fundraising initiatives</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#f59e0b] mb-2">Robotics Engineer</h3>
                  <p className="text-xl text-gray-300">Centaur Robotics Limited</p>
                </div>
                <div className="text-gray-400 font-semibold mt-2 md:mt-0">2023–2025</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Developed ISO 26262-compliant MATLAB/Simulink models for vehicle control systems</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Implemented and tested embedded software on STM32 microcontrollers</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Conducted MIL, SIL, and HIL testing to validate control algorithms</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Designed and fabricated custom PCBs for sensor integration and motor control</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Delivered full functional prototype contributing to successful fundraising round</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;