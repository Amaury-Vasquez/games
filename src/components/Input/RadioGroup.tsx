import { FC, useState } from 'react';
import { LabelInput } from '@/components/Input';
import clsx from 'clsx';

interface RadioGroupProps {
  onChange: (value: string) => void;
  name: string;
  selected: string;
  options: string[];
}

const RadioGroup: FC<RadioGroupProps> = ({
  onChange,
  options,
  name,
  selected,
}) => {
  const Group = (
    <ul className="w-full p-0 m-0 flex justify-center items-center space-x-2">
      {options.map((option) => (
        <button
          className={clsx(
            'w-full h-12 bg-contrast-dark text-center text-base font-semibold cursor-pointer list-none rounded-lg capitalize outline-none transition-colors',
            'hover:border hover:border-solid hover:border-theme-primary',
            'focus-visible:border focus-visible:border-solid focus-visible:border-theme-primary',
            selected === option &&
              'border border-solid border-theme-primary shadow-md shadow-theme-primary/50'
          )}
          onClick={() => onChange(option)}
          type="button"
          key={`radio-input-${name}-${option}`}
        >
          {option}
        </button>
      ))}
    </ul>
  );
  return <LabelInput text={name} input={Group} />;
};

export default RadioGroup;
