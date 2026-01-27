import React from "react";
import "./Experience.css"; 


export default function ExperienceVolunteer() {
  return (
    <div className="experience-volunteer-container">
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
        <div className="volunteer-item">
          <h3>Event Organizer</h3>
          <p><strong>Organization:</strong> Technical Club, TIMT</p>
          <p><strong>Duration:</strong>February 2023 - Present</p>
          <p><strong>Role:</strong> As a Tech Warrior member, organized several coding events, hackathons, and workshops. Coordinated team activities, mentored participants, and managed event logistics to make sessions engaging and informative.</p>
          <p>
          <strong>Highlights:</strong><br/>
         Event Organizer: Volunteered as an event organizer, managing planning, coordination, and on-ground execution of college events.<br/>
         BCA Representative: Served as the BCA class representative, acting as a liaison between students and faculty.<br/>
         - Organized multiple coding competitions and hackathons.<br/>
         - Conducted workshops on programming and web development.<br/>
         - Collaborated with peers to implement innovative and interactive sessions.<br/>
         </p>
        </div> 
      </section>
    </div>
  );
}
