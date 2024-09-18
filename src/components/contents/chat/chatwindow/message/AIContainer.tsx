import AIMessage from './AIMessage';
import CardContainer from '../card/CardContainer';
import { IAIContainer } from '../../../../../types/chat';

const AIContainer = ({ message, products, brands }: IAIContainer) => {
  return (
    <>
      <AIMessage text={message} />
      <CardContainer
        brands={brands}
        products={products}
      />
    </>
  );
};

export default AIContainer;
