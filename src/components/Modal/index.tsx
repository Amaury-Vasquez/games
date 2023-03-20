import { FC } from 'react';
import clsx from 'clsx';
import { useClickOutside } from '@/hooks';

interface ModalProps {
  children: React.ReactNode;
  closeModal: () => void;
  willClose: boolean;
}

const Modal: FC<ModalProps> = ({ children, closeModal, willClose }) => {
  const ref = useClickOutside(closeModal);

  return (
    <div
      className={clsx(
        'absolute w-screen animate-fade-in h-screen z-0 bg-transparent-black flex justify-center items-center inset-0 m-0',
        willClose && 'animate-fade-out'
      )}
    >
      <div className="w-fit h-fit" ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
