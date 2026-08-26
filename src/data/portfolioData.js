// ============================================================
// portfolioData.js — Centralized configuration for Santhosh HG's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Santhosh HG",
  firstName: "Santhosh HG",
  brandName: "Santhosh HG",
  title: "Senior Technical Trainer & Developer",
  location: "Bengaluru, India",
  phone: "+91 7892785895",
  emails: {
    primary: "santhoshhg15@gmail.com",
    secondary: "",
  },
  summary:
    "Senior Technical Trainer & Developer with a passion for empowering the next generation of engineers. Having mentored 50,000+ students across 800+ colleges, I specialize in Java Full Stack, Python Full Stack, and building AI-integrated applications with Generative AI and LLMs.",
  resumeUrl: "/Santhosh_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/Santhoshhg15",
  linkedin: "https://linkedin.com/in/santhosh-hg",
  instagram: "https://www.instagram.com/santhoshhg?utm_source=qr",
};

export const heroContent = {
  greeting: "Hi, I'm Santhosh HG",
  titleHighlight: "Senior Technical Trainer",
  subtitle:
    "I engineer high performance full stack applications, integrate cutting-edge Agentic AI solutions, and mentored 50,000+ students in southern part of India.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:santhoshhg15@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Santhosh HG,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Santhosh_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Santhosh HG</span>, a Senior Technical Trainer and Developer based in Bengaluru, India. I specialize in Java and Python Full Stack Development, Data Structures, and Generative AI, driven by a mission to build impactful software and have mentored 50,000+ emerging tech talents.`,
  techStack: ["Java", "Python", "React", "AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world systems",
  description:
    "I follow a structured, analytic, and rigorous engineering approach to design and develop secure, high-performance systems.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyzing target parameters, user scenarios, and distributed system requirements to establish solid system architecture foundations.",
    },
    {
      number: "02",
      title: "Design",
      text: "Structuring data flows, modeling algorithm pipelines, and designing secure, robust communication endpoints for edge and cloud.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Engineering core logic, training predictive models, and connecting microservices using modern technology stacks and patterns.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Conducting integration tests, optimizing latency, and orchestrating virtual environments for final staging and validation.",
    },
  ],
  endText: "Ready to ship!",
};

// Santhosh HG's Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 90 },
        { name: "OOP & Collections", level: 85 },
        { name: "Multi-Threading & Exceptions", level: 85 }
      ]
    },
    {
      title: "Full-Stack Development",
      skills: [
        { name: "Spring Boot & REST APIs", level: 85 },
        { name: "React, TS, JS, HTML, CSS", level: 85 },
        { name: "Java & Python Full Stack", level: 85 },
        { name: "MySQL & Firebase", level: 80 }
      ]
    },
    {
      title: "DSA & Problem Solving",
      skills: [
        { name: "Data Structures", level: 90 },
        { name: "Algorithms (Sorting, Searching)", level: 85 },
        { name: "Dynamic Programming", level: 80 },
        { name: "Trees & Graphs", level: 80 }
      ]
    },
    {
      title: "AI & Tools",
      skills: [
        { name: "Generative AI & LLMs", level: 85 },
        { name: "Agentic AI", level: 85 },
        { name: "Git, GitHub & Postman", level: 90 },
        { name: "VS Code & Eclipse", level: 90 }
      ]
    }
  ]
};

// Santhosh HG's Activities Timeline (replacing Leadership)
export const leadershipList = [
  {
    title: "Campus Training & College Engagements",
    description: "Delivered Java, DSA, problem-solving, and coding programs at KSSEM, KSIT, MVIT, Cambridge, and KPR Institute. Conducted advanced DSA using Java at G. Pulla Reddy Engineering College. Delivered AI workshops across multiple colleges.",
    role: "Technical Trainer",
    badge: "Workshops"
  }
];

// Santhosh HG's Internships Data
export const internshipsList = [
  {
    organization: "TAP Academy (EdTech)",
    role: "Senior Technical Trainer & Developer",
    duration: "August 2024 - Present",
    skills: ["Java Full Stack", "Python Full Stack", "DSA", "Agentic AI", "Mentorship"],
    tech: ["Java", "Python", "Generative AI", "AI-Integrated Applications"]
  }
];

// Santhosh HG's Soft Skills Data
export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating across multiple fields, building IoT systems, and playing regional sports in sync." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking down complex engineering tasks and anomaly detection models into clean, modular pieces." },
  { name: "Analytical Thinking", icon: "📈", desc: "Analyzing network packet captures, cyber threat vectors, and data matrices with precision." },
  { name: "Communication", icon: "💬", desc: "Articulating technical designs clearly, documenting test workflows, and presenting project logic." }
];

// Santhosh HG's Projects Data
export const projects = [
  {
    id: "uml-visualizer",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "UML Visualizer",
    description:
      "Developed an interactive UML diagram visualizer for creating and visualizing object-oriented programming concepts using React 19, TypeScript, React Flow, and ELK.js.",
    techTags: ["React 19", "TypeScript", "React Flow", "Tailwind CSS", "Zustand", "Vite"],
    links: { github: null, demo: "https://uml-visualizer.vercel.app/" },
    isFlagship: true,
  },
  {
    id: "dsa-visualizer",
    number: "02",
    badge: null,
    title: "DSA Visualizer",
    description:
      "Developing an interactive DSA visualization platform that demonstrates data structures and algorithms through step-by-step execution.",
    techTags: ["React 19", "TypeScript", "Vite", "Zustand", "Express", "Node.js"],
    links: { github: null, demo: "https://dsa-visualizer-pearl.vercel.app/" },
    isFlagship: false,
  }
];

// Santhosh HG's Certificates List
export const certificates = {
  featured: [
    {
      name: "Regional Level Volleyball Certificate",
      issuer: "Kendriya Vidyalaya AFS, Sulur",
      icon: "🏐",
    },
    {
      name: "Software Engineering Virtual Experience",
      issuer: "JPMorgan Chase (Forage)",
      icon: "☕",
    },
    {
      name: "Networking Engineer Intern Credentials",
      issuer: "Cisco Academy",
      icon: "🌐",
    },
    {
      name: "Cyber Security Analyst Credentials",
      issuer: "Cisco Academy",
      icon: "🛡️",
    }
  ],
  viewAllUrl:
    "https://linkedin.com/in/sri-hari-v-908a51291/",
};

// Education metadata (fallback reference)
export const education = {
  degree: "B.Tech in Computer Science",
  institution: "Rajeev Institute of Technology",
  cgpa: "2020 - 2024",
  graduation: "2024",
  twelfth: "",
  tenth: "Hassan, Karnataka",
};

// Footer layout data
export const footerContent = {
  taglines: [
    "Senior Technical Trainer & Developer",
    "Java · Python · AI",
    "Full-Stack Development & Mentorship",
  ],
  credential: "B.Tech Computer Science & Engineering",
  copyright: `© ${new Date().getFullYear()} Santhosh HG | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
