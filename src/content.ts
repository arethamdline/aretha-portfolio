// ==========================================
// ARETHA'S LITTLE CORNER OF THE INTERNET ♡
// ==========================================

// ==========================================
// TYPES
// ==========================================

export type Project = {
  id: string;
  previewTitle?: string;
  teaser?: boolean;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  status: string;
  concept: 'storage' | 'workflow' | 'data';
  context: string;
  role: string;
  outcome: string;
  demoUrl: string;
  sourceUrl: string;
};

export type Experience = {
  id: string;
  group: 'professional' | 'community' | 'earlier';
  role: string;
  organization: string;
  period: string;
  location: string;
  category: 'work' | 'leadership' | 'research' | 'volunteer';
  description: string;
  highlights: string[];
};

export type Achievement = {
  id: string;
  year: string;
  competition: string;
  award: string;
  description?: string;
  featured?: boolean;
  url?: string;
};

export type ArchiveItem = {
  id: string;
  title: string;
  year: string;
  category: string;
  summary: string;
  tags: string[];
  imageUrl: string;
  imageAlt?: string;
  externalUrl: string;
};

// ==========================================
// 01 / PERSONAL PROFILE
// ==========================================

export const profile = {
  name: 'Aretha Madeline Budiman',
  shortName: 'Aretha',

  discipline: 'AI & Data Science',
  university: 'The University of Hong Kong',

  location: 'Hong Kong / Shanghai',
  origin: 'Indonesia',

  headline: [
    'A little curious',
    'about everything.'
  ],

  intro:
    "Hi, I'm Aretha! I'm a student at the University of Hong Kong who loves making things, exploring new ideas, and collecting little experiences along the way. I study AI & Data Science, but there's a lot more to me than what's on my screen.",

  about:
    "Hi! I'm Aretha, currently pursuing AI & Data Science at the University of Hong Kong. I've always been someone who gets curious about how things work, and somewhere along the way, that curiosity turned into a love for building things. I enjoy exploring the space between technology, creativity, and people.",

  personal:
    "Beyond the code, I love music, exploring places, and eating good food. I enjoy meeting people from different backgrounds and finding something interesting in everyday moments.",

  philosophy:
    "A little collection of things I've made and ideas I'm still exploring.",

  email: 'arethamadeline@connect.hku.hk',

  githubUrl: 'https://github.com/arethamdline',

  linkedinUrl:
    'https://www.linkedin.com/in/arethamadeline',

  instagramUrl: '',
};

// ==========================================
// 02 / SELECTED WORK
// ==========================================

