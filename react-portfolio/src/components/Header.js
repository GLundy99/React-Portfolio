import "./assets/Header.css";

import { Link }  from 'react-router-dom'

export default function Header() {

    return (
        <header>

        <div className="header-top">

            {/* <img src={require("../assets/img/")} alt="Griffin"/> */}

            <div>
                <h1 className="header-name">Griffin Lundquist</h1>
                <h3 className="header-title">Junior Full-Stack Developer</h3>
            </div>

        </div>

        <div className="header-bottom">

            <nav className="header-nav">

                <a href="/">
                    <button>Home</button>
                </a>

                <a href="/about">
                    <button>About</button>
                </a>

                <a href="/projects">
                    <button>Projects</button>
                </a>

                <a href="/resume">
                    <button>Resume</button>
                </a>

                <a href="/skills">
                    <button>Skills</button>
                </a>

            </nav>

        </div>
    
        </header>

    );

};