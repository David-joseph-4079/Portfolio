import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 David Joseph. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm italic">
            "Engineering is the art of directing the great sources of power in nature for the use and convenience of man."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;