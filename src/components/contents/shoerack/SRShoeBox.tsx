import { shoeSilhouette } from '../../../assets/images/images';

type TSRShoeBox = {
  className?: string;
  imgSrc?: string;
  imgAlt?: string;
};

function SRShoeBox({ className, imgSrc, imgAlt }: TSRShoeBox) {
  return (
    <div className={`${className} flex justify-center items-center bg-[#F5F5F5] rounded-md overflow-hidden`}>
      <img
        src={imgSrc || shoeSilhouette} // imgSrc가 falsy일 경우 shoeSilhouette 사용
        alt={imgAlt || ''} // imgAlt가 falsy일 경우 빈 문자열 사용
        className='w-full h-full object-cover'
      />
    </div>
  );
}

export default SRShoeBox;
