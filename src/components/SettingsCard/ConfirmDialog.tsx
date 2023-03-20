import { FC } from 'react';
import { Button } from '@/components';

interface ConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  warningText: string;
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  onConfirm,
  onCancel,
  warningText,
}) => (
  <div className="flex flex-col space-y-4 text-center w-full h-fit p-4 absolute bg-contrast-dark border border-solid border-gray rounded-md mobile:w-96 shadow-sm inset-0 -top-4 animate-fade-in shadow-neutral-700">
    <span className="font-semibold ml-2 text-base text-theme-secondary">
      {`* ${warningText}`}
    </span>
    <div className="flex justify-center items-center space-x-2 w-full h-fit">
      <Button
        className="w-full"
        type="button"
        variant="primary"
        onClick={onConfirm}
      >
        Confirm
      </Button>
      <Button
        className="w-full bg-gray"
        type="button"
        variant="secondary"
        onClick={onCancel}
      >
        Cancel
      </Button>
    </div>
  </div>
);

export default ConfirmDialog;
