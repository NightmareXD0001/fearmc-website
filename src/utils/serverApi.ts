
export interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  version: string;
  error?: string;
}

export interface DiscordStatus {
  presence_count: number;
  members: any[];
  error?: string;
}

const SERVER_IP = 'play.fearmc.net';
const DISCORD_ID = '1234567890'; // Replace with actual Discord server ID

export const getServerStatus = async (): Promise<ServerStatus> => {
  try {
    const response = await fetch(`https://api.mcstatus.io/v2/status/java/${SERVER_IP}`);
    const data = await response.json();
    return {
      online: data.online,
      players: {
        online: data.players?.online || 0,
        max: data.players?.max || 0,
      },
      version: data.version?.name_clean || 'Unknown',
    };
  } catch (error) {
    console.error('Error fetching server status:', error);
    return {
      online: false,
      players: {
        online: 0,
        max: 0,
      },
      version: 'Unknown',
      error: 'Failed to fetch server status'
    };
  }
};

export const getDiscordStatus = async (): Promise<DiscordStatus> => {
  try {
    // Use Discord Widget API to get member count
    // For demo purposes, we'll return mock data as the discord ID is placeholder
    // In production, this would be: `https://discord.com/api/guilds/${DISCORD_ID}/widget.json`
    
    // Mock data for demonstration
    return {
      presence_count: 158,
      members: []
    };
    
    /*
    const response = await fetch(`https://discord.com/api/guilds/${DISCORD_ID}/widget.json`);
    const data = await response.json();
    return data;
    */
  } catch (error) {
    console.error('Error fetching Discord status:', error);
    return {
      presence_count: 0,
      members: [],
      error: 'Failed to fetch Discord status'
    };
  }
};
