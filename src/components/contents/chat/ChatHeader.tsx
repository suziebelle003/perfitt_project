import { useState } from 'react';
import menuIcon from '../../../assets/icons/menu-icon.svg';
import SideMenu from '../sidemenu/SideMenu';

function ChatHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <header
        className='absolute top-0 left-0 w-full h-14 p-4 z-10
          bg-gradient-to-b from-white to-transparent'
      >
        <button
          className='w-6 h-6'
          onClick={toggleMenu}
        >
          <img
            src={menuIcon}
            alt='Open Side Menu'
            className='w-full h-full object-cover'
          />
        </button>
      </header>
      <div
        className={`absolute inset-0 transition-opacity duration-300 z-10
          ${isMenuOpen ? 'bg-gray-600 opacity-50' : 'opacity-0 pointer-events-none'}`}
      />
      <SideMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
    </>
  );
}

export default ChatHeader;
