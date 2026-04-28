// ─────────────────────────────────────────
//  data/index.js  —  All portfolio content
// ─────────────────────────────────────────

export const PERSONAL = {
  name: "Joseph Sanyaolu",
  email: "sanyaoluj1@gmail.com",
  location: "Lagos / Ibadan, Nigeria",
  availability: "Open to remote or hybrid roles",
  github: "https://github.com/Josephsanya",
  linkedin: "https://www.linkedin.com/in/sanyaolu-joseph-net/",
  twitter: "https://x.com/josephsanyaolu_",
  whatsapp: "https://wa.me/2348131903326",
  whatsappDisplay: "+234 813 190 3326",
};

export const TITLES = [
  "Fullstack MERN Developer",
  "React Developer",
  "Node.js Engineer",
  "React Native Dev",
  "Software Engineer",
];

export const BIO_SHORT =
  "Self-taught Fullstack Developer with 4+ years building dynamic, scalable web & mobile applications. React on the front, Node on the back, MongoDB in the middle — end-to-end ownership is my default.";

export const BIO_FULL = `I'm a self-taught Full-stack Developer and Software Engineer with over 4 years of experience
building dynamic, scalable, and secure web applications across the entire stack. I thrive in JavaScript
and its ecosystem — Node.js, React, Express — and love crafting robust APIs, intuitive UIs, and seamless
database integrations.

With a Computer Science degree from Olabisi Onabanjo University and real-world project experience, I'm at
home in fast-paced, product-driven environments. I care deeply about clean code, security, and shipping
solutions that actually work in production.`;

export const STATS = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Projects Shipped" },
  { value: 15, suffix: "+", label: "Tech Stack Items" },
  { value: 100, suffix: "%", label: "Remote Ready" },
];

export const EDUCATION = {
  degree: "BSc Computer Science (Hons)",
  school: "Olabisi Onabanjo University, Ogun State",
  period: "2021 – 2024",
  grade: "Second Class Honours (2:1)",
};

export const TECH_CLOUD = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "REST APIs",
  "JWT",
  "Docker",
  "Git",
  "MySQL",
  "Linux",
  "Nginx",
  "OAuth2",
  "PHP",
  "Python",
  "Postman",
  "CI/CD",
];

export const SKILL_CATS = {
  Frontend: [
    { name: "React.js", level: 90 },
    { name: "React Native", level: 90 },
    { name: "JavaScript (ES6+)", level: 92 },
    { name: "HTML / CSS", level: 92 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Bootstrap", level: 84 },
  ],
  Backend: [
    { name: "Node.js", level: 92 },
    { name: "Express.js", level: 90 },
    { name: "REST API Design", level: 90 },
    { name: "JWT / OAuth2", level: 82 },
    { name: "PHP / Laravel", level: 65 },
    { name: "Python", level: 78 },
  ],
  "Database & DevOps": [
    { name: "MongoDB", level: 84 },
    { name: "MySQL", level: 75 },
    { name: "Git / GitHub", level: 88 },
    { name: "Docker", level: 80 },
    { name: "Linux / Nginx", level: 80 },
    { name: "CI/CD (Basic)", level: 65 },
  ],
};

export const PROJECTS = [
  {
    title: "NexaERP",
    status: "In Progress",
    desc: "Full-stack ERP platform built with the MERN stack to manage SMB operations — inventory, finance, CRM, invoicing, and real-time analytics dashboards.",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "JWT",
      "Tailwind",
      "PM2",
      "Nginx",
    ],
    highlights: [
      "Role-based access control (RBAC)",
      "Modular REST API architecture",
      "Real-time inventory tracking",
      "Linux VPS deployment via PM2 + Nginx",
    ],
    accent: "#00d9ff",
    github: "https://github.com/Josephsanya",
    live: null,
    icon: "◈",
  },
  {
    title: "ShopLane",
    status: "Completed",
    desc: "Feature-complete eCommerce platform with product browsing, cart management, secure checkout flow, and a full admin dashboard with analytics.",
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "Blade", "Breeze"],
    highlights: [
      "Payment gateway integration",
      "Admin analytics panel",
      "Role-based auth via Laravel Breeze",
      "Complete cart & order logic",
    ],
    accent: "#39ff9f",
    github: "https://github.com/Josephsanya",
    live: null,
    icon: "◉",
  },
  {
    title: "MovieVault",
    status: "🟢 Live",
    desc: "Real-time movie discovery app powered by TMDb API. Tracks and surfaces the most-searched titles dynamically using Appwrite as a backend counter.",
    tech: ["React", "TMDb API", "Appwrite", "CSS3"],
    highlights: [
      "Real-time search analytics",
      "Most-searched movies tracker",
      "Dynamic data fetching",
      "Mobile-first responsive design",
    ],
    accent: "#8b5cf6",
    github: "https://github.com/Josephsanya",
    live: "https://joemovieapp.netlify.app/",
    icon: "▶",
  },
  {
    title: "SecureAuth API",
    status: "Completed",
    desc: "Production-ready authentication microservice with JWT, OAuth2, refresh token rotation, rate limiting, and Swagger docs — plug-and-play for any app.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "OAuth2", "Bcrypt"],
    highlights: [
      "Access & refresh token rotation",
      "Google OAuth2 integration",
      "Brute-force rate limiting",
      "Full Swagger API documentation",
    ],
    accent: "#f59e0b",
    github: "https://github.com/Josephsanya",
    live: null,
    icon: "⬡",
  },
  {
    title: "ChatPulse",
    status: "Completed",
    desc: "Real-time group and private chat app with WebSocket messaging, typing indicators, online presence tracking, and persistent message history.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "JWT"],
    highlights: [
      "WebSocket real-time messaging",
      "Typing indicators & read receipts",
      "User online/offline presence",
      "Persistent chat history",
    ],
    accent: "#ec4899",
    github: "https://github.com/Josephsanya",
    live: null,
    icon: "◎",
  },
  {
    title: "DevTrack",
    status: "Completed",
    desc: "Project & task management tool for dev teams — Kanban boards, sprints, team assignees, deadlines, and burndown charts for agile workflows.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Chart.js", "Tailwind"],
    highlights: [
      "Kanban drag-and-drop boards",
      "Sprint planning & management",
      "Team collaboration & assignees",
      "Burndown charts & analytics",
    ],
    accent: "#10b981",
    github: "https://github.com/Josephsanya",
    live: null,
    icon: "◆",
  },
];

