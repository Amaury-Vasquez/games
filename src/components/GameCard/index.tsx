import { FC } from 'react';
import Image from 'next/image';
import { Anchor } from '@/components';
import { GameInfo } from '@/interfaces';

interface GameCardProps extends GameInfo {
  invert?: boolean;
}

const GameCard: FC<GameCardProps> = ({
  name,
  description,
  img: { url, alt },
  path,
  invert = false,
}) => {
  return (
    <div className="h-fit p-4 w-full rounded-md grid grid-cols-2 space-x-8 bg-transparent-black max-mobileXS:flex-col max-mobileXS:flex max-mobileXS:px-1">
      <span className="h-52 w-52 relative flex m-auto">
        <Image className="rounded-sm" src={url} alt={alt} fill />
      </span>
      <article className="text-light flex flex-col space-y-4 text-left py-2 px-0 justify-around items-center">
        <h1 className="text-2xl font-semibold capitalize">{name}</h1>
        <p className="text-xl">{description}</p>
        <Anchor
          href={`/games/${path}`}
          className="px-12 font-bold"
          variant="primary"
        >
          Play
        </Anchor>
      </article>
    </div>
  );
};

export default GameCard;
