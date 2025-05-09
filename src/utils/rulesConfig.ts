
export interface Rule {
  id: number;
  category: string;
  title: string;
  description: string;
}

export const serverRules: Rule[] = [
  {
    id: 1,
    category: "Chat Rules",
    title: "No Spam or Excessive Caps",
    description: "Do not spam the chat with repeated messages or excessive use of capital letters. This creates a poor experience for other players."
  },
  {
    id: 2,
    category: "Chat Rules",
    title: "No Harassment",
    description: "Treat all players with respect. Harassment, bullying, discrimination, or hate speech of any kind will not be tolerated."
  },
  {
    id: 3,
    category: "Chat Rules",
    title: "No Advertising",
    description: "Advertising other servers, websites, or services is not allowed in our chat."
  },
  {
    id: 4,
    category: "Gameplay Rules",
    title: "No Hacking or Cheating",
    description: "The use of hacks, cheats, or unauthorized mods that give unfair advantages is strictly prohibited."
  },
  {
    id: 5,
    category: "Gameplay Rules",
    title: "No Griefing",
    description: "Destroying other players' builds or creations without permission is not allowed in designated survival areas."
  },
  {
    id: 6,
    category: "General Rules",
    title: "Follow Staff Instructions",
    description: "Always follow instructions given by server staff. If you have an issue with staff decisions, please contact a higher-ranking staff member."
  },
  {
    id: 7,
    category: "General Rules",
    title: "Report Issues",
    description: "Report any bugs, glitches, or rule-breaking behavior to staff members instead of exploiting them."
  }
];
