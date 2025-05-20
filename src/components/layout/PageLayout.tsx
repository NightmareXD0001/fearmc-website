
import { PropsWithChildren } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getServerStatus } from '@/utils/serverApi';
import { announcement } from '@/utils/announcementConfig';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface PageLayoutProps extends PropsWithChildren {
  showFooter?: boolean;
  customHeader?: React.ReactNode;
}

const PageLayout = ({ children, showFooter = true, customHeader }: PageLayoutProps) => {
  // Fetch server status for all pages
  const { data: serverStatus } = useQuery({
    queryKey: ["serverStatus"],
    queryFn: getServerStatus,
    refetchInterval: 60000,
  });

  return (
    <div className="flex min-h-screen bg-fear-black pt-24">
      {customHeader || (
        <Header 
          serverStatus={serverStatus || null} 
          announcement={announcement.enabled ? announcement : null} 
        />
      )}
      <Sidebar />
      <main className="flex-grow md:ml-64 px-4 md:px-6 flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <Footer visible={showFooter} />
      </main>
    </div>
  );
};

export default PageLayout;
