import { downArrowIcon } from '../../../assets/images/images';
import { TSUInputProps } from '../../../types/sign';
import SUInput from './SUInput';

type TSUSelectProps = TSUInputProps & {
  selectOpen: string;
  setSelectOpen: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
  selectedOption: string;
  handleSelectChange: (value: string) => void;
  handleChange: (value: string) => void;
};

function SUSelect(props: TSUSelectProps) {
  const {
    selectOpen,
    setSelectOpen,
    value,
    options,
    selectedOption,
    handleSelectChange,
    handleChange,
    className,
    id,
    ...rest
  } = props;

  const handleClick = () => {
    if (selectOpen === id) setSelectOpen('');
    else setSelectOpen(typeof id === 'string' ? id : '');
  };

  const handleOptionClick = (option: string) => {
    handleSelectChange(option);
    handleChange(option);
    setSelectOpen('');
  };

  return (
    <div className='relative cursor-pointer'>
      <div
        className='cursor-pointer'
        onClick={handleClick}
      >
        <SUInput
          className={className}
          id={id}
          value={value}
          {...rest}
        />
        <span className={`absolute right-[1px] bottom-[1px] z-10 ${className}`}>
          <img
            src={downArrowIcon}
            alt='Dropdown Arrow'
            className='w-5 h-5'
          />
        </span>
      </div>

      {selectOpen === id && (
        <ul className='absolute top-full left-0 w-full border rounded bg-white z-20 max-h-60 overflow-y-auto'>
          {options
            .filter(option => (typeof value === 'string' ? option.includes(value) : false))
            .map(option => (
              <li
                key={option}
                className='text-base/[20px] px-4 py-2 cursor-pointer hover:bg-gray-200'
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default SUSelect;
