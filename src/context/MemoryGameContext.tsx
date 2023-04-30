import { createContext, Dispatch, useContext, useEffect } from 'react';
import { PokemonRegion } from '@/interfaces';
import { useCookies } from 'react-cookie';

export interface MemoryGameSettings {
  region: PokemonRegion;
  maxCards: number;
  maxMistakes: number;
  timeLimit: number;
  shinyImages: boolean;
}

export interface MemoryGameContextValues {
  settings: MemoryGameSettings;
  setSettings: Dispatch<MemoryGameSettings>;
}

export const cardsNumberOptions: number[] = [10, 16, 20];

export const pokemonRegions: PokemonRegion[] = [
  { start: 1, end: 151, name: 'kanto' },
  { start: 152, end: 251, name: 'johto' },
  { start: 252, end: 386, name: 'hoenn' },
  { start: 387, end: 493, name: 'sinnoh' },
];

export const defaultSettings: MemoryGameSettings = {
  maxCards: 20,
  region: pokemonRegions[0],
  maxMistakes: 50,
  timeLimit: 0,
  shinyImages: false,
};

const defaultState: MemoryGameContextValues = {
  settings: defaultSettings,
  setSettings: () => {},
};

export const MemoryGameContext =
  createContext<MemoryGameContextValues>(defaultState);

export const MEMORY_GAME_COOKIE_KEY = 'memory-game-settings';

export const useMemoryGameContext = () => {
  const { settings, setSettings } = useContext(MemoryGameContext);

  return { settings, setSettings };
};
