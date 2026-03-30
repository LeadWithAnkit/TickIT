import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-between py-10 md:py-20 gap-12">
      
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-8 z-10 text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
          BOOK YOUR <br />
          <span className="text-blue-700 italic text-shadow-glow">TICKETS</span> <br />
          NOW
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
          The ultimate platform for seamless event booking. Experience concerts, workshops, and galas like never before.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
          <Link to="/events" className="w-full sm:w-auto bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
            Explore Events
          </Link>
          <a href="#how-it-works" className="w-full sm:w-auto border border-white/10 px-10 py-4 rounded-full font-bold text-lg hover:bg-white/5 transition-all text-center">
            How it works
          </a>
        </div>
      </div>

      {/* RIGHT STAGGERED GRID */}
      <div className="flex-1 relative hidden md:grid grid-cols-2 gap-4 h-[550px] w-full">
        <div className="flex flex-col gap-4">
          <div className="h-2/3 rounded-[2rem] bg-slate-800 border border-white/10 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Concert" />
          </div>
          <div className="h-1/3 rounded-[2rem] bg-slate-800 border border-white/10 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000" className="w-full h-full object-cover opacity-60" alt="Music" />
          </div>
        </div>
        
        <div className="flex flex-col gap-4 pt-16">
          <div className="h-1/3 rounded-[2rem] bg-slate-800 border border-white/10 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000" className="w-full h-full object-cover opacity-60" alt="Party" />
          </div>
          <div className="h-2/3 rounded-[2rem] bg-slate-800 border border-white/10 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=1000" className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" alt="Festival" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;