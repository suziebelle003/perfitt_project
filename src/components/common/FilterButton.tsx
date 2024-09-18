import { useState } from 'react';
type TButtonProps = React.ComponentPropsWithoutRef<'button'> & { arr: string[]; getValue: any };

const FilterButton = (props: TButtonProps) => {
  const { className, getValue, children, arr, ...rest } = props;
  const [select, setSelect] = useState(arr[0]);

  const buttonStyle = 'w-full h-full border text-base text-center px-3 py-1 rounded-[99px]';
  const sendState = () => {
    props.getValue(select);
  };
  console.log(select);
  return (
    <>
      <div className='flex w-[343px] h-[32px] gap-[5px]'>
        {arr.map(i => (
          <button
            className={`${(select === i && `' border-black bg-black text-white font-extrabold '${buttonStyle} `) || `' border-[#E4E4E7] font-normal text-[#6B7280]'${buttonStyle} *:`}`}
            onClick={() => {
              setSelect(i);
              sendState();
            }}
            {...rest}
          >
            {i}
          </button>
        ))}
      </div>
    </>
  );
};
export default FilterButton;
