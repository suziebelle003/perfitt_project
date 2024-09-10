import { perfittLogo } from '../../../../../assets/images/images';

const AIMessage = () => {
  return (
    <>
      <div className='px-4 flex text-sm leading-[22px] '>
        <div className='w-7 h-7'>
          <img
            src={perfittLogo}
            alt='perfitt-logo'
          />
        </div>
        <div className='pl-3 py-2 max-w-72 break-words'>
          <span> OO님, 가입을 환영합니다</span>
          <br />
          <span>
            선택하신 키워드에 따라 OO님께 맞춤형 상품을 <br />
            추천해드립니다! 관심 있는 키워드를 골라주세요.
          </span>
        </div>
      </div>
    </>
  );
};
export default AIMessage;
