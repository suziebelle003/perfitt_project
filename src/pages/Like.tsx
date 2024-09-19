import nike from '../assets/images/nike.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import shoes from '../assets/images/shoes.svg';
import LikeHeader from '../components/contents/Like/LikeHeader';
import FilterButton from '../components/common/FilterButton';
import LikeItems from '../components/contents/Like/LikeItems';
import LikeBrand from '../components/contents/Like/LikeBrand';
import ProductCard from '../components/common/ProductCard';
import { IProductCard } from '../types/like';

const Like = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(true);

  const getValue = (select: boolean) => {
    setFilter(select);
  };

  useEffect(() => {
    console.log('로드');

    axios.get('https://e035c336-46ca-4e92-9206-6fc8d219b701.mock.pstmn.io/api/shoes/recommend').then(res => {
      setData(res.data);
      console.log(data);
    });
  }, []);

  // const test = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      {/* 뒤로가기 */}
      {/* header 좋아요 / 최근본 s */}
      <div className='h-full overflow-hidden overflow-y-scroll scrollbar-hide'>
        <LikeHeader />
        <div className='px-4 py-[19px] '>
          {/* 좋아요 / 브랜드  */}
          <FilterButton getValue={getValue} />
          {/* 갯수표시 */}
          <p className='font-extrabold text-sm/[22px] my-[15px]'>총 {data.length}개</p>

          {filter ? (
            <div className='flex justify-between flex-wrap'>
              {data.map(product => (
                <ProductCard
                  key={product}
                  product={product}
                ></ProductCard>

                // <LikeItems
                //   key={item}
                //   brand={item.brand}
                //   shoesImage={item.image}
                // >
                //   {item.modelName}
                // </LikeItems>
              ))}
            </div>
          ) : (
            <div>
              {data.map(product => (
                <LikeBrand
                  key={product}
                  product={product}
                ></LikeBrand>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Like;