export const projects: Project[] = [

  // AI EMOTIONAL COMPANION

  {
    id: 'ai-companion',
    previewTitle: 'AI Meets Emotion.',

    title: 'AI Emotional Companion',

    category: '01 / SOFTWARE + AI',

    summary: 'An AI-powered emotional companion with personalized, emotion-aware conversations.',

    tags: [
      'Python',
      'FastAPI',
      'Unity',
      'C#',
      'OpenAI API'
    ],

    status: 'Personal Project',

    concept: 'workflow',

    context:
    'An AI-powered emotional companion inspired by Inside Out, allowing users to express their emotions and receive personalized, emotion-aware responses.',

    role:
    'Developed an interactive Unity interface and integrated a Python FastAPI backend with the OpenAI API.',

    outcome:
    'Gained practical experience in API integration, backend development, and interactive AI application design.',
    
    demoUrl: '',
    sourceUrl: '',
  },

  // MULTI-PERSONA AI AUTOMATION

  {
    id: 'ai-automation',
    previewTitle: 'AI Content Automation',

    title: 'Multi-Persona AI Content Automation',

    category: '02 / AI + AUTOMATION',

    summary: 'A multi-persona content generation system built with AI-powered workflows.',

    tags: [
      'n8n',
      'LLM APIs',
      'API Integration',
      'Workflow Automation'
    ],

    status: 'Ongoing',

    concept: 'workflow',

    context:
      'An exploration of how AI-powered workflows can coordinate content creation across different personas, each with its own tone and content direction.',

    role:
      'Developing connected workflows involving topic discovery, AI-assisted research, content generation, quality checks, and publishing integrations.',

    outcome:
      'Hands-on experience building and refining multi-step automation systems that connect different AI services and APIs.',

    demoUrl: '',
    sourceUrl: '',
  },

  // MICHELIN DATA SCIENCE

  {
    id: 'michelin',
    previewTitle: 'Michelin Star Trends',

    title: 'Michelin Trends in Hong Kong',

    category: '03 / DATA + RESEARCH',

    summary: 'Analyzing Michelin restaurant trends in Hong Kong using R and statistical methods.',

    tags: [
      'R',
      'Data Cleaning',
      'Statistical Analysis',
      'Data Visualization'
    ],

    status: 'Academic Project',

    concept: 'data',

    context:
      "An academic data science project examining how Michelin restaurant recognition in Hong Kong has changed over time.",

    role:
      'Working with restaurant data, preparing datasets, conducting exploratory analysis, and applying statistical approaches to identify patterns.',

    outcome:
      'Exploring how data can reveal trends in an industry, while learning to navigate messy datasets and analytical limitations.',

    demoUrl: '',
    sourceUrl: '',
  },

  // BOXBUDDY — NOT PUBLIC YET

  {
    id: 'smartflow',
    previewTitle: 'Currently Building.',
    teaser: true,

    title: 'Smart Flow',

    category: '04 / WORK IN PROGRESS',

    summary: 'Exploring AI-assisted booking systems and customer service experiences.',

    tags: [
      'React',
      'TypeScript',
      'Database',
      'AI'
    ],

    status: 'Work in Progress',

    concept: 'storage',

    context:
      'An ongoing exploration of how conversational AI and thoughtful interface design can make everyday services easier to navigate.',

    role:
      'Exploring frontend development, conversational interfaces, and user-centered design.',

    outcome:
      'Currently experimenting, iterating, and learning. More to come.',

    demoUrl: '',
    sourceUrl: '',
  },
];

// ==========================================
// 03 / EXPERIENCES
// ==========================================

export const experiences: Experience[] = [

  {
    id: 'bytewise',
    group: 'professional',

    role: 'Software Engineer',
    organization: 'Bytewise Coding Limited',
    period: '2026 — Present',
    location: 'Hong Kong',
    category: 'work',

    description:
      'Working across software development, AI automation, and educational technology projects, exploring how technology can make learning and everyday workflows more accessible.',

    highlights: [
      'Contributed to frontend development and UI/UX improvements for Buildwise, the beginner-friendly coding platform by Bytewise.',
      'Worked on GitHub integration and backend-related functionality.',
      'Created educational and onboarding materials, including video content.',
      'Supported introductory AI and Python learning activities.',
      'Developing multi-persona AI content automation workflows.'
    ],
  },

  {
    id: 'goldenz',
    group: 'community',

    role: 'Public Relations Director',
    organization: 'Golden Z Club, HKU',
    period: '2026 — Present',
    location: 'Hong Kong',
    category: 'leadership',

    description:
      'Connecting people through community service, communications, and student-led initiatives.',

    highlights: [
      'Supporting external relations and stakeholder communications.',
      'Coordinating outreach for community service activities.',
      'Working with the committee to promote student engagement.'
    ],
  },

  {
    id: 'ambassador',
    group: 'community',

    role: 'Student Ambassador',
    organization: 'HKU School of Computing and Data Science',
    period: '2025 — Present',
    location: 'Hong Kong',
    category: 'leadership',

    description:
      'Representing the school and helping connect prospective and current students with the university community.',

    highlights: [
      'Supporting student engagement and outreach activities.',
      'Representing the School of Computing and Data Science.'
    ],
  },

  {
    id: 'student-council',
    group: 'earlier',

    role: 'Vice President, Student Council',
    organization: "St. Ursula's Senior High School",
    period: '2024 — 2025',
    location: 'Jakarta, Indonesia',
    category: 'leadership',

    description:
      'An experience that taught me a lot about teamwork, responsibility, and bringing ideas to life with others.',

    highlights: [
      'Led a student council of 36 members across eight divisions.',
      'Oversaw school events and student initiatives.',
      'Represented student perspectives in discussions with school leadership.'
    ],
  },

  {
    id: 'orangtua',
    group: 'earlier',

    role: 'Research & Innovation Intern',
    organization: 'Orang Tua Group',
    period: 'June 2023',
    location: 'Jakarta, Indonesia',
    category: 'work',

    description:
      'An introduction to product research and development in the consumer goods industry.',

    highlights: [
      'Collected and synthesized consumer and internal feedback.',
      'Explored how research informs product development and improvement.'
    ],
  },

  {
    id: 'bright-knights',
    group: 'earlier',

    role: 'Volunteer Mathematics Tutor',
    organization: 'Bright Knights Foundation',
    period: '2022 — 2023',
    location: 'Indonesia',
    category: 'volunteer',

    description:
      'Helped teach mathematics to junior secondary students, discovering how rewarding it can be to share knowledge.',

    highlights: [
      'Tutored underprivileged Year 9 students in mathematics.'
    ],
  },
];

