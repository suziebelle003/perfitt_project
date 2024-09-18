import { menuIcon, leftArrowIcon, verticalMenuIcon } from '../../assets/images/images';

interface IHeader {
  title?: string;
  leftBtn?: 'back' | 'menu';
  rightChild?: React.ReactNode;
  handleLeftBtnClick?: () => void;
  handleRightBtnClick?: () => void;
}

const Header = (props: IHeader) => {
  const { title, leftBtn, rightChild, handleLeftBtnClick, handleRightBtnClick } = props;

  return (
    <header className='relative'>
      <div
        className='absolute top-0 left-0 w-full h-14 p-4 flex justify-center items-center z-10
        bg-gradient-to-b from-white to-transparent
        text-[18px] leading-6 font-semibold tracking-[-0.015em]'
      >
        {title}
        <div
          className='absolute top-0 left-0 w-full h-14 p-4
        flex justify-between items-center z-50'
        >
          <button
            className='w-6 h-6'
            onClick={handleLeftBtnClick}
          >
            <img
              src={leftBtn === 'back' ? leftArrowIcon : menuIcon}
              alt='back button'
              className='w-full h-full object-cover'
            />
          </button>
          {rightChild && (
            <button
              className='w-11 h-11'
              onClick={handleRightBtnClick}
            >
              <img
                src={verticalMenuIcon}
                alt='overflow menu button'
                className='w-full h-full object-cover'
              />
              {rightChild}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
