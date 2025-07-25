import React from 'react';
import { motion } from 'framer-motion';

// Example icons (SVGs)
const icons = [
  <svg className="section3-card-icon" viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="24" rx="2" fill="#afeeee"/><rect x="14" y="18" width="20" height="2" fill="#fff"/></svg>,
  <svg className="section3-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="10" fill="#afeeee"/><path d="M24 18v6l4 4" stroke="#fff" strokeWidth="2"/></svg>,
  <svg className="section3-card-icon" viewBox="0 0 48 48" fill="none"><rect x="10" y="16" width="28" height="16" rx="2" fill="#afeeee"/><rect x="14" y="20" width="20" height="2" fill="#fff"/></svg>,
];

const projects = [
  {
    title: 'Portfolio Website',
    desc: 'A modern portfolio built with Tailwind CSS and animated with Framer Motion.',
    icon: icons[0],
  },
  {
    title: 'Landing Page',
    desc: 'Responsive landing page using Tailwind utilities and Framer for smooth transitions.',
    icon: icons[1],
  },
  {
    title: 'Dashboard UI',
    desc: 'Interactive dashboard interface combining Tailwind layouts and Framer interactions.',
    icon: icons[2],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const Section3 = () => (
  <section
    id="section3"
    className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 via-white to-blue-200 px-8 py-16"
  >
    <h2 className="text-4xl font-bold text-blue-900 mb-2">Project Showcase</h2>
    <div className="w-96 h-1 bg-blue-400 rounded mb-8" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
      {projects.map((proj, idx) => (
        <motion.div
          className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 transition hover:scale-105"
          key={proj.title}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: idx * 0.2 }}
        >
          <div className="mb-4">
            {/* icon size and color */}
            {React.cloneElement(proj.icon as React.ReactElement, {
              className: "w-12 h-12 mb-2"
            })}
          </div>
          <div className="text-xl font-semibold text-blue-700 mb-2">{proj.title}</div>
          <div className="text-gray-600 text-center">{proj.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Section3;
