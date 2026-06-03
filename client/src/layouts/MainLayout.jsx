import React from 'react';

export default function MainLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-brandBlack">
      {children}
    </div>
  );
}