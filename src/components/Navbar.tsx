import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow px-6 py-4 z-50">
      <div className="flex items-center justify-between space-x-8">
        <img src={logo} alt="Logo" className="h-12 w-auto" />
        <ul className="flex space-x-8 text-gray-700 font-semibold">
          <li><a href="#section1" className="hover:underline">Welcome</a></li>
          <li><a href="#section2" className="hover:underline">Services</a></li>
          <li><a href="#section3" className="hover:underline">Projects</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
