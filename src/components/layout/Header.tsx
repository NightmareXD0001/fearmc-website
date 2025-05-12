
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User } from 'lucide-react';
import { ServerStatus } from '@/utils/serverApi';
import ServerStatusIndicator from '../ui/ServerStatusIndicator';

interface HeaderProps {
  serverStatus: ServerStatus | null;
}

const Header = ({ serverStatus }: HeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-7xl bg-fear-black/60 backdrop-blur-lg border border-white/10 rounded-full glass-card shadow-lg">
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo - visible on all screens */}
          <div className="flex-shrink-0 md:w-64 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="FearMC Logo" 
                className="h-8 mr-2" 
              />
              <span className="text-xl font-bold">
                <span className="text-fear-red text-glow">Fear</span>MC
              </span>
            </Link>
          </div>

          {/* Center area with search */}
          <div className="hidden md:flex flex-1 justify-center px-2">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Coming Soon..."
                className="w-full bg-fear-darkgray/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-fear-red/50"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Right side items */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* Server Status */}
            <ServerStatusIndicator serverStatus={serverStatus} />

            {/* Discord Button */}
            <a
              href="https://discord.gg/fearmc"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center h-9 px-4 rounded-full bg-[#5865F2] hover:bg-[#4752C4] transition-colors text-white text-sm"
            >
              <DiscordIcon className="h-4 w-4 mr-2" />
              <span>Discord</span>
            </a>

            {/* Login/User Button */}
            {/*<button className="flex items-center justify-center h-9 w-9 rounded-full bg-fear-darkgray/70 hover:bg-fear-darkgray transition-colors">
              <User className="h-4 w-4 text-gray-300" />
            </button>*/}

            {/* Mobile search toggle */}
            <button 
              onClick={() => setShowSearch(!showSearch)} 
              className="md:hidden flex items-center justify-center h-9 w-9 rounded-full bg-fear-darkgray/70 hover:bg-fear-darkgray transition-colors"
            >
              <Search className="h-4 w-4 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Mobile search input - conditionally shown */}
        {showSearch && (
          <div className="md:hidden pb-3 px-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Coming Soon..."
                className="w-full bg-fear-darkgray/50 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-fear-red/50"
                autoFocus
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

// Custom Discord icon component since lucide-react doesn't export a DiscordLogo
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>
);
