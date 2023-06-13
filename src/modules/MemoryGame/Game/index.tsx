import clsx from 'clsx';
import { FC } from 'react';
import { BounceLoader } from '@/components';
import { useMemoryGame } from '@/hooks/useMemoryGame';
import { PokeCard } from './PokeCard';
import { UserBoard } from './UserBoard';

export const Game: FC = () => {
  const { pokemons, isLoading, handleCardClick, disableCards, score } =
    useMemoryGame();

  return (
    <div className="w-full h-auto flex flex-col space-y-2">
      <UserBoard score={score} />
      <div
        className={clsx(
          'w-full p-4 animate-fade-in',
          isLoading
            ? 'flex h-96 items-center justify-center'
            : 'h-fit grid-cols-4 grid place-items-center gap-4 md:grid-cols-6 lg:grid-cols-8'
        )}
      >
        {isLoading ? (
          <BounceLoader size="lg" />
        ) : (
          pokemons?.map(({ pokemonId, index, ...pokeCardData }) => (
            <PokeCard
              key={`pokecard:[${pokemonId}]:[${index}]`}
              id={pokemonId}
              onClick={handleCardClick}
              index={index}
              disabled={disableCards}
              {...pokeCardData}
            />
          ))
        )}
      </div>
    </div>
  );
};
