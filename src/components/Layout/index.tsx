import { FC } from 'react';
import { Header } from '@/components/';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="m-0 p-0 w-full 2xl:w-10/12 2xl:m-auto h-[calc(100vh-96px)]">
        {children}
      </main>
    </>
  );
};

export default Layout;
