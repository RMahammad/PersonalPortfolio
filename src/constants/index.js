import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  wordpress,
  shopify,
  git,
  figma,
  docker,
  jobit,
  tripguide,
  threejs,
  logo,
  googleAnalytics,
  yoast,
  exyoga,
  compbase,
  chargerscenter,
  cronos,
  ethereum,
  tecrube
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Project Manager",
    icon: mobile,
  },
  {
    title: "Marketing Specialist",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  { name: "shopify", icon: shopify },
  { name: "google-analytics", icon: googleAnalytics },
  { name: "yoast", icon: yoast },
];

const experiences = [
  {
    title: "Chief Executive Officer",
    company_name: "Compbase.az",
    icon: logo,
    iconBg: "#383E56",
    date: "August 2019 - September 2022",
    points: [
      "Development and improvements of ecommerce website",
      "Improve SEO for all products",
      "Manage all ads on internet",
      "Supply Chain & Replenishment",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Webdesign.az",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "February 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Chief Executive Officer",
    company_name: "Mr Rustamov LTD",
    icon: logo,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining ecommerce websites",
      "Digital Marketing Specialist",
      "Payment Gateway Integration and much more",
      "I want to generate passive income using e-commerce, that's why I have created my own company in United Kingdom. I spend 1 hour in a day to fullfill orders, SEO improvements, Ads management and so on",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Exyoga.com",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: exyoga,
    source_code_link: "https://exyoga.com/",
  },
  {
    name: "Compbase.az",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: compbase,
    source_code_link: "https://compbase.az/",
  },
  {
    name: "ChargersCenter.com",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chargerscenter,
    source_code_link: "https://chargerscenter.com/",
  },
  {
    name: "Cronos.az",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: cronos,
    source_code_link: "https://cronos.az/",
  },
  {
    name: "Ethereum.az",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ethereum,
    source_code_link: "https://ethereum.az/",
  },
  {
    name: "Tecrube.az",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tecrube,
    source_code_link: "https://tecrube.az/",
  },
];

export { services, technologies, experiences, testimonials, projects };
