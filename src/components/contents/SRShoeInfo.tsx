import SRShoeBox from './SRShoeBox';

function SRShoeInfo() {
  return (
    <div className='flex items-center gap-2.5'>
      <SRShoeBox className='w-[77px] h-[77px]' />
      <div className='flex flex-col gap-1.5 max-w-64'>
        <div className='text-[14px] leading-[17px]'>Brand</div>
        <div className='max-h-[30px] text-[15px] leading-[15px] font-medium truncate'>
          신발 이름이 어쩌구 저쩌구 name 123 가나다
        </div>
        <div className='text-[14px] leading-[15px] font-medium'>100,000원</div>
      </div>
    </div>
  );
}

export default SRShoeInfo;
