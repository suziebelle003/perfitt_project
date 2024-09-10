import { hamburgerButton } from '../../../../assets/images/images';
import Button from '../../../common/Button';
import Header from '../../../common/Header';
import ChatInput from '../ChatInput';
import CardContainer from './card/CardContainer';
import MeasureFoot from './MeasureFoot';
import AIMessage from './message/AIMessage';
import MyMessage from './message/MyMessage';

const ChatWindow = () => {
  return (
    <div className='h-screen flex flex-col '>
      <Header
        leftChild={
          <Button className='bg-white'>
            <img src={hamburgerButton} />
          </Button>
        }
      />
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
