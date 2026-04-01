import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../services/api';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 1. Check if user is logged in on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('tickit_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 2. LOGOUT LOGIC
  const handleLogout = async () => {
    try {
      await API.post('/auth/logout'); // Clears the HttpOnly Cookie
      localStorage.removeItem('tickit_user'); // Clears UI state
      setUser(null);
      navigate('/auth'); // Redirect to login/signup page
      setIsOpen(false); // Close mobile menu if open
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur-md px-6 py-4 flex justify-between items-center transition-all duration-300">
      
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src="/icons.svg" alt="TickIT Logo" className="h-10 w-auto" /> 
      </Link>
    
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 font-medium text-gray-300">
        <Link to="/" className="hover:text-white transition-colors">Home</Link>
        <Link to="/events" className="hover:text-white transition-colors">Events</Link>
        <Link to="/about" className="hover:text-white transition-colors">About</Link>
        <Link to="/cart" className="hover:text-white transition-colors">Cart</Link>
      </div>

      {/* Right Side: Conditional Buttons */}
      <div className="flex items-center space-x-4">
        {user ? (
          <div className="hidden md:flex items-center gap-4">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">Hi, {user.name}</span>
            <button 
              onClick={handleLogout}
              className="border border-red-500/50 px-5 py-2 rounded-lg text-sm font-medium text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/auth" className="hidden md:block border border-white/20 px-5 py-2 rounded-lg text-sm font-medium text-white hover:bg-white hover:text-black transition-all duration-300">
            Log In ↗
          </Link>
        )}

        {/* Hamburger Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 z-50">
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-y-0 right-0 w-[75%] max-w-sm bg-slate-950 border-l border-white/10 transition-transform duration-500 ease-in-out md:hidden z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-start px-10 pt-32 space-y-8 text-xl font-semibold text-white h-full">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
          
          {/* Mobile Auth Button */}
          {user ? (
            <button 
              onClick={handleLogout}
              className="w-full text-center bg-red-600 text-white py-3 rounded-xl"
            >
              Logout ({user.name})
            </button>
          ) : (
            <Link to="/auth" onClick={() => setIsOpen(false)} className="w-full text-center bg-white text-black py-3 rounded-xl">
               Login ↗
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;