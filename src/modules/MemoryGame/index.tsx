import { FC, useState } from 'react';
import {
  MemoryGameContext,
  defaultSettings,
  MemoryGameSettings,
} from '@/context/MemoryGameContext';
import UserBoard from './UserBoard';

interface MemoryGameProps {}

const MemoryGame: FC<MemoryGameProps> = () => {
  const [settings, setSettings] = useState<MemoryGameSettings>(defaultSettings);

  return (
    <MemoryGameContext.Provider value={{ settings, setSettings }}>
      <div className="w-full h-auto flex flex-col space-y-2">
        <UserBoard score={0} />
      </div>
    </MemoryGameContext.Provider>
  );
};

export default MemoryGame;
