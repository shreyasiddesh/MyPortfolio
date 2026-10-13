// ============================================================
// portfolioData.js — Centralized configuration for Shreya H S's Portfolio
// All external links, personal info, and content in one place.
// Update this file to change any content across the entire site.
// ============================================================

export const personalInfo = {
  name: "Shreya H S",
  firstName: "Shreya",
  brandName: "Shreya H S",
  title: "AI/ML Engineer & Software Developer",
  location: "Bengaluru, Karnataka",
  phone: "+91 7975686602",
  emails: {
    primary: "shreyasiddesh2004@gmail.com",
    secondary: "",
  },
  summary:
    "Artificial Intelligence and Machine Learning graduate (B.E., CGPA 8.4/10) with hands-on experience building Generative AI and machine learning applications, including LLM-based retrieval-augmented generation (RAG) systems and an agentic AI voice agent. Proficient in Python and Java, with experience across the development cycle from data preprocessing and API integration to testing and deployment. Seeking a Junior AI Development role building LLM-powered products.",
  resumeUrl: "/Shreya_HS_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/shreyasiddesh",
  linkedin: "https://www.linkedin.com/in/shreyahs22",
  instagram: null,
};

export const heroContent = {
  greeting: "Hi, I'm Shreya H S",
  titleHighlight: "AI/ML & GenAI Developer",
  subtitle:
    "AI/ML graduate building Generative AI applications, retrieval-augmented generation systems, and agentic AI solutions with Python and Java.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:shreyasiddesh2004@gmail.com?subject=Opportunity Inquiry – Portfolio&body=Hello Shreya H S,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Shreya_HS_Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shreya H S</span>, an Artificial Intelligence and Machine Learning graduate (B.E., CGPA 8.4/10) from Acharya Institute of Technology, Bengaluru, Karnataka. I have hands-on experience building Generative AI and machine learning applications, including LLM-based retrieval-augmented generation (RAG) systems and an agentic AI voice agent. Proficient in Python and Java across data preprocessing, API integration, automated testing, and deployment, I am seeking a Junior AI Development role building LLM-powered products.`,
  techStack: ["Python", "Java", "Generative AI", "RAG", "FastAPI", "Agentic AI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world systems",
  description:
    "I follow a structured engineering approach across data preparation, layered architecture design, API integration, and automated testing.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Preprocessing domain datasets, engineering features, and structuring knowledge bases for grounded retrieval and model evaluation.",
    },
    {
      number: "02",
      title: "Design",
      text: "Architecting layered systems that separate speech, retrieval, and business logic while designing REST APIs, vector search pipelines, and compliance guardrails.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Building Generative AI, RAG, deep learning, and full-stack applications using Python, Java, FastAPI, LangChain, React, and MySQL.",
    },
    {
      number: "04",
      title: "Validate & Integrate",
      text: "Verifying reliability with automated pytest unit, integration, and security test suites, and preparing services for local or cloud environments.",
    },
  ],
  endText: "Ready to ship!",
};

// Shreya H S's Technical Skills Data
export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Python" },
        { name: "Java" },
        { name: "SQL" },
      ],
    },
    {
      title: "AI/ML",
      skills: [
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "NLP" },
        { name: "Generative AI" },
        { name: "LLMs" },
        { name: "Agentic AI" },
        { name: "CNNs" },
      ],
    },
    {
      title: "LLM Development",
      skills: [
        { name: "RAG" },
        { name: "Prompt Engineering" },
        { name: "Embeddings" },
        { name: "Vector Search" },
        { name: "LangChain" },
        { name: "FAISS" },
        { name: "Ollama" },
      ],
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "Scikit-learn" },
        { name: "TensorFlow" },
        { name: "OpenCV" },
        { name: "FastAPI" },
        { name: "Streamlit" },
        { name: "Pytest" },
      ],
    },
    {
      title: "Development",
      skills: [
        { name: "REST APIs" },
        { name: "React" },
        { name: "HTML" },
        { name: "CSS" },
        { name: "JDBC" },
        { name: "Servlets" },
        { name: "Git" },
        { name: "GitHub" },
        { name: "VS Code" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL" },
        { name: "MongoDB" },
      ],
    },
    {
      title: "Cloud",
      skills: [
        { name: "IBM Cloud" },
        { name: "IBM watsonx.ai" },
        { name: "IBM Watson Studio" },
        { name: "AWS Integration" },
      ],
    },
  ],
};

