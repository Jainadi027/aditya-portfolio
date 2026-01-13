import React from 'react';
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import { Github, Linkedin, Mail, Download, Twitter } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import profileImage from '../../assets/ProfilePhoto.jpeg';

import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate('/projects');
  };

  const goToContact = () => {
    navigate('/contact');
  };
  return (
    <>
      <Header />
      <div className="home-wrapper">
     
        <div className="animated-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="grid-pattern"></div>
        </div>

        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-content">
                <h1 className="hero-title">
                  Hello, I'm <span className="highlight">Aditya Jain</span>
                </h1>
                <p className="hero-subtitle">Full Stack Developer & UI/UX Enthusiast</p>
                <p className="hero-description">
                  Crafting pixel-perfect, high-performance web applications with cutting-edge 
                  technologies. I bring ideas to life through clean code and intuitive design.
                </p>
                
                <div className="hero-actions">
                  <button className="btn btn-primary">
                    <Download size={20} />
                    Download CV
                  </button>
                  <button className="btn btn-outline" onClick={goToProjects}>
            View Projects
          </button>
                </div>

                <div className="social-bar">
  <a
    href="https://github.com/dashboard"
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github size={22} />
  </a>
  <a
    href="https://www.linkedin.com/in/adityajain027"
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin size={22} />
  </a>
  <a
    href="https://x.com/jainadi027"
    className="social-icon"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Twitter size={22} />
  </a>
</div>
</div>

              <div className="hero-image">
                <div className="profile-card">
                  <div className="hero-image">
  <div className="profile-wrapper">
    
    <div className="profile-glow"></div>

    <div className="profile-border">
      <img 
        src={profileImage} 
        alt="Aditya Jain" 
        className="profile-img" 
      />
    </div>

  </div>
</div>
</div>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">What I Do</span>
              <h2 className="section-title">My Expertise</h2>
            </div>

            <div className="expertise-grid">
              <div className="expertise-card">
                <div className="card-header">
                  <div className="card-icon icon-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <h3>Frontend Development</h3>
                </div>
                <p>Creating responsive and interactive user interfaces with React and modern CSS frameworks.</p>
                <div className="tech-stack">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Javascript</span>
                  <span>Typescript</span>
                   <span>React</span>
                </div>
              </div>

              <div className="expertise-card">
                <div className="card-header">
                  <div className="card-icon icon-green">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                      <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                      <line x1="6" y1="6" x2="6.01" y2="6"></line>
                      <line x1="6" y1="18" x2="6.01" y2="18"></line>
                    </svg>
                  </div>
                  <h3>Backend Development</h3>
                </div>
                <p>Building scalable server-side applications and RESTful APIs with Node.js, Express, and databases.</p>
                <div className="tech-stack">
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>SQL</span>
                </div>
              </div>

              <div className="expertise-card">
                <div className="card-header">
                  <div className="card-icon icon-purple">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                      <path d="M2 17l10 5 10-5"></path>
                      <path d="M2 12l10 5 10-5"></path>
                    </svg>
                  </div>
                  <h3>UI/UX Design</h3>
                </div>
                <p>Designing beautiful and intuitive user experiences with a focus on usability and accessibility.</p>
                <div className="tech-stack">
                  <span>Figma</span>
                  <span>Adobe XD</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2 className="cta-title">Let's Work Together</h2>
              <p className="cta-text">
                Have a project in mind? Let's create something extraordinary together.
              </p>
              <button className="btn btn-light" onClick={goToContact}>
            <Mail size={20} />
            Get In Touch
          </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}