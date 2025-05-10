
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
                placeholder="Search..."
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
            <button className="flex items-center justify-center h-9 w-9 rounded-full bg-fear-darkgray/70 hover:bg-fear-darkgray transition-colors">
              <User className="h-4 w-4 text-gray-300" />
            </button>

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
                placeholder="Search..."
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
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 7.5A1.5 1.5 0 0 1 7.5 9a1.5 1.5 0 0 1-3 0A1.5 1.5 0 0 1 6 7.5a1.5 1.5 0 0 1 3 0Zm6 0a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5Z" />
    <path d="M6 15s.6-2 3-2 3 2 3 2m3-2a2.5 2.5 0 0 1 3 2m-12-2.5C9.5 7 6 7 6 9s3 9 3 9m6 0c2.5 0 3-2 3-4s-1-5-3-5m-6 9h6m-9-3a7.5 7.5 0 0 0 9 0" />
  </svg>
);
