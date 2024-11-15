import { useEffect, useState } from 'react';
import ProductCard from '../../common/ProductCard';
import { useLastItemStore } from '../../../stores/lastItem.store';
import { TLikeProduct } from '../../../types/like';
import { useAuthStore } from '../../../stores/auth.store';

const MILatestItem = () => {
  const { uid } = useAuthStore();
  const [products, setProducts] = useState<TLikeProduct[]>([]);
  const { latestItem, fetchLatestItem, getLastItemById } = useLastItemStore();

  useEffect(() => {
    const loadLikedProducts = async () => {
      await fetchLatestItem(uid); // 최신 제품을 가져옵니다.

      // 사용자의 좋아요 제품 ID를 가져옵니다.
      const productIds = latestItem?.find(user => user.uid === uid)?.products.map(product => product.productId) || [];

      // 각 제품 ID에 대해 getLastItemById를 사용하여 제품 정보를 가져옵니다.
      const fetchedProducts = productIds
        .map(productId => getLastItemById(uid, productId))
        .filter(product => product !== null) as TLikeProduct[];

      setProducts(fetchedProducts); // 상태를 업데이트합니다.
    };

    loadLikedProducts();
  }, [uid, fetchLatestItem, latestItem, getLastItemById]);

  return (
    <>
      <div className='text-sm/[22px] font-extrabold mb-[15px]'>총 {products.length}개</div>
      <div className='flex-1 flex flex-wrap gap-[11px] overflow-scroll scrollbar-hide'>
        {products.map(product => (
          <ProductCard
            key={product.productId} // 각 제품의 ID를 키로 사용
            product={product} // 각 제품을 전달
          />
        ))}
      </div>
    </>
  );
};

export default MILatestItem;
