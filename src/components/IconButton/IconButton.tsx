import { FC, HTMLProps } from 'react';
import clsx from 'clsx';
import { ButtonTypes } from '@/components';
import { IconCommonProps } from '.';

export interface IconButtonProps
  extends HTMLProps<HTMLButtonElement>,
    IconCommonProps {
  type?: ButtonTypes;
}

const IconButton: FC<IconButtonProps> = ({
  Icon,
  iconColor,
  className,
  children,
  hoverColor = 'bg-gray-200',
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={clsx(
        'p-2 rounded-full transition-colors focus-visible:border focus-visible:border-solid focus-visible:border-theme-secondary  focus-visible:outline-none',
        `hover:${hoverColor}`,
        className
      )}
      type={type}
      {...props}
    >
      <Icon color={iconColor} className="w-full h-full" />
      {children && children}
    </button>
  );
};

export default IconButton;
