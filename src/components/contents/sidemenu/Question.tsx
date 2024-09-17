import chatCircle from '../../../assets/images/sidemenu-ChatCircle.svg';

interface IQuestion {
  title: string;
}
const Question = ({ title }: IQuestion) => {
  return (
    // <div className='flex flex-row pt-[18px]  '>
    //   <img
    //     src={chatCircle}
    //     alt=''
    //     width='20px'
    //     height='20px'
    //   />
    //   <div className='pl-[8px] tracking-tight leading-6'> {title} </div>
    // </div>
    <div className='flex flex-row h-[34px] items-center '>
      <img
        src={chatCircle}
        alt=''
        width='20px'
        height='20px'
      />
      <div className='pl-[8px] tracking-tight leading-6'> {title} </div>
    </div>
  );
};
export default Question;
