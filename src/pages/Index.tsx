
import { useState, useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import Header from '@/components/layout/Header';
import BlogCard from '@/components/ui/BlogCard';
import DiscordCard from '@/components/ui/DiscordCard';
import JoinServerModal from '@/components/ui/JoinServerModal';
import { getServerStatus, ServerStatus } from '@/utils/serverApi';
import { blogPosts } from '@/utils/blogPosts';

const Index = () => {
  const [serverStatus, setServerStatus] = useState<ServerStatus | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const data = await getServerStatus();
        setServerStatus(data);
      } catch (error) {
        console.error("Failed to fetch server status", error);
      }
    };

    fetchServerStatus();
    
    // Refresh every minute
    const interval = setInterval(fetchServerStatus, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <Header serverStatus={serverStatus} />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-fear-black to-fear-darkgray p-8 md:p-12 flex flex-col items-center text-center">
              <div className="max-w-3xl">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/logo.png" 
                    alt="FearMC Logo" 
                    className="h-16 mb-4" 
                  />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                  <span className="minecraft-text text-fear-red block mb-4">YOUR NEXT OBSESSION STARTS HERE!</span>
                </h2>
                
                <p className="text-gray-300 mb-8 md:text-lg">
Welcome to FearMC — a high-stakes, high-reward Minecraft server built for the bold. Whether you're dominating PvP arenas, mastering custom game modes, or just vibing with our ever-growing community, every moment here is unforgettable.
Infinite ways to play. One question remains:
Will you rise… or respawn?                </p>
                
                <button
                  onClick={() => setIsJoinModalOpen(true)}
                  className="px-8 py-3 rounded-full bg-fear-red hover:bg-fear-red/80 text-white font-medium text-lg transition-transform hover:scale-105 animate-pulse-light"
                >
                  Join Now!
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content - 2/3 Width on Desktop */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <section>
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="/logo.png"  
                    alt="FearMC Logo" 
                    className="h-8 mr-3" 
                  />
                  <h2 className="text-2xl font-bold text-white">About <span className="text-fear-red">Fear</span>MC</h2>
                </div>
                <p className="text-gray-300 mb-4">
                  FearMC is a premier Minecraft server offering unique game modes and an engaging community experience. 
                  Our server features custom-built maps, balanced gameplay, and regular events to keep things exciting!
                </p>
                <p className="text-gray-300">
                  Whether you're interested in intense PvP battles in our SkyWars arenas, building magnificent structures in 
                  Creative mode, or surviving with friends in our Survival world, FearMC has something for every type of player!
                </p>
              </div>
            </section>
            
            {/* News/Blog Section */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-white">Latest News</h2>
                <a href="/blog" className="text-fear-red hover:text-fear-red/80 text-sm font-medium">
                  View All
                </a>
              </div>
              
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[...blogPosts]
      .sort((a, b) => b.id - a.id) // Sort descending by id
      .slice(0, 4) // Take the latest 4
      .map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
  </div>
            </section>
          </div>
          
          {/* Sidebar - 1/3 Width on Desktop */}
          <div className="space-y-6">
            {/* Discord Card */}
            <DiscordCard />
            
            {/* Server Stats Card */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="bg-fear-darkgray p-4 flex items-center">
                <img 
                  src="/logo.png"  
                  alt="FearMC Logo" 
                  className="h-5 mr-2" 
                />
                <h3 className="text-white font-bold text-lg">Server Statistics</h3>
              </div>
              
              <div className="p-5">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Status:</span>
                    <span className="flex items-center">
                      <span className={`h-2.5 w-2.5 rounded-full mr-2 ${serverStatus?.online ? 'bg-green-500 animate-pulse-light' : 'bg-red-500'}`}></span>
                      <span className="text-white">{serverStatus?.online ? 'Online' : 'Offline'}</span>
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Players:</span>
                    <span className="text-white">{serverStatus?.players.online || 0} / {serverStatus?.players.max || 0}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Version:</span>
                    <span className="text-white">{serverStatus?.version || 'Unknown'}</span>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      onClick={() => setIsJoinModalOpen(true)}
                      className="w-full py-2 rounded-full bg-fear-red hover:bg-fear-red/80 text-white font-medium transition-colors"
                    >
                      Join Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Featured Content Card */}
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="p-5">
                <h3 className="font-bold text-lg text-white mb-3">Weekly Event</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Join us this Saturday at 8 PM EST for our special PvP Tournament with awesome prizes!
                </p>
                <div className="text-right">
                  <a href="/events" className="text-fear-red hover:text-fear-red/80 text-sm font-medium">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Join Server Modal */}
      <JoinServerModal 
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
      />
    </PageLayout>
  );
};

export default Index;
