
export interface StaffMember {
  username: string;
  role: string;
  description: string;
  joinDate: string; // ISO format date string
  mainGroup: string; // Main grouping like "Owner", "Developer", etc.
}

// Edit this array to add, remove or modify staff members
export const staffMembers: StaffMember[] = [
  {
    username: "Welsin",
    role: "Server Owner",
    description: "Creator and founder of FearMC. Responsible for server management and development.",
    joinDate: "2024-01-01",
    mainGroup: "Owner"
  },
  {
    username: "Meedo",
    role: "Lead Developer",
    description: "Jack has been with the EggWars team from the early days. He worked on the latest beta update, helped develop the new FFA game-mode, and redesigned our lobbies into inviting spaces.",
    joinDate: "2024-02-01",
    mainGroup: "Developer"
  },
  {
    username: "XNightmareXD",
    role: "Developer",
    description: "Nightmare is the developer behind our website and the Practice game-mode. He built the Practice game-mode entirely from scratch, creating a dedicated space where players can fine-tune their skills.",
    joinDate: "2024-01-15",
    mainGroup: "Developer"
  }
];

// Get the URL for a player's Minecraft skin avatar
export const getPlayerAvatarUrl = (username: string, size: number = 100) => {
  return `https://minotar.net/helm/${username}/${size}.png`;
};

// Group staff members by their main group
export const getGroupedStaffMembers = () => {
  const grouped: Record<string, StaffMember[]> = {};
  
  staffMembers.forEach(member => {
    if (!grouped[member.mainGroup]) {
      grouped[member.mainGroup] = [];
    }
    grouped[member.mainGroup].push(member);
  });
  
  // Sort groups by a predefined order
  const groupOrder = ["Owner", "Developer", "Moderator", "Helper", "Builder"];
  
  return Object.entries(grouped)
    .sort(([groupA], [groupB]) => {
      const indexA = groupOrder.indexOf(groupA);
      const indexB = groupOrder.indexOf(groupB);
      // If group isn't in the predefined order list, put it at the end
      return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
    });
};