// ==========================================
// 04 / THE LITTLE ARCHIVE
// ==========================================

export const archive: ArchiveItem[] = [

  {
    id: 'university-research',

    title: 'What Shapes a University Choice?',
    year: '2024 — 2025',
    category: 'RESEARCH',

    summary:
      'A high school research paper examining factors influencing university preferences among Grade 12 social science students at Santa Ursula Senior High School in Jakarta.',

    tags: [
      'Research',
      'Education',
      'Data Analysis'
    ],

    imageUrl: '',
    externalUrl: '',
  },

  {
    id: 'en-wrap',

    title: 'En-Wrap',
    year: 'Grade 10',
    category: 'CREATIVE EXPERIMENT',

    summary:
      'Exploring water-soluble packaging using corn, sago, and cassava starches, paired with a ginger tea beverage concept.',

    tags: [
      'Sustainability',
      'Product Experimentation'
    ],

    imageUrl: '',
    externalUrl: '',
  },

  {
    id: 'good-peel',

    title: 'The Good Peel',
    year: 'Grade 11',
    category: 'SUSTAINABILITY',

    summary:
      'Giving discarded fruit peels a second life through a student-developed beverage concept and promotional campaign.',

    tags: [
      'Sustainability',
      'Product Development',
      'Creative Campaign'
    ],

    imageUrl: '',
    externalUrl:
      'https://www.instagram.com/thegoodpeel.id/',
  },

  {
    id: 'tempoyak',

    title: 'Tempoyak',
    year: 'Grade 12',
    category: 'FOOD SCIENCE',

    summary:
      'An exploration of traditional fermentation through tempoyak, connecting food science with SDG 3: Good Health and Well-being.',

    tags: [
      'Fermentation',
      'Food Science',
      'SDGs'
    ],

    imageUrl: '',
    externalUrl: '',
  },
];

// ==========================================
// 05 / OTHER THINGS IN MY TOOLKIT
// ==========================================

export const otherSkills = [
  'Python',
  'C++',
  'JavaScript',
  'TypeScript',
  'React',
  'R',
  'SQL',
  'Git & GitHub',
  'Figma',
  'Unity',
  'Adobe Premiere'
];

// ==========================================
// 06 / LIFE OUTSIDE THE SCREEN
// ==========================================

export const offlineNotes = [

  {
    label: '01 / EXPLORING',

    title: 'Collecting places & memories.',

    text:
      "I love wandering through unfamiliar streets, discovering little corners of a city, and collecting memories along the way.",
  },

  {
    label: '02 / MUSIC',

    title: 'A little music in my life.',

    text:
      "Music has always been a part of my life. Singing with my choir is one of my favorite ways to step away from the screen.",
  },

  {
    label: '03 / CURIOSITY',

    title: 'A mind that wanders.',

    text:
      "From philosophy and psychology to random questions about the world, I enjoy learning things beyond my degree.",
  },

  {
    label: '04 / LITTLE JOYS',

    title: 'The small things matter.',

    text:
      "Miffy, photography, cute stationery, and little everyday discoveries. I think ordinary moments deserve a little appreciation too.",
  },
];

