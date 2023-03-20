import clsx from 'clsx';
import { FC } from 'react';

interface SkeletonProps {
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

const Skeleton: FC<SkeletonProps> = ({ className, shadow = 'md' }) => (
  <div className={clsx(className, 'animate-skeleton', `shadow-${shadow}`)} />
);

export default Skeleton;
