
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  imageUrl?: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "SkyWars Update - New Maps & Items!",
    excerpt: "We've added 5 new exciting maps to our SkyWars rotation and introduced special items!",
    date: "May 5, 2025",
    tag: "Update",
    imageUrl: "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2069&auto=format&fit=crop",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
  },
  {
    id: 2,
    title: "Summer Event - Double XP Weekend!",
    excerpt: "Join us this weekend for our Summer Double XP event across all game modes!",
    date: "May 2, 2025",
    tag: "Event",
    imageUrl: "https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=2187&auto=format&fit=crop",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
  },
  {
    id: 3,
    title: "Staff Applications Now Open!",
    excerpt: "We're looking for new moderators to join our team! Apply now through our Discord.",
    date: "April 28, 2025",
    tag: "Announcement",
    imageUrl: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070&auto=format&fit=crop",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
  },
  {
    id: 4,
    title: "Survival Mode Reset - Season 3",
    excerpt: "Our survival servers have been reset for Season 3! New world, new challenges!",
    date: "April 20, 2025",
    tag: "Update",
    imageUrl: "https://images.unsplash.com/photo-1624952913493-cff91346a52d?q=80&w=2070&auto=format&fit=crop",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula."
  },
];
