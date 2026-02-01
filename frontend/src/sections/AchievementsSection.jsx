import React from 'react';
import { Card, CardContent } from '../components/ui/card';

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
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AchievementsSection;