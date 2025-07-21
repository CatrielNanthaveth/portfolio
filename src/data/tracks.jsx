const GridIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zm-9-8.73V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9.27a.74.74 0 0 0-.32-.64l-2-1.33a.75.75 0 0 0-.76 0l-2 1.33a.74.74 0 0 0-.32.64zM20 3h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4z"></path></svg>
);
const CodeIcon = () => (
    <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

export const portfolioTracks = [
  {
    id: '01',
    title: 'Liner Notes',
    category: 'Who I am?',
    icon: <GridIcon />,
    href: '#about-me' 
  },
  {
    id: '02',
    title: 'My Discography',
    category: 'What I did?',
    icon: <CodeIcon />,
    href: '#projects'
  },
  {
    id: '03',
    title: 'Contact',
    category: 'Get in Touch',
    icon: <GridIcon />,
    href: '#contact'
  }
];