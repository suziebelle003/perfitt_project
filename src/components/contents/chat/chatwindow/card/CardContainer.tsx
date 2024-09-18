import MoreButton from './MoreButton';
import { ICardContainer } from '../../../../../types/chat';
import BrandCard from './BrandCard';
import ProductItem from './ProductItem';
import ShareDislikeButton from './ShareDislikeButton';

const CardContainer = ({ brands, products }: ICardContainer) => {
  // Brand 정보일 때
  if (brands && brands.length > 0) {
    return (
      <div className='pl-4 pt-2'>
        <div className='flex gap-2 overflow-x-auto pb-3 scrollbar-hide'>
          {brands.map((brand, index) => (
            <BrandCard
              key={index}
              brand={brand}
            />
          ))}
          <MoreButton />
        </div>
        <ShareDislikeButton />
      </div>
    );
  } else if (products && products.length > 0) {
    // Product 정보일 때
    return (
      <div className='pl-4 pt-2'>
        <div className='flex gap-2 overflow-x-auto pb-3 scrollbar-hide'>
          {/* product 3개까지만 불러오기 */}
          {products.slice(0, 3).map(product => (
            <ProductItem
              key={product.productId}
              product={product}
            />
          ))}
          <MoreButton />
        </div>
        <ShareDislikeButton />
      </div>
    );
  } else {
    // 데이터 없음
    return null;
  }
};

export default CardContainer;
