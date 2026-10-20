import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/hero/Hero';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-[#094792] selection:text-white overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Hero Section */}
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
