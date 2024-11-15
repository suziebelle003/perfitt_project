import { useEffect, useState } from 'react';
import { TProduct } from '../../../types/db';
import ProductCard from '../../common/ProductCard';
import { useAuthStore } from '../../../stores/auth.store';
import { useProductLikeStore } from '../../../stores/productlike.store';

const MILikeProduct = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const { uid } = useAuthStore();
  const { fetchProductLike, productLike, getProductById } = useProductLikeStore(); // 필요한 함수들 가져오기

  useEffect(() => {
    const loadLikedProducts = async () => {
      await fetchProductLike(uid);

      const productIds = productLike?.find(user => user.uid === uid)?.products.map(product => product.productId) || [];

      const fetchedProducts = productIds.map(productId => getProductById(uid, productId));
      setProducts(fetchedProducts.filter(product => product !== null));
    };

    loadLikedProducts();
  }, [uid, fetchProductLike, productLike, getProductById]);

  return (
    <>
      <div className='text-sm/[22px] font-extrabold mb-[15px]'>총 {products.length}개</div>
      <div className='pb-5 flex flex-wrap gap-[11px] overflow-scroll scrollbar-hide'>
        {products.map(product => (
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
