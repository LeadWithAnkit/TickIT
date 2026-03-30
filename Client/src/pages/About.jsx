import React from 'react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-32">
      
      {/* 1. BRAND STORY SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-sm font-bold tracking-[0.3em] text-blue-500 uppercase">Our Story</h2>
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
            REDEFINING <br /> THE <span className="text-blue-500 italic">EXPERIENCE.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            TickIT started with a simple mission: to bridge the gap between event organizers and enthusiasts. 
            Built with the <span className="text-white font-bold">MERN Stack</span>, we focus on speed, security, and a seamless user interface.
          </p>
        </div>
      <div className="md:w-1/3 order-2 md:order-1"> 
    <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 aspect-square flex items-center justify-center group hover:border-blue-500/50 transition-colors">
       <img 
         src="/icons.svg" 
         alt="TickIT Logo" 
         className="w-48 h-48 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
       />
    </div>
  </div>
      </section>

      {/* 2. TESTIMONIALS (Bento Grid Style) */}
      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-center">What our Clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 italic text-gray-300">
            "The fastest booking experience I've ever had. The UI is incredibly clean."
            <p className="not-italic font-bold text-white mt-4">— Karan Singh, Event Organizer</p>
          </div>
          <div className="p-8 bg-blue-600 rounded-3xl space-y-4 italic text-white shadow-xl shadow-blue-600/20">
            "TickIT handled our sold-out concert traffic without a single crash. Highly recommended for backend stability."
            <p className="not-italic font-bold mt-4">— Neha Verma, Tech Summit Host</p>
          </div>
          <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 italic text-gray-300">
            "As a user, I love the real-time updates and the instant QR generation."
            <p className="not-italic font-bold text-white mt-4">— Anish Dev, Music Lover</p>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER / DEVELOPER SECTION (Branding You) */}
      <section className="bg-white/5 border border-white/10 rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
        {/* Abstract Background Glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Your Photo Placeholder */}
          <div className="w-48 h-48 rounded-full border-4 border-blue-500 overflow-hidden shrink-0">
             <img src="https://ui-avatars.com/api/?name=Ankit+Kumar&background=0D8ABC&color=fff&size=512" alt="Ankit" className="w-full h-full object-cover" />
          </div>
          
          <div className="space-y-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold">Ankit Kumar Tiwari</h2>
              <p className="text-blue-500 font-medium">Aspiring SDE | Full Stack Developer</p>
            </div>
            <p className="text-gray-400 max-w-xl">
              Final-year B.Tech CSE student specializing in <span className="text-white">Scalable Backend Systems</span> and MERN Stack. 
              With a CGPA of 8.67 and 300+ DSA problems solved, I build software that solves real-world problems.
            </p>
            
            {/* SOCIAL LINKS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a href="https://www.linkedin.com/in/ankit-kumar-tiwari08/" target="_blank" className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
                LinkedIn ↗
              </a>
              <a href="https://github.com/LeadWithAnkit" target="_blank" className="border border-white/20 px-6 py-2 rounded-full font-bold hover:bg-white/10 transition-all">
                GitHub ↗
              </a>
              <a href="mailto:ankitiwari008@gmail.com" className="border border-white/20 px-6 py-2 rounded-full font-bold hover:bg-white/10 transition-all">
                Email
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;