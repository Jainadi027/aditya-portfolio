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
  },
   {
    title: "Job-Portal",
    desc: "Built a scalable job portal web application featuring JWT authentication, secure APIs, and role-based access control",
    tech: ["Node.js", "Express.js", "MongoDb", "JWT authentication"],
    github: "https://github.com/Jainadi027/Job-Application/tree/main/Job-portal",
  },
  {
    title: "Flight Management System",
    desc: "This is a database management system (DBMS) project for managing flights, passengers, tickets, transactions, and related entities.",
    tech: ["Database Design", "MySQL"],
    github: "https://github.com/Jainadi027/Flight-Mangement-System",
  },
];


const certificatesData = [
  {
    name: "Data Analytics and Visualization Job",
    platform: " Accenture",
    link: "https://www.linkedin.com/posts/adityajain027_certificate-for-data-analytics-visualization-activity-7220765266459213824-g0Zn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdseEsBh1Yhw_HMudEqrSgDSC7dv47EbNA"
  },
  {
    name: "Full-Stack Web Development",
    platform: " Udemy",
    link: "https://www.linkedin.com/in/adityajain027/details/certifications/1768309877327/single-media-viewer/?profileId=ACoAADwiQ_UB4GdY67PH4Bu7BDERRJr5OmVWCvk"
  },
  {
    name: "Programming in Python",
    platform: "SWAYAM",
    link: "https://www.linkedin.com/in/adityajain027/details/certifications/1719441756052/single-media-viewer/?profileId=ACoAADwiQ_UB4GdY67PH4Bu7BDERRJr5OmVWCvk"
  },
  {
    name: "Programming in Python",
    platform: "Udemy",
    link: "https://www.udemy.com/certificate/UC-fc8376f1-97c1-4dd5-bb4c-68954bb121e2/"
  },
    {
    name: "Amazon Web Services",
    platform: "AR Club",
    link: "https://www.linkedin.com/posts/adityajain027_im-happy-to-share-that-ive-obtained-a-new-activity-7045324569640927232-dSqX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdseEsBh1Yhw_HMudEqrSgDSC7dv47EbNA"
  },
   {
    name: "JavaScript & React Workshop",
    platform: " Indian Institute of Technology, Kanpur",
    link: "https://verify.eicta.digitalcredentials.in/621cdb87-2447-4de2-90d7-89c43bb0ded7"
  },
    {
    name: "KAVACH Guiding Session",
    platform: " AR Club",
    link: "https://www.linkedin.com/posts/adityajain027_here-is-my-another-certificate-for-participating-activity-7048675142482231296-svn-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEdseEsBh1Yhw_HMudEqrSgDSC7dv47EbNA"
  }
];

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <div className="projects-container">
        <div className="projects-heading">
          <h2 className="projects-title">My Projects</h2>
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
              </div>

            </div>
          ))}
        </div>

        <div className="projects-heading">
          <h2 className="projects-title">My Certificates</h2>
        </div>

        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <h3>{cert.name}</h3>
              <p>{cert.platform}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="certificate-btn"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;