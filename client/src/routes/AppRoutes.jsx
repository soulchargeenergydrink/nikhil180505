<<<<<<< HEAD
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
=======
import {
  createBrowserRouter,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ComebackCoffee from "../pages/ComebackCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "coffee",
        element: <ComebackCoffee />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
>>>>>>> 6b82e306feba589c6fbf283b723295def5b493dd
