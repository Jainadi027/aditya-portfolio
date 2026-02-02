import React from "react";
import "./Experience.css"; 
import { useTheme } from "../../ThemeContext/ThemeContext";

export default function ExperienceVolunteer() {
    const { theme } = useTheme();
  return (
     <div className={`experience-volunteer-container ${theme}`}>
      <h1>Experience & Volunteer Work</h1>
      <section className="experience-section">
        <h2>Experience</h2>
        <div className="experience-item">
             <div className="experience-item">
          <h3>Web Development Intern</h3>
          <p><strong>Company:</strong> IZYCode</p>
          <p><strong>Duration:</strong> April 2024 - May 2024</p>
          <p><strong>Role:</strong> Developed full-stack web applications using Node.js, Express, and MongoDB.Built RESTful APIs for dynamic data handling and user management.Collaborated with front-end developers to integrate React.js components.
          Participated in code reviews and optimized database queries for better performance.</p>
        </div>
             <div className="experience-item">
          <h3>Front-End Developer Intern</h3>
          <p><strong>Company:</strong> IBM SkillBuild</p>
          <p><strong>Duration:</strong> June 2024 - August 2025</p>
          <p><strong>Role:</strong> Developed responsive and user-friendly web pages using HTML, CSS, and JavaScript.Assisted in implementing React components for interactive UI elements.Collaborated with the design team to improve UI/UX design consistency.Participated in code reviews and optimized front-end performance.</p>
        </div>
      </div>
      </section>

      <section className="volunteer-section">
  <h2>Volunteer Work</h2>

  {/* Technical Club */}
  <div className="volunteer-item">
    <h3>Event Organizer (Tech Warriors)</h3>
    <p><strong>Organization:</strong> Technical Club, TIMT</p>
    <p><strong>Duration:</strong> February 2023 – Present</p>
    <p><strong>Role:</strong> Organized coding events, hackathons, and workshops. Coordinated teams, mentored participants, and managed event logistics to ensure smooth execution.</p>

    <p><strong>Highlights:</strong></p>
    <ul>
      <li>Organized multiple coding competitions and hackathons</li>
      <li>Conducted workshops on programming and web development</li>
      <li>Collaborated with peers to create interactive learning sessions</li>
    </ul>
  </div>


  <div className="volunteer-item">
    <h3> Community Service Volunteer</h3>
    <p><strong>Organization:</strong> Indian Red Cross Society (IRCS)</p>
    <p><strong>Duration:</strong> March 2024 – Present</p>
    <p><strong>Domain:</strong> Civil Rights and Social Action</p>
    <p><strong>Role:</strong> Actively participated in social awareness programs, community support initiatives, and humanitarian activities organized by IRCS.</p>
  </div>

  <div className="volunteer-item">
    <h3>BCA Representative </h3>
    <p><strong>Organization:</strong> Tilak Raj Chadha Institute of Management & Technology</p>
    <p><strong>Duration:</strong> July 2024 – Present</p>
    <p><strong>Domain:</strong> Education</p>
    <p><strong>Role:</strong> Represented BCA students, acted as a liaison between faculty and students, assisted in academic coordination, and supported technical and cultural activities.</p>
  </div>

</section>

    </div>
  );
}
