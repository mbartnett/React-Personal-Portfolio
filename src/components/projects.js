import React from "react";

function Projects() {
    return (
        <div className="square-with-cards">
            <div className="card-row">
                <div class="card">
                    <h3>PROJECT 1</h3>
                    <div class="portfolio-links"><a href="http://google.com" target="_blank" rel="noreferrer">LINK</a> | <a href="https://github.com/mbartnett" target="_blank" rel="noreferrer">REPO</a></div>
                </div>
                <div className="card"><h3>PROJECT 2</h3>
                    <p>LINK | <a href="https://github.com/mbartnett">REPO</a></p></div>
                <div className="card"><h3>PROJECT 3</h3>
                    <p>LINK | <a href="https://github.com/mbartnett">REPO</a></p></div>
            </div>
            <div className="card-row">
                <div className="card"><h3>PROJECT 4</h3>
                    <p>LINK | <a href="https://github.com/mbartnett">REPO</a></p></div>
                <div className="card"><h3>PROJECT 5</h3>
                    <p>LINK | <a href="https://github.com/mbartnett">REPO</a></p></div>
                <div className="card"><h3>PROJECT 6</h3>
                    <p>LINK | <a href="https://github.com/mbartnett">REPO</a></p></div>
            </div>
        </div>
    );
}

export default Projects;
