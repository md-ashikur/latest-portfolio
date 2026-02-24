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
    longDescription: "Traveloo is a full-stack travel booking platform that allows users to search for destinations worldwide, book hotels, and manage their travel itineraries. Built with React.js and Firebase, it features real-time data synchronization, secure authentication, and an intuitive user interface. The platform integrates with travel APIs to provide up-to-date information on accommodations, prices, and availability.",
    tags: ["React.js", "Tailwind CSS", "Firebase", "REST API"],
    image: "/assets/images/traveloo-4c7de3ae.png",
    images: [
      "/assets/images/traveloo-4c7de3ae.png",
      "/assets/images/ashik.png",
      "/assets/images/traveloo-4c7de3ae.png",
    ],
    liveUrl: "https://traveloo-demo.vercel.app",
    githubUrl: "https://github.com/md-ashikur",
    featured: true,
    category: "Full Stack",
    duration: "3 months",
    role: "Lead Developer",
    features: [
      "Advanced search with multiple filters (location, price, rating, amenities)",
      "Real-time booking system with instant confirmation",
      "User authentication with email/password and social login",
      "Responsive design optimized for all devices",
      "Interactive maps integration for location visualization",
      "User review and rating system",
    ],
    challenges: [
      "Implementing real-time availability checking across multiple properties",
      "Optimizing search performance with large datasets",
      "Building a secure payment integration system",
    ],
    technologies: {
      frontend: ["React.js", "Tailwind CSS", "React Router", "Context API"],
      backend: ["Firebase", "Firestore", "Firebase Auth"],
      tools: ["Git", "Vercel", "Figma"],
    },
  },
  {
    id: "jez-salad",
    title: "Jez Salad",
    description: "Responsive restaurant website with authentication, route protection, and seamless user experience.",
    longDescription: "Jez Salad is a modern restaurant web application featuring online ordering, menu management, and user accounts. The platform provides a seamless dining experience with real-time order tracking, secure authentication, and protected routes for authenticated users.",
    tags: ["React.js", "Node.js", "Firebase", "Tailwind CSS"],
    image: "/assets/images/traveloo-4c7de3ae.png",
    images: [
      "/assets/images/traveloo-4c7de3ae.png",
      "/assets/images/ashik.png",
      "/assets/images/traveloo-4c7de3ae.png",
    ],
    liveUrl: "https://jez-salad-demo.vercel.app",
    githubUrl: "https://github.com/md-ashikur",
    featured: true,
    category: "Full Stack",
    duration: "2 months",
    role: "Full Stack Developer",
    features: [
      "Dynamic menu with categories and search functionality",
      "Shopping cart with real-time updates",
      "User authentication and profile management",
      "Protected routes for authenticated users",
      "Order history and tracking",
      "Admin panel for menu management",
    ],
    challenges: [
      "Building a scalable cart system with persistent state",
      "Implementing role-based access control",
      "Optimizing image loading for menu items",
    ],
    technologies: {
      frontend: ["React.js", "Tailwind CSS", "Redux"],
      backend: ["Node.js", "Express.js", "Firebase"],
      tools: ["Git", "Postman", "Vercel"],
    },
  },
  {
    id: "stereo-pay",
    title: "Stereo Pay",
    description: "Next.js-based website for Stereo Pay with high performance, SEO optimization, and React Hook Form integration.",
    longDescription: "Stereo Pay is a modern fintech landing page built with Next.js, focusing on performance, SEO, and user engagement. The site features smooth animations, optimized assets, and a contact form with email integration.",
    tags: ["Next.js", "Tailwind CSS", "Email.js"],
    image: "/assets/images/traveloo-4c7de3ae.png",
    images: [
      "/assets/images/traveloo-4c7de3ae.png",
      "/assets/images/ashik.png",
    ],
    liveUrl: "https://stereo-pay-demo.vercel.app",
    githubUrl: "https://github.com/md-ashikur",
    featured: true,
    category: "Frontend",
    duration: "1 month",
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
      "Achieving 95+ Lighthouse score across all metrics",
      "Implementing complex animations without performance impact",
      "Setting up proper email service integration",
    ],
    technologies: {
      frontend: ["Next.js", "Tailwind CSS", "React Hook Form", "Framer Motion"],
      backend: ["Email.js"],
      tools: ["Git", "Vercel", "Lighthouse"],
    },
  },
  {
    id: "portfolio-v1",
    title: "Portfolio V1",
    description: "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
    longDescription: "My first portfolio iteration built with React and GSAP, featuring smooth scroll animations, interactive project cards, and a clean, minimal design.",
    tags: ["React", "GSAP", "Tailwind CSS"],
    image: "/assets/images/traveloo-4c7de3ae.png",
    images: ["/assets/images/traveloo-4c7de3ae.png"],
    githubUrl: "https://github.com/md-ashikur",
    featured: false,
    category: "Frontend",
    duration: "2 weeks",
    role: "Developer & Designer",
    features: [
      "Smooth scroll animations with GSAP",
      "Interactive project showcase",
      "Responsive design",
      "Contact form",
    ],
    challenges: [
      "Learning GSAP animation library",
      "Creating smooth scroll experience",
    ],
    technologies: {
      frontend: ["React", "GSAP", "Tailwind CSS"],
      backend: [],
      tools: ["Git", "Netlify"],
    },
  },
  {
    id: "dashboard-app",
    title: "Admin Dashboard",
    description: "Feature-rich admin dashboard with data visualization, user management, and responsive design.",
    longDescription: "A comprehensive admin dashboard application with real-time data visualization, user management, and analytics features built with Next.js and MongoDB.",
    tags: ["Next.js", "TypeScript", "MongoDB"],
    image: "/assets/images/traveloo-4c7de3ae.png",
    images: ["/assets/images/traveloo-4c7de3ae.png", "/assets/images/ashik.png"],
    liveUrl: "https://dashboard-demo.vercel.app",
    featured: false,
    category: "Full Stack",
    duration: "2 months",
    role: "Full Stack Developer",
    features: [
      "Real-time data visualization with charts",
      "User management system",
      "Role-based access control",
      "Dark mode support",
    ],
    challenges: [
      "Implementing real-time updates",
      "Managing complex state",
    ],
    technologies: {
      frontend: ["Next.js", "TypeScript", "Chart.js"],
      backend: ["MongoDB", "Next.js API Routes"],
      tools: ["Git", "Vercel"],
    },
  },
  {
    id: "ecommerce-store",
    title: "E-Commerce Store",
    description: "Full-stack e-commerce platform with cart functionality, payment integration, and order management.",
    longDescription: "A complete e-commerce solution with product catalog, shopping cart, payment processing, and order management built with React and Node.js.",
    tags: ["React", "Node.js", "Express", "PostgreSQL"],
    image: "/assets/images/traveloo-4c7de3ae.png",
    images: ["/assets/images/traveloo-4c7de3ae.png"],
    githubUrl: "https://github.com/md-ashikur",
    featured: false,
    category: "Full Stack",
    duration: "3 months",
    role: "Full Stack Developer",
    features: [
      "Product catalog with search and filters",
      "Shopping cart with persistent state",
      "Payment integration",
      "Order tracking system",
    ],
    challenges: [
      "Implementing secure payment flow",
      "Managing complex database relationships",
    ],
    technologies: {
      frontend: ["React", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express", "PostgreSQL"],
      tools: ["Git", "Heroku", "Stripe"],
    },
  },
];
