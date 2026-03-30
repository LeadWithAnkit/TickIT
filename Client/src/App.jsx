import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Import your pages from separate files
import Home from './pages/Home';
import Events from './pages/Events';
import Cart from './pages/Cart';
import About from './pages/About';
import Login from './pages/Login';
import Footer from './components/Footer';
// import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#020617] text-white overflow-x-hidden">
        
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
           <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
           <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full" />
        </div>

        {/* 2. The Fixed Layer (Navbar) */}
        <Navbar />

        {/* 3. The Content Layer (Pages) */}
        <main className="pt-20 md:pt-24 relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;