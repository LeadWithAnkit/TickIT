import React, { useState } from 'react';
import EventCard from '../components/EventCard';

function Events() {
  // 1. State for the search text
  const [searchQuery, setSearchQuery] = useState("");

  const allEvents = [
    { id: 1, title: "Sunderdeep Music Fest", price: "499", location:"Delhi",Date:"15 May 2026", image: "https://images.unsplash.com/photo-1517456793572-1d8efd6dc135?q=80&w=800" },
    { id: 2, title: "Tech Innovate 2026", price: "Free", location:"Noida" ,Date:"21 May 2026",image: "https://images.unsplash.com/photo-1631350397792-8e0c2de5b637?q=80&w=800" },
    { id: 3, title: "Comedy Night Out", price: "299",location:"Mumbai",Date:"30 April 2026", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800" },
    { id: 4, title: "Sunburn Arena", price: "999",location:"Bangalore",Date:"08 May 2026",image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800" },
    { id: 5, title: "Workshop: React Pro", price: "150",location:"Gurugram",Date:"21 April 2026", image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800" },
    { id: 6, title: "Global Food Fest", price: "100", location:"Hyderabad", Date:"3 June 2026", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800" },
  ];

  // 2. Logic to filter events based on search
  const filteredEvents = allEvents.filter(function(event) {
    return event.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12">
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
        <div className="space-y-1">
          <h1 className="text-4xl font-black tracking-tight uppercase">Discover Events</h1>
          <p className="text-gray-400">Find your next experience.</p>
        </div>
        
        {/* 3. The Search Box with 'onChange' */}
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search by event title..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>
      </div>

      {/* 4. Displaying Filtered Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(function(event) {
            return (
              <EventCard 
                key={event.id}
                title={event.title} 
                price={event.price} 
                image={event.image} 
                location={event.location}
                Date={event.Date}
              />
            );
          })
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No events found matching "{searchQuery}"
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;