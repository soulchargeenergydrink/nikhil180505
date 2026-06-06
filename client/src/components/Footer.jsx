import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-brandBlack border-t border-white/5 py-8 mt-auto text-center">
      <p className="text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 uppercase font-medium">
        &copy; {new Date().getFullYear()} SOULCHARGE. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}