import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Matches your backend routes: /auth/login or /auth/register
    const endpoint = isLogin ? '/auth/login' : '/auth/register';

    try {
      const { data } = await API.post(endpoint, formData);
      
      // Store user info (but not the token, the browser handles the cookie!)
      localStorage.setItem('tickit_user', JSON.stringify(data.user));

      navigate('/');
      window.location.reload(); // Refresh to update Navbar
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 p-10 rounded-[3rem] backdrop-blur-2xl shadow-2xl">
        
        {/* Toggle Switch */}
        <div className="flex bg-slate-950/50 p-1 rounded-2xl mb-10 border border-white/5">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 rounded-xl font-bold transition-all ${!isLogin ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
          >
            Register
          </button>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tight">
            {isLogin ? 'Welcome Back' : 'Join TickIT'}
          </h1>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-xs p-4 rounded-2xl text-center mb-6 italic">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input 
              type="text" name="name" placeholder="Full Name" required
              className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
              onChange={handleChange}
            />
          )}

          <input 
            type="email" name="email" placeholder="Email Address" required
            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
            onChange={handleChange}
          />

          <input 
            type="password" name="password" placeholder="Password" required
            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
            onChange={handleChange}
          />

          <button 
            type="submit" disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/30 transition-all active:scale-95 disabled:opacity-50 mt-4"
          >
            {loading ? 'Processing...' : (isLogin ? 'Sign In ↗' : 'Create Account ↗')}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;