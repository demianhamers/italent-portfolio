export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  shortBio: string;
  email: string;
  phone: string;
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  profileImage: string;
}

// Replace with your personal information
export const personalInfo: PersonalInfo = {
  name: "Jane Doe",
  title: "Computer Science Student",
  bio: "Passionate computer science student with a focus on web development and artificial intelligence. Currently completing my bachelor's degree and looking forward to starting my professional journey in the tech industry.",
  shortBio: "CS student passionate about web development and AI",
  email: "jane.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  socialLinks: {
    linkedin: "https://linkedin.com/in/janedoe",
    github: "https://github.com/janedoe",
    twitter: "https://twitter.com/janedoe"
  },
  profileImage: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
};