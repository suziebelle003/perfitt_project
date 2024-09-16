import SideMenuTop from './SideMenuTop';
import TodayChatList from './TodayChatList';
import Last7Days from './Last7Days';
import SideMenuBottom from './SideMenuBottom';
import Button from '../../common/Button';
import hamburgerButton from '../../../assets/images/hamburger.svg';

interface ItoggleMenu {
  toggleMenu: () => void;
}

const SideMenu = ({ toggleMenu }: ItoggleMenu) => {
  return (
    <div className='flex flex-col h-full relative'>
      <div className='p-4 h-full'>
        <div className=''>
          <Button
            onClick={toggleMenu}
            className='bg-white'
          >
            <img
              src={hamburgerButton}
              alt='Menu'
            />
          </Button>
          <SideMenuTop />
          <TodayChatList />
          <Last7Days />
          <SideMenuBottom />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
