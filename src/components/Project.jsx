import { useState, useEffect } from "react";
import e1 from "../project/p1/1.png";
import e2 from "../project/p1/2.png";
import e3 from "../project/p1/3.png";
import e4 from "../project/p1/4.png";
import w1 from "../project/p2/1.png";
import w2 from "../project/p2/2.png";
import w3 from "../project/p2/3.png";
import w4 from "../project/p2/4.png";
import "./Project.css";

const projects = [
  {
    tag: "Full Stack MERN Project",
    title: "HireHub.Pk – Job Portal",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Cloudinary", "JWT"],
    short: "Full-stack job portal with job posting, applications, authentication, RBAC, 20+ REST APIs, real-time notifications, admin analytics, search/filtering, pagination, and security features.",
    live: "https://hirehub-pk.vercel.app/",
    github: "https://github.com/waqaryounas1428/Full-stack-MERN-Project.git",
  },
  {
    tag: "E-Commerce Platform",
    title: "E-Commerce Website",
    tech: ["React", "Redux Toolkit", "CSS", "Bootstrap"],
    short: "A modern and fully responsive e-commerce web application with advanced state management and user-friendly interface.",
    live: "https://e-commence-olive.vercel.app/",
    github: "https://github.com/waqaryounas1428",
  },
  {
    tag: "Service Website",
    title: "Laundry Service Platform",
    tech: ["React", "Tailwind CSS", "Redux Toolkit"],
    short: "Responsive laundry service website with clean UI design and modern user experience.",
    live: "https://lundary.vercel.app/home",
    github: "https://github.com/waqaryounas1428",
  },
  {
    tag: "Portfolio Website",
    title: "Charity Foundation Site",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    short: "Modern dark portfolio website for charity foundation with elegant design and smooth animations.",
    live: "https://charity-blush-psi.vercel.app/",
    github: "https://github.com/waqaryounas1428",
  },
  {
    tag: "Professional Services",
    title: "Lawyer Portfolio Site",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    short: "Professional lawyer portfolio website built with React and advanced animations.",
    live: "https://lawyer-pi-three.vercel.app/",
    github: "https://github.com/waqaryounas1428",
  },
  {
    tag: "Full Stack Application",
    title: "Pest Control Management",
    tech: ["HTML5", "CSS3", "JavaScript", "Node.js", "API"],
    short: "Task management web application for pest control services using JavaScript, Node.js and API integration.",
    live: "https://pest-control-omega.vercel.app/",
    github: "https://github.com/waqaryounas1428",
  },
  {
    tag: "Landing Page",
    title: "Restaurant Landing Page",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    short: "Creative and responsive landing page for restaurant business with modern food presentation.",
    live: "https://restaurant-rho-ruddy.vercel.app/foodymat",
    github: "https://github.com/waqaryounas1428",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-row">
      <div className="project-info">
        <span className="project-tag">{project.tag}</span>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-tech">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        <p className="project-description">{project.short}</p>
      </div>
      
      <div className="project-actions">
        <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-live">
          Live Demo
        </a>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
          GitHub
        </a>
      </div>
    </div>
  );
};

export const Project = () => (
  <section id="projects" className="projects scroll-effect">
    <span className="section-label">Portfolio</span>
    <h1 className="Featured-Project">Featured Projects</h1>
    <p className="section-sub">Things I've designed and built</p>
    <div className="projects-list">
      {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
    </div>
  </section>
);
