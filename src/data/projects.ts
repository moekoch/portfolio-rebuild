export interface Project {
  title: string;
  category: string;
  date: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  github?: string;
  demoNote?: string;
}

export const projectsData: Project[] = [
  {
    title: "Landing Place",
    category: "Mobile App // AI",
    date: "2025 - Present",
    description: "An AI-enabled React Native/Expo mobile app for clinical research outcome tracking deployed via TestFlight.",
    longDescription: "Engineered and deployed Landing Place, an AI-enabled React Native/Expo mobile application (iOS) for clinical research and outcome tracking. Revived a non-functional legacy codebase and led a five-person team to deliver a production-ready application within one academic year. Owned the end-to-end release lifecycle, including build automation, versioning, provisioning, and TestFlight distribution for internal testing and active clinical trials deployed to ~80 participants.",
    tags: ["React Native", "Expo", "OpenAI API", "Firebase", "MongoDB", "MySQL", "TestFlight", "iOS Development"],
    image: "/landingplace.jpg",
    github: undefined,
    demoNote: "Private Repo - Please contact me directly to request a personal demo."
  },
  {
    title: "RedScare",
    category: "Full-Stack Web App",
    date: "April 11 2026",
    description: "1st Place Winning Project in Penn State Behrend's 2026 Hackathon!",
    longDescription: "Developed a period tracking and health insights web app during a 12-hour hackathon with one teammate, focused on creating a more thoughtful and user-friendly approach to women’s health. Built features for cycle and symptom tracking, an interactive insights dashboard for visualizing trends, and an AI-powered data analysis for personalized support.",
    tags: ["HTML (EJS)", "CSS", "JavaScript", "Supabase", "Anthropic Opus 4.2 API", "Data Visualization"],
    image: "/redscare.gif",
    github: "https://github.com/moekoch/RedScare"
  },
  // Add remaining projects here if applicable
];