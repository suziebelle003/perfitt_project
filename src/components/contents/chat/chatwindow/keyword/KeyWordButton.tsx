import { twMerge } from 'tailwind-merge';
import { checkIcon } from '../../../../../assets/images/images';

interface IKeywordProps {
  text: string;
  isSelected: boolean;
  isClicked: () => void;
}

const KeyWordButton = ({ text, isSelected, isClicked }: IKeywordProps) => {
  return (
    <div className='w-[113px] h-[40px] flex items-center justify-center'>
      <button
        className={twMerge(
          'flex items-center justify-center px-4 py-2 border rounded-full',
          isSelected ? 'bg-[#F3F4F6] text-[#9CA3AF] border-none' : 'border-[#E4E4E7]'
        )}
        onClick={isClicked}
      >
        {isSelected && (
          <span className='pr-2'>
            <img
              src={checkIcon}
              alt='check icon'
            />
          </span>
        )}
        {text}
      </button>
    </div>
  );
};

export default KeyWordButton;
