import { FC } from 'react';
import clsx from 'clsx';
import styles from '@/styles/loaders.module.css';

interface SpinProps {
  color?: string;
  className?: string;
}

const Spin: FC<SpinProps> = ({ color = 'blue-500', className }) => (
  <div
    className={clsx(
      styles.ldsRing,
      'border-transparent',
      color ? `border-t-${color}` : 'border-t-blue-500',
      className
    )}
  >
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Spin;
