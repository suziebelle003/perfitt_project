import { useState } from 'react';

const LikeButton = () => {
  const [select, setSelect] = useState(true);
  return (
    <>
      <button
        className={`${select === true ? 'bg-black text-xs/[16px] text-white  w-[52px] h-[32px] font-bold px-1 mr-1 mb-[17px] rounded-[99px]' : 'bg-white text-xs/[16px] text-[#4B5563]  w-[52px] h-[32px] font-bold px-1 mr-1 mb-[17px] border-[#E4E4E7] rounded-[99px]'}`}
        onClick={() => setSelect(true)}
      >
        상품
      </button>
      <button
        className={`${select !== false ? 'bg-white text-xs/[16px] text-[#4B5563] w-[66px] h-[32px] font-bold px-1 border border-[#E4E4E7] rounded-[99px]' : 'bg-black text-xs/[16px] text-white w-[66px] h-[32px] font-bold px-1 rounded-[99px]'}`}
        onClick={() => setSelect(false)}
      >
        브랜드
      </button>
    </>
  );
};
export default LikeButton;
