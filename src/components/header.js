import React from 'react';

function header({ setCurrentPage, currentPage, activePage }) {
    return (
        <header>
            <nav>
                <div class="nav-left">
                    <a onClick={() => setCurrentPage('/')} href="/">MBART.NET</a>
                </div>
                <div class="nav-right">
                    <a onClick={() => setCurrentPage('about')} href="#about" className={currentPage === 'about' ? 'nav-active' : 'nav-right'}>about</a>
                    <a onClick={() => setCurrentPage('portfolio')} href="#portfolio" className={currentPage === 'portfolio' ? 'nav-active' : 'nav-right'}>portfolio</a>
                    <a onClick={() => setCurrentPage('resume')} href="#resume" className={currentPage === 'resume' ? 'nav-active' : 'nav-right'}>resume</a>
                    <a onClick={() => setCurrentPage('contact')} href="#contact" id="last-nav" className={currentPage === 'contact' ? 'nav-active' : 'nav-right'}>contact</a>
                </div>
            </nav>
        </header>
    );
}

export default header;
