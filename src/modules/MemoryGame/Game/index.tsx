import clsx from 'clsx';
import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMemoryGameContext } from '@/context/MemoryGameContext';
import { useMemoryGame } from '@/hooks/useMemoryGame';
import { queryMemoryGame } from '@/queries';
import { GameCard } from './GameCard';
import { UserBoard } from './UserBoard';

export const Game: FC = () => {
  const { pokemons, isLoading } = useMemoryGame();

  return (
    <div className="w-full h-auto flex flex-col space-y-2">
      <UserBoard score={0} />
      <div
        className={clsx(
          'w-full h-fit p-4 grid place-items-center gap-4 animate-fade-in',
          'grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
        )}
      >
        {isLoading ? (
          <div></div>
        ) : (
          pokemons?.map(({ pokemonId, url }, index) => (
            <GameCard
              key={`pokecard:${pokemonId}:[${index}]`}
              id={pokemonId}
              image={url.toString()}
              isFlipped
              isMatched
              onClick={() => {}}
            />
          ))
        )}
      </div>
    </div>
  );
};
