
import { useEffect, useState } from 'react';
import { getDiscordStatus, DiscordStatus } from '@/utils/serverApi';

const DiscordCard = () => {
  const [discordStatus, setDiscordStatus] = useState<DiscordStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiscordStatus();
        setDiscordStatus(data);
      } catch (error) {
        console.error("Failed to fetch Discord status", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchData, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card rounded-xl overflow-hidden">
      <div className="bg-[#5865F2] p-4">
        <h3 className="text-white font-bold text-lg">Discord Community</h3>
      </div>
      
      <div className="p-5 text-center">
        {loading ? (
          <div className="flex justify-center items-center h-24">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#5865F2]/20 text-white">
                <span className="font-bold text-xl">{discordStatus?.presence_count || 0}</span>
                <span className="ml-2 text-sm">members online</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-5">
              Join our Discord community to chat with other players, get support, and stay updated!
            </p>
            
            <a
              href="https://discord.gg/fearmc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white font-medium"
            >
              Join Discord
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default DiscordCard;
