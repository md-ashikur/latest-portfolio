export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  images: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  duration: string;
  role: string;
  features: string[];
  challenges: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

export const projects: Project[] = [
  {
    id: "traveloo",
    title: "Traveloo",
    description: "A comprehensive travel platform enabling global searches, hotel bookings, and user authentication with advanced filtering.",
    longDescription: "Traveloo is a travel booking platform that allows users to search for destinations worldwide, book hotels, and manage their travel itineraries. Built with React.js and Firebase, it features real-time data synchronization, secure authentication, and an intuitive user interface. The platform integrates with travel APIs to provide up-to-date information on accommodations, prices, and availability.",
    tags: ["React.js", "Tailwind CSS", "Firebase"],
    image: "/assets/images/traveloo-4c7de3ae.png",
    images: [
      "/assets/images/traveloo-4c7de3ae.png",
    ],
    liveUrl: "https://traveloo.vercel.app/",
    githubUrl: "https://github.com/md-ashikur/traveloo-client",
    featured: true,
    category: "Frontend",
    duration: "2 weeks",
    role: "Frontend Developer",
    features: [
      "Advanced search with multiple filters (location, price, rating, amenities)",
      "Real-time booking system with instant confirmation",
      "User authentication with email/password and social login",
      "Responsive design optimized for all devices",
      "Interactive maps integration for location visualization",
      "User review and rating system",
    ],
    challenges: [
      "Making responsive design work seamlessly across a wide range of devices",
    ],
    technologies: {
      frontend: ["React.js", "Tailwind CSS", "React Router"],
      backend: ["Firebase", "Firebase Auth"],
      tools: ["Git", "Vercel", "Figma"],
    },
  },

  {
    id: "stereo-pay",
    title: "Stereo Pay",
    description: "Next.js-based website for Stereo Pay with high performance, SEO optimization, and React Hook Form integration.",
    longDescription: "Stereo Pay is a modern fintech landing page built with Next.js, focusing on performance, SEO, and user engagement. The site features smooth animations, optimized assets, and a contact form with email integration.",
    tags: ["Next.js", "Tailwind CSS", "Email.js"],
    image: "/assets/images/stereopay.png",
    images: [
      "/assets/images/stereopay.png",
    ],
    liveUrl: "https://stereo-client.vercel.app/",
    githubUrl: "https://github.com/md-ashikur/stereo-client",
    featured: true,
    category: "Frontend",
    duration: "2 weeks",
    role: "Frontend Developer",
    features: [
      "Server-side rendering for optimal performance",
      "SEO optimization with meta tags and structured data",
      "Responsive design with mobile-first approach",
      "Contact form with email notifications",
      "Smooth scroll animations",
      "Optimized images with Next.js Image component",
    ],
    challenges: [
      "Setting up proper email service integration",
    ],
    technologies: {
      frontend: ["Next.js", "Tailwind CSS", "React Hook Form", "Framer Motion"],
      backend: ["Email.js"],
      tools: ["Git", "Vercel", "Figma"],
    },
  },

  {
    id: "dashboard-app",
    title: "Admin Dashboard",
    description: "Feature-rich admin dashboard with data visualization, user management, and responsive design.",
    longDescription: "A comprehensive admin dashboard application with real-time data visualization, user management, and analytics features built with Next.js and MongoDB.",
    tags: ["Next.js", "TypeScript", "ApexCharts", "Tailwind CSS", "Supabase"],
    image: "/assets/images/gilsanum.png",
    images: ["/assets/images/gilsanum.png", "/assets/images/gilsanum1.png"],
    githubUrl: "https://github.com/md-ashikur/Gilsanum-client",
    liveUrl: "https://gilsanum-client.vercel.app/dashboard",
    featured: true,
    category: "Full Stack",
    duration: "1 week",
    role: "Full Stack Developer",
    features: [
      "Real-time data visualization with charts",
      "User management system",
      "Role-based access control",
    ],
    challenges: [
      "Implementing real-time updates",
      "Managing complex state",
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "ApexCharts", "Tailwind CSS"],
      backend: ["Supabase", "Next.js API Routes"],
      tools: ["Git", "Vercel", "Figma"],
    },
  },

];
