import { useState } from 'react';
import './Portfolio.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const profile = {
    name: "EL BAKAY Chaimae",
    title: "Computer Engineering Student",
    email: "chaimaebky14@gmail.com", 
    phone: "+212 628-077-343",
    description: "Computer engineering student passionate about innovative technologies. I master Full-Stack development, AI solutions and Cloud, with solid experience in React, Flask and DevOps methodologies. I am looking for a final year internship to leverage my technical skills and adaptability in a stimulating professional environment. Available for international mobility with EMSI internship agreement.",
    photo: "/Design sans titre (1).png" 
  };

  const education = [
    {
      school: "Moroccan School of Engineering Sciences - EMSI Casablanca",
      degree: "Engineering Cycle – Computer Science and Networks",
      period: "2023–2026",
      details: "In progress - Available for final year internship from February 2026 (6 months)"
    },
    {
      school: "Higher School of Technology - EST Laâyoune",
      degree: "DUT – Computer Engineering",
      period: "2021–2023",
      details: "Top of the class"
    },
    {
      school: "Lycée Hassan II, Laâyoune",
      degree: "Baccalaureate – Physical Sciences",
      period: "2020–2021",
      details: "Honors"
    }
  ];

  const experiences = [
    {
      title: "Complaint Management System",
      company: "Technical internship at TIRSO MAROC",
      period: "2 months - 2025",
      technologies: "React/Flask/PostgreSQL ● AI Chatbot",
      description: "Customer service improvement",
      tasks: [
        "Development of a complaint management system",
        "Implementation of an AI chatbot for customer support",
        "Optimization of processing workflows"
      ]
    },
    {
      title: "Smart Home with AI",
      company: "Technical internship at GoGreen",
      period: "2 months - 2024",
      technologies: "Facial recognition ● Raspberry Pi ● Arduino ● Python OpenCV",
      description: "Home automation control automation",
      tasks: [
        "Development of facial recognition system",
        "Sensor integration with Raspberry Pi and Arduino",
        "Creation of intelligent control interface"
      ]
    },
    {
      title: "HR Management Web Application",
      company: "Technical internship at OCP",
      period: "2 months - 2024",
      technologies: "HTML5/CSS3/Javascript/PHP ● MySQL",
      description: "Simplification of personnel tracking",
      tasks: [
        "Design and development of the web application",
        "MySQL database management",
        "Implementation of HR functionalities"
      ]
    },
     {
    title: "Language Club Website Development",
    company: "Technical internship at INTERWEBSERVICE LAAYOUNE",
    period: "2 months - 2023",
    technologies: "HTML5/CSS3/JavaScript ● Responsive Design",
    description: "Creation of a website for a language club with modern and responsive interface",
    tasks: [
      "Front-end development with HTML5, CSS3 and JavaScript",
      "Design of a responsive user interface",
      "User experience optimization",
      "Integration of modern and attractive designs"
    ]
  }
  ];

 const projects = [
    {
      title: "AI Recruitment Platform - Full-Stack",
      description: "Intelligent recruitment platform using AI to automatically analyze CVs and calculate compatibility scores between candidates and job offers. Intelligent matching system with separate dashboard for candidates and recruiters.",
      technologies: ["React", "Flask", "NLP", "Python", "PostgreSQL", "TailwindCSS", "JWT"],
      startDate: "Aout 2025",
      endDate: "Sep 2025",
      address: "Personal Project",
      tasks: [
        "Development of NLP algorithms (Jaccard similarity) for automatic CV analysis",
        "PDF extraction system with skills and experience detection",
        "Microservices architecture with React frontend and Flask backend",
        "Implementation of intelligent matching with 0-100% scores",
        "Role-based dashboard with real-time application management"
      ],
      features: [
        "Automatic AI analysis of PDF CVs",
        "Real-time compatibility calculation",
        "Role system (candidate/recruiter)",
        "Application tracking",
        "Intelligent profile ranking"
      ],
      image: "/recruiter-dashboard.jpg"
    },
      {
  title: "Application Web de Gestion d’Agenda",
  description: "Application web permettant aux utilisateurs de gérer leurs tâches quotidiennes, visualiser les événements et recevoir des rappels, avec une interface simple et intuitive.",
  technologies: ["Spring Boot", "Angular", "MySQL", "Spring Security"],
  startDate: "Sept 2025",
  endDate: "Present",
  address: "Projet académique - EMSI Casablanca",
  tasks: [
    "Développement du backend avec Spring Boot et REST API",
    "Gestion de la base de données MySQL avec Spring Data JPA",
    "Implémentation de l’authentification sécurisée",
    "Création des endpoints pour gérer les tâches et rappels",
    "Développement du frontend Angular pour les vues Dashboard, Liste et Calendrier",
    "Mise en place des vues connexion / inscription et tableau de bord utilisateur"
  ],
  features: [
    "Gestion des tâches avec titre, description, date, priorité et statut",
    "Système de rappels configurable (10 minutes, 1 heure, 1 jour)",
    "Affichage des tâches en liste et calendrier",
    "Dashboard avec statistiques du jour, mini-calendrier et prochaines tâches",
    "Authentification sécurisée avec mot de passe hashé"
  ],
  image: "/logo.png" // You can use a generic backend image
},
    {
      title: "Complete DevOps Pipeline - Cloud Infrastructure",
      description: "Task management application with end-to-end automated DevOps pipeline, integrating code quality analysis, cloud deployment and real-time monitoring.",
      technologies: ["Docker", "Azure", "CI/CD", "GitHub Actions", "SonarQube", "Grafana", "Prometheus", "React", "Flask"],
      startDate: "Feb 2025",
      endDate: "May 2025",
      address: "Academic Project - EMSI",
      tasks: [
        "Complete CI/CD pipeline configuration with GitHub Actions",
        "SonarQube integration for static code analysis",
        "Automated deployment on Azure App Service",
        "Monitoring setup with Prometheus and Grafana",
        "Containerization with Docker and Docker Compose"
      ],
      features: [
        "Automated CI/CD pipeline",
        "Code quality > 85% with SonarQube",
        "Real-time metrics monitoring",
        "Azure cloud deployment",
        "Containerized microservices architecture"
      ],
      image: "/grafana2.jpg"
    },
    {
      title: "Native Mobile Application - Android",
      description: "Interactive educational quiz application on Android development, integrating secure authentication, geolocation and real-time scoring system.",
      technologies: ["Android", "Firebase", "Google Maps API", "Java", "Material Design", "GPS", "Firebase Auth"],
      startDate: "Feb 2025",
      endDate: "Apr 2025",
      address: "Academic Project - EMSI",
      tasks: [
        "Native Android application development with Java",
        "Firebase Authentication integration for user management",
        "Geolocation implementation with Google Maps API",
        "Creation of 5 progressive quizzes on Android development",
        "Dynamic scoring system with Material Design animations"
      ],
      features: [
        "Secure Firebase authentication",
        "Geolocation and interactive mapping",
        "Progressive quizzes with real-time scoring",
        "Material Design interface with animations",
        "User session persistence"
      ],
      image: "/quiz1.jpg"
    },
    {
      title: "Currency Converter - Full-Stack Cloud",
      description: "Real-time currency conversion web application, fully containerized and deployed on Azure cloud with automated CI/CD pipeline.",
      technologies: ["React", "Flask", "Docker", "Azure", "API REST", "TailwindCSS", "GitHub Actions"],
      startDate: "Jul 2025",
      endDate: "Aug 2025",
      address: "Personal Cloud Project",
      tasks: [
        "React frontend development with responsive interface",
        "Flask backend with REST API for conversions",
        "Real-time exchange rate API integration",
        "Containerization with Docker multi-stage builds",
        "Automated deployment on Azure Container Instances"
      ],
      features: [
        "Real-time currency conversions",
        "Responsive user interface",
        "Containerized microservices architecture",
        "Automated Azure cloud deployment",
        "CI/CD pipeline with automated tests"
      ],
      image: "/currencyconverter2.jpg"
    },
    {
      title: "Complaint Management System - Enterprise",
      description: "Enterprise complaint management platform developed for TIRSO MAROC, with AI chatbot, real-time dashboards and multi-role workflow.",
      technologies: ["React", "Flask", "PostgreSQL", "Docker", "JWT", "WebSocket", "TailwindCSS"],
      startDate: "Sep 2025",
      endDate: "Jul 2025",
      address: "Enterprise Internship - TIRSO MAROC",
      tasks: [
        "Full-stack development of the management platform",
        "Implementation of multi-role system (client/technician/admin)",
        "AI chatbot integration for customer support",
        "Optimized PostgreSQL database design",
        "Real-time notification system setup"
      ],
      features: [
        "Complete complaint management workflow",
        "AI chatbot for intelligent support",
        "Real-time multi-role dashboards",
        "Notification and alert system",
        "Advanced reports and analytics"
      ],
      image: "/7.jpg"
    }
  ];

  const skills = {
    "Languages": ["Java","Python", "JavaScript", "Java", "SQL", "C#", "C/C++", "HTML/CSS"],
    "Frameworks & Libraries": ["React", "Flask", ".NET", "J2EE", "Node.js", "Bootstrap" , "Flutter", "Android"],
    "Cloud & DevOps": ["Docker", "Azure", "CI/CD (GitHub Actions)"],
    "Databases": ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
    "Tools & Methodologies": ["Git", "Agile/Scrum", "UML", "REST API", "Microservices"]
  };

  const certifications = [
    "Oracle Cloud Infrastructure 2025 DevOps Professional (Oracle)",
    "Java OOP (Penn)",
    "React Basics (Meta)",
    "Software Eng. (HKUST)",
    "Python (Michigan)",
    "Problem Solving (IBM)",
    "Unix (Johns Hopkins)"
  ];

  const languages = [
    { language: "Arabic", level: "native" },
    { language: "French", level: "fluent" },
    { language: "English", level: "fluent" }
  ];

  const activities = [
    "Participation in WeCreate Hackathon",
    "Major events around AI and innovation",
    "AI Bootcamp (Microsoft Community)",
    "GITEX Africa"
  ];

  const softSkills = [
    "Leadership",
    "Autonomy",
    "Problem Solving",
    "Communication",
    "Agile Project Management", 
    "Innovation and Creativity",
    "Technological Adaptability",
    "Analytical and Critical Thinking",
    "Strategic Decision Making"
  ];

  const interests = [
    "Volunteering at NEXUS.AI club",
    "Reading",
    "Personal development"
  ];

  // Internship information
  const stageInfo = {
    disponibilite: "February 2026 - July 2026 (6 months)",
    mobilite: "Available for international mobility",
    convention: "EMSI internship agreement provided",
    duree: "6 months - Final year internship"
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">Chaimae.BKY</div>
          <div className="nav-links">
            {['about', 'education', 'experience', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {section === 'about' ? 'About' : 
                 section === 'education' ? 'Education' :
                 section === 'experience' ? 'Experience' :
                 section === 'projects' ? 'Projects' :
                 section === 'skills' ? 'Skills' : 'Contact'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with photo */}
      <header className="hero">
        <div className="hero-container">
          <div className="hero-avatar">
            <img 
              src={profile.photo} 
              alt="Chaimae El Bakay" 
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-fallback">CB</div>
          </div>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-subtitle">{profile.title}</p>
          <div className="stage-availability">
          </div>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => setActiveSection('contact')}
            >
              Contact Me
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setActiveSection('projects')}
            >
              View My Projects
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section">
            <h2 className="section-title">About Me</h2>
            <div className="about-card">
              <p className="about-text">{profile.description}</p>
              <div className="about-grid">
                <div className="about-item">
                  <h3>Professional Objective</h3>
                  <p>Looking for a 6-month final year internship starting February 2026 to contribute to innovative projects in Cloud, Full-stack and artificial intelligence fields. Available for international mobility with EMSI internship agreement.</p>
                </div>
                <div className="about-item">
                  <h3>Specialization</h3>
                  <p>Specialized in Full-Stack development and innovative digital solutions, I master a wide range of modern technologies for creating web, mobile and intelligent applications. My expertise also covers cloud infrastructure deployment and DevOps methodologies implementation.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section">
            <h2 className="section-title">Education</h2>
            <div className="education-list">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <div className="education-header">
                    <div>
                      <h3 className="education-school">{edu.school}</h3>
                      <p className="education-degree">{edu.degree}</p>
                      <p className="education-details">{edu.details}</p>
                    </div>
                    <span className="education-period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="section">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <p className="experience-description">{exp.description}</p>
                  <div className="experience-tasks">
                    <h4>Tasks performed:</h4>
                    <ul>
                      {exp.tasks.map((task, i) => (
                        <li key={i}>{task}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="tech-tags">
                    {exp.technologies.split(' ● ').map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

       {/* Projects Section with images */}
{activeSection === 'projects' && (
  <section className="section">
    <h2 className="section-title">Academic Projects</h2>
    
    {/* GitHub Notification centered */}
    <div className="github-notice-centered">
      <p><strong>For more technical details and source code see my GitHub</strong> 
       
      </p>
    </div>
    
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {/* Rest of the code remains unchanged */}
          {project.image && (
            <div className="project-image">
              <img 
                src={project.image} 
                alt={project.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-meta">
              <span className="project-date">{project.startDate} - {project.endDate}</span>
              <span className="project-address">{project.address}</span>
            </div>
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="project-tasks">
            <h4>Tasks performed:</h4>
            <ul>
              {project.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-technologies">
            <h4>Technologies used:</h4>
            <div className="tech-tags">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="section">
            <h2 className="section-title">Skills</h2>
            
            {/* Technical Skills */}
            <div className="skills-section">
              <h3 className="skills-category-title">Technical Skills</h3>
              <div className="skills-grid">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category} className="skill-category">
                    <h4 className="skill-category-name">{category}</h4>
                    <div className="skill-tags">
                      {skillList.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="skills-section">
              <h3 className="skills-category-title">Certifications</h3>
              <div className="certifications-list">
                {certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <div className="certification-dot"></div>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages & Soft Skills */}
            <div className="skills-columns">
              <div className="skills-column">
                <h3 className="skills-category-title">Languages</h3>
                <div className="languages-list">
                  {languages.map((lang, index) => (
                    <div key={index} className="language-item">
                      <span className="language-name">{lang.language}</span>
                      <span className="language-level">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills-column">
                <h3 className="skills-category-title">Soft Skills</h3>
                <div className="soft-skills">
                  {softSkills.map((skill, index) => (
                    <span key={index} className="soft-skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Activities & Interests */}
            <div className="skills-columns">
              <div className="skills-column">
                <h3 className="skills-category-title">Activities</h3>
                <div className="activities-list">
                  {activities.map((activity, index) => (
                    <div key={index} className="activity-item">
                      <div className="activity-dot"></div>
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skills-column">
                <h3 className="skills-category-title">Interests</h3>
                <div className="interests-list">
                  {interests.map((interest, index) => (
                    <div key={index} className="interest-item">
                      <div className="interest-dot"></div>
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="section">
            <h2 className="section-title">Contact</h2>
            <div className="contact-card">
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div>
                    <p className="contact-label">Email</p>
                    <a href={`mailto:${profile.email}`} className="contact-value">
                      {profile.email}
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div>
                    <p className="contact-label">Phone</p>
                    <a href={`tel:${profile.phone}`} className="contact-value">
                      {profile.phone}
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🔗</div>
                  <div>
                    <p className="contact-label">Social Networks</p>
                    <div className="social-links">
                      <a href="https://linkedin.com/in/chaimae-el-bakay-499288304" className="social-link">
                        LinkedIn
                      </a>
                      <a href="https://github.com/chaimaebky" className="social-link">
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <p className="contact-label">Internship Availability</p>
                    <p className="contact-value">February 2026 - 6 months - International mobility</p>
                    <p className="contact-note">EMSI internship agreement provided</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-message">
                <p>Feel free to contact me to discuss final year internship opportunities starting February 2026!</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 El Bakay Chaimae</p>
        <p>Available for final year internship - February 2026 - International mobility - EMSI Agreement</p>
      </footer>
    </div>
  );
}