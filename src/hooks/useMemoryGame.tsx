import { useEffect, useState, useCallback, use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useMemoryGameContext } from '@/context/MemoryGameContext';
import { PokemonCardInfo, PokemonInfo } from '@/interfaces';
import { queryMemoryGame } from '@/queries';

function initializePokes(data: PokemonInfo[]): PokemonCardInfo[] {
  return data.map(({ pokemonId, url }, index) => ({
    pokemonId,
    image: url.toString(),
    isFlipped: false,
    isFlipping: false,
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
  const [currentPoke, setCurrentPoke] = useState<PokemonCardInfo | null>();
  const [disableCards, setDisableCards] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const flippingTime = 500;

  useEffect(() => {
    refetch();
  }, [settings, refetch]);

  useEffect(() => {
    let reassignPokes = true;

    if (reassignPokes && !isLoading && data) {
      setPokemons(() => initializePokes(data));
      setScore(0);
      setIsGameOver(false);
      setPreviousPoke(null);
      setCurrentPoke(null);
      setDisableCards(false);
    }

    return () => {
      reassignPokes = false;
    };
  }, [data, isLoading]);

  const handleCardClick = useCallback(
    (id: number, index: number) => {
      const newPokes = pokemons.map((poke) => poke);
      if (!previousPoke) {
        newPokes[index].isFlipping = true;
        setPreviousPoke(pokemons[index]);
        setPokemons(() => newPokes);
        setDisableCards(true);
        setTimeout(() => {
          newPokes[index].isFlipping = false;
          newPokes[index].isFlipped = true;
          setPokemons(() => newPokes);
          setDisableCards(false);
        }, flippingTime);
      } else if (previousPoke.index !== index && !currentPoke) {
        newPokes[index].isFlipping = true;
        setCurrentPoke(pokemons[index]);
        setPokemons(() => newPokes);
        setDisableCards(true);
        setTimeout(() => {
          newPokes[index].isFlipped = true;
          newPokes[index].isFlipping = false;
          setPokemons(() => newPokes);
          setDisableCards(false);
        }, flippingTime);
      }
    },
    [
      pokemons,
      previousPoke,
      currentPoke,
      setPokemons,
      setPreviousPoke,
      setCurrentPoke,
      setDisableCards,
    ]
  );
  useEffect(() => {
    let handleLogic = true;
    if (handleLogic && previousPoke && currentPoke) {
      const newPokes = pokemons.map((poke) => poke);
      const previous = previousPoke.index;
      const current = currentPoke.index;
      if (
        previousPoke &&
        currentPoke &&
        previousPoke.index !== currentPoke.index &&
        previousPoke.pokemonId === currentPoke.pokemonId
      ) {
        newPokes[previous].isMatched = true;
        newPokes[current].isMatched = true;
        setPokemons(() => newPokes);
        setScore((currentScore) => currentScore + 1);
      } else {
        setDisableCards(true);
        setTimeout(() => {
          newPokes[previous].isFlipping = true;
          newPokes[current].isFlipping = true;
          setPokemons(() => newPokes);
          setTimeout(() => {
            const tmpPokes = pokemons.map((poke) => poke);
            tmpPokes[previous].isFlipped = false;
            tmpPokes[previous].isFlipping = false;
            tmpPokes[current].isFlipped = false;
            tmpPokes[current].isFlipping = false;
            setPokemons(() => tmpPokes);
          }, flippingTime - 10);
        }, flippingTime * 2);
      }
      setPreviousPoke(null);
      setCurrentPoke(null);
    }
    return () => {
      handleLogic = false;
    };
  }, [
    pokemons,
    previousPoke,
    currentPoke,
    setPokemons,
    setPreviousPoke,
    setCurrentPoke,
    setDisableCards,
    disableCards,
  ]);

  useEffect(() => {
    let handleGameOver = true;
    if (handleGameOver && score === maxCards / 2) {
      if (score === maxCards / 2)
        setTimeout(() => {
          alert('You win!');
          setIsGameOver(true);
        }, 1000);
    }
    return () => {
      handleGameOver = false;
    };
  }, [score, isGameOver, setIsGameOver, maxCards]);
  return { pokemons, isLoading, handleCardClick, disableCards, score };
};
