

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
    link: "http://djsjobby.ccbp.tech",
    githubLink: "https://github.com/jaya6537",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1170&auto=format&fit=crop",
    detailedDescription: "Jobby App is a full-featured job searching platform designed to streamline the job application process for both applicants and recruiters. It features a robust search and filtering system, secure user authentication with JWT, and a personalized user dashboard to track applications.",
    challenges: [
        "Implementing a scalable and efficient filtering system for thousands of job listings.",
        "Ensuring secure and persistent user sessions using JWT tokens and local storage.",
        "Designing a responsive and intuitive user interface that works seamlessly across all devices."
    ],
    solutions: [
        "Developed a multi-faceted filtering logic on the frontend that allows users to sift through jobs by salary, employment type, and location with minimal latency.",
        "Built a secure authentication flow with protected routes, ensuring that sensitive user data is handled safely and sessions are managed effectively.",
        "Utilized a mobile-first approach with React and CSS media queries to create a fully responsive layout that provides an optimal user experience on desktops, tablets, and mobile phones."
    ]
  },
  {
    title: "Nxt Trendz (E-commerce Clone)",
    description: "A cutting-edge e-commerce platform inspired by Amazon and Flipkart, featuring product listings, details, and secure authentication.",
    technologies: ["React JS", "JWT", "REST API", "Routing", "Authentication"],
    link: "http://jayatrendz.ccbp.tech",
    githubLink: "https://github.com/jaya6537",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1332&auto=format&fit=crop",
    detailedDescription: "Nxt Trendz is a modern e-commerce clone inspired by industry giants like Amazon and Flipkart. The platform provides a seamless shopping experience, from browsing product catalogs and viewing detailed product pages to a secure checkout process. User authentication and state management are key features of the application.",
    challenges: [
        "Managing complex application state, including shopping cart, user authentication, and product data.",
        "Creating a dynamic routing system to handle various product categories and individual product pages.",
        "Replicating the complex UI/UX of a major e-commerce site while ensuring high performance."
    ],
    solutions: [
        "Leveraged React's Context API and custom hooks for efficient state management across the application, simplifying data flow.",
        "Implemented React Router for declarative routing, enabling deep linking and a logical navigation structure.",
        "Focused on component-based architecture and lazy loading to optimize performance and ensure fast page loads, even with a large number of products."
    ]
  },
  {
    title: "Mining Chatbot",
    description: "An AI/NLP-powered chatbot to answer queries regarding mining industry acts, rules, and circulars, available 24/7.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Python"],
    link: "https://jayaswaroop-finalui.static.hf.space",
    githubLink: "https://github.com/jaya6537",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1170&auto=format&fit=crop",
    detailedDescription: "This project is an AI and NLP-powered chatbot designed to assist users in the mining industry. It provides instant, 24/7 answers to queries about complex industry acts, rules, and government circulars. The backend is powered by Python and NLP libraries, while the frontend offers a simple and intuitive chat interface.",
    challenges: [
        "Processing and understanding natural language queries related to dense, technical, and legal documents.",
        "Structuring a large knowledge base of mining regulations in a way that is easily searchable by the AI.",
        "Building a real-time, interactive chat interface from scratch."
    ],
    solutions: [
        "Utilized advanced NLP techniques for intent recognition and entity extraction to accurately interpret user questions.",
        "Created a vectorized database of the regulatory documents, allowing for fast and relevant semantic search to find the most accurate answers.",
        "Built a responsive frontend using HTML, CSS, and JavaScript, with a focus on creating a conversational and user-friendly experience."
    ]
  },
  {
    title: "Learning Path Generator (MCP)",
    description: "An AI-powered tool that generates personalized learning paths for any topic using Google's Gemini API.",
    technologies: ["Streamlit", "Python", "Gemini API"],
    link: "https://jayaswaroop-mcp.hf.space",
    githubLink: "https://github.com/jaya6537/MCP",
    image: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1170&auto=format&fit=crop",
    detailedDescription: "This project, titled Model Context Protocol (MCP), is an intelligent Learning Path Generator. Leveraging the power of Google's Gemini Pro, it takes a user-specified topic and dynamically creates a comprehensive, step-by-step learning roadmap, complete with resources and key concepts. It's designed to help self-learners structure their studies effectively.",
    challenges: [
        "Prompt engineering to consistently generate high-quality, structured, and relevant learning paths from the Gemini API.",
        "Designing a simple and intuitive user interface with Streamlit that allows for easy input and clear presentation of the generated path.",
        "Handling potential variability in API responses to ensure the output is always coherent and useful."
    ],
    solutions: [
        "Developed a robust prompt template that guides the AI to produce a well-organized curriculum, including modules, sub-topics, and estimated timelines.",
        "Utilized Streamlit's interactive widgets to create a user-friendly front-end, allowing users to get a learning path with just a single click.",
        "Implemented parsing and formatting on the backend to structure the raw AI output into a clean, readable, and step-by-step list for the user."
    ]
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