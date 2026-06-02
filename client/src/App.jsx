import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/ui/Navbar';
import Footer from './components/ui/Footer';
import HomePage from './pages/HomePage';
import { initScrollReveal } from './utils/gsapAnimations';

function App() {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <Router>
      <div className="relative bg-ink-950 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
