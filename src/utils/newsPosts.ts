
export type NewsPost = {
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

export const newsPosts: NewsPost[] = [
  {
    id: '1',
    title: 'Welcome to FearMC',
    excerpt: 'Introducing our new Minecraft server with unique game modes and features.',
    content: `We are thrilled to announce the official launch of FearMC, a brand new Minecraft server experience designed with the community in mind.

After months of development and testing, we're excited to welcome players to our unique game modes and custom features. Our team has worked tirelessly to create an environment where players can enjoy both competitive and casual gameplay.

Some of our key features include:
- Custom survival experience with unique economy
- Exciting PvP arenas with special abilities
- Creative plots with WorldEdit for building enthusiasts
- Regular events with amazing prizes
- Active staff team dedicated to fair gameplay

Whether you're a builder, fighter, or explorer, FearMC has something special for you. We're committed to regular updates and new content to keep the experience fresh and exciting.

Join our Discord community to stay updated on the latest news and connect with other players. We can't wait to see you on the server!`,
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
    content: `Get ready for an action-packed month on FearMC! Our event team has been working hard to bring you a variety of fun and engaging activities throughout the month.

## Weekend Events

**Building Competition (May 8-9)**
Show off your creativity in our themed building contest! This month's theme is "Ancient Civilizations." Participants will have 48 hours to create their masterpieces, with diamonds and special items up for grabs.

**PvP Tournament (May 15-16)**
Battle it out in our arena for the title of FearMC Champion! The tournament will feature 1v1, 2v2, and team battles across different maps. Winners will receive exclusive kits and a special role on Discord.

## Weekday Mini-Events

- **Monday Madness**: Crazy modified game modes every Monday
- **Treasure Tuesday**: Server-wide treasure hunts with valuable rewards
- **Wacky Wednesday**: Random effects and challenges all day
- **Throwback Thursday**: Classic Minecraft challenges and nostalgic gameplay

Make sure to join our Discord server for exact times and additional information about each event. Events are open to all players, regardless of rank or experience level.

We look forward to seeing you all participate and have fun together!`,
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
    content: `The first official FearMC PvP Tournament has concluded, and what an incredible display of skill and sportsmanship it was!

Over 64 players participated in our weekend-long competition, showcasing impressive combat techniques and strategies. The tournament spanned multiple arena maps with different terrain and environmental challenges.

## Tournament Results

**Solo Division**
1. xShadowSlayer - Champion 🏆
2. EpicGamerPro - Runner-up
3. MinecraftWizard - 3rd Place

**Team Division**
1. Team Redstone (CaptainSpark & EngineerElite) 🏆
2. Shadow Assassins (NightWalker & SilentBlade)
3. Block Breakers (PickMaster & DiamondDigger)

Special recognition goes to xShadowSlayer for achieving a flawless victory record throughout all rounds of the solo tournament. Their precision with bow shots and timing of critical hits was truly remarkable.

All winners have received their in-game rewards and special Discord roles. The next tournament is scheduled for next month with a new set of custom maps and special gameplay modifiers.

Thank you to everyone who participated and to our staff team for ensuring fair play throughout the competition. See you at the next event!`,
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
    content: `We're excited to announce that FearMC has been updated to version 1.2! This update brings several new features, improvements, and bug fixes to enhance your gameplay experience.

## What's New

**New Game Mode: Skyblock Challenges**
- Start your adventure on a floating island with limited resources
- Complete unique challenges to unlock new islands and rewards
- Custom crafting recipes for exclusive items
- Skyblock shop with special items

**Survival Improvements**
- Expanded world border by 5000 blocks
- Added 15 new custom mobs with unique drops
- Implemented resource nodes that regenerate over time
- Balanced economy with new shop prices

**Technical Updates**
- Upgraded server hardware for improved performance
- Reduced server lag during peak hours
- Fixed chunk loading issues in the Nether
- Improved anti-cheat system

**Quality of Life**
- Added /home command (3 homes for regular players, 5 for VIPs)
- Implemented a friend system with /friend commands
- Added custom emotes in chat
- Enhanced inventory sorting options

We recommend all players to clear their cache and restart their Minecraft client to fully experience all the new features. If you encounter any issues after the update, please report them on our Discord server.

The development team is already working on version 1.3, which will introduce an exciting new dimension and quest system. Stay tuned for more updates!`,
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
    content: `This month's Community Spotlight celebrates the incredible creativity and dedication of our players. We're constantly amazed by the stunning builds and ingenious redstone contraptions that appear on our server.

## Player Builds

**Medieval Kingdom by ArchiBuilder**
Located at x: 1250, z: -800 in the Creative world, ArchiBuilder has created an expansive medieval kingdom complete with a castle, village, farmlands, and port. The attention to detail in each building is remarkable, with fully decorated interiors and custom terrain work.

**Futuristic City by TechnoCreator & QuantumBuilder**
This collaborative project at x: -2400, z: 1800 showcases a sprawling futuristic metropolis with flying vehicles, skyscrapers, and automated systems. The creative use of light blocks and glass creates a truly immersive sci-fi atmosphere.

**Underground Dwarven Fortress by StoneCarver**
Hidden beneath the mountains at x: 800, z: 3200, StoneCarver has hollowed out an entire mountain range to create an intricate dwarven city. The grand halls, mining operations, and flowing lava features are a must-see for all players.

**Working Computer by RedstoneEngineer**
In what might be the most technical build on our server, RedstoneEngineer has created a functional 8-bit computer using only redstone components. It can perform basic calculations and even run simple programs!

## How to Get Featured

Want to see your creation in next month's spotlight? Submit screenshots of your builds on our Discord server in the #build-submissions channel, along with coordinates for staff to visit in-game.

We select builds based on creativity, technical skill, originality, and effort. Players whose builds are featured receive a special builder role on Discord and in-game rewards.

Keep building, creating, and inspiring our community!`,
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
    content: `As FearMC continues to grow, we're looking for dedicated and trustworthy players to join our staff team as moderators. This is your opportunity to help shape our community and ensure a positive experience for all players.

## What We're Looking For

**Requirements:**
- At least 16 years of age
- Active on the server for minimum 2 months
- No previous bans or serious warnings
- Ability to commit at least 6 hours weekly
- Strong communication skills
- Conflict resolution abilities
- Basic understanding of Minecraft mechanics

**Responsibilities:**
- Monitoring the server for rule violations
- Assisting players with questions and issues
- Participating in staff meetings
- Reporting bugs and suggesting improvements
- Helping with events and special activities

## Application Process

1. Fill out the application form on our website
2. Initial review by senior staff
3. Interview in our Discord server
4. Training period (1-2 weeks)
5. Full moderator status upon successful completion

Staff members receive special perks including exclusive commands, staff-only Discord channels, and early access to new features and updates.

We value diversity and encourage players from all backgrounds and time zones to apply. Our team should represent our global player base to ensure 24/7 coverage and support.

Applications will remain open until May 30th. Successful candidates will be notified by June 7th.

Join us in making FearMC the best Minecraft community it can be!`,
    date: '2025-05-15',
    author: 'Admin',
    image: '/news/staff-recruitment.png',
    category: 'Announcements',
    tags: ['staff', 'recruitment']
  }
];