export const EXPERIENCE = [
  {
    title: "Fullstack Developer",
    type: "Freelance · Remote",
    company: "Self-Employed",
    period: "2023 – Present",
    color: "#00d9ff",
    points: [
      "Built responsive, interactive frontends with React and Tailwind CSS for multiple clients",
      "Designed and deployed backend systems and RESTful APIs for small-to-medium scale projects",
      "Implemented user auth, CRUD operations, payment integration, and analytics tracking",
      "Managed server setup, domain configuration, cPanel, and cloud deployments",
    ],
  },
  {
    title: "IT Support & Systems Manager",
    type: "Full-time · On-site",
    company: "Neuspeed Tyre Services Ltd — Lagos",
    period: "Sept 2023 – March 2024",
    color: "#39ff9f",
    points: [
      "Provided software and network troubleshooting for internal IT infrastructure",
      "Maintained tools critical to sales, inventory, and communication pipelines",
      "Installed, configured, and supported Windows, macOS, and Linux systems",
      "Supported remote issue resolution and end-user training",
    ],
  },
];

export const SOFT_SKILLS = [
  "Problem Solving",
  "Clear Communication",
  "Continuous Learning",
  "Time Management",
  "Team Collaboration",
  "Adaptability",
];

export const FLOATING_CODE = [
  "const dev = new Engineer();",
  "// 4+ years experience",
  "async function buildApp() {}",
  "db.connect('mongodb://...')",
  "npm run deploy",
  "git push origin main",
];

export const NAV_LINKS = [
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

export const SOCIALS = [
  {
    label: "GitHub",
    url: "https://github.com/Josephsanya",
    sub: "@Josephsanya",
    color: "#00d9ff",
    icon: "⌨",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sanyaolu-joseph-net/",
    sub: "sanyaolu-joseph",
    color: "#39ff9f",
    icon: "◈",
  },
  {
    label: "Twitter / X",
    url: "https://x.com/josephsanyaolu_",
    sub: "@josephsanyaolu_",
    color: "#8b5cf6",
    icon: "✦",
  },
  {
    label: "WhatsApp",
    url: "https://wa.me/2348131903326",
    sub: "+234 813 190 3326",
    color: "#ec4899",
    icon: "◎",
  },
];
