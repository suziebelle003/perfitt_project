import { TChatMessage } from '../../../../types/db';

const ChatMyMessage = ({ text, image }: TChatMessage) => {
  return (
    <div
      className='self-end max-w-[80%] mx-4 py-[11px] px-3.5 flex flex-col gap-2.5
        bg-black rounded-md rounded-tr-none
        text-[14px] leading-[22px] text-white text-right break-words'
    >
      {image && (
        <img
          src={image}
          alt='Image'
        />
      )}
      {text}
    </div>
  );
};

export default ChatMyMessage;
