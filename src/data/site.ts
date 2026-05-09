export const site = {
  name: 'Simen Guttormsen',
  role: 'PhD candidate in Finance · Norwegian University of Life Sciences',
  description:
    'Simen Guttormsen — PhD candidate in Finance at NMBU. Research on implied volatility, market microstructure, and how investors learn about event risk.',
  url: 'https://simenguttormsen.com',
  email: 'simen.guttormsen@nmbu.no',
  links: {
    linkedin: 'https://linkedin.com/in/simen-guttormsen',
    github: 'https://github.com/simengut',
    scholar: 'https://scholar.google.com/',
    cv: '/cv/Simen_Guttormsen_CV.pdf',
  },
} as const;

export type SitePage = 'home' | 'research' | 'career';

export const navItems: { href: string; label: string; page: SitePage | 'contact' }[] = [
  { href: '/', label: 'Home', page: 'home' },
  { href: '/research', label: 'Research', page: 'research' },
  { href: '/career', label: 'Career', page: 'career' },
  { href: 'mailto:simen.guttormsen@nmbu.no', label: 'Contact', page: 'contact' },
];
