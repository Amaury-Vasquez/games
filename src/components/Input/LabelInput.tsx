import { FC, HTMLProps, ReactNode } from 'react';
import Label from './Label';

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
      <Label {...props}>{text}</Label>
      {errorMessage && <Label error> {`* ${errorMessage}`}</Label>}
      {input}
    </div>
  );
};

export default LabelInput;
