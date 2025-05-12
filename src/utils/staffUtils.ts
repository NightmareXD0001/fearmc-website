
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
    username: "Meedo",
    role: "Lead Developer",
    description: "Jack has been with the EggWars team from the early days. He worked on the latest beta update, helped develop the new FFA game-mode, and redesigned our lobbies into inviting spaces.",
    joinDate: "2024-02-01"
  },
  {
    username: "XNightmareXD",
    role: "Developer",
    description: "Nightmare is the developer behind our website and the Practice game-mode. He built the Practice game-mode entirely from scratch, creating a dedicated space where players can fine-tune their skills.",
    joinDate: "2024-01-15"
  }
];

// Get the URL for a player's Minecraft skin avatar
export const getPlayerAvatarUrl = (username: string, size: number = 100) => {
  return `https://minotar.net/avatar/${username}/${size}.png`;
};
