
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  category: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Welcome to FearMC',
    excerpt: 'Introducing our new Minecraft server with unique game modes and features.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    date: '2025-05-01',
    author: 'Admin',
    image: '/placeholder.svg',
    category: 'Announcements',
    tags: ['welcome', 'news']
  },
  {
    id: '2',
    title: 'Upcoming Events',
    excerpt: 'Check out all the exciting events planned for this month on FearMC.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    date: '2025-05-05',
    author: 'EventManager',
    image: '/placeholder.svg',
    category: 'Events',
    tags: ['events', 'community']
  },
  {
    id: '3',
    title: 'PvP Tournament Results',
    excerpt: 'Congratulations to all participants in our recent PvP tournament!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    date: '2025-05-08',
    author: 'GameMod',
    image: '/placeholder.svg',
    category: 'Tournaments',
    tags: ['pvp', 'tournaments', 'results']
  },
  {
    id: '4',
    title: 'Server Update v1.2',
    excerpt: 'New features and bug fixes in our latest server update.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    date: '2025-05-12',
    author: 'Developer',
    image: '/placeholder.svg',
    category: 'Updates',
    tags: ['update', 'features', 'bug-fixes']
  },
  {
    id: '5',
    title: 'Community Spotlight',
    excerpt: 'Highlighting some amazing builds from our creative players.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    date: '2025-05-15',
    author: 'CommunityManager',
    image: '/placeholder.svg',
    category: 'Community',
    tags: ['community', 'builds', 'creative']
  },
  {
    id: '6',
    title: 'Staff Recruitment',
    excerpt: 'We\'re looking for new moderators to join our team!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.',
    date: '2025-05-20',
    author: 'Admin',
    image: '/placeholder.svg',
    category: 'Announcements',
    tags: ['staff', 'recruitment']
  }
];
