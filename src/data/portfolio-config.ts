import type { PortfolioConfig, Skill, Service, Project } from '../types';

// Silky Vyas's Skills with expanded expertise
const skills: Skill[] = [
  // Frontend Development
  {
    name: 'React & TypeScript',
    level: 95,
    category: 'frontend',
    description: 'Advanced React development with TypeScript for type-safe applications',
    icon: '⚛️'
  },
  {
    name: 'Next.js',
    level: 90,
    category: 'frontend',
    description: 'Full-stack React framework for production applications',
    icon: '🔺'
  },
  {
    name: 'HTML5 & CSS3',
    level: 98,
    category: 'frontend',
    description: 'Semantic HTML and modern CSS with animations and responsive design',
    icon: '🎨'
  },
  {
    name: 'JavaScript/ES6+',
    level: 95,
    category: 'frontend',
    description: 'Modern JavaScript with advanced features and best practices',
    icon: '📜'
  },
  {
    name: 'Tailwind CSS',
    level: 92,
    category: 'frontend',
    description: 'Utility-first CSS framework for rapid UI development',
    icon: '🎭'
  },

  // Backend Development
  {
    name: 'Node.js',
    level: 88,
    category: 'backend',
    description: 'Server-side JavaScript for scalable backend applications',
    icon: '🟢'
  },
  {
    name: 'Express.js',
    level: 85,
    category: 'backend',
    description: 'Fast and minimalist web framework for Node.js',
    icon: '🚀'
  },
  {
    name: 'Database Design',
    level: 82,
    category: 'backend',
    description: 'MongoDB, PostgreSQL, and MySQL database architecture',
    icon: '🗄️'
  },
  {
    name: 'API Development',
    level: 90,
    category: 'backend',
    description: 'RESTful APIs and GraphQL for robust data communication',
    icon: '🔌'
  },

  // UI/UX Design
  {
    name: 'Figma',
    level: 92,
    category: 'design',
    description: 'Professional UI/UX design and prototyping',
    icon: '🎨'
  },
  {
    name: 'Brand Logo Design',
    level: 90,
    category: 'design',
    description: 'Creative brand identity and logo design for businesses',
    icon: '🏷️'
  },
  {
    name: 'Product Design',
    level: 88,
    category: 'design',
    description: 'End-to-end product design from concept to implementation',
    icon: '📱'
  },
  {
    name: 'Product Modeling',
    level: 85,
    category: 'design',
    description: '3D product modeling and visualization',
    icon: '🎯'
  },
  {
    name: 'User Experience',
    level: 90,
    category: 'design',
    description: 'User research, wireframing, and usability testing',
    icon: '👥'
  },
  {
    name: 'Brand Logo Design',
    level: 88,
    category: 'design',
    description: 'Creative logo design and brand identity development',
    icon: '🎨'
  },

  // AI Automation
  {
    name: 'Chatbot Development',
    level: 85,
    category: 'automation',
    description: 'AI-powered chatbots for customer service and engagement',
    icon: '🤖'
  },
  {
    name: 'Workflow Automation',
    level: 82,
    category: 'automation',
    description: 'Business process automation and integration solutions',
    icon: '⚙️'
  },
  {
    name: 'AI Integration',
    level: 80,
    category: 'automation',
    description: 'Integrating AI services and machine learning models',
    icon: '🧠'
  },

  // SEO & Optimization
  {
    name: 'SEO Optimization',
    level: 88,
    category: 'seo',
    description: 'Technical SEO, content optimization, and performance tuning',
    icon: '📈'
  },
  {
    name: 'Website Performance',
    level: 90,
    category: 'seo',
    description: 'Core Web Vitals optimization and speed enhancement',
    icon: '⚡'
  },
  {
    name: 'Analytics & Tracking',
    level: 85,
    category: 'seo',
    description: 'Google Analytics, conversion tracking, and data analysis',
    icon: '📊'
  },

  // Tools & Technologies
  {
    name: 'Git & GitHub',
    level: 90,
    category: 'tools',
    description: 'Version control and collaborative development',
    icon: '🔧'
  },
  {
    name: 'AWS/Cloud Services',
    level: 78,
    category: 'tools',
    description: 'Cloud deployment and infrastructure management',
    icon: '☁️'
  },
  {
    name: 'Docker',
    level: 75,
    category: 'tools',
    description: 'Containerization for consistent development environments',
    icon: '🐳'
  }
];

