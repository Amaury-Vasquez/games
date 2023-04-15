import { createContext, Dispatch, useContext } from 'react';
import { PokemonRegion } from '@/interfaces';

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

export const cardsNumberOptions: number[] = [10, 15, 20];

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

export const useMemoryGameContext = () => useContext(MemoryGameContext);
