import React from 'react';
import { Badge } from '../components/ui/badge';

const skillsData = {
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

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-[#0f1b2e]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, items]) => (
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
  );
};

export default SkillsSection;