// Services offered by Silky Vyas
const services: Service[] = [
  {
    id: 'fullstack-development',
    title: 'Full-Stack Development',
    description: 'Complete web application development from frontend to backend with modern technologies',
    icon: '💻',
    category: 'development',
    features: [
      'React/Next.js frontend development',
      'Node.js backend architecture',
      'Database design and optimization',
      'API development and integration',
      'Responsive web design',
      'Performance optimization'
    ]
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'User-centered design solutions that combine aesthetics with functionality',
    icon: '🎨',
    category: 'design',
    features: [
      'Figma design and prototyping',
      'Brand logo design and identity',
      'User research and testing',
      'Wireframing and mockups',
      'Design system creation',
      'Mobile-first design',
      'Accessibility compliance'
    ]
  },
  {
    id: 'product-modeling',
    title: 'Product Modeling & Design',
    description: '3D product visualization and comprehensive product design solutions',
    icon: '🎯',
    category: 'design',
    features: [
      '3D product modeling',
      'Product visualization',
      'Concept development',
      'Technical documentation',
      'Prototype design',
      'Manufacturing consultation'
    ]
  },
  {
    id: 'ai-automation',
    title: 'AI Automation Solutions',
    description: 'Intelligent automation to streamline business processes and enhance user experience',
    icon: '🤖',
    category: 'automation',
    features: [
      'Custom chatbot development',
      'Workflow automation',
      'AI service integration',
      'Process optimization',
      'Customer service automation',
      'Data processing automation'
    ]
  },
  {
    id: 'seo-optimization',
    title: 'SEO & Website Optimization',
    description: 'Comprehensive SEO strategies and performance optimization for maximum visibility',
    icon: '📈',
    category: 'optimization',
    features: [
      'Technical SEO audit',
      'Content optimization',
      'Performance enhancement',
      'Core Web Vitals improvement',
      'Analytics setup and tracking',
      'Conversion rate optimization'
    ]
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Strategic technology guidance and architecture planning for your projects',
    icon: '💡',
    category: 'consulting',
    features: [
      'Technology stack selection',
      'Architecture planning',
      'Code review and optimization',
      'Team training and mentoring',
      'Project management',
      'Digital transformation strategy'
    ]
  }
];

// Featured Projects - Updated with Medlipi Healthcare Platform
const projects: Project[] = [
  {
    id: 'darveys',
    title: 'Darveys E-commerce Platform',
    description: 'Modern e-commerce solution with advanced product catalog and seamless checkout experience',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring advanced product filtering, secure payment integration, and responsive design for optimal mobile experience.',
    imageUrl: '/images/projects/darveys.jpg',
    liveUrl: 'https://www.darveys.com/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'ecommerce',
    featured: true,
    completionDate: '2024-01',
    highlights: [
      'Increased conversion rate by 35%',
      'Mobile-first responsive design',
      'Advanced product filtering system',
      'Secure payment integration'
    ]
  },
  {
    id: 'tech-adaptive-pandit',
    title: 'Tech Adaptive Pandit',
    description: 'Professional technology consulting and adaptive solutions platform for modern businesses',
    longDescription: 'A comprehensive technology consulting website that provides adaptive solutions and expert guidance for businesses looking to modernize their digital infrastructure and processes.',
    imageUrl: '/images/projects/tech-adaptive-pandit.jpg',
    liveUrl: 'https://techadaptivepandit.au/',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS'],
    category: 'consulting',
    featured: true,
    completionDate: '2024-01',
    highlights: [
      'Professional consulting platform',
      'Adaptive technology solutions',
      'Modern responsive design',
      'Australian market focused'
    ]
  },
  {
    id: 'beyoung',
    title: 'BeYoung Fashion Platform',
    description: 'Trendy fashion e-commerce platform with dynamic product displays and social integration',
    longDescription: 'A vibrant fashion e-commerce platform targeting young consumers, featuring dynamic product displays, social media integration, and personalized shopping experiences.',
    imageUrl: '/images/projects/beyoung.jpg',
    liveUrl: 'https://www.beyoung.in/',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'AWS'],
    category: 'fashion',
    featured: true,
    completionDate: '2023-09',
    highlights: [
      'Social media integration',
      'Personalized recommendations',
      'Fast loading performance',
      'Advanced search functionality'
    ]
  },
  {
    id: 'gargoyle',
    title: 'Gargoyle Creative Platform',
    description: 'Modern creative showcase platform with interactive design elements and portfolio management',
    longDescription: 'A sophisticated creative platform designed for showcasing artistic work and creative portfolios, featuring interactive design elements, smooth animations, and modern web technologies for an engaging user experience.',
    imageUrl: '/images/projects/gargoyle.jpg',
    liveUrl: 'https://www.gargoyle.site/',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'design',
    featured: true,
    completionDate: '2024-01',
    highlights: [
      'Interactive creative showcase',
      'Smooth animations and transitions',
      'Modern responsive design',
      'Portfolio management system'
    ]
  }
];

// Main portfolio configuration
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: 'Silky Vyas',
    title: 'Full-Stack Developer & Designer',
    tagline: 'Crafting Digital Experiences with Code & Creativity',
    bio: 'Passionate full-stack developer and designer with expertise in modern web technologies, AI automation, and user-centered design. I specialize in creating scalable web applications, intelligent automation solutions, brand identity design, and beautiful user interfaces that drive business growth.',
    profileImage: '/images/my_img.jpeg',
    phone: '9509610432',
    email: 'silky15585@gmail.com',
    location: 'India',
    socialLinks: [
      {
        platform: 'LinkedIn',
        url: 'https://www.linkedin.com/in/vyassilky',
        icon: 'linkedin',
        label: 'Connect on LinkedIn'
      }
    ]
  },
  projects,
  skills,
  services
};