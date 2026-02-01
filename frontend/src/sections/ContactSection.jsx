import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Any type of query & discussion.
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Let's build something remarkable together. Whether it's a technical discussion, collaboration opportunity, or project inquiry, I'm always open to connecting.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => window.location.href = 'mailto:david@example.com'}
            className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" /> Send Email
          </Button>
          <Button
            onClick={() => window.open('https://linkedin.com', '_blank')}
            variant="outline"
            className="border-2 border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-white px-8 py-6 text-lg font-semibold transition-all hover:scale-105"
          >
            <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;