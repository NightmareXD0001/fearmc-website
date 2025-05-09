
import { useState } from 'react';
import { Copy, X } from 'lucide-react';
import { toast } from 'sonner';

interface JoinServerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JoinServerModal = ({ isOpen, onClose }: JoinServerModalProps) => {
  const [activeTab, setActiveTab] = useState<'java' | 'bedrock'>('java');
  const serverIp = 'play.fearmc.net';
  const bedrockPort = '19132';

  if (!isOpen) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIp);
    toast.success('Server IP copied to clipboard!');
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50" onClick={onClose}></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="w-full max-w-md animate-float mx-4">
          <div className="glass-card rounded-xl overflow-hidden">
            {/* Header with logo */}
            <div className="bg-fear-red p-4 relative flex items-center justify-center">
              <img 
                src="/lovable-uploads/948a2047-fbbe-4cfd-a93f-93a9af54594d.png" 
                alt="FearMC Logo" 
                className="h-6 mr-2" 
              />
              <h2 className="text-xl font-bold text-center text-white">JOIN OUR SERVER</h2>
              <button 
                onClick={onClose}
                className="absolute right-4 top-4 text-white hover:text-white/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Tabs */}
              <div className="flex mb-4 border-b border-white/10">
                <button
                  className={`py-2 px-4 ${activeTab === 'java' ? 'text-fear-red border-b-2 border-fear-red' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('java')}
                >
                  Java Edition
                </button>
                <button
                  className={`py-2 px-4 ${activeTab === 'bedrock' ? 'text-fear-red border-b-2 border-fear-red' : 'text-gray-400'}`}
                  onClick={() => setActiveTab('bedrock')}
                >
                  Bedrock Edition
                </button>
              </div>
              
              {/* Tab content */}
              <div>
                {activeTab === 'java' ? (
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      To join our server on Java Edition, simply copy the IP address below and paste it in your Minecraft server list.
                    </p>
                    <div className="bg-fear-darkgray/50 rounded-lg p-3 flex justify-between items-center">
                      <span className="text-lg font-mono text-white">{serverIp}</span>
                      <button 
                        onClick={copyToClipboard}
                        className="p-1.5 rounded-md bg-fear-red/20 hover:bg-fear-red/30 transition-colors"
                      >
                        <Copy size={16} className="text-fear-red" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      For Bedrock Edition (Minecraft PE, Windows 10, Console), use these settings:
                    </p>
                    <div className="space-y-2">
                      <div className="bg-fear-darkgray/50 rounded-lg p-3 flex justify-between items-center">
                        <span className="font-mono text-white">Server: {serverIp}</span>
                        <button 
                          onClick={copyToClipboard}
                          className="p-1.5 rounded-md bg-fear-red/20 hover:bg-fear-red/30 transition-colors"
                        >
                          <Copy size={16} className="text-fear-red" />
                        </button>
                      </div>
                      <div className="bg-fear-darkgray/50 rounded-lg p-3">
                        <span className="font-mono text-white">Port: {bedrockPort}</span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 text-center">
                  <button
                    onClick={onClose}
                    className="bg-fear-red hover:bg-fear-red/80 text-white py-2.5 px-6 rounded-full font-medium transition-colors"
                  >
                    I Got It!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinServerModal;
