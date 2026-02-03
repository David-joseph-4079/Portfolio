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
                  <span>Produced ISO 26262-compliant Simulink code for an electric wheelchair control systems.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Delivered end-to-end system architecture for electrical and software domains.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Oversaw HIL/SIL testing infrastructure and validation workflows.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>PM for PCB design and manufacturing projects.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Driving technical strategy for production delivery.</span>
                </li>
                 <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Troubleshooting hardware and software issues across the entire system. </span>
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
                <div className="text-gray-400 font-semibold mt-2 md:mt-0">Jan 2023– Jan 2025</div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Performed control system R&D for a 2-wheel self balancing electric wheelchair.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Successfully integrated joystick based control for a self-balancing wheelchair.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Built simulation environment on Simscape multibody to test and validate control algorithms.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Designed and fabricated custom PCBs for HMI,sensor integration and motor control.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Delivered full functional prototype contributing to successful fundraising round.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Built 2nd product(4 wheel electric wheelchair) Proof of concept prototype in 2 months.</span>
                </li>
                <li className="flex items-start text-gray-300">
                  <span className="text-[#f59e0b] mr-3 mt-1">▸</span>
                  <span>Took on complete responsibilty for builidng vehicle control software & electrical systems.</span>
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