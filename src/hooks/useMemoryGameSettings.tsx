import { useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  pokemonRegions,
  useMemoryGameContext,
  MEMORY_GAME_COOKIE_KEY,
  MemoryGameSettings,
} from '@/context/MemoryGameContext';
import { PokemonRegion } from '@/interfaces';

interface ErrorFields {
  ['mistakesLimit']?: string;
  ['timeLimit']?: string;
}

export const useMemoryGameSettings = (closeModal: () => void) => {
  const [cookie, setCookie] = useCookies([MEMORY_GAME_COOKIE_KEY]);
  const { settings, setSettings } = useMemoryGameContext();
  const [isConfirming, setIsConfirming] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<PokemonRegion>(
    settings.region
  );
  const timeLimit = useRef<HTMLInputElement>(null);
  const mistakesLimit = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<ErrorFields>({});
  const [maxCards, setMaxCards] = useState(settings.maxCards);
  const [shinyImages, setShinyImages] = useState<boolean>(settings.shinyImages);

  const onRegionChange = (value: string) => {
    if (value !== selectedRegion.name) {
      const region = pokemonRegions.find((region) => region.name === value);
      if (region) setSelectedRegion(region);
    }
  };

  const onMaxCardsChange = (value: string) => {
    const number = parseInt(value);
    if (number !== maxCards) setMaxCards(number);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = {} as ErrorFields;

    const validateRange = (
      value: number | undefined,
      key: keyof ErrorFields,
      min: number,
      max: number
    ) => {
      if (value) {
        if (value < min || value > max) {
          errors[key] = `The value must be between ${min} and ${max}`;
        }
      } else errors[key] = 'This field cannot be empty';
    };
    validateRange(
      mistakesLimit.current?.valueAsNumber,
      'mistakesLimit',
      0,
      100
    );
    validateRange(timeLimit.current?.valueAsNumber, 'timeLimit', 30, 1000);
    setErrors(errors);
    if (!errors.mistakesLimit && !errors.timeLimit) setIsConfirming(true);
  };
  const toggleShinyImages = () => setShinyImages(!shinyImages);

  const onCancel = () => setIsConfirming(false);

  const onConfirm = () => {
    const newSettings: MemoryGameSettings = {
      maxMistakes: mistakesLimit.current?.valueAsNumber ?? 10,
      timeLimit: timeLimit.current?.valueAsNumber ?? 30,
      region: selectedRegion,
      maxCards,
      shinyImages,
    };
    setCookie(MEMORY_GAME_COOKIE_KEY, newSettings);
    setSettings(newSettings);
    setIsConfirming(false);
    closeModal();
  };

  return {
    isConfirming,
    selectedRegion,
    onRegionChange,
    maxCards,
    onMaxCardsChange,
    handleSubmit,
    timeLimit,
    mistakesLimit,
    errors,
    onCancel,
    onConfirm,
    toggleShinyImages,
    shinyImages,
    initialTime: settings.timeLimit.toString(),
    initialMistakes: settings.maxMistakes.toString(),
  };
};
