import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-left">
          Education
        </h2>
        <div className="space-y-8">
          {/* MSc Robotics */}
          <Card className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#f59e0b]/10 rounded-lg border border-[#f59e0b]/30">
                  <GraduationCap className="h-8 w-8 text-[#f59e0b]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#f59e0b] mb-1">
                        Master of Science (MSc) in Robotics
                      </h3>
                      <p className="text-xl text-gray-300">University of Sheffield</p>
                    </div>
                    <div className="text-gray-400 font-semibold mt-2 md:mt-0">
                      2021 - 2023
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-white">Distinction | Ada Lovelace Award Winner</span>
                    </p>
                    <div className="pt-2">
                      <h4 className="text-sm font-semibold text-[#f59e0b] mb-2">Key Coursework:</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        [Add your MSc coursework description here - e.g., Advanced Control Systems, Machine Learning for Robotics, Computer Vision, Autonomous Systems, Sensor Fusion, Path Planning and Navigation, Robot Kinematics and Dynamics, etc.]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* BE Mechanical Engineering */}
          <Card className="bg-[#0f1b2e] border-gray-800 hover:border-[#f59e0b]/50 transition-all">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#f59e0b]/10 rounded-lg border border-[#f59e0b]/30">
                  <GraduationCap className="h-8 w-8 text-[#f59e0b]" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#f59e0b] mb-1">
                        Bachelor of Engineering (BE) in Mechanical Engineering
                      </h3>
                      <p className="text-xl text-gray-300">[Add Your University Name]</p>
                    </div>
                    <div className="text-gray-400 font-semibold mt-2 md:mt-0">
                      [Year Range]
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-300 leading-relaxed">
                      <span className="font-semibold text-white">[Add Grade/Honors if applicable]</span>
                    </p>
                    <div className="pt-2">
                      <h4 className="text-sm font-semibold text-[#f59e0b] mb-2">Key Coursework:</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        [Add your BE coursework description here - e.g., Thermodynamics, Fluid Mechanics, Manufacturing Processes, CAD/CAM, Machine Design, Materials Science, Dynamics of Machinery, Heat Transfer, etc.]
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
