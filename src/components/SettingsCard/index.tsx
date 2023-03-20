import clsx from 'clsx';
import { FC, useRef, useState } from 'react';
import { Button, RadioGroup, LabelInput, TextInput } from '@/components';
import {
  cardsNumberOptions,
  useMemoryGameContext,
  pokemonRegions,
} from '@/context/MemoryGameContext';
import { PokemonRegion } from '@/interfaces';
import ConfirmDialog from './ConfirmDialog';

interface SettingsCardProps {
  closeModal: () => void;
}

interface ErrorFields {
  ['mistakesLimit']?: string;
  ['timeLimit']?: string;
}

const SettingsCard: FC<SettingsCardProps> = ({ closeModal }) => {
  const { settings, setSettings } = useMemoryGameContext();
  const [isConfirming, setIsConfirming] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<PokemonRegion>(
    settings.region
  );
  const [maxCards, setMaxCards] = useState(settings.maxCards);
  const mistakesLimit = useRef<HTMLInputElement>(null);
  const timeLimit = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<ErrorFields>({});

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

  const onCancel = () => setIsConfirming(false);

  const onConfirm = () => {
    setSettings({
      maxMistakes: mistakesLimit.current?.valueAsNumber ?? 10,
      timeLimit: timeLimit.current?.valueAsNumber ?? 30,
      region: selectedRegion,
      maxCards,
    });
    setIsConfirming(false);
    closeModal();
  };

  return (
    <div className="h-fit p-4 rounded-xl bg-gray mobile:w-96 flex flex-col text-neutral-200 space-y-4 relative">
      <h1 className="text-2xl font-semibold text-center">Settings</h1>
      {/* <span className="text-base text-theme-primary px-2">
        *Warning - If you change the settings, the game will restart
      </span> */}
      <form
        className={clsx(
          'w-full h-fit flex flex-col space-y-4',
          isConfirming && 'opacity-40'
        )}
        onSubmit={handleSubmit}
      >
        <RadioGroup
          selected={selectedRegion.name}
          name="Pokemon region"
          options={pokemonRegions.map((region) => region.name)}
          onChange={onRegionChange}
        />
        <RadioGroup
          selected={`${maxCards}`}
          name="Cards number"
          options={cardsNumberOptions.map((n) => `${n}`)}
          onChange={onMaxCardsChange}
        />
        <LabelInput
          text="Mistakes limit (0 - 100)"
          errorMessage={errors.mistakesLimit}
          input={
            <TextInput type="number" placeholder="15" ref={mistakesLimit} />
          }
        />
        <LabelInput
          text="Time limit (seconds)"
          errorMessage={errors.timeLimit}
          input={<TextInput type="number" placeholder="0" ref={timeLimit} />}
        />
        <div className="flex items-center justify-center space-x-2">
          <Button type="submit" variant="primary" className="w-full">
            Save
          </Button>
          <Button
            type="button"
            variant="secondary"
            className="w-full"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </div>
      </form>
      {isConfirming && (
        <ConfirmDialog
          onConfirm={onConfirm}
          onCancel={onCancel}
          warningText="If you change the settings your game will restart"
        />
      )}
    </div>
  );
};

export default SettingsCard;
