
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Bell } from 'lucide-react';
import { ServerStatus } from '@/utils/serverApi';
import ServerStatusIndicator from '../ui/ServerStatusIndicator';
import { FaDiscord } from 'react-icons/fa';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import JoinServerModal from '@/components/ui/JoinServerModal';

interface HeaderProps {
  serverStatus: ServerStatus | null;
  announcement?: string;
}

const Header = ({ serverStatus, announcement }: HeaderProps) => {
  const [showSearch, setShowSearch] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

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

          {/* Center area with announcement */}
          <div className="hidden md:flex flex-1 justify-center px-2">
            {announcement ? (
              <div className="relative w-full max-w-md">
                <div className="w-full bg-fear-red/20 border border-fear-red/30 rounded-full py-2 pl-10 pr-4 text-sm text-white flex items-center">
                  <Bell className="absolute left-3 top-2.5 h-4 w-4 text-fear-red animate-pulse" />
                  <span className="truncate">{announcement}</span>
                </div>
              </div>
            ) : null}
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
              <FaDiscord size={18} />
              <span> Discord</span>
            </a>

            {/* Join Now Button */}
            <button 
              onClick={() => setIsJoinModalOpen(true)} 
              className="flex items-center justify-center h-9 px-4 rounded-full bg-fear-red hover:bg-fear-red/80 transition-colors text-white text-sm"
            >
              Play Now
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

        {/* Mobile announcement - conditionally shown */}
        {showSearch && announcement && (
          <div className="md:hidden pb-3 px-2">
            <div className="relative w-full">
              <div className="w-full bg-fear-red/20 border border-fear-red/30 rounded-full py-2 pl-10 pr-4 text-sm text-white flex items-center">
                <Bell className="absolute left-3 top-2.5 h-4 w-4 text-fear-red animate-pulse" />
                <span className="truncate">{announcement}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Join Server Modal */}
      <JoinServerModal 
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </header>
  );
};

export default Header;
