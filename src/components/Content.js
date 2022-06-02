import "./assets/Content.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./Homepage";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

export default function Content() {

    return (
        
        <div className="content-main">
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
            </Router>
        </div>

    );

};