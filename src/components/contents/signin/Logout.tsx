import { useNavigate } from 'react-router-dom';
import { auth } from '../../../service/firebase';

const Logout = () => {
  const navigate = useNavigate();
  const onLogOutClick = () => {
    auth.signOut();
    navigate('/Login');
  };
  return (
    <>
      <button
        onClick={onLogOutClick}
        className='text-[14px] text-[#AAAAAA] underline hover:text-[#F87171]'
      >
        로그아웃
      </button>
    </>
  );
};
export default Logout;
