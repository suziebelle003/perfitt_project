import { useEffect, useState } from 'react';
import { useShareStore } from '../../../../stores/share.store';
import { upsertChatShare } from '../../../../api/firebase/upsertChatShare';
import { chatIcon, copyIcon, linkAngledIcon, loadingIcon, planetIcon, xGrayIcon } from '../../../../assets/icons/icons';

const ChatShareModal = () => {
  const currentUrl = window.location.href;
  const { shareChatId, shareChatTitle, shareChatMessageId, setShareClose } = useShareStore();
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copying' | 'copied'>('idle');
  const [copyBtn, setCopyBtn] = useState({
    image: linkAngledIcon,
    text: '링크 복사',
    className: 'text-white bg-black',
  });

  const today = new Date();
  const date = today.getFullYear() + '년 ' + today.getMonth() + '월 ' + today.getDay() + '일';

  useEffect(() => {
    switch (copyStatus) {
      case 'copying':
        setCopyBtn({
          image: loadingIcon,
          text: '링크 복사중',
          className: 'text-[#A1A1AA] bg-[#F5F5F5]',
        });
        break;
      case 'copied':
        setCopyBtn({
          image: copyIcon,
          text: '복사됨',
          className: 'text-[#A1A1AA] bg-[#F5F5F5]',
        });
        break;
    }
  }, [copyStatus]);

  // 링크 복사
  const handleCopy = async () => {
    setCopyStatus('copying');
    try {
      const shareId = await upsertChatShare(shareChatId, shareChatMessageId);
      const link = currentUrl.split('/chat')[0] + '/shared/' + shareChatId + '?id=' + shareId;
      await navigator.clipboard.writeText(link);
      setCopyStatus('copied');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('링크 복사에 실패하였습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
      <div className='w-[320px] p-4 flex flex-col bg-white rounded-2xl'>
        <div className='flex justify-between text-lg font-extrabold tracking-[-0.01em]'>
          <div className='flex items-center gap-2'>
            <img
              src={planetIcon}
              alt='Share link'
            />
            공개 링크 생성됨
          </div>
          <button onClick={() => setShareClose()}>
            <img
              src={xGrayIcon}
              alt='Close Modal'
              className='w-6 h-6'
            />
          </button>
        </div>
        <div className='mt-2 text-[14px] leading-[22px] text-[#52525B]'>
          채팅의 공개 링크가 생성되었습니다. 공유를 원하는 곳에 어디든지 전달하실 수 있습니다.
        </div>
        <div className='my-5 p-4 flex flex-col gap-2 bg-[#FAFAFA] rounded-lg border border-[#E4E4E7]'>
          <img
            src={chatIcon}
            alt='chat'
            className='w-5 h-5'
          />
          <div className='text-base/[20px] font-semibold text-[#18181B]'>{shareChatTitle}</div>
          <div className='text-sm/[22px] text-[#52525B]'>{date}</div>
        </div>
        <button
          className={`w-full p-2.5 flex justify-center items-center
            rounded text-base font-semibold ${copyBtn.className}`}
          onClick={handleCopy}
        >
          <img
            src={copyBtn.image}
            alt='Copy link'
            className='w-6 h-6 mr-1'
          />
          {copyBtn.text}
        </button>
      </div>
    </div>
  );
};

export default ChatShareModal;
