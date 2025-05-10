
import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface PageLayoutProps extends PropsWithChildren {
  showFooter?: boolean;
}

const PageLayout = ({ children, showFooter = true }: PageLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-fear-black pt-24">
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
