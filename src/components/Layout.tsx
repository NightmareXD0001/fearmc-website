// src/components/Layout.tsx
import Header from "./layout/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="pt-20 px-4 md:px-6">
        {children}
      </main>
    </>
  );
};

export default Layout;
