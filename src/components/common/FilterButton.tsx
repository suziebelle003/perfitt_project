import { useState } from 'react';
type TButtonProps = React.ComponentPropsWithoutRef<'button'> & { getValue: any };

const FilterButton = (props: TButtonProps) => {
  const { className, getValue, children, ...rest } = props;
  const [select, setSelect] = useState(true);

  const buttonStyle = 'w-full h-full border text-base text-center px-3 py-1 rounded-[99px]';
  return (
    <>
      <div className='flex w-[343px] h-[32px] gap-[5px]'>
        <button
          className={`${select === true ? `' border-black bg-black text-white font-extrabold '${buttonStyle} ` : `' border-[#E4E4E7] font-normal text-[#6B7280]'${buttonStyle} *:`}`}
          onClick={() => {
            props.getValue(select);
            setSelect(true);
          }}
          {...rest}
        >
          상품
        </button>
        <button
          className={`${select === false ? `' border-black bg-black text-white font-extrabold '${buttonStyle} ` : `' border-[#E4E4E7] font-normal text-[#6B7280]'${buttonStyle} *:`}`}
          onClick={() => {
            props.getValue(select);
            setSelect(false);
          }}
          {...rest}
        >
          브랜드
        </button>
      </div>
    </>
  );
};
export default FilterButton;
