import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ayalkbet Tesfahun",
  initials: "AT",
  url: "https://biyacraft.vercel.app",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/addisababa",
  description: "NEXT.JS Fullstack Dev",
  summary: "I'm a software engineer with a passion for crafting exceptional user experiences. I'm currently focused on building products with slick design and efficient interaction",
  avatarUrl: "/biyaa.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Postgres",
    "Figma",
    "UI/UX",
    "Python",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ayalkbettesfahun@gmail.com",
    tel: "+251949257378",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/biyapx",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ayalkbet-tesfahun/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/abi4io",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@biyapx",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send email",
        url: "mailto:ayalkbettesfahun@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Africa To Silicon Valley",
      href: "https://a2sv.org",
      badges: [],
      location: "Remote",
      title: "A2SV G6 Trainee",
      logoUrl: "/a2sv.png",
      start: "Feb 2025",
      end: "now",
      description:
        "Intensive DSA training to improve student's algorithmic skill",
    },
    {
      company: "Tenalink",
      href: "https://tenalink.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/tenalink.png",
      start: "Sep 2024",
      end: "now",
      description:
        "Building native apps for women reproductive health",
    },
    {
      company: "Freelance",
      href: "https://freelancer.com",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/freelance.png",
      start: "Feb 2024",
      end: "now",
      description:
        "Engaged with various startups and built different full-stack projects based on clients' needs. Developed custom solutions ranging from web applications to mobile apps, utilizing technologies such as React, TypeScript, Node.js, and cloud services to meet diverse project requirements.",
    },
    {
      company: "Omshitu-Joy",
      badges: [],
      href: "https://omshitujoy.com",
      location: "Addis Ababa, Ethiopia",
      title: "Software Engineer",
      logoUrl: "/omshitu.svg",
      start: "Sep 2023",
      end: "Mar 2023",
      description:
        "Collaborated with designers to create user-friendly interfaces. Leveraged my expertise in React and Javascript to develop the entire frontend of a CRM projects, significantly enhancing productivity.",
    },

  ],
  education: [
    {
      school: "Jimma University",
      href: "https://ju.edu.et",
      degree: "BSC in Computer Engineering",
      logoUrl: "/jimma.jpg",
      start: "2019",
      end: "2024",
    },
    {
      school: "Coursera",
      href: "https://coursera.org",
      degree: "IBM Full Stack Development",
      logoUrl: "/coursera.png",
      start: "2022",
      end: "2023",
    },
    {
      school: "Huawei ICT Academy",
      href: "https://e.huawei.com/en/talent/ict-academy/#/home",
      degree: "Cloud Services",
      logoUrl: "/huawei.jpg",
      start: "2022",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "KitList",
      href: "https://kitlist.vercel.app",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "A Curated list of tools and resources for software engineers.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Radix UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://kitlist.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/biyapx/kitlist",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/kit.mp4"
      ,
    },
    {
      title: "Tenalink",
      href: "https://magicui.design",
      dates: "Sep 2023 - Jun 2023",
      active: true,
      description:
        "A telemedicine system to connect patients with doctors, featuring remote consultations, vital sign monitoring, and ML recommendations.",
      technologies: [
        "Django",
        "Agora RTC",
        "JavaScript",
        "SQLite",
        "Bootstrap",
        "Scikit-Learn",
        "Shadcn UI",
        "Arduino Uno",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/biyapx/tenalink",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Article",
          href: "https://biyacraft.vercel.app/blog/tenalink",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/tenalink.mp4",
    },
    {
      title: "SAAS Landing Page",
      href: "",
      dates: "November 2024",
      active: true,
      description:
        "A modern dark theme landing page",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://saas-landing-page-biya.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/saas.mp4",
    },
    {
      title: "ChatBot",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "",
    },
  ],
  "journey": [
    {
      "title": "After Graduation",
      "dates": "2023 - Present",
      "location": "Remote & Freelance",
      "description": "Built complex full-stack apps with Next.js 13, server components, and tRPC. Building fullstack application for clients",
      "image": "",
      /*"links": [
        {
          "title": "",
          "icon": "",
          "href": "",
        }
      ]*/
    },
    {
      "title": "Senior Year",
      "dates": "September, 2023",
      "location": "Jimma University",
      "description": "Focused on modern web tech - Next.js, TypeScript, Prisma, and TailwindCSS became my go-to stack. Led development of multiple projects. Learned more about ML/AI and implemented them in projects.",
      "image": "",
      /*"links": [
        {
          "title": "",
          "icon": "",
          "href": "",
        }
      ]*/
    },
    {
      "title": "Junior Year",
      "dates": "September, 2021",
      "location": "Jimma University",
      "description": "The sleepless nights. Mastered React.js through building tons of projects. Learned Node.js and Express for backend. Got into database design with MongoDB and PostgreSQL. Built a full-stack e-commerce site. Started learning system design and microservices architecture.",
      "image": "",
      /*"links": [
        {
          "title": "",
          "icon": "",
          "href": "",
        }
      ]*/
    },
    {
      "title": "Sophomore Year",
      "dates": "September, 2020",
      "location": "Jimma University",
      "description": "Dived into data structures & algorithms with Python. Started web dev journey with HTML/CSS/JS basics. Also learned Python and built some cool automation scripts for my daily tasks!",
      "image": "",
      /*"links": [
        {
          "title": "",
          "icon": "",
          "href": "",
        }
      ]*/
    },
    {
      "title": "Freshman Year",
      "dates": "September, 2019",
      "location": "Jimma University",
      "description": "Started my Computer Engineering journey! Learned C++ fundamentals, digital logic design, and basic electronics. Built simple circuits with Arduino and wrote my first 'Hello World'. Those assembly language assignments were brutal but taught me how computers really work. Built multiple projects with Arduino.",
      "image": "",
      /*"links": [
        {
          "title": "",
          "icon": "",
          "href": "",
        }
      ]*/
    }
  ],
} as const;
