import aiRecomend from '../../../assets/images/airecomend.svg';
import ProductCard from '../../common/ProductCard';
import abcMart from '../../../assets/images/abcmart.svg';
type TItemProps = React.ComponentPropsWithoutRef<'p' | 'img'> & { brand: string; shoesImage: string };

const LikeItems = (props: TItemProps) => {
  const { children, brand, shoesImage, ...rest } = props;

  return <></>;
};
export default LikeItems;
