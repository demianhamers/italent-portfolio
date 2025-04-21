export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
  githubLink: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Smart Campus Navigation App",
    description: "Developed a mobile application that helps students navigate around campus efficiently. Features include indoor mapping, class schedule integration, and real-time updates on classroom changes.",
    technologies: ["React Native", "Node.js", "MongoDB", "Express", "Google Maps API"],
    image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/smartcampus",
    githubLink: "https://github.com/janedoe/smart-campus",
    featured: true
  },
  {
    id: 2,
    title: "Course Recommendation System",
    description: "Built a machine learning model that recommends courses to students based on their academic performance, interests, and career goals. Integrated with the university's course catalog.",
    technologies: ["Python", "TensorFlow", "Flask", "SQL", "Pandas"],
    image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/courserecommender",
    githubLink: "https://github.com/janedoe/course-recommender",
    featured: true
  },
  {
    id: 3,
    title: "Student Study Group Finder",
    description: "Created a web application that helps students find study groups for their courses. Features include group creation, event scheduling, and resource sharing.",
    technologies: ["React", "Firebase", "Material UI", "JavaScript", "HTML/CSS"],
    image: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/studygroup",
    githubLink: "https://github.com/janedoe/study-group-finder",
    featured: false
  },
  {
    id: 4,
    title: "Academic Performance Dashboard",
    description: "Designed and implemented a dashboard for students to track their academic performance across different courses and semesters.",
    technologies: ["Angular", "Chart.js", "Node.js", "Express", "MongoDB"],
    image: "https://images.pexels.com/photos/4145064/pexels-photo-4145064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://example.com/academic-dashboard",
    githubLink: "https://github.com/janedoe/academic-dashboard",
    featured: false
  }
];