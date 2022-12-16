export interface ProjectStack {
  tech: string;
  icon: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  techStack?: ProjectStack[];
  sourceCode: string;
}
