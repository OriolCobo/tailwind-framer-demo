import React from 'react';
import { motion } from 'framer-motion';

// Icons for Tailwind/Framer related services
const icons = [
  // Tailwind CSS Component Design
  <svg width="48" height="48" fill="none"><rect x="8" y="12" width="32" height="24" rx="2" fill="#afeeee"/><rect x="14" y="18" width="20" height="2" fill="#fff"/><rect x="14" y="22" width="16" height="2" fill="#fff"/><rect x="14" y="26" width="12" height="2" fill="#fff"/><rect x="32" y="14" width="8" height="8" rx="2" fill="#fff"/></svg>,
  // Framer Motion Animations
  <svg width="48" height="48" fill="none"><rect x="8" y="16" width="32" height="16" rx="2" fill="#afeeee"/><path d="M18 24l-2-2 2-2" stroke="#fff" strokeWidth="2"/><path d="M30 20l2 2-2 2" stroke="#fff" strokeWidth="2"/><rect x="20" y="28" width="8" height="2" rx="1" fill="#fff"/></svg>,
  // Responsive Layouts with Tailwind
  <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="10" fill="#afeeee"/><path d="M24 18v6l4 4" stroke="#fff" strokeWidth="2"/><circle cx="36" cy="16" r="4" fill="#afeeee"/><rect x="34" y="12" width="4" height="2" fill="#fff"/></svg>,
  // Interactive UI with Framer
  <svg width="48" height="48" fill="none"><rect x="10" y="16" width="28" height="16" rx="2" fill="#afeeee"/><rect x="14" y="20" width="20" height="2" fill="#fff"/><rect x="14" y="24" width="8" height="2" fill="#fff"/><rect x="24" y="24" width="10" height="2" fill="#fff"/></svg>,
  // Tailwind + Framer Integration
  <svg width="48" height="48" fill="none"><rect x="8" y="16" width="16" height="16" rx="2" fill="#afeeee"/><rect x="24" y="16" width="16" height="16" rx="2" fill="#afeeee"/><text x="16" y="28" fontSize="10" fill="#fff" textAnchor="middle">A</text><text x="32" y="28" fontSize="10" fill="#fff" textAnchor="middle">文</text></svg>,
];

const services = [
  { title: 'Tailwind CSS Component Design', icon: icons[0] },
  { title: 'Framer Motion Animations', icon: icons[1] },
  { title: 'Responsive Layouts with Tailwind', icon: icons[2] },
  { title: 'Interactive UI with Framer', icon: icons[3] },
  { title: 'Tailwind + Framer Integration', icon: icons[4] },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Section2 = () => (
  <section
    id="section2"
    className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 via-white to-blue-200 px-8 py-16"
  >
    <h2 className="text-4xl font-bold text-blue-900 mb-2">Services Showcase</h2>
    <div className="w-96 h-1 bg-blue-400 rounded mb-8" />
    <div className="flex flex-wrap justify-center gap-6 mb-16">
      {services.map((serv, idx) => (
        <motion.div
          key={serv.title}
          className="bg-white rounded-xl shadow-lg flex flex-col items-center px-8 py-8 w-64 transition hover:scale-105"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          <div className="mb-4">
            {React.cloneElement(serv.icon as React.ReactElement, {
              className: "w-12 h-12 mb-2"
            })}
          </div>
          <div className="text-center text-lg font-medium text-[#222]">{serv.title}</div>
        </motion.div>
      ))}
    </div>
    {/* Demo Block */}
    <div className="w-full max-w-4xl rounded-xl overflow-hidden mt-4">
      <div className="bg-gradient-to-tr from-[#3C4146] to-[#5A5F63] p-10 relative">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[#afeeee] font-bold text-4xl">tailwind-framer-demo</span>
          </div>
          <div className="text-white text-2xl font-medium mb-4">
            Content demo with Tailwind and Framer
          </div>
          <div className="h-1 w-full bg-[#afeeee] mb-4" />
          <div className="text-white text-base mb-6">
            Discover how to use Tailwind and Framer to create components and sections for a website.
          </div>
          <button className="bg-[#afeeee] text-[#222] font-semibold px-6 py-3 rounded-md hover:bg-[#A1B34F] transition">
            Discover tailwind-framer-demo
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Section2;
