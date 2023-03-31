import React, { useState } from 'react';
import Header from './components/header';
import Footer from './components/footer';
// import Nav from './components/nav';

import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Projects from './pages/Projects.js';
// import Resume from './pages/Resume.js';

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
      <Footer />
    </>
  );
}

export default App;
