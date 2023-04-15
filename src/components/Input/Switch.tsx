import clsx from 'clsx';
import { FC } from 'react';
import { Label } from '@/components';

interface SwitchProps {
  checked: boolean;
  onToggle: () => void;
  label?: string;
  activeBgColor?: string;
  inactiveBgColor?: string;
}

const Switch: FC<SwitchProps> = ({
  checked,
  onToggle,
  label,
  activeBgColor,
  inactiveBgColor,
}) => (
  <div className="flex justify-end items-center space-x-4">
    <Label> {label} </Label>
    <button
      className={clsx(
        'w-10 h-6 flex rounded-full py-[2px] px-[1px] items-center relative',
        checked
          ? activeBgColor
            ? activeBgColor
            : 'bg-theme-primary'
          : inactiveBgColor
          ? inactiveBgColor
          : 'bg-slate-300'
      )}
      onClick={(e) => {
        e.preventDefault();
        onToggle();
      }}
    >
      <span
        className={clsx(
          'aspect-square h-full bg-white rounded-full absolute',
          checked
            ? 'animate-toggle-right right-0 origin-right'
            : 'animate-toggle-left left-0 origin-right'
        )}
      />
    </button>
  </div>
);

export default Switch;
