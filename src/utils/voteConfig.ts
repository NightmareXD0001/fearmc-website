
export interface VoteSite {
  name: string;
  url: string;
  description?: string;
  imageUrl?: string;
}

export const voteSites: VoteSite[] = [
  {
    name: "TopMinecraftServers",
    url: "https://topminecraftservers.com/vote/12345",
    description: "Vote on Top Minecraft Servers",
    imageUrl: "/vote/topmc.png"
  },
  {
    name: "MinecraftMP",
    url: "https://minecraft-mp.com/vote/12345",
    description: "Vote on MinecraftMP",
    imageUrl: "/vote/minecraftmp.png"
  },
  {
    name: "Planet Minecraft",
    url: "https://planetminecraft.com/vote/12345",
    description: "Vote on Planet Minecraft",
    imageUrl: "/vote/planetmc.png"
  },
  {
    name: "Minecraft Servers",
    url: "https://minecraftservers.org/vote/12345",
    description: "Vote on Minecraft Servers",
    imageUrl: "/vote/mcservers.png"
  },
  {
    name: "Minecraft Server List",
    url: "https://minecraft-server-list.com/vote/12345",
    description: "Vote on Minecraft Server List",
    imageUrl: "/vote/mcserverlist.png"
  },
  {
    name: "ServerPact",
    url: "https://serverpact.com/vote/12345",
    description: "Vote on ServerPact",
    imageUrl: "/vote/serverpact.png"
  }
];

// Customize this text to change the vote reward message
export const voteRewardMessage = "Vote on all sites daily to earn 1 Vote Point per vote!";
