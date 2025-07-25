import React from 'react';

const Section1 = () => (
  <section
    id="section1"
    className="min-h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 via-white to-blue-200 px-8 py-16"
  >
    <h1 className="text-5xl font-bold text-blue-900 mb-4">Welcome to the demo</h1>
    <p className="text-lg text-gray-700 mb-8 max-w-xl text-center">
      This is the main section, now styled with TailwindCSS.
    </p>
    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
      Get Started
    </button>
  </section>
);

export default Section1;