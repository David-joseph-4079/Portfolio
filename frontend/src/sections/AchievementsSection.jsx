import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import adaImg from "../Assets/sae.jpeg";
const AchievementsSection = () => {
  return (
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
                  <p>
           A Comparative Analysis of A* and Dijkstra Algorithm using a mobile robot 🤖
          </p>
                </p>
              </div>

              {/* RIGHT: Image */}
  {/*  <div className="md:w-1/3 w-full">
      <img
        src={adaImg}
        alt="Ada Lovelace Award"
        className="w-full h-40 object-cover rounded-lg border border-[#f59e0b]/30"
      />
    </div>
*/}           </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AchievementsSection;