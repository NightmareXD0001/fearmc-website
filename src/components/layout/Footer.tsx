
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Heart, Github, Headset } from 'lucide-react';
import type {Discord} from 'simple-icons';


interface FooterProps {
  visible?: boolean;
}

const Footer = ({ visible = true }: FooterProps) => {
  if (!visible) return null;
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-8 pt-8 pb-6 px-4 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About FearMC</h3>
            <p className="text-gray-400 mb-4">
              FearMC is a premier Minecraft server offering unique game modes and an engaging community experience.
            </p>
            <div className="flex items-center">
              <span className="text-gray-400 mr-2">Server IP:</span>
              <span className="font-medium text-white">play.fearmc.net</span>
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-fear-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-fear-red transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-fear-red transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-fear-red transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-fear-red transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-fear-red transition-colors flex items-center">
                  <FileText size={16} className="mr-2" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-fear-red transition-colors flex items-center">
                  <Headset size={16} className="mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-2 md:mb-0">
            © {currentYear} FearMC. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://discord.gg/fearmc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#5865F2] transition-colors"
              aria-label="Discord"
            >
              <Discord size={18} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Github"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
