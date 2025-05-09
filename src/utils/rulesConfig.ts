export interface Rule {
  id: number;
  category: string;
  title: string;
  description: string;
}

export const serverRules: Rule[] = [
  // General Rules
  {
    id: 1,
    category: "General Rules",
    title: "No Abusing Unintentional Bugs",
    description: "Abusing bugs to gain an advantage is prohibited."
  },
  {
    id: 2,
    category: "General Rules",
    title: "No Attempted Duplicating",
    description: "Trying to duplicate items using glitches or exploits is forbidden."
  },
  {
    id: 3,
    category: "General Rules",
    title: "No IRL Trading",
    description: "Do not trade in-game items or services for real-world currency or goods."
  },
  {
    id: 4,
    category: "General Rules",
    title: "No Cross-Server Trading",
    description: "Trading between FearMC and other servers is not allowed."
  },
  {
    id: 5,
    category: "General Rules",
    title: "No Finding or Using the Seed",
    description: "Players are not allowed to attempt to find or use the world seed."
  },
  {
    id: 6,
    category: "General Rules",
    title: "No Impersonation of Staff",
    description: "Pretending to be staff is strictly prohibited."
  },
  {
    id: 7,
    category: "General Rules",
    title: "No Punishment Evasion",
    description: "Avoiding punishments with alternate accounts or other methods is not allowed."
  },
  {
    id: 8,
    category: "General Rules",
    title: "No Lying to Staff Members",
    description: "Always be honest when communicating with staff."
  },
  {
    id: 9,
    category: "General Rules",
    title: "No Doxing, Swatting, or DDoSing",
    description: "Any attempt to harm players IRL is an instant ban."
  },
  {
    id: 10,
    category: "General Rules",
    title: "Report Exploits and Cheaters",
    description: "Use /report or our Discord to report any issues or cheating."
  },

  // Chat Rules
  {
    id: 11,
    category: "Chat Rules",
    title: "No Spamming or Rioting",
    description: "Spamming and causing chat chaos is not allowed."
  },
  {
    id: 12,
    category: "Chat Rules",
    title: "No Harassing or Abusing Others",
    description: "Respect all players and avoid any form of abuse."
  },
  {
    id: 13,
    category: "Chat Rules",
    title: "No Sharing Others’ Information",
    description: "Leaking or discussing someone else's private information is forbidden."
  },
  {
    id: 14,
    category: "Chat Rules",
    title: "No Advertising or Promotion",
    description: "Do not promote other servers, services, or social media without permission."
  },
  {
    id: 15,
    category: "Chat Rules",
    title: "No Racism, Discrimination, or Hate Speech",
    description: "Discriminatory language or behavior will result in severe punishment."
  },
  {
    id: 16,
    category: "Chat Rules",
    title: "No Death Threats or Encouraging Self-Harm",
    description: "We take threats and mental health very seriously. Do not joke about these topics."
  },
  {
    id: 17,
    category: "Chat Rules",
    title: "Global Rule Enforcement",
    description: "All rules apply across all gamemodes in the network."
  },

  // Client Rules
  {
    id: 18,
    category: "Client Rules",
    title: "No Hacked Clients",
    description: "Using hacked clients is strictly forbidden."
  },
  {
    id: 19,
    category: "Client Rules",
    title: "No Movement Mods",
    description: "Mods that alter movement speed, flight, etc., are not allowed."
  },
  {
    id: 20,
    category: "Client Rules",
    title: "No Inventory Mods",
    description: "Inventory tweaks or similar mods that give unfair advantages are disallowed."
  },
  {
    id: 21,
    category: "Client Rules",
    title: "No Health Indicators",
    description: "Showing exact health of opponents through mods is not permitted."
  },
  {
    id: 22,
    category: "Client Rules",
    title: "No Radar",
    description: "Radar and minimap mods that show player locations are banned."
  },
  {
    id: 23,
    category: "Client Rules",
    title: "No Auto Place",
    description: "Automatic placement of blocks or items is disallowed."
  },
  {
    id: 24,
    category: "Client Rules",
    title: "No Harmful Macros or Scripts",
    description: "Do not use any form of macro or script that performs actions unfairly."
  },
  {
    id: 25,
    category: "Client Rules",
    title: "No Freecam",
    description: "Mods that allow free camera movement are not allowed."
  }
];
