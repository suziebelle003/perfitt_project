import bar from '../../../assets/icons/bar.svg';

const SUIBar = ({
  isBarOpen,
  closeBar,
  children,
}: {
  isBarOpen: boolean;
  closeBar: () => void;
  children: React.ReactNode;
}) => {
  return (
    <>
      <div
        className='absolute top-0 left-0 w-full h-screen z-10 bg-gray-600 opacity-50'
        onClick={e => e.stopPropagation()}
      ></div>
      <div className='relative w-full h-screen'>
        <div
          className={`w-[375px] z-20 shadow-2xl rounded-t-3xl fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-white transition-transform duration-300 ${
            isBarOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <button
            className='flex justify-center items-center w-full py-2 z-20'
            onClick={closeBar}
          >
            <img
              src={bar}
              alt='bar'
              className='w-8 h-1'
            />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default SUIBar;
