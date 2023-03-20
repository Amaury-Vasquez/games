import { FC, forwardRef, HTMLProps } from 'react';
import { IconType } from 'react-icons';
import clsx from 'clsx';

interface TextInputProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  Icon?: IconType;
  iconColor?: string;
  fill?: boolean;
  type?: 'text' | 'password' | 'email' | 'number';
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      Icon,
      iconColor = 'rgb(50, 50, 50)',
      fill,
      type = 'text',
      ...props
    },
    ref
  ) => (
    <span
      className={clsx(
        'w-full flex items-center rounded-md bg-contrast-dark text-light',
        fill ? 'h-full' : 'h-10'
      )}
    >
      {Icon && (
        <span className="h-full flex w-auto items-center justify-center p-2">
          <Icon className="w-full h-full" color={iconColor} />
        </span>
      )}
      <input
        className={clsx(
          'w-full h-full py-3 px-2 bg-contrast-dark',
          'focus-visible:border focus-visible:border-solid focus-visible:border-theme-primary focus-visible:outline-none',
          !Icon ? 'rounded-sm' : '',
          className
        )}
        type={type}
        ref={ref}
        {...props}
      />
    </span>
  )
);

TextInput.displayName = 'TextInput';

export default TextInput;
