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
      await fetchProductLike(uid); // 사용자의 찜 목록을 가져옵니다.

      // productLike 상태에서 상품 ID 목록 가져오기
      const productIds = productLike?.find(user => user.uid === uid)?.products.map(product => product.productId) || [];

      const fetchedProducts = productIds.map(productId => getProductById(uid, productId)); // 각 productId에 대해 getProductById 호출
      setProducts(fetchedProducts.filter(product => product !== null)); // null이 아닌 상품만 설정
    };

    loadLikedProducts(); // 비동기 함수 호출
  }, [uid, fetchProductLike, productLike, getProductById]); // 의존성 배열에 필요한 값 추가

  return (
    <>
      <div className='text-sm/[22px] font-extrabold mb-[15px]'>총 {products.length}개</div>
      <div className='pb-5 flex flex-wrap gap-[11px] overflow-scroll scrollbar-hide'>
        {products.map(product => (
          <ProductCard
            key={product.productId}
            product={{ ...product, like: true }} // like 속성을 true로 설정
          />
        ))}
      </div>
    </>
  );
};

export default MILikeProduct;
