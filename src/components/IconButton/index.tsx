import { IconType } from 'react-icons';

export interface IconCommonProps {
  className?: string;
  Icon: IconType;
  hoverColor?: string;
  iconColor?: string;
}

export { default as IconButton, type IconButtonProps } from './IconButton';
export {
  default as IconButtonLink,
  type IconButtonLinkProps,
} from './IconButtonLink';
