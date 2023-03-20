import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { TargetTypes } from '@/interfaces';
import IconButton from './IconButton';
import { IconCommonProps } from '.';

export interface IconButtonLinkProps extends LinkProps, IconCommonProps {
  target?: TargetTypes;
}

const IconButtonLink: FC<IconButtonLinkProps> = ({
  Icon,
  iconColor,
  className,
  target = '_blank',
  hoverColor = 'bg-gray-200',
  ...props
}) => {
  return (
    <Link className="cursor-pointer rounded-full" target={target} {...props}>
      <IconButton
        tabIndex={-1}
        Icon={Icon}
        hoverColor={hoverColor}
        iconColor={iconColor}
        className={className}
      />
    </Link>
  );
};

export default IconButtonLink;
