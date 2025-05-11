
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { staffMembers, getPlayerAvatarUrl } from '@/utils/staffUtils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users } from 'lucide-react';
import Header from '@/components/layout/Header';

const Staff = () => {
  const [serverStatus, setServerStatus] = useState(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <PageLayout>
            <Header serverStatus={null} />
      <div className="container mx-auto py-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bungee text-white mb-2">
            <span className="text-fear-red text-glow">Staff</span> Team
          </h1>
          <p className="text-gray-400 max-w-3xl">
            Meet the dedicated team behind FearMC. Our staff members work hard to ensure the server 
            runs smoothly and all players have an enjoyable experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((member) => (
            <div 
              key={member.username}
              className="bg-fear-darkgray/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-fear-red/30 transition-all hover:shadow-md hover:shadow-fear-red/20"
            >
              <div className="p-6 flex flex-col items-center md:items-start md:flex-row gap-4">
                <Avatar className="h-20 w-20 rounded-xl border-2 border-fear-red/40 shadow-glow">
                  <AvatarImage src={getPlayerAvatarUrl(member.username)} />
                  <AvatarFallback className="bg-fear-red/20">{member.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="font-bungee text-lg">{member.username}</h3>
                    <Badge className="self-center md:self-start mt-1 md:mt-0 bg-fear-red text-white border-none">
                      {member.role}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3">
                    {member.description}
                  </p>
                  
                  <div className="flex items-center justify-center md:justify-start text-xs text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    <span>Joined: {formatDate(member.joinDate)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Staff;
