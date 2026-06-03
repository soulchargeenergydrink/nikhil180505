<<<<<<< HEAD
import React from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="bg-brandBlack min-h-screen">
      <Hero />
    </div>
=======
import Hero from "../components/Hero";
import WhySoulCharge from "../components/WhySoulCharge";

export default function Home() {
  return (
    <>
      <Hero />
      <WhySoulCharge />
    </>
>>>>>>> 6b82e306feba589c6fbf283b723295def5b493dd
  );
}