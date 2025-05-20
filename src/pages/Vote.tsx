
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { voteSites, voteRewardMessage } from '@/utils/voteConfig';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, ExternalLink } from 'lucide-react';
import Header from '@/components/layout/Header';
import { getServerStatus } from '@/utils/serverApi';
import { useQuery } from '@tanstack/react-query';
import { announcement } from '@/utils/announcementConfig';

const Vote = () => {
  const handleVoteClick = (url: string) => {
    window.open(url, '_blank');
  };

  // Fetch server status
  const { data: serverStatus } = useQuery({
    queryKey: ["serverStatus"],
    queryFn: getServerStatus,
    refetchInterval: 60000,
  });

  return (
    <PageLayout>
      <Header serverStatus={serverStatus || null} announcement={announcement.enabled ? announcement : null} />
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bungee text-white mb-2">
            <span className="text-fear-red text-glow">Vote</span> for FearMC
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Support our server by voting on these sites. Each vote helps us grow and lets more players discover FearMC!
          </p>
        </div>

        {/* Vote Reward Banner */}
        <div className="glass-card bg-fear-red/10 border border-fear-red/30 rounded-xl p-4 mb-8 flex items-center">
          <Bell className="mr-3 text-fear-red h-5 w-5 animate-pulse" />
          <p className="text-white font-medium">{voteRewardMessage}</p>
        </div>
        
        {/* Vote Sites Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {voteSites.map((site) => (
            <Card 
              key={site.name} 
              className="bg-fear-darkgray/50 backdrop-blur-sm border border-white/5 hover:border-fear-red/30 transition-all cursor-pointer"
              onClick={() => handleVoteClick(site.url)}
            >
              <CardHeader>
                <CardTitle className="text-white text-lg">{site.name}</CardTitle>
              </CardHeader>
              <CardFooter>
                <div className="flex items-center text-fear-red text-sm font-medium">
                  <ExternalLink size={14} className="mr-1" />
                  <span>Vote Now</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Vote;
