<<<<<<< HEAD
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', type: 'general' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending inquiry details...');
    setTimeout(() => {
      setStatus('Your comeback starts here. Inquiry submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '', type: 'general' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brandBlack pt-36 pb-24 px-8 md:px-16 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start w-full">
        
        {/* Left Side Content - Medium Upscaled */}
        <div className="space-y-8 lg:sticky lg:top-36">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-white tracking-tight leading-none">
              CONTACT US
            </h1>
            <h2 className="text-sm sm:text-base font-display font-bold text-brandPurple tracking-[0.22em] uppercase">
              GET IN TOUCH
            </h2>
          </div>
          
          <p className="text-gray-400 text-base sm:text-xl leading-relaxed max-w-xl font-light">
            Have questions, business inquiries or want to become a distributor? We’d love to hear from you.
          </p>

          <div className="space-y-5 text-base sm:text-xl border-t border-white/10 pt-8 font-medium text-gray-300">
            <p className="flex flex-col sm:flex-row sm:space-x-3"><span className="text-brandPurple font-display uppercase tracking-wider font-bold min-w-[100px]">Email:</span> <span className="text-gray-300">soulchargeenergydrink@gmail.com</span></p>
            <p className="flex flex-col sm:flex-row sm:space-x-3"><span className="text-brandPurple font-display uppercase tracking-wider font-bold min-w-[100px]">Phone:</span> <span className="text-gray-300">+91 9770323855</span></p>
            <p className="flex flex-col sm:flex-row sm:space-x-3"><span className="text-brandPurple font-display uppercase tracking-wider font-bold min-w-[100px]">Instagram:</span> <a href="https://instagram.com/soulcharge_india" target="_blank" rel="noreferrer" className="text-brandMagenta hover:underline">@soulcharge_india</a></p>
          </div>

          <div className="bg-brandDarkGray p-6 rounded-lg border border-brandPurple/10 space-y-3 shadow-xl max-w-xl">
            <h4 className="text-base sm:text-lg font-display font-bold text-white tracking-wider uppercase text-glow-purple">
              Distributor Inquiry
            </h4>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-light">
              Interested in bringing SoulCharge to your city? Contact us and become part of the comeback movement.
            </p>
          </div>
        </div>

        {/* Right Side Input Form - Medium Upscaled */}
        <form onSubmit={handleSubmit} className="bg-brandDarkGray border border-white/5 rounded-xl p-8 sm:p-10 space-y-6 w-full shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input 
              type="text" placeholder="Your Name" required
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-brandBlack border border-white/10 p-4 rounded text-white focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-600"
            />
            <input 
              type="email" placeholder="Your Email" required
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-brandBlack border border-white/10 p-4 rounded text-white focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-600"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input 
              type="tel" placeholder="Phone Number" required
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-brandBlack border border-white/10 p-4 rounded text-white focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-600"
            />
            <select 
              value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}
              className="w-full bg-brandBlack border border-white/10 p-4 rounded text-white focus:border-brandPurple outline-none text-base transition-all font-medium text-gray-400 cursor-pointer"
            >
              <option value="general">General Question</option>
              <option value="distributor">Distributor Inquiry</option>
            </select>
          </div>

          <textarea 
            placeholder="Your Message" rows="5" required
            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
            className="w-full bg-brandBlack border border-white/10 p-4 rounded text-white focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-600 resize-none"
          />

          <button type="submit" className="w-full bg-gradient-to-r from-brandPurple to-brandMagenta text-white font-display font-bold py-4 uppercase tracking-widest text-sm sm:text-base hover:brightness-110 transition-all duration-300 shadow-xl rounded cursor-pointer">
            Submit Message
          </button>
          
          {status && (
            <p className="text-sm tracking-wider text-brandMagenta text-center uppercase animate-pulse font-bold mt-2">
              {status}
            </p>
          )}
        </form>

      </div>
=======
export default function Contact() {
  return (
    <div className="min-h-screen pt-40">
      <h1 className="text-7xl text-center">
        CONTACT
      </h1>
>>>>>>> 6b82e306feba589c6fbf283b723295def5b493dd
    </div>
  );
}