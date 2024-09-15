type TSROptionSelectorProps = {
  title: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

function SROptionSelector({ title, options, selectedValue, onSelect }: TSROptionSelectorProps) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='text-[15px] leading-5 font-semibold'>{title}</div>
      <div className='w-full flex space-x-1'>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => onSelect(option)}
            className={`w-full p-[10px] rounded-[4px] text-[14px] leading-[17px] font-semibold text-center cursor-pointer border
              ${selectedValue === option ? 'bg-white border border-black text-black' : 'bg-[#F5F5F5] border-[#F5F5F5] text-[#A1A1AA]'}`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SROptionSelector;
