import { FC, ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';
import clsx from 'clsx';
import { TargetTypes } from '@/interfaces';

type LinkVariants = 'primary' | 'secondary' | 'base';

export interface AnchorProps extends LinkProps {
  className?: string;
  children: ReactNode;
  href: string;
  variant?: LinkVariants;
  underlined?: boolean;
  target?: TargetTypes;
}

const Anchor: FC<AnchorProps> = ({
  className,
  children,
  href,
  variant = 'base',
  underlined = false,
  ...props
}) => {
  const getVariantStyle = (variant: LinkVariants) => {
    switch (variant) {
      case 'primary':
        return 'p-2 w-auto text-white bg-theme-primary rounded';
      case 'secondary':
        return 'p-2 w-auto border border-theme-primary text-theme-primary rounded';
      case 'base':
        return 'text-theme-primary';
    }
  };

  return (
    <Link
      href={href}
      className={clsx(
        'text-center',
        underlined && 'underline underline-offset-2',
        getVariantStyle(variant),
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Anchor;
