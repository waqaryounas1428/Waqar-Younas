import "./Toolkit.css";

import { FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss, SiBootstrap, SiPostman, SiVercel, SiNetlify } from "react-icons/si";

export const Toolkit = () => {
  return (
    <section id="toolkit" className="toolkit scroll-effect">

      <h1 className="tool-title scroll-effect">Technical Toolkit</h1>

      <p className="tool-subtitle scroll-effect">
        Technologies and tools I use to build scalable full-stack applications with MERN, Python, and modern frameworks.
      </p>

      <div className="tool-grid">

        <div className="tool-card scroll-effect">
          <h3>Frontend Development</h3>
          <div className="tools">
            <span><FaReact /> React.js</span>
            <span><SiJavascript /> JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span><SiTailwindcss /> Tailwind</span>
            <span><SiBootstrap /> Bootstrap</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Backend Development</h3>
          <div className="tools">
            <span><FaNodeJs /> Node.js</span>
            <span><SiExpress /> Express.js</span>
            <span>NestJS</span>
            <span>Python</span>
            <span>FastAPI</span>
            <span>REST APIs</span>
            <span>JWT Auth</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Database Technologies</h3>
          <div className="tools">
            <span><SiMongodb /> MongoDB</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>SQLite</span>
            <span>SQLAlchemy ORM</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>AI-Assisted Development</h3>
          <div className="tools">
            <span>ChatGPT</span>
            <span>Claude</span>
            <span>Gemini</span>
            <span>Prompt Engineering</span>
            <span>AI Debugging</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Tools & Deployment</h3>
          <div className="tools">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span><SiPostman /> Postman</span>
            <span><SiVercel /> Vercel</span>
            <span><SiNetlify /> Netlify</span>
            <span>VS Code</span>
          </div>
        </div>

        <div className="tool-card scroll-effect">
          <h3>Professional Skills</h3>
          <div className="tools">
            <span>Agile/Scrum</span>
            <span>Code Reviews</span>
            <span>API Testing</span>
            <span>Performance Optimization</span>
            <span>Team Collaboration</span>
          </div>
        </div>

      </div>

    </section>
  );
};