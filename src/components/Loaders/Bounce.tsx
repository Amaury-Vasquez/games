import { FC } from 'react';
import clsx from 'clsx';
import styles from '@/styles/loaders.module.css';

interface BounceProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
}

const Bounce: FC<BounceProps> = ({ size = 'sm' }) => (
  <div
    className={clsx(
      styles.bounceLoader,
      size === 'full'
        ? 'h-full w-full'
        : size === 'sm'
        ? 'h-6 w-6'
        : size === 'md'
        ? 'h-8 w-8'
        : 'h-10 w-10'
    )}
  >
    <div className={`bg-theme-primary`} />
    <div className={clsx('bg-theme-primary', styles.delay)} />
  </div>
);

export default Bounce;
