
export interface StaffMember {
  username: string;
  role: string;
  description: string;
  joinDate: string; // ISO format date string
}

// Edit this array to add, remove or modify staff members
export const staffMembers: StaffMember[] = [
  {
    username: "Welsin",
    role: "Server Owner",
    description: "Creator and founder of FearMC. Responsible for server management and development.",
    joinDate: "2024-01-01"
  },
  {
    username: "XNightmareXD",
    role: "Developer",
    description: "Main developer and manager handling day-to-day operations and staff management.",
    joinDate: "2024-01-15"
  },
  {
    username: "Meedo",
    role: "Developer",
    description: "Lead developer for custom plugins and server features.",
    joinDate: "2024-02-01"
  },
  {
    username: "Xisuma",
    role: "Senior Moderator",
    description: "Experienced moderator responsible for training new staff and handling difficult situations.",
    joinDate: "2024-02-15"
  },
  {
    username: "GrumM",
    role: "Moderator",
    description: "Assists with player reports and enforces server rules.",
    joinDate: "2024-03-01"
  },
  {
    username: "Mumbo",
    role: "Builder",
    description: "Creates amazing spawn areas and event arenas.",
    joinDate: "2024-03-15"
  }
];

// Get the URL for a player's Minecraft skin avatar
export const getPlayerAvatarUrl = (username: string, size: number = 100) => {
  return `https://minotar.net/avatar/${username}/${size}.png`;
};
