import { twMerge } from 'tailwind-merge';

function SRShoeBox({ className }: { className?: string }) {
  return (
    <div className={twMerge('flex justify-center items-center bg-[#F5F5F5] rounded-md', className)}>
      {/* <img
        src={image}
        alt='Add shoes'
        className='w-full h-full object-cover'
      /> */}
    </div>
  );
}

export default SRShoeBox;
