import React from 'react';

function header({ setCurrentPage }) {
    return (
        <header>
            <nav>
                <ul>
                    <li><a onClick={() => setCurrentPage('about')} href="#howdy">howdy</a></li>
                    <li><a onClick={() => setCurrentPage('projects')} href="#stuff">stuff</a></li>
                    <li><a onClick={() => setCurrentPage('contact')} href="#holler">holler</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default header;
