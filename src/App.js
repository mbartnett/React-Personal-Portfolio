import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';

import About from './pages/About.js';
import Portfolio from './pages/Portfolio.js';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact.js';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  function renderPage() {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'resume') {
      return <Resume />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    return <About />;
  }
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;
