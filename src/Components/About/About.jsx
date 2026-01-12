import React from 'react';

import { Code, Palette, Rocket, GraduationCap,MapPin,Mail,Phone,Download} from 'lucide-react';
import './About.css';

export default function About() {
  const skillCategories = [
    {
      title: 'Frontend Skills',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js' ]
    },
    {
      title: 'Backend Skills',
      skills: ['Node.js', 'Express.js', 'Python']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git & GitHub', 'Docker', 'Vercel', 'AWS', 'Postman', 'VS Code', 'Figma']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Tilak Raj Chadha Institute Of Management and Technology',
      year: '2022 - 2025'
    },
    {
      degree: 'Senior Secondary (Class 12th)',
      institution: 'S.R. D.A.V Public School, Saharanpur',
      year: '2021-2022',
    }
  ];

  return (
    <>
    
      <div className="about-wrapper">
       
        <div className="about-bg">
          <div className="gradient-sphere sphere-1"></div>
          <div className="gradient-sphere sphere-2"></div>
          <div className="gradient-sphere sphere-3"></div>
        </div>

        <section className="about-hero">
          <div className="about-container">
            <div className="hero-content-about">
              <span className="page-label">About Me</span>
              <h1 className="page-title">Creative Developer & Problem Solver</h1>
              <p className="page-subtitle">
                Passionate about building exceptional digital experiences that make a difference
              </p>
            </div>
          </div>
        </section>


        <section className="intro-section">
          <div className="about-container">
            <div className="intro-content-full">
              <h2 className="intro-title">Hello! I'm Alex Morgan</h2>
              <p className="intro-text">
                I'm a full-stack developer with over 6 years of experience creating web applications 
                that users love. My journey in tech started with a curiosity about how websites work, 
                and it has evolved into a passion for building scalable, user-friendly applications.
              </p>
              <p className="intro-text">
                I specialize in modern JavaScript frameworks, with a particular love for React and 
                Node.js. Beyond coding, I'm passionate about clean code, design systems, and creating 
                intuitive user experiences that solve real-world problems.
              </p>
              <p className="intro-text">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge through blog posts and mentoring.
              </p>

              <div className="personal-info">
                <div className="info-item">
                  <MapPin size={20} />
                  <span><strong>Location:</strong> Saharanpur,UP</span>
                </div>
                <div className="info-item">
                  <Mail size={20} />
                  <span><strong>Email:</strong> jainadi027@gmail.com</span>
                </div>
                <div className="info-item">
                  <Phone size={20} />
                  <span><strong>Phone:</strong> +91 9758835072</span>
                </div>
              </div>

              <button className="btn-download">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
        </section>


        <section className="services-section">
          <div className="about-container">
            <div className="section-heading">
              <h2 className="section-title-about">What I Do</h2>
              <p className="section-desc">My core competencies and service offerings</p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon icon-code">
                  <Code size={32} />
                </div>
                <h3 className="service-title">Web Development</h3>
                <p className="service-desc">
                  Building responsive, high-performance web applications using modern frameworks 
                  and best practices.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon icon-design">
                  <Palette size={32} />
                </div>
                <h3 className="service-title">UI/UX Design</h3>
                <p className="service-desc">
                  Creating beautiful, intuitive interfaces that provide seamless user experiences 
                  across all devices.
                </p>
              </div>

              <div className="service-card">
                <div className="service-icon icon-rocket">
                  <Rocket size={32} />
                </div>
                <h3 className="service-title">Performance Optimization</h3>
                <p className="service-desc">
                  Optimizing applications for speed, scalability, and efficiency to deliver 
                  exceptional performance.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section className="skills-section">
          <div className="about-container">
            <div className="section-heading">
              <h2 className="section-title-about">Technical Skills</h2>
              <p className="section-desc">Technologies and tools I work with</p>
            </div>

            <div className="skills-categories">
              {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="skill-category">
                  <h3 className="category-title">{category.title}</h3>
                  <div className="category-skills">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-badge">
                        <span className="skill-name-badge">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className="experience-section">
          <div className="about-container">
            <div className="education-center">
              <div className="timeline-column">
                <div className="timeline-header">
                  <GraduationCap size={28} />
                  <h2 className="timeline-title">Education</h2>
                </div>

                <div className="timeline">
                  {education.map((edu, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <span className="timeline-period">{edu.year}</span>
                        <h3 className="timeline-job-title">{edu.degree}</h3>
                        <h4 className="timeline-company">{edu.institution}</h4>
                        <p className="timeline-desc">{edu.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    
    </>
  );
}