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

export const timeline = [
  {
    year: "2015 - 2022",
    title: "Работа във Великобритания",
    description:
      "Натрупах практически опит в международна среда, работа в екип и отговорност към поставените задачи.",
  },

  {
    year: "2023 - 2024",
    title: "FrontEndenginer VISTE",
    description:
      "Придобих опит като FrontEnd инжинер в реални E-comerce прокети базирани на PHP, а именно OpenCart, Prestashop, Wordpress. Не на последно място комуникация с клиенти и разбиране на техбните желания.",
  },

  {
    year: "2025",
    title: "JYSK България",
    description:
      "Работя като консултант продажби, като едновременно с това уча редовно в университета.",
  },

  {
    year: "2025 - сега",
    title: "Шуменски университет",
    description: "Специалност 'Информатика и информационни технологии'.",
  },

  {
    year: "2022 - сега",
    title: "Практически софтуерни проекти",
    description:
      "Разработка на Full Stack приложения с React, Next.js, Python, Flask, PostgreSQL и Supabase.",
  },

  {
    year: "2026",
    title: "Следваща цел",
    description: "Учител по информационни технологии и информатика.",
  },
];

export const featuredProject = {
  title: "Restaurant Management System",

  subtitle: "Личен проект",

  description:
    "Цялостно Full Stack уеб приложение за управление на ресторант с автентикация, авторизация, база данни и административен панел.",

  image: "/project.png",

  demo: "https://ТУК-ЩЕ-ПОСТАВИШ-VERCEL",

  github: "https://github.com/",

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Flask",
    "REST API",
    "PostgreSQL",
    "Supabase",
  ],

  features: [
    "Регистрация и вход",
    "Аутентикация",
    "Оторизация",
    "Административен панел",
    "Търсене",
    "CRUD операции",
    "Responsive дизайн",
    "Модерна архитектура",
  ],
};
