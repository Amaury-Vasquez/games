import { FC, HTMLProps, ReactNode } from 'react';

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  text: string;
  input: ReactNode;
  errorMessage?: string;
}

const LabelInput: FC<LabelProps> = ({
  input,
  text,
  errorMessage,
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        className="font-semibold text-neutral-200 ml-2 text-base"
        {...props}
      >
        {text}
      </label>
      {errorMessage && (
        <label className="font-semibold ml-2 text-base text-theme-secondary">
          {`* ${errorMessage}`}
        </label>
      )}
      {input}
    </div>
  );
};

export default LabelInput;
