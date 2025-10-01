
export interface Skill {
  name: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  details: string;
  duration: string;
}

export interface Achievement {
  title: string;
  description: string;
}
