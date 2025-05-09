
import { ServerStatus } from '@/utils/serverApi';

interface ServerStatusIndicatorProps {
  serverStatus: ServerStatus | null;
}

const ServerStatusIndicator = ({ serverStatus }: ServerStatusIndicatorProps) => {
  const isOnline = serverStatus?.online;
  const playerCount = serverStatus?.players.online || 0;

  return (
    <div className="hidden sm:flex items-center text-sm px-3 py-1.5 rounded-full bg-fear-darkgray/50 border border-white/10">
      <div className="flex items-center">
        <span className={`h-2 w-2 rounded-full mr-2 ${isOnline ? 'bg-green-500 animate-pulse-light' : 'bg-red-500'}`}></span>
        <span className="text-gray-300">
          {isOnline ? `${playerCount} Online` : 'Offline'}
        </span>
      </div>
    </div>
  );
};

export default ServerStatusIndicator;
