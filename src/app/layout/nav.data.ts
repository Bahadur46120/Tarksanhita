export interface NavChild {
  label: string;
  link: string;
  /** True when the target is a placeholder awaiting content, not a broken link. */
  pending?: boolean;
}

export interface NavItem {
  label: string;
  link?: string;
  children?: NavChild[];
}

/** The top-level sections of the portal and their dropdown contents. */
export const MAIN_NAV: NavItem[] = [
  { label: 'Home', link: '/' },
  {
    label: 'About Us',
    link: '/about',
    children: [
      { label: 'The Institution', link: '/institution' },
      { label: 'Introduction', link: '/about' },
      { label: 'Vision & Mission', link: '/about', },
      { label: "Founder's Message", link: '/about' },
      { label: 'Governing Council', link: '/faculty' },
      { label: 'Faculty Directory', link: '/faculty' },
      { label: 'Contact Us', link: '/contact' }
    ]
  },
  {
    label: 'Debates',
    link: '/debates',
    children: [
      { label: 'Start a Debate', link: '/debates/start' },
      { label: 'Active Debates', link: '/debates' },
      { label: 'Debate Archive', link: '/debates' },
      { label: 'Moot Court', link: '/events' },
      { label: 'Rules & Format', link: '/library' }
    ]
  },
  {
    label: 'Events',
    link: '/events',
    children: [
      { label: 'Upcoming Events', link: '/events' },
      { label: 'Competitions', link: '/events' },
      { label: 'Conferences', link: '/events' },
      { label: 'Guest Lectures', link: '/events' }
    ]
  },
  {
    label: 'Library',
    link: '/library',
    children: [
      { label: 'Digital Library', link: '/library' },
      { label: 'Bare Acts', link: '/library' },
      { label: 'Case Laws', link: '/library' },
      // Kept here so commentary and scholarship stay reachable now that
      // Research and Publications have come off the main navigation.
      { label: 'Articles & Commentary', link: '/articles' },
      { label: 'Research Papers', link: '/research' }
    ]
  },
  { label: 'Notices', link: '/notices' },
  { label: 'Careers', link: '/careers' },
  { label: 'Contact Us', link: '/contact' }
];

export const QUICK_LINKS: NavChild[] = [
  { label: 'Active Debates', link: '/debates' },
  { label: 'Propose a Motion', link: '/debates/start' },
  { label: 'Upcoming Events', link: '/events' },
  { label: 'Notices', link: '/notices' },
  { label: 'Library', link: '/library' },
  { label: 'Articles', link: '/articles' },
  { label: 'News', link: '/news' },
  { label: 'Contact', link: '/contact' }
];
