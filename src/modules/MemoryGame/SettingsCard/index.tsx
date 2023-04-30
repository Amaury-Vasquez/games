import clsx from 'clsx';
import { FC } from 'react';
import {
  Button,
  RadioGroup,
  LabelInput,
  Switch,
  TextInput,
} from '@/components';
import {
  cardsNumberOptions,
  pokemonRegions,
} from '@/context/MemoryGameContext';
import { useMemoryGameSettings } from '@/hooks/useMemoryGameSettings';
import ConfirmDialog from './ConfirmDialog';

interface SettingsCardProps {
  closeModal: () => void;
}

const SettingsCard: FC<SettingsCardProps> = ({ closeModal }) => {
  const {
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
    initialMistakes,
    initialTime,
  } = useMemoryGameSettings(closeModal);

  return (
    <>
      <div
        className={clsx(
          'h-fit p-8 rounded-xl mobile:w-[440px] w-full flex flex-col text-neutral-200 space-y-2 shadow-dark transition-opacity duration-500 bg-theme-dark',
          isConfirming && 'opacity-0 duration-300'
        )}
      >
        <h1 className="text-2xl font-semibold text-center">Settings</h1>
        <form
          className={clsx(
            'w-full h-fit flex flex-col space-y-4',
            isConfirming && 'opacity-5'
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
              <TextInput
                type="number"
                placeholder={initialMistakes}
                ref={mistakesLimit}
              />
            }
          />
          <LabelInput
            text="Time limit (seconds)"
            errorMessage={errors.timeLimit}
            input={
              <TextInput
                type="number"
                placeholder={initialTime}
                ref={timeLimit}
              />
            }
          />
          <Switch
            checked={shinyImages}
            label="Shiny images"
            onToggle={toggleShinyImages}
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
      </div>
      {isConfirming && (
        <ConfirmDialog
          onConfirm={onConfirm}
          onCancel={onCancel}
          isConfirming={isConfirming}
          warningText="If you change the settings your game will restart"
        />
      )}
    </>
  );
};

export default SettingsCard;
