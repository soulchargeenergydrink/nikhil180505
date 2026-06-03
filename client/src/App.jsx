import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComebackCoffee from './pages/ComebackCoffee';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brandBlack text-white flex flex-col selection:bg-brandPurple selection:text-white scroll-smooth overflow-x-hidden">
      {/* Global Floating Navbar */}
      <Navbar />
      
      {/* Tracked Scroll Canvas Blocks */}
      <main className="flex-col w-full flex-grow">
        
        <section id="home" className="min-h-screen w-full block relative">
          <Hero />
        </section>
        
        <section id="comeback-coffee" className="min-h-screen w-full block relative">
          <ComebackCoffee />
        </section>
        
        <section id="about" className="min-h-screen w-full block relative">
          <About />
        </section>
        
        <section id="contact" className="min-h-screen w-full block relative">
          <Contact />
        </section>
        
      </main>
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}