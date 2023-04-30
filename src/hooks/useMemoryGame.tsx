import { useQuery } from '@tanstack/react-query';
import { useMemoryGameContext } from '@/context/MemoryGameContext';
import { queryMemoryGame } from '@/queries';
import { useEffect } from 'react';

export const useMemoryGame = () => {
  const { settings } = useMemoryGameContext();
  const {
    shinyImages,
    maxCards,
    region: { start, end },
  } = settings;
  const {
    data: pokemons,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['memoryGame'],
    queryFn: async () =>
      await queryMemoryGame(shinyImages, maxCards, start, end),
    keepPreviousData: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    refetch();
  }, [settings, refetch]);

  const handleCardClick = (id: number, imgUrl: Blob) => {};
  return { pokemons, isLoading };
};
