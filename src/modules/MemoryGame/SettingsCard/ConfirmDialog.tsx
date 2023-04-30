import clsx from 'clsx';
import { FC } from 'react';
import { Button } from '@/components';

interface ConfirmDialogProps {
  onConfirm: () => void;
  onCancel: () => void;
  warningText: string;
  isConfirming: boolean;
}

const ConfirmDialog: FC<ConfirmDialogProps> = ({
  onConfirm,
  onCancel,
  warningText,
}) => (
  <div
    className={clsx(
      'w-screen h-screen absolute inset-0 flex justify-center items-center'
    )}
  >
    <div className="flex flex-col space-y-4 text-center w-fit h-fit p-6 shadow-dark rounded-lg inset-0 animate-fade-in bg-theme-dark">
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
          className="w-full bg-primary-dark"
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  </div>
);

export default ConfirmDialog;
