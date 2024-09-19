import { ReactNode } from 'react';
import Button from '../../common/Button';

type TOBContainerProps = {
  title: string[];
  body: ReactNode;
  btnText: string;
  handleClick: () => void;
};

function OBContainer(props: TOBContainerProps) {
  const { title, body, btnText, handleClick } = props;

  return (
    <>
      <div className='flex-1 overflow-scroll scrollbar-hide'>
        <div className='mt-[59px] mb-[20px] font-extrabold text-[24px] leading-9 text-center'>
          {title[0]}
          <br />
          {title[1]}
        </div>
        <div className='flex justify-center py-[50px]'>{body}</div>
      </div>
      <Button
        className='mt-4'
        onClick={handleClick}
      >
        {btnText}
      </Button>
    </>
  );
}

export default OBContainer;
