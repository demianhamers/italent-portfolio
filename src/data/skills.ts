export interface SkillCategory {
  id: number;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: number;
  name: string;
  proficiency: number; // 1-5
  icon?: string;
}

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    name: "Programming Languages",
    skills: [
      { id: 1, name: "JavaScript", proficiency: 5 },
      { id: 2, name: "TypeScript", proficiency: 4 },
      { id: 3, name: "Python", proficiency: 4 },
      { id: 4, name: "Java", proficiency: 3 },
      { id: 5, name: "C++", proficiency: 3 },
    ]
  },
  {
    id: 2,
    name: "Web Development",
    skills: [
      { id: 6, name: "React", proficiency: 5 },
      { id: 7, name: "HTML/CSS", proficiency: 5 },
      { id: 8, name: "Node.js", proficiency: 4 },
      { id: 9, name: "Express", proficiency: 4 },
      { id: 10, name: "Tailwind CSS", proficiency: 4 },
    ]
  },
  {
    id: 3,
    name: "Database & DevOps",
    skills: [
      { id: 11, name: "MongoDB", proficiency: 4 },
      { id: 12, name: "SQL", proficiency: 3 },
      { id: 13, name: "Git", proficiency: 4 },
      { id: 14, name: "Docker", proficiency: 3 },
      { id: 15, name: "AWS", proficiency: 2 },
    ]
  },
  {
    id: 4,
    name: "Other Skills",
    skills: [
      { id: 16, name: "UI/UX Design", proficiency: 3 },
      { id: 17, name: "Project Management", proficiency: 4 },
      { id: 18, name: "Machine Learning", proficiency: 3 },
      { id: 19, name: "Data Analysis", proficiency: 4 },
      { id: 20, name: "Problem Solving", proficiency: 5 },
    ]
  }
];