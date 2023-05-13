import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMemoryGameContext } from '@/context/MemoryGameContext';
import { PokemonCardInfo, PokemonInfo } from '@/interfaces';
import { queryMemoryGame } from '@/queries';

function initializePokes(data: PokemonInfo[]): PokemonCardInfo[] {
  return data.map(({ pokemonId, url }, index) => ({
    pokemonId,
    image: url.toString(),
    isFlipped: false,
    isMatched: false,
    index,
  }));
}

export const useMemoryGame = () => {
  const { settings } = useMemoryGameContext();
  const {
    shinyImages,
    maxCards,
    region: { start, end },
  } = settings;
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['memoryGame'],
    queryFn: async () =>
      await queryMemoryGame(shinyImages, maxCards, start, end),
    keepPreviousData: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });
  const [pokemons, setPokemons] = useState<PokemonCardInfo[]>(
    initializePokes(data ?? [])
  );
  const [previousPoke, setPreviousPoke] = useState<PokemonCardInfo | null>();
  const [disableCards, setDisableCards] = useState(false);

  useEffect(() => {
    refetch();
  }, [settings, refetch]);

  useEffect(() => {
    let reassignPokes = true;

    if (reassignPokes && !isLoading && data)
      setPokemons(() => initializePokes(data));

    return () => {
      reassignPokes = false;
    };
  }, [data, isLoading]);

  const handleCardClick = (id: number, index: number) => {
    if (pokemons[index].isMatched) return;
    setDisableCards(true);
    if (previousPoke && previousPoke.index !== index) {
      const newPokes = [...pokemons];
      newPokes[index].isFlipped = true;
      if (previousPoke.pokemonId === id) {
        newPokes[previousPoke.index].isMatched = true;
        newPokes[index].isMatched = true;
        setPreviousPoke(null);
        setPokemons(() => newPokes);
      } else {
        setPreviousPoke(null);
        setPokemons(() => newPokes);
        setTimeout(() => {
          newPokes[previousPoke.index].isFlipped = false;
          newPokes[index].isFlipped = false;
          setPokemons(() => newPokes);
        }, 250);
      }
    } else {
      const newPokes = [...pokemons];
      newPokes[index].isFlipped = true;
      setPreviousPoke(newPokes[index]);
      setPokemons(() => newPokes);
    }
    setDisableCards(false);
  };

  return { pokemons, isLoading, handleCardClick, disableCards };
};
