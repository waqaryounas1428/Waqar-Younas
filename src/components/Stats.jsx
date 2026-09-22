import { FaProjectDiagram, FaCode, FaCoffee, FaAward } from "react-icons/fa";
import "./Stats.css";

export const Stats = () => {
  return (
    <section className="stats-section scroll-effect">
      <div className="stats-container">
        <div className="stat-card scroll-effect">
          <FaProjectDiagram className="stat-icon" />
          <h3 className="stat-number">20+</h3>
          <p className="stat-label">Projects Completed</p>
        </div>

        <div className="stat-card scroll-effect">
          <FaCode className="stat-icon" />
          <h3 className="stat-number">10+</h3>
          <p className="stat-label">Technologies Mastered</p>
        </div>

        <div className="stat-card scroll-effect">
          <FaCoffee className="stat-icon" />
          <h3 className="stat-number">200+</h3>
          <p className="stat-label">Hours of Training</p>
        </div>

        {/* <div className="stat-card scroll-effect">
          <FaAward className="stat-icon" />
          <h3 className="stat-number">100%</h3>
          <p className="stat-label">Client Satisfaction</p>
        </div> */}
      </div>
    </section>
  );
};
