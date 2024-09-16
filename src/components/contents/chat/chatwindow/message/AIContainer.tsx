import AIMessage from './AIMessage';
import CardContainer from '../card/CardContainer';
import { IAIMessage } from '../../../../../types/chat';

const AIContainer = ({ text }: IAIMessage) => {
  const renderContent = (message: string) => {
    return (
      <>
        <AIMessage text={message} />
        {message.includes('레인부츠') && <CardContainer />}
        {message.includes('아식스') && <CardContainer />}
        {message.includes('20대') && <CardContainer />}
      </>
    );
  };

  return <>{renderContent(text)}</>;
};

export default AIContainer;
