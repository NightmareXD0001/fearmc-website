import { Outlet } from "react-router-dom";
import Header from '@/components/layout/Header';


const Layout = () => {
  return (
    <>
      <Header />
      <main className="pt-20 px-4 md:px-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
