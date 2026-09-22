import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode, FaLaptopCode } from "react-icons/fa";
import "./Expertise.css";

export const Expertise = () => {
  return (
    <section id="expertise" className="expertise scroll-effect">

      <h1 className="title scroll-effect">Full Stack Development Expertise</h1>

      <p className="subtitle scroll-effect">
        Professional Full Stack Developer with hands-on experience in MERN stack, Python, FastAPI, and modern web technologies.
      </p>

      <div className="cards">

        <div className="card scroll-effect">
          <FaReact className="icon"/>
          <h3>React Development</h3>
          <p>
            Building dynamic and reusable UI components using modern React features
            such as Hooks, component-based architecture and responsive design.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaServer className="icon"/>
          <h3>Python & FastAPI</h3>
          <p>
            Engineering backend solutions using Python and FastAPI for scalable web applications
            with PostgreSQL, MySQL, MongoDB, and SQLite database integration.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaNodeJs className="icon"/>
          <h3>NestJS Framework</h3>
          <p>
            Building enterprise-grade backend systems using NestJS framework with TypeScript,
            providing scalable and maintainable server-side applications.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaDatabase className="icon"/>
          <h3>Database Technologies</h3>
          <p>
            Expert in multiple database systems including MongoDB, PostgreSQL, MySQL, and SQLite
            with advanced ORM usage and database optimization techniques.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaLaptopCode className="icon"/>
          <h3>Professional Experience</h3>
          <p>
            Currently working as Automation Engineering Intern at Joblogic and previously
            as MERN Stack Developer at EVS Tech with production-level experience.
          </p>
        </div>

        <div className="card scroll-effect">
          <FaCode className="icon"/>
          <h3>AI-Assisted Development</h3>
          <p>
            Leveraging AI tools like ChatGPT, Claude, and Gemini for prompt engineering,
            debugging assistance, and enhanced development productivity.
          </p>
        </div>

      </div>

    </section>
  );
};