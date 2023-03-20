import { FC, HTMLProps, useRef } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineUpload } from 'react-icons/ai';
import clsx from 'clsx';

interface UploadProps extends HTMLProps<HTMLInputElement> {
  className?: string;
  Icon?: IconType;
  type?: 'file';
  inputName?: string;
  text?: string;
  textStyle?: string;
  handleUpload: (file: File) => void;
}

const Upload: FC<UploadProps> = ({
  className,
  handleUpload,
  inputName = 'fileUpload',
  text = 'Upload file',
  textStyle,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <label
        onClick={(e) => {
          e.preventDefault();
          ref.current?.focus();
        }}
        htmlFor={inputName}
        className={clsx(
          'flex w-fit h-fit border border-solid border-[#7da7f3] rounded-md px-6 py-3 items-center justify-center gap-2',
          className,
          textStyle ? textStyle : 'text-[rgb(47,82,148)] font-semibold'
        )}
      >
        {text}
        <AiOutlineUpload className="w-5 h-5" />
      </label>
      <input
        ref={ref}
        name={inputName}
        id={inputName}
        type="file"
        {...props}
        hidden
      />
    </>
  );
};
export default Upload;
