import { useState } from 'react';
import { TChatMessage } from '../../../types/db';
import { usePLPStore } from '../../../stores/plp.store';
import { useSignStore } from '../../../stores/sign.store';
import { galleryIcon, upArrowIcon } from '../../../assets/icons/icons';

type TChatInputProps = {
  sendMessage: (message: TChatMessage) => Promise<'success' | null>;
};

const ChatInput = ({ sendMessage }: TChatInputProps) => {
  const [text, setText] = useState('');
  const { sheetOpen } = usePLPStore();
  const { signSheetOpen } = useSignStore();

  // 채팅 전송
  const handleSend = async () => {
    if (!text.trim()) return;
    const result = await sendMessage({ text: text.trim() });
    if (result === 'success') setText('');
  };

  // Enter, 채팅 전송
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();
      handleSend();
    }
  };

  // 이미지 검색
  const imageSearch = () => {};

  return (
    <div
      className={`flex items-center gap-2 p-4 z-30 bg-[#F5F5F5]
        transform transition-transform duration-300
        ${sheetOpen || signSheetOpen ? 'translate-y-full' : 'translate-y-0'}`}
    >
      <button onClick={imageSearch}>
        <img
          src={galleryIcon}
          alt='Search by image'
          className='w-6 h-6'
        />
      </button>
      <div className='flex-1 flex items-center box-border rounded-full bg-white border border-[#E4E4E7] overflow-hidden'>
        <input
          type='text'
          className='flex-1 py-3 pl-4
            text-base placeholder-[#71717A] focus:outline-none resize-none scrollbar-hide'
          placeholder='궁금한 신발 정보 물어보세요!'
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className='w-10 h-10 m-1 flex justify-center items-center
            rounded-full bg-black overflow-hidden'
          onClick={handleSend}
        >
          <img
            src={upArrowIcon}
            alt='send'
            className={``}
          />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