// Shreya H S's Education & Certifications Timeline
export const leadershipList = [
  {
    title: "B.E. in Artificial Intelligence and Machine Learning",
    description:
      "Graduated with a CGPA of 8.4/10 (2022–2026), focusing on Machine Learning, Deep Learning, Natural Language Processing, Generative AI, and full-stack software engineering.",
    role: "Acharya Institute of Technology · Bengaluru, Karnataka",
    badge: "2022 – 2026 · CGPA 8.4/10",
  },
  {
    title: "Machine Learning Specialization",
    description:
      "Completed certification in Machine Learning covering supervised learning, unsupervised learning, and machine learning engineering practices.",
    role: "Coursera · DeepLearning.AI",
    badge: "Certification",
  },
  {
    title: "Generative AI for Everyone",
    description:
      "Completed certification exploring Large Language Models, prompt engineering, and practical Generative AI application workflows.",
    role: "Coursera · DeepLearning.AI",
    badge: "Certification",
  },
  {
    title: "Python for Everybody",
    description:
      "Completed certification in Python programming fundamentals, data structures, and application development.",
    role: "Coursera · University of Michigan",
    badge: "Certification",
  },
  {
    title: "Data Science for Engineers",
    description:
      "Completed NPTEL certification covering mathematical foundations, data analysis, and predictive modeling for engineering problems.",
    role: "NPTEL",
    badge: "Certification",
  },
];

// Shreya H S's Experience & Internships Data
export const internshipsList = [
  {
    organization: "CloudFirst · Bengaluru, India",
    role: "Artificial Intelligence Research Analyst",
    duration: "June 2026 – August 2026",
    badge: "Experience",
    skills: [
      "Built an agentic AI voice calling agent in Python as a layered system, separating a Sarvam AI voice layer for speech recognition and synthesis from a business layer for knowledge retrieval and response logic.",
      "Implemented confidence-based escalation that routes low-confidence calls to a human relationship manager, achieving 90% routing accuracy on a 100-call evaluation set.",
      "Wrote automated tests and designed the business layer for AWS integration, making the agent integration-ready.",
    ],
    tech: ["Python", "Sarvam AI", "Agentic AI", "Automated Testing", "AWS Integration"],
  },
  {
    organization: "Tap Academy · Bengaluru, India",
    role: "Full Stack Developer Intern",
    duration: "January 2026 – May 2026",
    badge: "Internship",
    skills: [
      "Built full-stack applications with Java, React, and MySQL, integrating front-end, back-end, and database layers.",
      "Collaborated with senior developers through code reviews and wrote maintainable code.",
    ],
    tech: ["Java", "React", "MySQL", "Full-Stack Development"],
  },
  {
    organization: "IBM SkillsBuild / Edunet Foundation · Remote",
    role: "Artificial Intelligence and Cloud Intern",
    duration: "Remote",
    badge: "Internship",
    skills: [
      "Built and deployed a Large Language Model chatbot on IBM Cloud using watsonx.ai.",
      "Implemented data preprocessing, feature engineering, and model optimization in IBM Watson Studio.",
    ],
    tech: ["IBM Cloud", "IBM watsonx.ai", "IBM Watson Studio", "LLMs", "Data Preprocessing"],
  },
];

