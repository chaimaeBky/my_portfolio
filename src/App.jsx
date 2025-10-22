import { useState } from 'react';
import './Portfolio.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

 
  const profile = {
    name: "EL BAKAY Chaimae",
    title: "Étudiante en Ingénierie Informatique",
    email: "chaimaebky14@gmail.com", 
    phone: "+212 628-077-343",
    description: "Étudiante ingénieure en informatique passionnée par les technologies innovantes. Je maîtrise le développement Full-Stack, les solutions IA et le Cloud, avec une solide expérience en React, Flask et les méthodologies DevOps. Je recherche un stage de fin d'études pour mettre à profit mes compétences techniques et mon adaptabilité dans un environnement professionnel stimulant.",
    photo: "/Design sans titre (1).png" 
  };

  const education = [
    {
      school: "École Marocaine des Sciences de l'Ingénieur - EMSI Casablanca",
      degree: "Cycle Ingénieur – Informatique et Réseaux",
      period: "2023–2026",
      details: "En cours"
    },
    {
      school: "École Supérieure de Technologie - EST Laâyoune",
      degree: "DUT – Génie Informatique",
      period: "2021–2023",
      details: "Major de promotion"
    },
    {
      school: "Lycée Hassan II, Laâyoune",
      degree: "Baccalauréat – Sciences Physiques",
      period: "2020–2021",
      details: "Mention bien"
    }
  ];

  const experiences = [
    {
      title: "Système de gestion des réclamations",
      company: "Stage technique chez TIRSO MAROC",
      period: "2 mois - 2025",
      technologies: "React/Flask/PostgreSQL ● Chatbot IA",
      description: "Amélioration du traitement client",
      tasks: [
        "Développement d'un système de gestion des réclamations",
        "Implémentation d'un chatbot IA pour le support client",
        "Optimisation des processus de traitement"
      ]
    },
    {
      title: "Maison intelligente avec IA",
      company: "Stage technique chez GoGreen",
      period: "2 mois - 2024",
      technologies: "Reconnaissance faciale ● Raspberry Pi ● Arduino ● Python OpenCV",
      description: "Automatisation du contrôle domestique",
      tasks: [
        "Développement du système de reconnaissance faciale",
        "Intégration des capteurs avec Raspberry Pi et Arduino",
        "Création de l'interface de contrôle intelligent"
      ]
    },
    {
      title: "Application web de gestion RH",
      company: "Stage technique chez OCP",
      period: "2 mois - 2024",
      technologies: "HTML5/CSS3/Javascript/PHP ● MySQL",
      description: "Simplification du suivi du personnel",
      tasks: [
        "Conception et développement de l'application web",
        "Gestion de la base de données MySQL",
        "Implémentation des fonctionnalités RH"
      ]
    },
     {
    title: "Développement Site Web Club des Langues",
    company: "Stage technique chez INTERWEBSERVICE LAAYOUNE",
    period: "2 mois - 2023",
    technologies: "HTML5/CSS3/JavaScript ● Responsive Design",
    description: "Création d'un site web pour un club des langues avec interface moderne et responsive",
    tasks: [
      "Développement front-end avec HTML5, CSS3 et JavaScript",
      "Conception d'une interface utilisateur responsive",
      "Optimisation de l'expérience utilisateur",
      "Intégration de designs modernes et attractifs"
    ]
  }
  ];

  const projects = [
    {
      title: "Plateforme IA de Recrutement - Full-Stack",
      description: "Algorithmes NLP (Jaccard similarity) et extraction PDF pour analyse automatique de CV. Architecture React/Flask avec système de rôles et matching intelligent 0-100%.",
      technologies: ["React", "Flask", "NLP", "Python", "PostgreSQL"],
      startDate: "oct 2024",
      endDate: "déc 2024",
      address: "Projet Personnel",
      tasks: [
        "Développement des algorithmes NLP pour l'analyse de CV",
        "Création du système d'extraction PDF",
        "Implémentation du matching intelligent 0-100%",
        "Design de l'architecture React/Flask"
      ],
      image: "/recruiter-dashboard.jpg"
    },
    {
      title: "Pipeline DevOps Complet - Infrastructure Cloud",
      description: "CI/CD GitHub Actions + SonarQube + Prometheus/Grafana monitoring. Déploiement automatisé Azure avec conteneurs Docker et qualité de code 85%+.",
      technologies: ["Docker", "Azure", "CI/CD", "GitHub Actions", "SonarQube"],
      startDate: "Fév 2024",
      endDate: "mai 2024",
      address: "Projet Académique - EMSI",
      tasks: [
        "Configuration du pipeline CI/CD avec GitHub Actions",
        "Mise en place du monitoring Prometheus/Grafana",
        "Déploiement automatisé sur Azure",
        "Optimisation de la qualité de code avec SonarQube"
      ],
      image: "/grafana2.jpg"
    },
    {
      title: "Application Mobile Native - Android",
      description: "Firebase Authentication + Google Maps API + Material Design. Quiz interactif avec scoring temps réel et géolocalisation.",
      technologies: ["Android", "Firebase", "Google Maps API", "Java", "Material Design"],
      startDate: "Fév 2024",
      endDate: "avr 2024",
      address: "Projet Académique - EMSI",
      tasks: [
        "Développement de l'application Android native",
        "Intégration de Firebase Authentication",
        "Implémentation de la géolocalisation avec Google Maps API",
        "Création du système de quiz interactif"
      ],
      image: "/quiz1.jpg"
    },
    {
      title: "Convertisseur Devises - Full-Stack Cloud",
      description: "Application React/Flask containerisée avec API temps réel. Déploiement Azure Container Instances et CI/CD automatisé.",
      technologies: ["React", "Flask", "Docker", "Azure", "API REST"],
      startDate: "juil 2024",
      endDate: "aout 2024",
      address: "Projet Cloud personnel",
      tasks: [
        "Développement de l'application React/Flask",
        "Containerisation avec Docker",
        "Intégration d'API temps réel pour les devises",
        "Déploiement sur Azure Container Instances"
      ],
      image: "/currencyconverter2.jpg"
    },
    {
      title: "Système Médical - Entreprise",
      description: "Application Django/MySQL avec gestion sécurisée des patients. Interface complète avec authentification et calendrier de rendez-vous.",
      technologies: ["Django", "MySQL", "Python", "JavaScript", "HTML/CSS"],
      startDate: "mars 2023",
      endDate: "avr 2024",
      address: "Projet Entreprise - Simulation",
      tasks: [
        "Développement de l'application Django",
        "Conception de la base de données MySQL",
        "Implémentation du système d'authentification sécurisé",
        "Création du calendrier de rendez-vous"
      ],
      image: "/medicare.jpg"
    }
  ];

  const skills = {
    "Langages": ["Python", "JavaScript", "Java", "SQL", "C#", "C/C++", "HTML/CSS"],
    "Frameworks & Libs": ["React", "Flask", ".NET", "J2EE", "Node.js", "Bootstrap"],
    "Cloud & DevOps": ["Docker", "Azure", "CI/CD (GitHub Actions)"],
    "Bases de Données": ["PostgreSQL", "MySQL", "MongoDB", "Oracle"],
    "Outils & Méthodologies": ["Git", "Agile/Scrum", "UML", "REST API", "Microservices"]
  };

  const certifications = [
    "Java SE 17 Developer (Oracle)",
    "Java OOP (Penn)",
    "React Basics (Meta)",
    "Software Eng. (HKUST)",
    "Python (Michigan)",
    "Résolution Problèmes (IBM)",
    "Unix (Johns Hopkins)"
  ];

  const languages = [
    { language: "Arabe", level: "maternelle" },
    { language: "Français", level: "courant" },
    { language: "Anglais", level: "courant" }
  ];

  const activities = [
    "Participation au WeCreate Hackathon",
    "Événements majeurs autour de l'IA et de l'innovation",
    "AI Bootcamp (Microsoft Community)",
    "GITEX Africa"
  ];

  const softSkills = [
    "Leadership",
    "Autonomie",
    "Résolution de problèmes",
    "Communication",
    "Gestion de Projet Agile", 
    "Innovation et Créativité",
  "Adaptabilité Technologique",
  "Pensée Analytique et Critique",
  "Prise de Décision Stratégique"
  ];

  const interests = [
    "Bénévolat au club NEXUS.AI",
    "Lecture",
    "Développement personnel"
  ];

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
                {section === 'about' ? 'À Propos' : 
                 section === 'education' ? 'Formation' :
                 section === 'experience' ? 'Expérience' :
                 section === 'projects' ? 'Projets' :
                 section === 'skills' ? 'Compétences' : 'Contact'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section avec photo */}
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
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => setActiveSection('contact')}
            >
              Me Contacter
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => setActiveSection('projects')}
            >
              Voir Mes Projets
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="section">
            <h2 className="section-title">À Propos de Moi</h2>
            <div className="about-card">
              <p className="about-text">{profile.description}</p>
              <div className="about-grid">
                <div className="about-item">
                  <h3>Objectif Professionnel</h3>
                  <p>Recherche un stage de fin d'études pour contribuer à des projets innovants dans le domaine du Cloud , Full-stack et de l'intelligence artificielle.</p>
                </div>
                <div className="about-item">
                  <h3>Spécialisation</h3>
                  <p>Spécialisée en développement Full-Stack et solutions digitales innovantes, je maîtrise un large éventail de technologies modernes pour la création d'applications web, mobiles et intelligentes. Mon expertise couvre également le déploiement d'infrastructures cloud et l'implémentation de méthodologies DevOps.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="section">
            <h2 className="section-title">Parcours Académique</h2>
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
            <h2 className="section-title">Expériences Professionnelles</h2>
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
                    <h4>Tâches réalisées :</h4>
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

       {/* Projects Section avec images */}
{activeSection === 'projects' && (
  <section className="section">
    <h2 className="section-title">Projets Académiques</h2>
    
    {/* Notification GitHub centrée */}
    <div className="github-notice-centered">
      <p><strong>Pour plus de détails techniques et le code source voir mon GitHub</strong> 
       
      </p>
    </div>
    
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {/* Le reste du code reste inchangé */}
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
            <h4>Tâches réalisées :</h4>
            <ul>
              {project.tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-technologies">
            <h4>Technologies utilisées :</h4>
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
            <h2 className="section-title">Compétences</h2>
            
            {/* Technical Skills */}
            <div className="skills-section">
              <h3 className="skills-category-title">Compétences Techniques</h3>
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
                <h3 className="skills-category-title">Langues</h3>
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
                <h3 className="skills-category-title">Activités</h3>
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
                <h3 className="skills-category-title">Centres d'Intérêt</h3>
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
                    <p className="contact-label">Téléphone</p>
                    <a href={`tel:${profile.phone}`} className="contact-value">
                      {profile.phone}
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">🔗</div>
                  <div>
                    <p className="contact-label">Réseaux sociaux</p>
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
              </div>
              
              <div className="contact-message">
                <p>N'hésitez pas à me contacter pour discuter d'opportunités de stage ou de collaboration !</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© 2024 El Bakay Chaimae. Tous droits réservés.</p>
      </footer>
    </div>
  );
}