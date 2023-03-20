import Head from 'next/head';
import MemoryGame from '@/modules/MemoryGame';

const Pokemory = () => {
  return (
    <>
      <Head>
        <title>Pokemory - amvasgames</title>
        <meta name="description" content="Pokemory game, @amvasdev games" />
      </Head>
      <MemoryGame />
    </>
  );
};

export default Pokemory;
