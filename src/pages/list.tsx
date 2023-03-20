import Head from 'next/head';
import { GameInfo } from '@/interfaces';
import { GameList } from '@/modules';
import { GAMES_URL } from '@/constants';
import { queryGames } from '@/queries';

interface GameListPageProps {
  games?: GameInfo[];
}

const Games = ({ games }: GameListPageProps) => {
  return (
    <>
      <Head>
        <title> Game list - amvasgames </title>
        <meta name="description" content="List of games created by @amvasdev" />
      </Head>
      <GameList games={games ?? []} />
    </>
  );
};

export async function getStaticProps() {
  const games: GameInfo[] = await queryGames();

  return {
    props: {
      games,
    },
  };
}
export default Games;
