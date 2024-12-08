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
      if (!uid) return; // uid가 없을 경우 로직 실행 방지

      try {
        // 좋아요 데이터를 불러오기
        await fetchProductLike(uid);

        // productLike가 업데이트되었는지 확인
        const likedUser = productLike?.find(user => user.uid === uid);
        if (!likedUser) return;

        const productIds = likedUser.products.map(product => product.productId);

        // 제품 정보를 병렬로 가져오기
        const fetchedProducts = await Promise.all(
          productIds.map(async productId => {
            const product = await getProductById(uid, productId);
            return product || null;
          })
        );

        // 유효한 데이터만 필터링 후 상태 업데이트
        setProducts(fetchedProducts.filter(product => product !== null));
      } catch (error) {
        console.error('Error loading liked products:', error);
      }
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
