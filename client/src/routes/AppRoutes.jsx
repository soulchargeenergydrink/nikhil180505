import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ComebackCoffee from '../pages/ComebackCoffee';
import Contact from '../pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/comeback-coffee" element={<ComebackCoffee />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}