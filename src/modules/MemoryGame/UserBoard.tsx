import { FC } from 'react';
import dynamic from 'next/dynamic';
import { AiOutlineSetting } from 'react-icons/ai';
import { BounceLoader, IconButton } from '@/components';
import { useToggle } from '@/hooks';

interface UserBoardProps {
  score: number;
}

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });
const SettingsCard = dynamic(() => import('@/components/SettingsCard'), {
  loading: () => <BounceLoader size="lg" />,
});

const UserBoard: FC<UserBoardProps> = ({ score }) => {
  const { isActive, toggle, willClose } = useToggle(false);

  return (
    <>
      <div className="text-light w-full h-fit flex justify-around items-center p-4">
        <span className="text-lg font-semibold"> {`Score: ${score}`} </span>
        <IconButton
          className="w-10 h-10"
          Icon={AiOutlineSetting}
          iconColor="#fb923c"
          onClick={toggle}
          disabled={isActive}
        />
        {isActive && (
          <Modal closeModal={toggle} willClose={willClose}>
            <SettingsCard closeModal={toggle} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default UserBoard;
