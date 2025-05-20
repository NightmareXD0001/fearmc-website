
export interface VoteSite {
  name: string;
  url: string;
}

export const voteSites: VoteSite[] = [
  {
    name: "TopMinecraftServers",
    url: "https://topminecraftservers.com/vote/12345"
  },
  {
    name: "MinecraftMP",
    url: "https://minecraft-mp.com/vote/12345"
  },
  {
    name: "Planet Minecraft",
    url: "https://planetminecraft.com/vote/12345"
  },
  {
    name: "Minecraft Servers",
    url: "https://minecraftservers.org/vote/12345"
  },
  {
    name: "Minecraft Server List",
    url: "https://minecraft-server-list.com/vote/12345"
  },
  {
    name: "ServerPact",
    url: "https://serverpact.com/vote/12345"
  }
];

// Customize this text to change the vote reward message
export const voteRewardMessage = "Vote on all sites daily to earn 1 Vote Point per vote!";
