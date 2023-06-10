import Head from 'next/head';
import { GameInfo } from '@/interfaces';
import { GameList } from '@/modules';

const Games = () => {
  return (
    <>
      <Head>
        <title> Game list - amvasgames </title>
        <meta name="description" content="List of games created by @amvasdev" />
      </Head>
      <GameList />
    </>
  );
};

export default Games;
