import { useState, useEffect } from 'react';
import { TProduct } from '../../../types/db';
import ProductCard from '../../common/ProductCard';

const MILikeProduct = () => {
  const [products, setProducts] = useState<TProduct[]>();

  useEffect(() => {
    setProducts([
      {
        productId: '1',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.ex.com/product/new?prdtNo=1010087307',
        modelName: 'Model AModel AModel AModel AModel AModel AModel AModel AModel AModel AModel AModel AModel A',
        brand: 'Brand A',
        modelNo: '',
      },
      {
        productId: '2',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model B',
        brand: 'Brand B',
        modelNo: '',
      },
      {
        productId: '3',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model C',
        brand: 'Brand C',
        modelNo: '',
      },
      {
        productId: '4',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model D',
        brand: 'Brand D',
        modelNo: '',
      },
      {
        productId: '5',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model C',
        brand: 'Brand C',
        modelNo: '',
      },
      {
        productId: '6',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model D',
        brand: 'Brand D',
        modelNo: '',
      },
      {
        productId: '7',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model C',
        brand: 'Brand C',
        modelNo: '',
      },
      {
        productId: '8',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model D',
        brand: 'Brand D',
        modelNo: '',
      },
      {
        productId: '10',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model C',
        brand: 'Brand C',
        modelNo: '',
      },
      {
        productId: '9',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model D',
        brand: 'Brand D',
        modelNo: '',
      },
      {
        productId: '12',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model C',
        brand: 'Brand C',
        modelNo: '',
      },
      {
        productId: '11',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model D',
        brand: 'Brand D',
        modelNo: '',
      },
      {
        productId: '13',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model C',
        brand: 'Brand C',
        modelNo: '',
      },
      {
        productId: '14',
        image: 'https://via.placeholder.com/200',
        link: 'https://m.abcmart.a-rt.com/product/new?prdtNo=1010087307',
        modelName: 'Model D',
        brand: 'Brand D',
        modelNo: '',
      },
    ]);
  }, []);

  return (
    <>
      <div className='text-sm/[22px] font-extrabold mb-[15px]'>총 {products?.length}개</div>
      <div className='pb-5 flex flex-wrap gap-[11px] overflow-scroll scrollbar-hide'>
        {products?.map(product => (
          <ProductCard
            key={product.productId}
            product={{ ...product, like: true }}
          />
        ))}
      </div>
    </>
  );
};

export default MILikeProduct;
