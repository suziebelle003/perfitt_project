import { useEffect, useState } from 'react';
import { TLikeProduct } from '../../../types/like';
import ProductCard from '../../common/ProductCard';

const MILatestItem = () => {
  const [products, setProducts] = useState<TLikeProduct[]>();

  useEffect(() => {
    setProducts([
      {
        productId: '1',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model C',
        brand: 'Brand C',
        modelNo: '',
        like: true,
      },
      {
        productId: '2',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model D',
        brand: 'Brand D',
        modelNo: '',
        like: false,
      },
    ]);
  }, []);

  return (
    <>
      <div className='text-sm/[22px] font-extrabold mb-[15px]'>총 {products?.length}개</div>
      <div className='flex-1 flex flex-wrap gap-[11px] overflow-scroll scrollbar-hide'>
        {products?.map(product => (
          <ProductCard
            key={product.productId}
            product={product}
          />
        ))}
      </div>
    </>
  );
};
export default MILatestItem;
