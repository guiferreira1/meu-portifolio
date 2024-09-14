import React from "react";

function Home() {
    return(
        <section className="colored-section">
            <div className="container">
                <div className="intro">
                    <span>Olá, eu sou o Guilherme!</span>
                    <p>React Front-End Developer, Game Dev e php Back-End Developer</p>
                </div>
                <div className="personal-image">
                    <img src="/public/cr7.webp"></img>
                </div>
            </div>
        </section>
    );
}

export default Home;