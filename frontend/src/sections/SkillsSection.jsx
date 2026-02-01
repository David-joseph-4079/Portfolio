import React from 'react';
import { Badge } from '../components/ui/badge';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-[#0f1b2e]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#f59e0b] mb-4">Control & Systems</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                MATLAB / Simulink
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Model-Based Design
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Control Systems (PID, LQR, Fuzzy)
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                V-Cycle
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#f59e0b] mb-4">Embedded & Hardware</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                STM32
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Arduino
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Raspberry Pi
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Embedded C / C++
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                PCB Design
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm text-[#f59e0b] border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Sensors & Actuators
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#f59e0b] mb-4">Testing & Validation</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                MIL / SIL / HIL Testing
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                System Integration
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Functional Safety
              </Badge>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#f59e0b] mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                Git / GitHub
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                ROS
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                CAN
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                SPI
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                I2C
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-gray-700 hover:border-[#f59e0b] hover:bg-[#f59e0b]/10 transition-all cursor-default">
                UART
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;