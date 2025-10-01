
import type { Skill, Project, Experience, Education, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Jayaswaroop Dandamudi",
  title: "Full-Stack Developer",
  location: "Bhimavaram, Andhra Pradesh",
  email: "jayaswaroopdandamudi@gmail.com",
  phone: "9573339338",
  linkedin: "https://www.linkedin.com/in/jayaswaroop-dandamudi-60b787251/",
  github: "https://github.com/jaya6537",
  about: "A passionate and dedicated Full-Stack Developer with experience in building dynamic and responsive web applications. Proficient in both frontend and backend technologies, with a strong foundation in computer science principles and a drive for continuous learning and problem-solving.",
  profileImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop"
};

export const SKILLS: { [key: string]: Skill[] } = {
  Frontend: [
    { name: "React.js" },
    { name: "JavaScript" },
    { name: "HTML" },
    { name: "CSS" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" }
  ],
  Backend: [
    { name: "Node.js" },
    { name: "Express" },
    { name: "Python" },
  ],
  Databases: [
    { name: "MongoDB" },
    { name: "SQLite" },
  ],
  Other: [
    { name: "Git" },
    { name: "Java" },
    { name: "C++" },
    { name: "Data Structures" },
    { name: "Algorithms" },
    { name: "R" },
  ],
};

export const PROJECTS: Project[] = [
  {
    title: "Jobby App",
    description: "A comprehensive job search solution with features like user authentication, job filtering, and detailed job views.",
    technologies: ["React JS", "JWT", "REST API", "Local Storage", "Routing"],
    link: "http://djsjobby.ccbp.tech"
  },
  {
    title: "Nxt Trendz (E-commerce Clone)",
    description: "A cutting-edge e-commerce platform inspired by Amazon and Flipkart, featuring product listings, details, and secure authentication.",
    technologies: ["React JS", "JWT", "REST API", "Routing", "Authentication"],
    link: "http://jayatrendz.ccbp.tech"
  },
  {
    title: "Mining Chatbot",
    description: "An AI/NLP-powered chatbot to answer queries regarding mining industry acts, rules, and circulars, available 24/7.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python"],
    link: "https://jayaswaroop-finalui.static.hf.space"
  },
  {
    title: "Interactive Chatbot",
    description: "A user-friendly chatbot providing personalized responses from a predefined set of answers, built with a focus on UI.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "http://jayaswaroop.ccbp.tech"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "FullStack Developer",
    company: "TaskLabs",
    duration: "Jul 2024 - Dec 2024",
    description: [
      "Developed client projects using Python and no-code tools for automation, scraping, and data transfer.",
      "Revamped company website UI and backend using React, TypeScript, and Tailwind CSS.",
      "Contributed to the development of a company chrome extension."
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "Nxtwave Disruptive Technologies",
    degree: "Industry Ready Certification in Full-stack Development",
    details: "",
    duration: "Sep 2022 - Ongoing"
  },
  {
    institution: "SRKR Engineering College (A), Bhimavaram",
    degree: "B.Tech in Computer Science Engineering (CSE)",
    details: "CGPA: 8.9",
    duration: "2022 - 2026"
  },
  {
    institution: "Tirumala Junior Kalasala, Rajahmundry",
    degree: "Intermediate MPC",
    details: "Percentage: 95.8%",
    duration: "2021 - 2022"
  },
  {
    institution: "Tirumala (E.M) High School, Rajahmundry",
    degree: "Secondary School Of Certificate (SSC)",
    details: "Percentage: 100.0%",
    duration: "2019 - 2020"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "AI-Powered Financial Assistant Development",
    description: "Designed and developed a GenAI-based financial assistant using yFinance, spaCy, Matplotlib, and Gemini API to analyze stock performance and generate investment recommendations."
  },
  {
    title: "Top Performer – AI-Powered Challenge: 25 Under 5",
    description: "Recognized as a Top Performer in NxtWave's national AI challenge, earning a sponsored trip to Delhi to attend the Autonomous Vehicle Developer Community Event."
  },
  {
    title: "Python Programming Certification",
    description: "Received Python certification from Cisco Certified Network Professional (CCNP)."
  },
  {
    title: "C++ Certification",
    description: "Received C++ certification from Cisco Certified Network Professional (CCNP)."
  }
];