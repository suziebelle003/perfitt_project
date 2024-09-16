import { useState } from 'react';
import { hamburgerButton } from '../../../../assets/images/images';
import Button from '../../../common/Button';
import Header from '../../../common/Header';
import ChatInput from '../ChatInput';
import CardContainer from './card/CardContainer';
import MeasureFoot from './MeasureFoot';
import AIMessage from './message/AIMessage';
import MyMessage from './message/MyMessage';
import SideMenu from '../../sidemenu/SideMenu';

const ChatWindow = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openToggleMenu = () => {
    setMenuOpen(true);
  };

  const closeToggleMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='relative h-screen flex flex-col overflow-hidden p-4'>
      <Header
        leftChild={
          <Button
            className='bg-white'
            onClick={openToggleMenu}
          >
            <img src={hamburgerButton} />
          </Button>
        }
      />

      {/* 배경색 변경 */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 z-10 ${menuOpen ? 'bg-gray-600 opacity-50' : 'opacity-0 pointer-events-none'}`}
      ></div>

      {/* 사이드 메뉴 */}
      <nav
        className={`absolute top-0 left-0 h-full rounded-r-lg bg-white transition-transform duration-300 ease-in-out z-20 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{ width: '280px' }}
      >
        <SideMenu toggleMenu={closeToggleMenu} />
      </nav>

      <div className='scrollbar-hide flex-grow overflow-y-auto'>
        <AIMessage />
        <MeasureFoot />
        <MyMessage />
        <AIMessage />
        <MyMessage />
        <AIMessage />
        <CardContainer />
        <MyMessage />
        <AIMessage />
        <MyMessage />
        <AIMessage />
        <MyMessage />
        <AIMessage />
        <MyMessage />
        <AIMessage />
        <MyMessage />
      </div>
      <ChatInput />
    </div>
  );
};

export default ChatWindow;