// Shreya H S's Professional Strengths & Soft Skills Data
export const softSkillsList = [
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Decomposing complex AI/ML and software challenges into clean, modular layers across data preprocessing, retrieval, and API integration.",
  },
  {
    name: "Team Collaboration & Code Review",
    icon: "🤝",
    desc: "Collaborating effectively with senior developers through structured code reviews and writing clear, maintainable full-stack and AI code.",
  },
  {
    name: "Testing & Quality Assurance",
    icon: "🧪",
    desc: "Validating application logic, compliance guardrails, and escalation routing through automated unit, integration, and security test suites.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluating RAG retrieval accuracy, confidence-scoring thresholds, and machine learning classification models on structured evaluation sets.",
  },
];

// Shreya H S's Featured Projects Data
export const projects = [
  {
    id: "ai-voice-calling-agent",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "AI Voice Calling Agent",
    description:
      "Built a FastAPI backend with provider adapters for Sarvam AI speech, Twilio, and Amazon Bedrock, with grounded RAG over an 18-document knowledge base and pre-LLM compliance and prompt-injection guardrails. Implemented five-factor confidence scoring and five-tier escalation to a human Relationship Manager, with CRM REST APIs for customer profiles, lead qualification, and follow-ups, plus a React dashboard. Validated with 154 automated pytest unit, integration, and security tests; documented as a proof of concept.",
    techTags: ["Python", "FastAPI", "RAG", "Sarvam AI", "React", "TypeScript"],
    links: {
      github: "https://github.com/shreyasiddesh/AI-Voice-Calling-Agent",
    },
    isFlagship: true,
  },
  {
    id: "healthdoc-assistant",
    number: "02",
    badge: null,
    title: "HealthDoc Assistant",
    description:
      "Developed a private, offline RAG application for question answering over medical documents, achieving a 93% grounded-answer rate and a 95% top-5 retrieval hit rate on a 100-question test set. Built the pipeline with document chunking, Ollama embeddings, FAISS vector search, and a local Mistral LLM behind a multi-turn Streamlit interface, keeping documents on the user's machine.",
    techTags: ["Python", "LangChain", "FAISS", "Ollama (Mistral)", "Streamlit"],
    links: {
      github: "https://github.com/shreyasiddesh/Health-Assistant-chatbot",
    },
    isFlagship: false,
  },
  {
    id: "emotionally-intelligent-blockchain-iot",
    number: "03",
    badge: null,
    title: "Emotionally Intelligent Blockchain Security in IoT",
    description:
      "Engineered a real-time emotion-recognition CNN with 92% accuracy, integrated with blockchain-backed IoT security. Implemented tamper-resistant audit logging and adaptive threat response. Evaluated machine-learning intrusion detection on NSL-KDD, achieving 95% Random Forest accuracy.",
    techTags: ["Python", "TensorFlow", "OpenCV", "Blockchain"],
    links: {
      github: null,
    },
    isFlagship: false,
  },
];

// Shreya H S's Certificates List
export const certificates = {
  featured: [
    {
      name: "Machine Learning Specialization",
      issuer: "Coursera (DeepLearning.AI)",
      icon: "🤖",
    },
    {
      name: "Generative AI for Everyone",
      issuer: "Coursera (DeepLearning.AI)",
      icon: "✨",
    },
    {
      name: "Python for Everybody",
      issuer: "Coursera (University of Michigan)",
      icon: "🐍",
    },
    {
      name: "Data Science for Engineers",
      issuer: "NPTEL",
      icon: "📊",
    },
  ],
  viewAllUrl: "https://www.linkedin.com/in/shreyahs22",
};

// Education metadata
export const education = {
  degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
  institution: "Acharya Institute of Technology",
  cgpa: "8.4/10",
  graduation: "2022–2026",
  twelfth: "",
  tenth: "Bengaluru, Karnataka",
};

// Footer layout data
export const footerContent = {
  taglines: [
    "AI/ML Engineer & Software Developer",
    "Python · Java · Generative AI · RAG",
    "LLM Applications & Full-Stack Development",
  ],
  credential: "B.E. in AI & ML (CGPA 8.4/10) · Acharya Institute of Technology",
  copyright: `© ${new Date().getFullYear()} Shreya H S | Built with React`,
};

// EmailJS Configuration
// Will read directly from environment variables in Vite (starting with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
