export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  logo: string;
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    location: "San Francisco, CA",
    startDate: "Sep 2020",
    endDate: "Jun 2024",
    description: "Focused on software engineering, web development, and artificial intelligence. Participated in numerous hackathons and coding competitions.",
    achievements: [
      "Dean's List for 6 consecutive semesters",
      "Won 1st place in the University Hackathon 2023",
      "Teaching Assistant for Introduction to Programming",
      "Member of Computer Science Student Association"
    ],
    logo: "https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    degree: "High School Diploma",
    institution: "Lincoln High School",
    location: "Portland, OR",
    startDate: "Sep 2016",
    endDate: "Jun 2020",
    description: "Specialized in STEM subjects with a focus on mathematics and computer science.",
    achievements: [
      "Valedictorian",
      "President of Computer Club",
      "AP Computer Science A - Score 5/5",
      "National Merit Scholar"
    ],
    logo: "https://images.pexels.com/photos/8617930/pexels-photo-8617930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];