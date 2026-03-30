import React from 'react';
import Hero from '../components/Hero';
import EventCard from '../components/EventCard';
import Events from './Events';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-32 pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* 2. How it Works Section */}
      <section id="how-it-works" className="py-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">HOW IT WORKS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-4 p-10 bg-white/5 rounded-[2.5rem] border border-white/5">
            <div className="text-5xl text-blue-500 mb-4">01</div>
            <h3 className="text-2xl font-bold italic">PICK</h3>
            <p className="text-gray-400">Discover handpicked premium events near you.</p>
          </div>
          <div className="space-y-4 p-10 bg-white/5 rounded-[2.5rem] border border-white/5">
            <div className="text-5xl text-blue-500 mb-4">02</div>
            <h3 className="text-2xl font-bold italic">BOOK</h3>
            <p className="text-gray-400">Secure your spot with our lightning-fast checkout.</p>
          </div>
          <div className="space-y-4 p-10 bg-white/5 rounded-[2.5rem] border border-white/5">
            <div className="text-5xl text-blue-500 mb-4">03</div>
            <h3 className="text-2xl font-bold italic">ENJOY</h3>
            <p className="text-gray-400">Scan your QR and get ready for the experience.</p>
          </div>
        </div>
      </section>

      {/* 3. Trending Events Section */}
      <section id="trending" className="py-10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">TRENDING</h2>
            <p className="text-gray-400 mt-2">What's hot right now.</p>
          </div>
          <Link to='/events' className="text-blue-500 font-bold hover:underline">VIEW ALL ↗</Link>
        </div>
        
        {/* Reusing the EventCard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EventCard 
            title="Sunderdeep Music Fest" 
            price="499" 
            location="Delhi"        
            Date="May 15"      
            image="https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?q=80&w=800" 
          />
          <EventCard 
            title="Tech Innovate 2026" 
            price="Free"
            location="Online"       
            Date="May 21" 
            image="https://images.unsplash.com/photo-1631350397792-8e0c2de5b637?q=80&w=800" 
          />
          <EventCard 
            title="Comedy Night Out" 
            price="299"
            location="Mumbai"      
            Date="April 30" 
            image="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800" 
          />
        </div>
      </section>

    </div>
  );
}

export default Home;