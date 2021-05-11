import "./styles.scss"
import Particles from 'react-particles-js';
import ParticleComponent from "./ParticalComponent";
import About from "./About/About"
import Contact from "./Contact/Contact"
import Skills from "./Skills/Skills"
import Experience from "./Experience/Experience"



function RightPanel(props) {

    return (
        <div className="right-section">
            <div className="partical-wrapper">
                <ParticleComponent />
            </div>

            <div className="right-section-main-container">
                <About/>
                <Experience />
                <Skills />
                <Contact />

            </div>
        </div>
    );
}

export default RightPanel;