
import { PropsWithChildren } from 'react';
import Sidebar from './Sidebar';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen bg-fear-black pt-24">
      <Sidebar />
      <main className="flex-grow md:ml-64 px-4 md:px-6">
        {children}
      </main>
    </div>
  );
};

export default PageLayout;
