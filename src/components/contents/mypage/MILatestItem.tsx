import { useEffect, useState } from 'react';
import ProductCard from '../../common/ProductCard';
import { useItemStore } from '../../../stores/lastItem.store';
import { TLikeProduct } from '../../../types/like';
import { useAuthStore } from '../../../stores/auth.store';
import { getProduct } from '../../../api/firebase/getProduct';

const MILatestItem = () => {
  const { uid } = useAuthStore();
  const [products, setProducts] = useState<TLikeProduct[]>([]);
  const { items, fetchItems } = useItemStore();

  useEffect(() => {
    const loadLikedProducts = async () => {
      if (uid) {
        await fetchItems(uid); // Fetch items for the specific uid

        const userItems = items.find(user => user.uid === uid);
        if (!userItems) return; // userItems이 없다면 종료

        // products 배열에서 productId를 추출
        const productIds = userItems.products.map(product => product.productId);

        // Firebase에서 제품 정보를 가져와서 상태에 저장
        const fetchedProducts = await Promise.all(
          productIds.map(async productId => {
            const product = await getProduct(productId); // getProduct로 제품 정보 가져오기
            if (product) {
              return { ...product, productId }; // 반환된 제품 정보에 productId를 포함시켜 반환
            }
            return null; // null이 반환되면 필터링
          })
        );

        // null이 아닌 제품만 필터링 후 상태 업데이트
        setProducts(fetchedProducts.filter(product => product !== null) as TLikeProduct[]);
      }
    };

    loadLikedProducts(); // useEffect가 실행될 때 한 번만 호출
  }, [uid, fetchItems, items]); // dependencies: uid, fetchItems, items

  return (
    <>
      <div className='text-sm/[22px] font-extrabold mb-[15px]'>총 {products.length}개</div>
      <div className='flex-1 flex flex-wrap gap-[11px] overflow-scroll scrollbar-hide'>
        {products.map(product => (
          <ProductCard
            key={product.productId} // Use each product ID as a key
            product={product} // Pass each product to the ProductCard component
          />
        ))}
      </div>
    </>
  );
};

export default MILatestItem;
