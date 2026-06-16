import { Skill, Project, Experience, Education, Achievement } from './types';

export const skillsData: Skill[] = [
  // Digital Marketing
  { name: 'Social Media Management', level: 95, category: 'digital-marketing' },
  { name: 'Digital Marketing', level: 90, category: 'digital-marketing' },
  { name: 'Content Strategy', level: 95, category: 'digital-marketing' },
  { name: 'Content Creation', level: 88, category: 'digital-marketing' },
  { name: 'Copywriting', level: 90, category: 'digital-marketing' },
  { name: 'Marketing Communication', level: 92, category: 'digital-marketing' },
  { name: 'Branding', level: 85, category: 'digital-marketing' },

  // Community & Campaign
  { name: 'Community Management', level: 92, category: 'community-campaign' },
  { name: 'Campaign Planning', level: 90, category: 'community-campaign' },
  { name: 'Public Relations', level: 85, category: 'community-campaign' },
  { name: 'Project Management', level: 88, category: 'community-campaign' },

  // Analytics
  { name: 'Meta Business Suite', level: 92, category: 'analytics' },
  { name: 'Analytics & Performance Monitoring', level: 88, category: 'analytics' }
];

export const projectsData: Project[] = [
  {
    id: 'textile-retail',
    title: 'Social Media Management for Textile Retail Business',
    description: 'Managed Instagram and Facebook accounts for a textile retail company by creating engaging content, increasing customer interaction, organizing promotional campaigns, and supporting online sales.',
    highlights: [
      'Instagram Management',
      'Facebook Marketing',
      'Live Shopping',
      'Content Planning',
      'Customer Engagement'
    ],
    imageUrl: 'from-css-gradient-1',
    category: 'Digital Advertising & Retail',
    stats: [
      { label: 'Engagement Increase', value: '+60%' },
      { label: 'Daily Livestreams', value: '2-3 Hours' },
      { label: 'Daily Leads Handled', value: '~15' }
    ]
  },
  {
    id: 'community-media',
    title: 'Community Social Media Management',
    description: 'Developed communication strategies and managed social media content for community programs to increase engagement, public awareness, and participation.',
    highlights: [
      'Campaign Planning',
      'Community Engagement',
      'Content Strategy',
      'Event Promotion'
    ],
    imageUrl: 'from-css-gradient-2',
    category: 'Community Management & Campaigns',
    stats: [
      { label: 'National Recognition', value: 'Best Region' },
      { label: 'Award', value: '2nd Place Best Project' },
      { label: 'Role', value: 'Team Coordinator' }
    ]
  },
  {
    id: 'university-branding',
    title: 'University Digital Branding',
    description: 'Managed institutional social media by creating educational and promotional content while improving university branding and digital engagement.',
    highlights: [
      'Branding',
      'Copywriting',
      'Content Calendar',
      'Performance Monitoring'
    ],
    imageUrl: 'from-css-gradient-3',
    category: 'Institutional Branding',
    stats: [
      { label: 'LLDIKTI Award', value: 'First Runner-Up' },
      { label: 'Channels', value: 'Instagram, TikTok, FB' },
      { label: 'Target Audience', value: 'Prospective Students' }
    ]
  },
  {
    id: 'meta-ads-utdi',
    title: 'Meta Ads Campaign',
    description: 'Managed and optimized Meta Ads campaigns for UTDI, generating 594,977 views, 274,700 reach, 6,212 profile visits, and 115 new followers with highly efficient targeting and budget allocation.',
    highlights: [
      'Meta business suit',
      'Performance Marketing',
      'Digital Marketing',
      'Social Media Advertising',
      'Campaign Management',
      'Audience Targeting',
      'Marketing Analytics',
      'A/B Testing',
      'Content Strategy',
      'Social Media Management'
    ],
    imageUrl: 'from-css-gradient-4',
    category: 'Digital Advertising & Performance',
    stats: [
      { label: 'Total Views', value: '594.977' },
      { label: 'Profile Visits', value: '6.212' },
      { label: 'CTR (Best Ad)', value: '1,44%' }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: 'exp-utdi-marketing',
    role: 'Social Media Strategist',
    company: 'Universitas Teknologi Digital Indonesia (UTDI)',
    duration: 'Sept 2024 - Present',
    responsibilities: [
      'Manage Social media management & content strategy across Instagram, TikTok, YouTube, and Facebook.',
      'Spearhead content planning & calendar development aligning with university-wide academic timelines.',
      'Conduct regular engagement rate & performance analysis to refine digital interactions.',
      'Provide core digital marketing support for PMB student recruitment campaigns.',
      'Drive branding & audience growth strategies to raise institutional visibility and target audiences.',
      'Lead reporting & insights optimization to improve post timing and creative formats.'
    ],
    metrics: [
      { label: 'Channels', value: 'IG, TikTok, FB, YT' },
      { label: 'Campaign Group', value: 'PMB Support' },
      { label: 'Performance', value: 'Optimized' }
    ]
  },
  {
    id: 'exp-jwwk',
    role: 'Social Media Specialist & Personal Assistant',
    company: 'Jogja Wisata Kain Kiloan (Textile)',
    duration: 'Jan 2022 - Oct 2024',
    responsibilities: [
      'Managed and grew overall social media presence on Instagram and Facebook platforms.',
      'Administered the corporate Shopee marketplace account and facilitated offline/online customer purchases.',
      'Increased overall social media engagement by 60% through targeted interactive content strategies.',
      'Coordinated and hosted daily live-streaming sessions, each lasting 2-3 hours to boost retail conversions.',
      'Provided responsive customer service, assisting ~15 direct customers per day via official social media channels.',
      'Managed purchasing for personal and corporate business needs, handling budgets ranging from IDR 500K to 25 million.',
      'Designed and distributed recruitment and hiring flyers for multiple retail store branches.',
      'Handled high-volume recruitment communications, directly responding to ~70 job inquiries daily.',
      'Provided trusted assistance for logistics coordination, inventory purchasing, and general operational support.'
    ],
    metrics: [
      { label: 'Engagement Boost', value: '+60%' },
      { label: 'Daily Livestreams', value: '2-3 hrs' },
      { label: 'Daily Inquiries', value: '~70' }
    ]
  },
  {
    id: 'exp-pemimpin',
    role: 'Media & Communication Team Coordinator',
    company: 'Pemimpin.id Regional Yogyakarta',
    duration: '2024 - 2025',
    responsibilities: [
      'Led the Media and Communication Team, designing tasks, standard assets workflows, and collaborative campaigns.',
      'Planned communication strategies to match regional guidelines and elevate community influence.',
      'Managed digital campaigns on leadership, youth progress, and community engagement.',
      'Increased general community engagement metrics on Instagram and relevant socials.',
      'Coordinated actively with multiple industry/institutional stakeholders on collaborative events.'
    ],
    metrics: [
      { label: 'Team Size', value: '8+ Creatives' },
      { label: 'Achievements', value: 'Best Region Award' },
      { label: 'Campaigns', value: '10+ Major' }
    ]
  }
];

export const educationData: Education = {
  degree: "S1: Bisnis Digital (Undergraduate)",
  institution: 'Universitas Teknologi Digital Indonesia (UTDI)',
  focus: [
    'Digital Marketing',
    'Business Strategy',
    'Creative Writing',
    'E-Commerce Operations'
  ],
  period: '2024 - 2028'
};

export const achievementsData: Achievement[] = [
  {
    id: 'ach-lldikti',
    title: 'First Runner-Up',
    organization: 'Anugerah Humas PTS LLDIKTI Wilayah V',
    year: '2025',
    description: 'Category: Best Social Media. Recognized among private universities in Yogyakarta for digital public relations and brand communication quality.',
    badge: '🏆 LLDIKTI Elite'
  },
  {
    id: 'ach-best-region',
    title: 'Best Region',
    organization: 'Pemimpin.id Regional Yogyakarta',
    year: '2025',
    description: 'Achievement: Best Social Media Region. Awarded to the regional chapter displaying exceptional content direction, community management, and growth metrics.',
    badge: '🏆 Best Region'
  },
  {
    id: 'ach-regional-project',
    title: '2nd Place',
    organization: 'Best Social Media Regional Project - Pemimpin.id Community',
    year: '2025',
    description: 'Recognized for excellent performance, high reach, and user engagement metrics for the regional leadership digital campaign initiative.',
    badge: '🏆 Project Excellence'
  }
];
