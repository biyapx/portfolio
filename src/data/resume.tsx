import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ayalkbet Tesfahun",
  initials: "AT",
  url: "https://biyacraft.vercel.app",
  location: "Addis Ababa, Ethiopia",
  locationLink: "https://www.google.com/maps/place/addisababa",
  description:
    "Software Engineer. I build full stack applications. But frontend has my heart.",
  summary:
    "I'm a software engineer with a passion for crafting exceptional user experiences. I'm currently focused on building products with slick design",
  avatarUrl: "/biyaa.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Docker",
    "DSA",
    "C++",
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
        url: "https://github.com/biyacraft",
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
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
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
          href: "https://github.com/biyacraft/kitlist",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/kitlist.mp4"
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
          href: "https://github.com/biyacraft/tenalink",
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
      title: "Dirkosh",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "A food ordering website that includes products and services available for customers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
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
  journey: [
    {
      title: "Sophomore year",
      dates: "Sep, 2020",
      location: "Jimma, Ethiopia",
      description:
        "Joined Electrical and Computer Engineering department.",
      image:
        "",
      mlh: "",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Fresh man Year",
      dates: "Sep, 2019",
      location: "Jimma, Ethiopia",
      description:
        "Started learning C++ in a class. I had few OOP skill but I started exploring C++",
      image:
        "",
      mlh: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "",
        },
      ],
    },
  ],
} as const;
