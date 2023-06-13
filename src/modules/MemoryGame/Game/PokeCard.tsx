import clsx from 'clsx';
import { FC } from 'react';
import styles from '@/styles/utilities.module.css';
import { TbPokeball } from 'react-icons/tb';

interface GameCardProps {
  id: number;
  image: string;
  isFlipped: boolean;
  isFlipping: boolean;
  isMatched: boolean;
  onClick: (id: number, index: number) => void;
  index: number;
  disabled: boolean;
}

const { flip, flipDown, gradientBackground } = styles;

export const PokeCard: FC<GameCardProps> = ({
  id,
  image,
  isFlipped,
  isMatched,
  onClick,
  isFlipping,
  index,
  disabled,
}) => {
  const handleClick = () => {
    if (!disabled && !isMatched && !isFlipped) onClick(id, index);
  };

  return (
    <button
      className={clsx(
        'w-full aspect-square rounded-md p-4 flex items-center justify-center outline-none border-none transition-all duration-500 animate-fade-in',
        'hover:transform hover:opacity-90 hover:shadow-dark hover:scale-110',
        'focus-visible:border focus-visible:border-theme-primary focus-visible:border-solid focus-visible:shadow-dark',
        isFlipping && flip,
        gradientBackground
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {isFlipped ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img src={image} alt={`pokemoncard${id}`} className="w-full h-full" />
      ) : (
        // <div className="w-16 h-16 bg-white rounded-full p-0">
        <TbPokeball className="w-20 h-20 text-slate-300" />
      )}
    </button>
  );
};
