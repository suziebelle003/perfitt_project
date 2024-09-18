import { twMerge } from 'tailwind-merge';

interface UIButtonProps {
  title: string;
  value: string;
  onClick: (value: string) => void;
  className?: string;
  isActive: boolean; // 버튼의 활성화 여부를 나타내는 boolean prop
}

const SUIbtn: React.FC<UIButtonProps> = ({ title, value, onClick, className, isActive }) => {
  return (
    <button
      className={twMerge(
        `w-full border border-[#E4E4E7] rounded
            text-[16px] leading-5 font-semibold placeholder-[#A1A1AA]`,
        isActive ? ' bg-[#E4E4E7]' : 'bg-white', // 활성화 여부에 따라 배경색 변경
        className
      )}
      onClick={() => onClick(value)}
    >
      {title}
    </button>
  );
};

export default SUIbtn;
