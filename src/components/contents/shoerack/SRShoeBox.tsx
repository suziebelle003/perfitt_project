import { twMerge } from 'tailwind-merge';
import { shoeSilhouette } from '../../../assets/images/images';

function SRShoeBox({ className, imgSrc }: { className?: string; imgSrc?: string }) {
  return (
    <div className={twMerge('flex justify-center items-center bg-[#F5F5F5] rounded-md overflow-hidden', className)}>
      <img
        src={imgSrc !== (undefined || '') ? imgSrc : shoeSilhouette}
        alt='Add shoes'
        className='w-full h-full object-cover'
      />
    </div>
  );
}

export default SRShoeBox;
