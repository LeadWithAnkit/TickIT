import React from 'react';
import { Link } from 'react-router-dom';

function EventCard(props) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-[2.5rem] p-4 hover:bg-white/10 transition-all duration-500">
      <div className="relative h-60 w-full rounded-[2rem] overflow-hidden mb-6">
        <img src={props.image} alt={props.title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-indigo-600 px-4 py-1 rounded-full text-xs font-bold text-white">
          ₹{props.price}
        </div>
      </div>
      
      <div className="px-2 space-y-2">
        <h3 className="text-2xl font-bold text-white">{props.title}</h3>
        <p className="text-gray-400 text-sm">{props.location} • {props.Date} </p>
        
        {/* MOBILE & DESKTOP BOOK BUTTON */}
        <Link 
          to="/cart" 
          state={{ title: props.title, price: props.price, image: props.image, location: props.location, Date: props.Date }}
          className="block w-full mt-4 py-3 rounded-2xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default EventCard;