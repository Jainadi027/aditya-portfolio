import { Code, Palette, Rocket, GraduationCap,MapPin,Mail,Phone,Download} from 'lucide-react';
import './About.css';
import { useTheme } from '../../ThemeContext/ThemeContext';

export default function About() {
    const { theme } = useTheme();
  const skillCategories = [
    {
      title: 'Frontend Skills',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'TypeScript', 'React.js' ]
    },
    {
      title: 'Backend Skills',
      skills: ['Node.js', 'Express.js', 'Python', 'php', 'Java']
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
      degree: 'Bachelor of Commerce (B.Com)',
      institution: 'Jv Jain College,Saharnpur (Affiliated from Maa Shakumbhari University) ',
      year: 'July 2023 - July 2026'
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Tilak Raj Chadha Institute Of Management and Technology,Yamunanagar (Affiliated from Kurukshetra University)',
      year: 'August 2022 -  july 2025'
    },
    {
      degree: 'Senior Secondary (Class 12th)',
      institution: 'S.R. D.A.V Public School, Saharanpur',
      year: 'April 2021- June 2022',
    }
  ];

  return (
    <>
    
       <div className={`about-wrapper ${theme}`}>
       
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
              <h2 className="intro-title">Hello! I'm Aditya Jain</h2>
              <p className="intro-text">
                I'm a Full Stack Developer passionate about building web applications that are both functional and visually appealing. I enjoy turning ideas into interactive digital experiences using modern web technologies.
              </p>
              <p className="intro-text">
                I specialize in React for front-end development and Node.js/Express for back-end development, with experience in databases like MongoDB and SQL. I focus on writing clean, efficient, and scalable code that delivers seamless user experiences.
              </p>
              <p className="intro-text">
               I’m constantly learning new technologies and best practices to improve my skills. My goal is to create applications that not only work well but also delight users, combining performance, usability, and design.
              </p>
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