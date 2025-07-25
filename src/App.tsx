import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Section1 from './components/sections/Section1';
import Section2 from './components/sections/Section2';
import Section3 from './components/sections/Section3';
import videoPlaceholder from './assets/video_placeholder.mp4';
import './index.css';

function App() {
  useEffect(() => {
    document.title = "Tailwind Framer Demo";
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <video src={videoPlaceholder} autoPlay loop muted className="w-full h-screen object-cover" />
      </div>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
