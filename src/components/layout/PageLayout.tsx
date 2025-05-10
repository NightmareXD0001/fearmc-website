
import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen bg-fear-black">
      <Sidebar />
      <main className="flex-grow pt-24 px-4 md:px-8 md:ml-64">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
