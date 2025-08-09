import React, { useState } from "react";
import logo from '../logo1.png';
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white fixed w-full  left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="md:w-[20vw] w-[25vw]">
            <img src={logo} className="object-cover w-full h-full" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 text-2xl justify-end space-x-9 mr-10 items-center">
            <NavLink to="/" className="font-poppins-bold hover:text-blue-500 font-bold">Home</NavLink>
            <NavLink to="/about" className="font-poppins-bold  hover:text-blue-500 font-bold">About</NavLink>
            <NavLink to="/workshop" className="font-poppins-bold  hover:text-blue-500 font-bold">Workshop</NavLink>
            <NavLink to="/contact" className="text-white bg-[#000F44] px-4 py-2 rounded hover:bg-blue-700 font-poppins-bold  transition">
              Register
            </NavLink>
          </div>



          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          <a href="/" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="/about" className="block text-gray-700 hover:text-blue-500">About</a>
          <a href="/workshop" className="block text-gray-700 hover:text-blue-500">Workshop</a>
          <a href="/contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