// ==========================================
// 07 / WEBSITE SETTINGS
// ==========================================

export const draftSettings = {
  showToolbar: true,
};

// ==========================================
// 08 / PRESENTATION & PHOTOS
// All URLs below point into public/. Use leading / for website routes.
// ==========================================
export const portrait = {
  imageUrl: '/aretha.jpeg',
  alt: 'Aretha Madeline Budiman',
  caption: 'It is nice to meet you!',
};

export const homeSelections = {
  projectIds: ['ai-companion', 'michelin'],
  experienceIds: ['bytewise', 'goldenz'],
};

export const experienceGroups = [
  { id: 'professional', label: 'Professional & Research' },
  { id: 'community', label: 'Leadership & Community' },
  { id: 'earlier', label: 'Earlier Experiences' },
] as const;

// Optional url fields can hold official competition or result links when available.
export const achievements: Achievement[] = [
  {
    id: 'gebs-hku-2026',
    year: '2026',
    competition: 'GEBS × HKU Engineering Case Challenge 2026',
    award: '2nd Runner-up',
    description: 'Developed a Xiaomi EV ecosystem and subscription strategy with financial and competitive analysis.',
    featured: true,
  },
  {
    id: 'longbridge-hackathon-2025',
    year: '2025',
    competition: 'Longbridge × FTSA × DSA × CSA Hackathon',
    award: 'First Place',
    description: 'Developed an AI-integrated solution for a trading-learning platform, including interface wireframes and user flows.',
    featured: true,
  },
  {
    id: 'unair-2023',
    year: '2023',
    competition: 'UNAIR Math and Logic Competition',
    award: 'Aspiring Winner',
  },
  {
    id: 'stacmath-2023',
    year: '2023',
    competition: 'STACMATH Industrial Statistics & Mathematics Competition',
    award: 'Top 5 Finalist',
  },
];

export const navigation = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/experience', label: 'Experience' },
  { to: '/offline', label: '/offline' },
];

export const offlineGallery = [
  { id: 'places', imageUrl: '', alt: '', caption: 'Somewhere along the way.' },
  { id: 'music', imageUrl: '', alt: '', caption: 'A moment between the notes.' },
  { id: 'everyday', imageUrl: '', alt: '', caption: 'The ordinary, worth keeping.' },
];

export const siteCopy = {
  aboutHeading: ['A girl full of', 'curiosity.'],
  contactHeading: ['A hello can be', 'a lovely beginning.'],
  contactIntro: 'An idea, a question, or just a little hello. My inbox is open.',
  footer: 'Made with curiosity',
};

export const pageContent = {
  home: {
    title: 'Personal Portfolio',
    description: "A collection of things I've made, places I've been, and ideas I'm still exploring. Personal website of Aretha Madeline Budiman, AI & Data Science student at HKU.",
  }, 
  work: {
    title: 'Work & Explorations',
    heading: "Things I've made & explored.",
    description: "A collection of things I've built, questions I've followed, and ideas I've been curious enough to try.",
  },
  experience: {
    title: 'Experience & My Journey',
    heading: "Places I've been. Things I've learned.",
    description: 'A few chapters in an ongoing education — through work, research, and the people around me.',
    milestones: {
      eyebrow: '03 / LITTLE MILESTONES',
      heading: 'Some moments worth remembering.',
    },
  },
  offline: {
    title: 'Life Outside the Screen',
    heading: 'Life outside the screen.',
    description: "Because there's more to life than debugging.",
  },
};

export const terminalCopy = {
  launcherTitle: 'click me',
  launcherHint: 'click to explore',
  dialogTitle: 'Hello from the other side.',
  dialogDescription: 'A little way to get to know me. Type help to see what you can ask.',
  greeting: 'AI & Data Science @ HKU\nCurious about software, data & design.',
  building: 'with curiosity',
  approach: 'learn by making',
};
