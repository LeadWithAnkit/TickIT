import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Cart() {
  const location = useLocation();
  // Get the event details passed from the Book Now button
  const event = location.state;

  if (!event) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
        <h2 className="text-3xl font-bold">Your cart is empty</h2>
        <Link to="/events" className="text-blue-500 hover:underline">Go back to events</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-black uppercase mb-10 tracking-tighter">Your Cart</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Ticket Details */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-md">
            <img src={event.image} className="w-full sm:w-32 h-32 object-cover rounded-2xl" alt="" />
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{event.title}</h2>
              <p className="text-gray-400 text-sm italic">Standard Admission • Qty: 1</p>
              <p className="text-blue-500 font-bold">₹{event.price}</p>
            </div>
          </div>
        </div>

        {/* Right: Summary Box */}
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] h-fit space-y-6">
          <h3 className="text-xl font-bold border-b border-white/10 pb-4">Order Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Ticket Price</span>
              <span>₹{event.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Platform Fee</span>
              <span>₹50</span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-4 text-lg font-bold">
              <span>Total</span>
              <span className="text-blue-500">₹{parseInt(event.price) + 25 || event.price}</span>
            </div>
          </div>
          
          <button className="w-full bg-white text-black py-4 rounded-full font-black uppercase hover:bg-blue-500 hover:text-white transition-all shadow-xl">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;