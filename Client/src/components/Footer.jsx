import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TOP SECTION: BRAND & LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img src="/icons.svg" alt="TickIT Logo" className="h-8 w-auto" />
              <span className="text-2xl font-black tracking-tighter uppercase">TickIT</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              The world's most seamless event booking platform. Built with precision for the modern enthusiast.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/events" className="hover:text-blue-500 transition-colors">Explore Events</Link></li>
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">Our Story</Link></li>
              <li><Link to="/cart" className="hover:text-blue-500 transition-colors">My Cart</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact/Profile */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Developer</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="https://www.linkedin.com/in/ankit-kumar-tiwari08/" className="hover:text-blue-500 transition-colors">LinkedIn ↗</a></li>
              <li><a href="https://github.com/LeadWithAnkit" className="hover:text-blue-500 transition-colors">GitHub ↗</a></li>
              <li><a href="mailto:ankitiwari008@gmail.com" className="hover:text-blue-500 transition-colors">Email Me</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Stay Updated</h4>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm w-full focus:outline-none focus:border-blue-500" 
              />
            <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300 flex items-center justify-center group active:scale-95"
            onClick={(e) => {
            e.preventDefault();
            alert("Thanks for subscribing to TickIT!");
            }}
            >
            {/* Modern Send Icon (SVG) */}
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            </button>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: COPYRIGHT */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2026 TickIT. Built by Ankit with ❤️ and effort.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;