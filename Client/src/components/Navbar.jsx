import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center transition-all duration-300">
      
     {/* logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/icons.svg" alt="TickIT Logo" className="h-10 w-auto" /> 
        {/* <span className="text-2xl font-bold tracking-tighter text-white">TickIT</span> */}
      </Link>
    
      <div className="hidden md:flex space-x-8 text- font-medium text-gray-300">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/events" className="hover:text-white transition-colors">Events</Link>
        <Link to="/about" className="hover:text-white transition-colors">About</Link>
        <Link to="/cart" className="hover:text-white transition-colors">Cart</Link>
      </div>

      {/* Right Side Buttons */}
      <div className="flex items-center space-x-4">
        {/* <Link to="/login" className="hidden md:block text-sm font-medium text-gray-300 hover:text-white">
          Log In
        </Link> */}
        <Link to="/login" className="hidden md:block border border-white/20 px-5 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300">
          Log In ↗
        </Link>

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 z-50">
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* 2. Mobile Menu (Width Adjusted for Mobile) */}
      <div className={`fixed inset-y-0 right-0 w-[75%] max-w-sm bg-slate-900/95 backdrop-blur-2xl border-l border-white/10 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-start px-10 pt-24 space-y-8 text-xl font-semibold text-white bg-slate-900/97">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
          <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center bg-white text-black py-3 rounded-xl">
             Login ↗
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;