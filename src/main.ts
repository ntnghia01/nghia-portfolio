import './style.css'

// Portfolio Data
const portfolioData = {
  personal: {
    name: "Nguyen Trung Nghia",
    title: "Software Engineer",
    phone: "(+84) 559 303 471",
    email: "ntnghia26112001@gmail.com",
    location: "Ho Chi Minh City",
    linkedin: "linkedin.com/in/nghiant2611",
    github: "github.com/ntnghia01",
    summary: "Software Engineer with over 3 years of experience in building web applications, mobile apps, and AI-powered systems. Skilled in full-stack development, system deployment, performance optimization, and designing scalable architectures. Experienced in working with cloud infrastructure and delivering end-to-end solutions from concept to production.",
    avatar: "/myself20072025.jpg"
  },
  skills: {
    "Programming & Frameworks": ["Python (FastAPI)", "Java (Spring Boot)", "C/C++", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js", "React Native", "Redux"],
    "AI & Machine Learning": ["LangChain", "RAG Architecture", "OpenAI API"],
    "Cloud Services": ["AWS", "Google Cloud", "GitHub", "Jenkins", "Vercel"],
    "Databases": ["MSSQL", "PostgreSQL", "MongoDB", "Redis"],
    "Third-party Integrations": ["PayOS", "Paddle", "VNPay", "Messenger", "Instagram", "WhatsApp", "Line", "Zalo", "GHN Shipping"],
    "Others": ["Docker", "CI/CD", "GitFlow", "Postman", "Unit Testing"]
  },
  experience: [
    {
      role: "Software Engineer",
      company: "Metadata Solutions (MDS)",
      period: "August 2025 – Present",
      description: "Building AI-powered web systems and maintaining production infrastructure.",
      highlights: [
        "Built web systems and AI chatbots using Next.js, FastAPI, and LangChain",
        "Deployed and maintained production systems on AWS with focus on performance optimization",
        "Designed scalable architectures to handle growing traffic and business requirements"
      ]
    },
    {
      role: "Software Engineer",
      company: "Mekong Connector (MKC)",
      period: "October 2023 – August 2025",
      description: "Full-stack development with AI integration for various platforms.",
      highlights: [
        "Built full-stack systems containerized with Docker, deployed on AWS",
        "Developed AI-integrated mobile applications on both iOS and Android platforms",
        "Built chatbots powered by LLM for customer service and automation"
      ]
    },
    {
      role: "Software Engineer",
      company: "MobiFone Service Company Region 9",
      period: "May 2023 – July 2023",
      description: "Backend development and API integration for enterprise systems.",
      highlights: [
        "Designed and implemented RESTful APIs for frontend interface and AI data processing",
        "Developed and optimized Oracle PL/SQL procedures for data storage and transformation",
        "Collaborated with team on API documentation, integration issues, and ML backend support"
      ]
    }
  ],
  projects: [
    {
      name: "AI Agent Lightmind - CRM Assistant",
      company: "MDS",
      about: "An AI CRM assistant enabling natural language interaction with CRM systems, knowledge base retrieval, and workflow automation.",
      technologies: ["FastAPI", "Next.js", "LangChain", "AWS", "RAG", "Paddle Payment", "Line Messaging"],
      keyContributions: "Analyzed requirements and built full-stack solutions; improved AI features; integrated Signify CRM and Paddle."
    },
    {
      name: "Remade E-commerce Website",
      company: "MDS",
      about: "An e-commerce platform for refurbished products with PayOS and GHN integration.",
      technologies: ["Next.js", "FastAPI", "AWS", "PostgreSQL", "PayOS Payment", "GHN Delivery"],
      keyContributions: "Developed both Frontend and Backend; integrated PayOS payment gateway and GHN shipping services."
    },
    {
      name: "Hotel Management System and Booking Chatbot",
      company: "MKC",
      about: "A comprehensive hotel management platform with AI-powered chatbot for automated booking assistance across multiple messaging channels.",
      technologies: ["ReactJS", "TailwindCSS", "FastAPI", "PostgreSQL", "Docker", "OpenAI API"],
      keyContributions: "Built hotel management system; developed customer support & booking chatbot; integrated with website, Zalo, and Messenger."
    },
    {
      name: "Minh Long Museum's Artwork Recognition System",
      company: "MKC",
      about: "A mobile app that identifies and explains museum artworks using AI image recognition.",
      technologies: ["React Native", "OpenAI CLIP", "OpenAI GPT"],
      keyContributions: "Built artwork exploration app with AI; optimized for both iOS and Android."
    }
  ],
  education: {
    degree: "Bachelor of Engineering in Information Technology",
    school: "Can Tho University",
    period: "2019 – 2024"
  }
}

// Generate HTML
function generatePortfolio() {
  const app = document.querySelector<HTMLDivElement>('#app')!

  app.innerHTML = `
    <!-- Background Effects -->
    <div class="bg-glow"></div>
    <div class="bg-grid"></div>
    
    <!-- Header -->
    <header class="header" id="header">
      <div class="container">
        <a href="#" class="logo"><span>N</span>ghia.</a>
        <nav class="nav">
          <a href="#about" class="nav-link">About</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>
        <button class="mobile-menu-btn" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    
    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="dot"></span>
            Available for opportunities
          </div>
          <h1 class="hero-title">
            <span class="greeting">Hi, I'm</span>
            <span class="text-gradient">${portfolioData.personal.name}</span>
          </h1>
          <p class="hero-subtitle">
            A passionate <strong>Software Engineer</strong> specializing in building 
            exceptional web applications, mobile apps, and AI-powered solutions.
          </p>
          <div class="hero-buttons">
            <a href="#contact" class="btn btn-primary">
              <i data-lucide="mail" style="width: 18px; height: 18px;"></i>
              Get in Touch
            </a>
            <a href="#projects" class="btn btn-secondary">
              <i data-lucide="folder-open" style="width: 18px; height: 18px;"></i>
              View Projects
            </a>
          </div>
          <div class="hero-socials">
            <a href="https://${portfolioData.personal.linkedin}" target="_blank" class="social-link" aria-label="LinkedIn">
              <i data-lucide="linkedin" style="width: 20px; height: 20px;"></i>
            </a>
            <a href="https://${portfolioData.personal.github}" target="_blank" class="social-link" aria-label="GitHub">
              <i data-lucide="github" style="width: 20px; height: 20px;"></i>
            </a>
            <a href="mailto:${portfolioData.personal.email}" class="social-link" aria-label="Email">
              <i data-lucide="mail" style="width: 20px; height: 20px;"></i>
            </a>
          </div>
        </div>
        <div class="hero-visual">
          <div class="hero-image-wrapper">
            <div class="hero-image">
              <img src="${portfolioData.personal.avatar}" alt="${portfolioData.personal.name}" />
            </div>
            <div class="floating-badge top-right">
              <div class="icon">
                <i data-lucide="code-2" style="width: 18px; height: 18px;"></i>
              </div>
              <span>Software Engineer</span>
            </div>
            <div class="floating-badge bottom-left">
              <div class="icon">
                <i data-lucide="brain" style="width: 18px; height: 18px;"></i>
              </div>
              <span>AI Specialist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="about" id="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Get to know more about my journey and expertise</p>
        </div>
        <div class="about-grid">
          <div class="about-content">
            <p>${portfolioData.personal.summary}</p>
            <p>I'm passionate about creating elegant solutions to complex problems, with a focus on clean code, performance optimization, and user experience. My experience spans from building AI chatbots to developing e-commerce platforms and mobile applications.</p>
            <div class="about-stats">
              <div class="stat-item">
                <div class="stat-number">2+</div>
                <div class="stat-label">Years Experience</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">10+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">3</div>
                <div class="stat-label">Companies Worked</div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="about-image-card">
              <div class="code-block">
<pre><span class="keyword">const</span> <span class="property">developer</span> = {
  <span class="property">name</span>: <span class="string">"Nghia Nguyen"</span>,
  <span class="property">role</span>: <span class="string">"Software Engineer"</span>,
  <span class="property">experience</span>: <span class="number">3</span>,
  <span class="property">passions</span>: [
    <span class="string">"Full-Stack Development"</span>,
    <span class="string">"AI & Machine Learning"</span>,
    <span class="string">"Cloud Architecture"</span>
  ],
  <span class="property">currentFocus</span>: <span class="string">"Building AI-powered solutions"</span>
};</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Skills Section -->
    <section class="skills" id="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-subtitle">The tools and technologies I use to bring ideas to life</p>
        </div>
        <div class="skills-grid">
          ${generateSkillCategories()}
        </div>
      </div>
    </section>
    
    <!-- Experience Section -->
    <section class="experience" id="experience">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Work Experience</h2>
          <p class="section-subtitle">My professional journey and contributions</p>
        </div>
        <div class="timeline">
          ${generateExperienceTimeline()}
        </div>
      </div>
    </section>
    
    <!-- Projects Section -->
    <section class="projects" id="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Some of the notable projects I've worked on</p>
        </div>
        <div class="projects-grid">
          ${generateProjectCards()}
        </div>
      </div>
    </section>
    
    <!-- Education Section -->
    <section class="education" id="education">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">My academic background</p>
        </div>
        <div class="education-card">
          <div class="education-icon">
            <i data-lucide="graduation-cap" style="width: 40px; height: 40px;"></i>
          </div>
          <div class="education-content">
            <h3 class="education-degree">${portfolioData.education.degree}</h3>
            <p class="education-school">${portfolioData.education.school}</p>
            <p class="education-year">${portfolioData.education.period}</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Contact Section -->
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">Have a project in mind? Let's work together!</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-method-icon">
                  <i data-lucide="mail" style="width: 24px; height: 24px;"></i>
                </div>
                <div>
                  <div class="contact-method-label">Email</div>
                  <div class="contact-method-value">${portfolioData.personal.email}</div>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-method-icon">
                  <i data-lucide="phone" style="width: 24px; height: 24px;"></i>
                </div>
                <div>
                  <div class="contact-method-label">Phone</div>
                  <div class="contact-method-value">${portfolioData.personal.phone}</div>
                </div>
              </div>
              <div class="contact-method">
                <div class="contact-method-icon">
                  <i data-lucide="map-pin" style="width: 24px; height: 24px;"></i>
                </div>
                <div>
                  <div class="contact-method-label">Location</div>
                  <div class="contact-method-value">${portfolioData.personal.location}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
            <form class="contact-form" id="contact-form">
              <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input type="text" id="name" name="name" class="form-input" placeholder="John Doe" required>
              </div>
              <div class="form-group">
                <label for="email" class="form-label">Your Email</label>
                <input type="email" id="email" name="email" class="form-input" placeholder="john@example.com" required>
              </div>
              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea id="message" name="message" class="form-textarea" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%;">
                <i data-lucide="send" style="width: 18px; height: 18px;"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p class="footer-text">© ${new Date().getFullYear()} Nguyen Trung Nghia. Built with passion and code.</p>
        <div class="footer-socials">
          <a href="https://${portfolioData.personal.linkedin}" target="_blank" class="footer-social-link" aria-label="LinkedIn">
            <i data-lucide="linkedin" style="width: 20px; height: 20px;"></i>
          </a>
          <a href="https://${portfolioData.personal.github}" target="_blank" class="footer-social-link" aria-label="GitHub">
            <i data-lucide="github" style="width: 20px; height: 20px;"></i>
          </a>
          <a href="mailto:${portfolioData.personal.email}" class="footer-social-link" aria-label="Email">
            <i data-lucide="mail" style="width: 20px; height: 20px;"></i>
          </a>
        </div>
      </div>
    </footer>
  `

  // Initialize Lucide icons
  // @ts-ignore
  lucide.createIcons()

  // Initialize interactions
  initializeInteractions()
}

function generateSkillCategories(): string {
  const icons: Record<string, string> = {
    "Programming & Frameworks": "code-2",
    "AI & Machine Learning": "brain",
    "Cloud Services": "cloud",
    "Databases": "database",
    "Third-party Integrations": "plug",
    "Others": "wrench"
  }

  return Object.entries(portfolioData.skills).map(([category, skills]) => `
    <div class="skill-category">
      <div class="skill-category-header">
        <div class="skill-category-icon">
          <i data-lucide="${icons[category] || 'star'}" style="width: 24px; height: 24px;"></i>
        </div>
        <h3 class="skill-category-title">${category}</h3>
      </div>
      <div class="skill-tags">
        ${skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('')
}

function generateExperienceTimeline(): string {
  return portfolioData.experience.map((exp, _index) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <p class="timeline-company">${exp.company}</p>
          </div>
          <span class="timeline-date">${exp.period}</span>
        </div>
        <p class="timeline-description">${exp.description}</p>
        <ul class="timeline-list">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('')
}

function generateProjectCards(): string {
  const projectIcons = ['🤖', '🛒', '🏨', '🎨']

  return portfolioData.projects.map((project, index) => `
    <div class="project-card">
      <div class="project-image">
        ${projectIcons[index] || '💻'}
      </div>
      <div class="project-content">
        <span class="project-company">${project.company}</span>
        <h3 class="project-title">${project.name}</h3>
        <p class="project-description">${project.about}</p>
        <div class="project-tech">
          ${project.technologies.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-highlights">
          <p class="project-highlights-title">Key Contributions</p>
          <p class="project-highlights-text">${project.keyContributions}</p>
        </div>
      </div>
    </div>
  `).join('')
}

function initializeInteractions() {
  // Header scroll effect
  const header = document.getElementById('header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled')
    } else {
      header?.classList.remove('scrolled')
    }
  })

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const href = anchor.getAttribute('href')
      if (href) {
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    })
  })

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  window.addEventListener('scroll', () => {
    let current = ''
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute('id') || ''
      }
    })

    navLinks.forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active')
      }
    })
  })

  // Form submission (demo)
  const form = document.getElementById('contact-form')
  form?.addEventListener('submit', (e) => {
    e.preventDefault()
    alert('Thanks for your message! I\'ll get back to you soon.')
      ; (form as HTMLFormElement).reset()
  })

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.skill-category, .timeline-item, .project-card, .education-card').forEach(el => {
    observer.observe(el)
  })
}

// Initialize
generatePortfolio()
