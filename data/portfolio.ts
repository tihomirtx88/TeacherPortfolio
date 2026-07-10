import {
  GraduationCap,
  Laptop,
  BookOpen,
  Target,
  Code2,
  Database,
  BrainCircuit,
  Globe,
} from "lucide-react";

export const profile = {
  firstName: "Тихомир",
  lastName: "Желязков",

  title: "Бъдещ учител по информационни технологии",

  description:
    "Студент по Информатика и информационни технологии с практически опит в разработката на уеб приложения. Вярвам, че най-добрият начин за обучение е чрез практика, реални проекти и любопитство.",

  email: "tihomirtx88@gmail.com",

  github: "https://github.com/tihomirtx88?tab=repositories",

  linkedin: "https://www.linkedin.com/feed/",

  project: "https://",

  cv: "/cv.pdf",
};

export const aboutCards = [
  {
    icon: GraduationCap,
    title: "Образование",
    text: "Студент в Шуменски университет, специалност Информатика и информационни технологии.",
  },

  {
    icon: Laptop,
    title: "Практически опит",
    text: "Разработка на Front-end и Back-end приложения, REST API, бази данни и деплойване.",
  },

  {
    icon: BookOpen,
    title: "Самообучение",
    text: "SoftUni, Udemy, самостоятелно обучение и множество практически проекти.",
  },

  {
    icon: Target,
    title: "Моята цел",
    text: "Да мотивирам учениците да развиват логическо мислене, творчество и практически умения.",
  },
];

export const skills = [
  {
    icon: Globe,
    title: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "Tailwind",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
    ],
  },

  {
    icon: Code2,
    title: "Backend",
    technologies: ["Python", "Flask", "REST API", "JWT", "Authentication"],
  },

  {
    icon: Database,
    title: "Бази данни",
    technologies: ["PostgreSQL", "Supabase", "SQL"],
  },
];
