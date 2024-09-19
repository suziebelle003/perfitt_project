import AIMessage from './AIMessage';
import CardContainer from '../card/CardContainer';
import { IAIContainer } from '../../../../../types/chat';

const AIContainer = ({ message, products, brands }: IAIContainer) => {
  return (
    <div className='mb-5'>
      <AIMessage text={message} />
      <CardContainer
        brands={brands}
        products={products}
      />
    </div>
  );
};

export default AIContainer;
