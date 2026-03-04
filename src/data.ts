export const personal = {
    name: "Valentina Sosa",
    initials: "VS",
    role: ["Frontend Developer", "Game Designer", "Web Developer", "UI Enthuasiast"],
    tagline: "Frontend developer & game designer from Argentina. I build interfaces and games with clean logic and attention to detail.",
    email: "valeens12@gmail.com",
    linkedin: "https://www.linkedin.com/in/mara-valentina-sosa/",
    github: "https://www.github.com/vals5",
    cv: "/assets/Valentina Sosa CV.pdf",
    avalableForWork: true,
};

export const about = {
  paragraphs: [
    "I'm a Frontend Developer and Game Designer from Argentina, recently graduated in Software Development. I care about writing clean, organized code that actually makes sense to read — not just code that works.",
    "My background is a bit unusual: I build web interfaces with React and JavaScript, and I also design and develop video games with Unity and C#. That combination taught me to think about both logic and user experience at the same time.",
    "I'm fluent in English (advanced level, oral and written), which means I'm comfortable in international teams, reading documentation, and communicating without friction.",
  ],
   stats: [
    { value: "6+", label: "Months Frontend Dev" },
    { value: "3+", label: "Projects shipped"    },
    { value: "2",  label: "Specializations"     },
    { value: "🎮", label: "1 Game released"     },
  ],
};
export type SkillCategory = {
  title: string;
  icon: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: "fa-solid fa-code",
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Git"],
  },
  {
    title: "Game Development",
    icon: "fa-solid fa-gamepad",
    skills: ["Unity", "C#", "Blender", "Aseprite", "Game Design", "2D / 3D Art"],
  },
];

export type ProjectType = "web" | "app" | "game";

export type Project = {
  name: string;
  description: string;
  emoji: string;
  type: ProjectType;
  github?: string;
  live?: string;
  liveLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Vinyl Store",
    description: "E-commerce built with React. Browse and shop vinyl records with full cart functionality.",
    emoji: "🛒",
    type: "app",
    github: "https://github.com/vals5/Final-React",
    live: "https://vinyl-store-react.netlify.app/",
  },
  {
    name: "Thesis Game",
    description: "2D/3D video game built with Unity and C# for my university thesis. Design, code and art all by me.",
    emoji: "🎮",
    type: "game",
    github: "https://github.com/vals5/THESIS",
    live: "https://drive.google.com/file/d/1qbY6zugliar6aeOhBhiwn4cbaOVbicU0/view",
    liveLabel: "Play",
  },
  {
    name: "JS Final Project",
    description: "Vanilla JavaScript project showcasing DOM manipulation and interactive UI elements.",
    emoji: "🌐",
    type: "web",
    github: "https://github.com/vals5/Valentina-Sosa-Final-Js",
  }, 
];