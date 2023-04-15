import clsx from 'clsx';
import { FC, HTMLProps } from 'react';

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  children: React.ReactNode;
  error?: boolean;
}

const Label: FC<LabelProps> = ({ children, error = false, ...props }) => (
  <label
    className={clsx(
      'font-semibold ml-2 text-base',
      error ? 'text-theme-secondary' : 'text-neutral-200'
    )}
    {...props}
  >
    {children}
  </label>
);

export default Label;
