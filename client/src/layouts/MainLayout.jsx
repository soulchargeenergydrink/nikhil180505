import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-brandBlack text-white flex flex-col selection:bg-brandGold selection:text-black">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}