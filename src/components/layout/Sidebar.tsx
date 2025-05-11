
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Newspaper, BadgeAlert, MessageSquare, User, ShoppingCart, Calendar, Pickaxe } from 'lucide-react';
import JoinServerModal from '@/components/ui/JoinServerModal';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "News", path: "/news", icon: <Newspaper size={20} /> },
    { name: "Rules", path: "/rules", icon: <BadgeAlert size={20} /> },
    { name: "Staff", path: "/staff", icon: <Pickaxe size={20} /> },
    { name: "Store", path: "https://store.fearmc.net", icon: <ShoppingCart size={20} /> },
  ];

  const handleJoinClick = () => {
    setIsJoinModalOpen(true);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={toggleMobileSidebar}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-full bg-fear-darkgray/90 text-white"
        aria-label="Toggle sidebar"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-24 left-4 z-40 h-[calc(100vh-7rem)] transition-all duration-300 
          ${isMobile ? (isMobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          bg-fear-black/70 backdrop-blur-lg w-64 rounded-xl border border-white/5 glass-card overflow-hidden shadow-lg`}
      >
        <div className="flex flex-col h-full py-6 px-4">
          {/* Logo */}
          <div className="mb-6 px-2">
            <h1 className="text-2xl font-bold text-white text-center">
              <span className="text-fear-red text-glow">FearMC</span>
            </h1>
          </div>

          {/* Navigation - Made scrollable */}
          <nav className="flex-1 overflow-y-auto pr-1">
            <ul className="space-y-2 px-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center p-3 rounded-full transition-all duration-200 ${
                        isActive
                          ? 'bg-fear-red text-white'
                          : 'text-gray-300 hover:bg-fear-darkgray hover:text-fear-red hover:translate-x-1'
                      }`
                    }
                    onClick={() => isMobile && setIsMobileOpen(false)}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-4 px-2">
            <div className="p-4 rounded-lg bg-fear-red/10 border border-fear-red/20">
              <p className="text-sm text-gray-400 text-center">
              </p>
              <button 
                onClick={handleJoinClick}
                className="mt-2 w-full py-2 rounded-md bg-fear-red hover:bg-fear-red/80 text-white font-medium transition-all"
              >
                Join Server
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden backdrop-blur-sm"
          onClick={toggleMobileSidebar}
        />
      )}

      {/* Join Server Modal */}
      <JoinServerModal 
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </>
  );
};

export default Sidebar;
