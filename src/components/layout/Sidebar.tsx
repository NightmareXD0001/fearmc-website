
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Newspaper, BadgeAlert, MessageSquare, User, ShoppingCart } from 'lucide-react';

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    { name: "Rules", path: "/rules", icon: <BadgeAlert size={20} /> },
    { name: "News", path: "/news", icon: <Newspaper size={20} /> },
    { name: "Contact", path: "/contact", icon: <MessageSquare size={20} /> },
    { name: "Store", path: "https://store.fearmc.net", icon: <ShoppingCart size={20} /> },
  ];

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
        className={`fixed top-24 left-4 z-40 h-[calc(100vh-120px)] transition-all duration-300 
          ${isMobile ? (isMobileOpen ? 'translate-x-0' : '-translate-x-full') : 'translate-x-0'}
          glass-card backdrop-blur-lg border border-white/10 shadow-lg rounded-xl w-64`}
      >
        <div className="flex flex-col h-full py-4 px-2">
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto scrollbar-none">
            <ul className="space-y-1 px-2">
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
          <div className="mt-auto px-2">
            <div className="p-4 rounded-lg bg-fear-red/10 border border-fear-red/20">
              <p className="text-sm text-gray-400 text-center">
                <span className="minecraft-text block mb-2">JOIN NOW</span>
                play.fearmc.net
              </p>
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
    </>
  );
};

export default Sidebar;
