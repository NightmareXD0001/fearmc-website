
import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen bg-fear-black">
      <Sidebar />
      <main className="flex-grow md:ml-64">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
