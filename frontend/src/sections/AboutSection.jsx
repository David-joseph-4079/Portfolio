import React from 'react';

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;