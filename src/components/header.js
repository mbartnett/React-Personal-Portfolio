import React from 'react';

function header({ setCurrentPage }) {
    return (
        <header>
            <nav>
                <a onClick={() => setCurrentPage('about')} href="#about">about</a>
                <a onClick={() => setCurrentPage('portfolio')} href="#portfolio">portfolio</a>
                <a onClick={() => setCurrentPage('resume')} href="#resume">resume</a>
                <a onClick={() => setCurrentPage('contact')} href="#contact">contact</a>
            </nav>
        </header>
    );
}

export default header;
