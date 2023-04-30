import clsx from 'clsx';
import { FC } from 'react';
('pokemon');
import styles from '@/styles/utilities.module.css';

interface GameCardProps {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: (id: number) => void;
}

export const GameCard: FC<GameCardProps> = ({
  id,
  image,
  isFlipped,
  isMatched,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        'w-full aspect-square rounded-md p-4 flex items-center justify-center outline-none border-none transition-all duration-300',
        'hover:opacity-90 hover:shadow-dark ',
        'focus-visible:border focus-visible:border-theme-primary focus-visible:border-solid focus-visible:shadow-dark',
        isFlipped && styles.gradientBackground
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={`pokemoncard${id}`} className="w-full h-full" />
    </button>
  );
};
