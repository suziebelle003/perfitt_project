import { useNavigate } from 'react-router-dom';
import { rightArrowIcon } from '../../../assets/icons/icons';

type TMPBottomButtonProps = {
  title: string;
  imgAlt: string;
  link: string;
};

const MPLinkButton = ({ title, imgAlt, link }: TMPBottomButtonProps) => {
  const navigate = useNavigate();

  return (
    <button
      className='flex justify-between items-center p-4 border-b border-[#E4E4E7] hover:bg-[#F5F5F5]'
      onClick={() => navigate(`${link}`)}
    >
      <div className='text-[14px] leading-[17px] font-medium'>{title}</div>
      <img
        src={rightArrowIcon}
        alt={imgAlt}
      />
    </button>
  );
};

export default MPLinkButton;
