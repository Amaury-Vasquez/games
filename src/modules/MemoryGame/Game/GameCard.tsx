import clsx from 'clsx';
import { FC } from 'react';
import { useToggle } from '@/hooks';
import styles from '@/styles/utilities.module.css';
import { TbPokeball } from 'react-icons/tb';

interface GameCardProps {
  id: number;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: (id: number, index: number) => void;
  index: number;
  disabled: boolean;
}

const { flip, flipDown, gradientBackground } = styles;

export const GameCard: FC<GameCardProps> = ({
  id,
  image,
  isFlipped,
  isMatched,
  onClick,
  index,
  disabled,
}) => {
  const time = 250;
  const { willClose, toggle } = useToggle(true, time);

  const handleClick = (id: number) => {
    toggle();
    setTimeout(() => {
      onClick(id, index);
    }, time);
  };

  return (
    <button
      className={clsx(
        'w-full aspect-square rounded-md p-4 flex items-center justify-center outline-none border-none transition-all duration-300 animate-fade-in',
        'transform hover:opacity-90 hover:shadow-dark hover:scale-110',
        'focus-visible:border focus-visible:border-theme-primary focus-visible:border-solid focus-visible:shadow-dark',
        willClose && (isFlipped ? flip : flipDown),
        gradientBackground
      )}
      onClick={() => {
        if (!disabled && !isMatched) handleClick(id);
      }}
    >
      {}
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
