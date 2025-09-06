export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  year: string;
  tags: string[];
  team: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'fintech-dashboard',
    title: 'FinTech Dashboard Redesign',
    description: 'Redesigned a complex financial dashboard to improve user comprehension and reduce cognitive load for financial advisors.',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Product Design',
    year: '2024',
    tags: ['UX Research', 'Dashboard Design', 'Data Visualization', 'B2B'],
    team: 'Solo Designer',
    liveUrl: 'https://fintech-dashboard.example.com'
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Designed a secure and intuitive mobile banking experience focused on accessibility and ease of use for all demographics.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Mobile Design',
    year: '2024',
    tags: ['Mobile Design', 'Accessibility', 'Security', 'User Testing'],
    team: '3 Designers, 5 Engineers'
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform Redesign',
    description: 'Complete redesign of an e-commerce platform focusing on conversion optimization and improved checkout flow.',
    image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Web Design',
    year: '2023',
    tags: ['E-commerce', 'Conversion Optimization', 'User Journey', 'A/B Testing'],
    team: '2 Designers, 4 Engineers',
    liveUrl: 'https://ecommerce-platform.example.com'
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    description: 'Designed a patient portal that simplifies appointment scheduling and medical record access for healthcare providers.',
    image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Healthcare Design',
    year: '2023',
    tags: ['Healthcare', 'Accessibility', 'Complex Workflows', 'HIPAA Compliance'],
    team: 'Solo Designer'
  },
  {
    id: 'saas-onboarding',
    title: 'SaaS Onboarding Experience',
    description: 'Created a streamlined onboarding flow that reduced time-to-value and improved user activation rates.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Product Design',
    year: '2023',
    tags: ['Onboarding', 'SaaS', 'User Activation', 'Progressive Disclosure'],
    team: '2 Designers, 3 Engineers'
  },
  {
    id: 'design-system',
    title: 'Design System Implementation',
    description: 'Built a comprehensive design system from the ground up to ensure consistency across multiple product lines.',
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    category: 'Design Systems',
    year: '2022',
    tags: ['Design Systems', 'Component Library', 'Documentation', 'Scalability'],
    team: '4 Designers, 6 Engineers'
  }
];