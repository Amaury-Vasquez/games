import clsx from 'clsx';
import { FC } from 'react';
import { BounceLoader, GameCard } from '@/components';
import { gamesList } from '@/data';
import { GameInfo } from '@/interfaces';

const GameList: FC = () => (
  <main className="w-full min-h-full h-fit py-8 px-4 max-mobileXS:px-1">
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
        'grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 h-fit p-4 gap-8 max-mobileXS:p-0 place-items-center'
      )}
    >
      {gamesList.map((game, i) => (
        <GameCard {...game} key={`${game.name}${i}-game-card`} />
      ))}
    </div>
  </main>
);

export default GameList;
