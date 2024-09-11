import { twMerge } from 'tailwind-merge';
import { TSUInputProps } from '../../../types/sign';

function SUInput(props: TSUInputProps) {
  const { title, className, id, ...rest } = props;

  return (
    <div className='flex flex-col gap-1'>
      <label
        htmlFor={id}
        className='h-[17px] text-[14px] leading-[17px] font-semibold'
      >
        {title}
      </label>
      <input
        className={twMerge(
          `w-full border border-[#E4E4E7] rounded
            text-[16px] leading-5 font-semibold placeholder-[#A1A1AA]`,
          className
        )}
        id={id}
        {...rest}
      />
    </div>
  );
}

export default SUInput;
