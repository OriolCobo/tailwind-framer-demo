import { motion } from 'framer-motion';
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  bgColor: string;
  children?: React.ReactNode;
}

const Section = ({ id, title, bgColor, children }: SectionProps) => {
  return (
    <motion.section
      id={id}
      className={`min-h-screen w-full flex flex-col justify-center items-center px-8 py-16 ${bgColor}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.section>
  );
};

export default Section;
