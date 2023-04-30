import { FC, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  MemoryGameContext,
  defaultSettings,
  MemoryGameSettings,
  MEMORY_GAME_COOKIE_KEY,
} from '@/context/MemoryGameContext';
import { Game } from './Game';

interface MemoryGameProps {}

const MemoryGame: FC<MemoryGameProps> = () => {
  const [cookie] = useCookies([MEMORY_GAME_COOKIE_KEY]);
  const [settings, setSettings] = useState<MemoryGameSettings>(
    cookie[MEMORY_GAME_COOKIE_KEY] ?? defaultSettings
  );

  return (
    <MemoryGameContext.Provider value={{ settings, setSettings }}>
      <Game />
    </MemoryGameContext.Provider>
  );
};

export default MemoryGame;
