import type { PortfolioConfig, Skill, Service, Project, AgencyInfo, ProcessPhase } from '../types';

// Sivara Solutions Agency Configuration
const agencyInfo: AgencyInfo = {
  name: 'Sivara Solutions',
  tagline: 'Strategy-led websites and automation built to help Indian brands grow online',
  heroHeadline: 'Strategy-led websites and automation built to help Indian brands grow online.',
  heroSubtext: 'We design digital systems with clarity, purpose, and performance — built to convert and scale.',
  logo: '/images/brand/logo.svg', // Primary logo
  logoWhite: '/images/brand/logo-white.svg', // Logo for dark backgrounds
  phone: '9509610432',
  email: 'sivarasolutions@gmail.com',
  location: 'India',
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vyassilky',
      icon: 'linkedin',
      label: 'Connect on LinkedIn'
    }
  ],
  positioning: [
    {
      title: 'Strategy before execution',
      description: 'We begin every project with deep strategic thinking, understanding your business goals, target audience, and competitive landscape before touching any code.'
    },
    {
      title: 'No templates or shortcuts',
      description: 'Every solution is custom-crafted for your specific needs. We don\'t believe in one-size-fits-all approaches or generic templates.'
    },
    {
      title: 'Design guided by business goals',
      description: 'Beautiful design is meaningless without results. Every design decision is driven by your business objectives and user needs.'
    },
    {
      title: 'Systems built for long-term growth',
      description: 'We build scalable, maintainable systems that grow with your business, not quick fixes that need replacement in six months.'
    }
  ]
};

// Agency Process Phases
const processPhases: ProcessPhase[] = [
  {
    number: 1,
    title: 'Discover & Strategize',
    description: 'We start by understanding your business goals, target audience, and competitive landscape to create a strategic foundation.'
  },
  {
    number: 2,
    title: 'Design & Build',
    description: 'Strategic design and development focused on conversion, performance, and user experience that drives results.'
  },
  {
    number: 3,
    title: 'Automate & Test',
    description: 'Implement automation systems and rigorously test across devices and scenarios to ensure flawless operation.'
  },
  {
    number: 4,
    title: 'Launch & Optimize',
    description: 'Deploy with confidence and continuously optimize based on real user data and business metrics.'
  }
];

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

// Services offered by Sivara Solutions
const services: Service[] = [
  {
    id: 'website-systems',
    title: 'Website Systems',
    description: 'Conversion-focused design, strategic UX/UI, and performance-optimized builds that drive business growth.',
    category: 'website-systems',
    features: [
      'Conversion-focused design',
      'Strategic UX/UI',
      'Performance-optimized builds',
      'Mobile-first approach',
      'Accessibility compliance',
      'SEO foundation'
    ]
  },
  {
    id: 'automation-workflows',
    title: 'Automation & Workflows',
    description: 'Lead handling, internal process automation, and AI-assisted efficiency systems that scale with your business.',
    category: 'automation',
    features: [
      'Lead handling and follow-ups',
      'Internal process automation',
      'AI-assisted efficiency systems',
      'Integration with existing tools',
      'Scalable infrastructure',
      'Custom workflow design'
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
    strategicApproach: 'Focused on conversion optimization through strategic UX patterns, reducing cart abandonment by 35% through streamlined checkout flow and trust-building elements.',
    imageUrl: '/images/projects/darveys.jpg',
    liveUrl: 'https://www.darveys.com/',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'ecommerce',
    featured: true,
    isConcept: false,
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
    strategicApproach: 'Positioned as a trusted advisor through authority-building content architecture and clear service differentiation, establishing credibility in the Australian market.',
    imageUrl: '/images/projects/tech-adaptive-pandit.jpg',
    liveUrl: 'https://techadaptivepandit.au/',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Tailwind CSS'],
    category: 'consulting',
    featured: true,
    isConcept: false,
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
    strategicApproach: 'Leveraged social proof and personalization to create an engaging shopping experience that resonates with Gen Z consumers, driving repeat purchases through smart recommendations.',
    imageUrl: '/images/projects/beyoung.jpg',
    liveUrl: 'https://www.beyoung.in/',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Redis', 'AWS'],
    category: 'fashion',
    featured: true,
    isConcept: false,
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
    strategicApproach: 'Created an immersive visual experience that puts creative work front and center, using subtle animations and editorial layouts to enhance portfolio presentation without overwhelming the content.',
    imageUrl: '/images/projects/gargoyle.jpg',
    liveUrl: 'https://www.gargoyle.site/',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    category: 'design',
    featured: true,
    isConcept: false,
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
  agency: agencyInfo,
  personal: {
    name: 'Silky Vyas',
    title: 'Full-Stack Developer & Designer',
    tagline: 'Crafting Digital Experiences with Code & Creativity',
    bio: 'Passionate full-stack developer and designer with expertise in modern web technologies, AI automation, and user-centered design. I specialize in creating scalable web applications, intelligent automation solutions, brand identity design, and beautiful user interfaces that drive business growth.',
    profileImage: '/images/my_img.jpeg',
    phone: '9509610432',
    email: 'sivarasolutions@gmail.com',
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
  services,
  process: processPhases
};