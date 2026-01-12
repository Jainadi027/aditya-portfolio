import React from "react";
import "./Projects.css";

const projectData = [
  {
    title: "Calculator",
    desc: "Built a responsive calculator using HTML, CSS, and JavaScript for performing basic arithmetic operations.",
    tech: ["HTML","CSS","Javascript"],
    github: "https://github.com/Jainadi027/WEB-DEVELOPMENT-PROJECTS/tree/main/Calculator",
  },
  {
    title: "Image Gallery",
    desc: "Designed a responsive image gallery using HTML and CSS to showcase images in an organized grid layout.",
    tech: ["HTML","CSS"],
    github: "https://github.com/Jainadi027/WEB-DEVELOPMENT-PROJECTS/tree/main/Image%20Gallery"
  },
  {
    title: "Landing Page",
    desc: "Designed a modern and responsive landing page Created a visually appealing UI layout with smooth scrolling effects.",
    tech: ["HTML","CSS","Javascript"],
    github: "https://github.com/Jainadi027/WEB-DEVELOPMENT-PROJECTS/tree/main/Landing%20page",
  },
   {
    title: "QR Code Generator",
    desc: "Implemented real-time QR code generation from user input.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Jainadi027/WEB-DEVELOPMENT-PROJECTS/tree/main/QR%20CODE%20GENERATOR",
  },
   {
    title: "Whether App",
    desc: "Integrated weather API to fetch real-time data.",
    tech: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Jainadi027/WEB-DEVELOPMENT-PROJECTS/tree/main/Whether%20App",
  }
];

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <div className="projects-container">

        <div className="projects-heading">
          <h2 className="projects-title">My Projects</h2>
          <p className="projects-desc">
            Some of the projects I have worked on recently
          </p>
        </div>

        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>

              <div className="project-tech">
                {project.tech.map((item, i) => (
                  <span className="tech-badge" key={i}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  className="project-btn btn-github"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    className="project-btn btn-live"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
