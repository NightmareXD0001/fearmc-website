
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { staffMembers, getPlayerAvatarUrl, getGroupedStaffMembers } from '@/utils/staffUtils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { StaffMember } from '@/utils/staffUtils';

const Staff = () => {
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const groupedStaff = getGroupedStaffMembers();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleStaffClick = (member: StaffMember) => {
    setSelectedStaff(member);
    setIsDialogOpen(true);
  };

  return (
    <PageLayout>
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

        {/* Staff Groups */}
        {groupedStaff.map(([groupName, members]) => (
          <div key={groupName} className="mb-10">
            <h2 className="text-2xl font-bungee text-white mb-4 border-b border-white/10 pb-2">
              {groupName}s
            </h2>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {members.map((member) => (
                <li 
                  key={member.username}
                  onClick={() => handleStaffClick(member)}
                  className="bg-fear-darkgray/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-fear-red/30 transition-all hover:shadow-md hover:shadow-fear-red/20 cursor-pointer"
                >
                  <div className="p-4 flex items-center space-x-3">
                    <Avatar className="h-12 w-12 rounded-full border-2 border-fear-red/40">
                      <AvatarImage src={getPlayerAvatarUrl(member.username, 48)} />
                      <AvatarFallback className="bg-fear-red/20">{member.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h3 className="font-medium text-white">{member.username}</h3>
                      <Badge variant="outline" className="mt-1 text-xs bg-fear-red/10 text-fear-red border-fear-red/30">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Staff Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="bg-fear-darkgray border border-white/10 text-white">
            {selectedStaff && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 rounded-xl border-2 border-fear-red/40">
                      <AvatarImage src={getPlayerAvatarUrl(selectedStaff.username, 64)} />
                      <AvatarFallback className="bg-fear-red/20">{selectedStaff.username.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <DialogTitle className="text-xl text-white">{selectedStaff.username}</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        {selectedStaff.role}
                      </DialogDescription>
                    </div>
                  </div>
                </DialogHeader>
                
                <div className="mt-4">
                  <h4 className="font-medium text-fear-red mb-2">About</h4>
                  <p className="text-gray-300 mb-4">
                    {selectedStaff.description}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-400 mt-4">
                    <Calendar size={14} className="mr-1" />
                    <span>Joined: {formatDate(selectedStaff.joinDate)}</span>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </PageLayout>
  );
};

export default Staff;
