import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import "./Timeline.css";

export const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section scroll-effect">
      <h2 className="timeline-title">My Journey</h2>
      <p className="timeline-subtitle">Education & Experience Timeline</p>

      <div className="timeline">
        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">Dec 2024 - Present</span>
            <h3>Automation Engineering Intern</h3>
            <p>
              <span className="highlight">Joblogic</span> - Engineered backend solutions using Python and FastAPI 
              to develop scalable web applications and RESTful APIs with PostgreSQL, MySQL, MongoDB integration.
            </p>
          </div>
        </div>

        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaBriefcase />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">Oct 2024 - Dec 2024</span>
            <h3>MERN Stack Developer</h3>
            <p>
              <span className="highlight">EVS Tech Lahore</span> - Developed and maintained web applications using 
              MERN stack and NestJS. Built responsive React.js interfaces with Tailwind CSS and REST API integration.
            </p>
          </div>
        </div>

        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaCode />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">Apr 2024 - Oct 2024</span>
            <h3>MERN Stack Bootcamp</h3>
            <p>
              <span className="highlight">EVS Institute (200+ Hours)</span> - Gained hands-on proficiency across 
              complete MERN stack with React.js, Node.js, Express.js, MongoDB Atlas, REST APIs, and JWT Authentication.
            </p>
          </div>
        </div>

        <div className="timeline-item scroll-effect">
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>
          <div className="timeline-content">
            <span className="timeline-date">2022 - 2026</span>
            <h3>Bachelor's Degree</h3>
            <p>
              <span className="highlight">Islamia University of Bahawalpur</span> - Bachelor of Science in Information Technology
              with coursework in Web Development, Database Management, Data Structures & Algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
