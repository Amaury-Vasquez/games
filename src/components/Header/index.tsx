import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaGamepad } from 'react-icons/fa';
import HeaderLink from './HeaderLink';

const Header: FC = () => {
  const router = useRouter();
  const links = [
    {
      href: '/list',
      text: 'Game list',
    },
    {
      href: '/highscores',
      text: 'Highscores',
    },
    {
      href: '/about',
      text: 'About',
    },
  ];
  return (
    <header className="w-full 2xl:w-10/12 xl:m-auto max-md:flex-col max-md:space-y-3 flex items-center py-2 px-4 max-sm:px-2 h-24 justify-between">
      <Link
        className="flex items-center space-x-4 text-light hover:text-theme-secondary transition-colors"
        href="/"
      >
        <FaGamepad className="text-5xl  text-orange-500" />
        <div className="flex flex-col text-center">
          <h1 className="text-inherit text-2xl font-semibold">React games</h1>
          <span className="text-inherit text-base italic">Play and enjoy</span>
        </div>
      </Link>
      <nav className="flex items-center space-x-8 h-full w-fit pr-4 max-md:pr-0">
        {links.map((link) => (
          <HeaderLink
            key={`header-link-${link.href}`}
            path={link.href}
            isActive={router.pathname === link.href}
          >
            {link.text}
          </HeaderLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
