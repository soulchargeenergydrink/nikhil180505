import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ComebackCoffee from './pages/ComebackCoffee';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brandBlack text-white flex flex-col selection:bg-brandPurple selection:text-white scroll-smooth">
      {/* Global Navbar Header */}
      <Navbar />
      
      {/* Scroll Sections */}
      <div id="home">
        <Hero />
      </div>
      
      <div id="comeback-coffee">
        <ComebackCoffee />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      {/* Global Footer */}
      <Footer />
    </div>
  );
}