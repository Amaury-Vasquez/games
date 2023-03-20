import { useQuery } from '@tanstack/react-query';
import clsx from 'clsx';
import { FC } from 'react';
import { BounceLoader, GameCard } from '@/components';
import { GameInfo } from '@/interfaces';
import { queryGames } from '@/queries';

interface GameListProps {
  games: GameInfo[];
}

const GameList: FC<GameListProps> = ({ games }) => {
  const { data, isLoading } = useQuery<GameInfo[]>({
    queryKey: ['game-list'],
    queryFn: queryGames,
    initialData: games,
  });

  return (
    <div className="w-full min-h-full h-fit py-8 px-4 max-mobileXS:px-1">
      <article className="text-light mb-4">
        <h1 className="text-center text-2xl font-semibold">
          Enjoy all free games available
        </h1>
        <p className="text-center text-xl mt-2">
          Login to save your scores and compare them with other players!
        </p>
      </article>
      <div
        className={clsx(
          'w-full',
          isLoading
            ? 'h-80 p-12 flex items-end justify-center'
            : 'grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 h-fit p-4 gap-8 max-mobileXS:p-0 place-items-center'
        )}
      >
        {isLoading ? (
          <BounceLoader size="lg" />
        ) : (
          data.map((game, i) => (
            <GameCard {...game} key={`${game.name}${i}-game-card`} />
          ))
        )}
      </div>
    </div>
  );
};

export default GameList;
