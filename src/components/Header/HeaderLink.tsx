import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

export interface HeaderLinkProps {
  path: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const HeaderLink: FC<HeaderLinkProps> = ({
  path,
  children,
  isActive = false,
}) => {
  return (
    <Link
      className={clsx(
        'text-light text-xl h-fit pb-2 w-fit transition-colors',
        'hover:text-theme-secondary',
        isActive && 'border-b border-solid border-theme-primary rounded-sm'
      )}
      href={path}
    >
      <span className={clsx('px-4', isActive && 'text-theme-primary')}>
        {children}
      </span>
    </Link>
  );
};

export default HeaderLink;
