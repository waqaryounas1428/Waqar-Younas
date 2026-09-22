import { FaGraduationCap, FaCode, FaRocket, FaHeart } from "react-icons/fa";
import "./About.css";

export const About = () => {
  return (
    <section id="about" className="about scroll-effect">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">Passionate Developer | Problem Solver | Lifelong Learner</p>

        <div className="about-content">
          <div className="about-card scroll-effect">
            <FaGraduationCap className="about-icon" />
            <h3>Education</h3>
            <p>
              BSIT from Islamia University of Bahawalpur with 200+ hours 
              professional MERN Stack training.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaCode className="about-icon" />
            <h3>Experience</h3>
            <p>
              Automation Engineering Intern at Joblogic. 
              Former MERN Developer at EVS Tech.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaRocket className="about-icon" />
            <h3>Tech Stack</h3>
            <p>
              MERN, NestJS, Python, FastAPI, PostgreSQL, 
              MongoDB, JWT, RESTful APIs.
            </p>
          </div>

          <div className="about-card scroll-effect">
            <FaHeart className="about-icon" />
            <h3>AI Development</h3>
            <p>
              ChatGPT, Claude, Gemini expert with 
              prompt engineering & debugging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
