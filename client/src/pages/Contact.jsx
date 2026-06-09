import React, { useState } from 'react';

export default function Contact() {
  // 1. Paste your Web3Forms Access Token inside these quotes:
  const ACCESS_TOKEN = "fe50776b-b44b-4d76-ae87-350319eb57c9";

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', type: 'general' });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Transmitting inquiry details...');

    // Prepare payload object for the API endpoint
    const payload = {
      access_key: ACCESS_TOKEN,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: `SoulCharge Inquiry: ${formData.type.toUpperCase()} from ${formData.name}`,
      message: `Form Selection: ${formData.type}\nPhone Number: ${formData.phone}\n\nMessage Details:\n${formData.message}`
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Your comeback starts here. Inquiry submitted successfully!');
        // Reset form variables upon clean execution
        setFormData({ name: '', email: '', phone: '', message: '', type: 'general' });
      } else {
        setStatus('Submission bottleneck encountered. Please check credentials or retry.');
      }
    } catch (error) {
      setStatus('Network interruption. Please check connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-brandBlack pt-36 pb-24 px-8 md:px-16 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start w-full">
        
        {/* Left Side: Brand Communication Details */}
        <div className="space-y-8 lg:sticky lg:top-36">
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-display font-black uppercase text-gray-900 tracking-tight leading-none">
              CONTACT US
            </h1>
            <h2 className="text-sm sm:text-base font-display font-bold text-brandPurple tracking-[0.22em] uppercase">
              GET IN TOUCH
            </h2>
          </div>
          
          <p className="text-gray-600 text-base sm:text-xl leading-relaxed max-w-xl font-light">
            Have questions, business inquiries or want to become a distributor? We’d love to hear from you.
          </p>

          <div className="space-y-5 text-base sm:text-xl border-t border-gray-200 pt-8 font-medium text-gray-800">
            <p className="flex flex-col sm:flex-row sm:space-x-3">
              <span className="text-brandPurple font-display uppercase tracking-wider font-bold min-w-[100px]">Email:</span> 
              <span className="text-gray-700">soulchargeenergydrink@gmail.com</span>
            </p>
            <p className="flex flex-col sm:flex-row sm:space-x-3">
              <span className="text-brandPurple font-display uppercase tracking-wider font-bold min-w-[100px]">Phone:</span> 
              <span className="text-gray-700">+91 91791 64483 </span>
            </p>
            <p className="flex flex-col sm:flex-row sm:space-x-3">
              <span className="text-brandPurple font-display uppercase tracking-wider font-bold min-w-[100px]">Instagram:</span> 
              <a href="https://instagram.com/soulcharge_india" target="_blank" rel="noopener noreferrer" className="text-brandMagenta hover:underline transition-all font-semibold">@soulcharge_india</a>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-3 light-card-shadow max-w-xl">
            <h4 className="text-base sm:text-lg font-display font-bold text-gray-900 tracking-wider uppercase">
              Distributor Inquiry
            </h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              Interested in bringing SoulCharge to your city? Contact us and become part of the comeback movement.
            </p>
          </div>
        </div>

        {/* Right Side: Active API Post Input Form Interface */}
        <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 sm:p-10 space-y-6 w-full light-card-shadow">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input 
              type="text" placeholder="Your Name" required
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-400"
            />
            <input 
              type="email" placeholder="Your Email" required
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-400"
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <input 
              type="tel" placeholder="Phone Number" required
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-400"
            />
            <select 
              value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}
              className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-700 focus:border-brandPurple outline-none text-base transition-all font-medium cursor-pointer"
            >
              <option value="general">General Question</option>
              <option value="distributor">Distributor Inquiry</option>
            </select>
          </div>

          <textarea 
            placeholder="Your Message" rows="5" required
            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
            className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-gray-900 focus:border-brandPurple outline-none text-base transition-all font-light placeholder:text-gray-400 resize-none"
          />

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-brandPurple to-brandMagenta text-white font-display font-bold py-4 uppercase tracking-widest text-sm sm:text-base transition-all duration-300 shadow-md rounded ${
              isSubmitting ? 'opacity-50 cursor-not-allowed brightness-90' : 'hover:brightness-110 cursor-pointer'
            }`}
          >
            {isSubmitting ? 'Sending Message...' : 'Submit Message'}
          </button>
          
          {status && (
            <p className="text-sm tracking-wider text-brandMagenta text-center uppercase animate-pulse font-bold mt-2">
              {status}
            </p>
          )}
        </form>

      </div>
    </div>
  );
}