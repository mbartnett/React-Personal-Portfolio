import React, { useState } from 'react';
import Header from './components/header';
// import './App.css';

import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';
import Footer from './pages/Footer.js';

function App() {
  const [currentPage, setCurrentPage] = useState('about');
  function renderPage() {
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'contact') {
      return <Contact />;
    }
    if (currentPage === 'projects') {
      return <Projects />;
    }
    return <About />;
  }
  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
      <footer />
    </>
  );
}

export default App;
