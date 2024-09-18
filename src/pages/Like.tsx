import nike from '../assets/images/nike.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import shoes from '../assets/images/shoes.svg';
import LikeHeader from '../components/contents/Like/LikeHeader';
import FilterButton from '../components/common/FilterButton';
import LikeItems from '../components/contents/Like/LikeItems';
import LikeBrand from '../components/contents/Like/LikeBrand';

const Like = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('상품');

  const getValue = (text: string) => {
    setFilter(text);
  };

  // useEffect(() => {
  //   console.log('로드');

  //   axios.get('https://e035c336-46ca-4e92-9206-6fc8d219b701.mock.pstmn.io/api/shoes/recommend').then(res => {
  //     setData(res.data);
  //     console.log(data);
  //   });
  // }, []);

  const test = [0, 1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className='h-full overflow-hidden'>
        {/* 뒤로가기 */}
        {/* header 좋아요 / 최근본 s */}
        <LikeHeader />
        <div className='px-4 py-[19px] '>
          {/* 좋아요 / 브랜드  */}
          <FilterButton
            arr={['상품', '브랜드']}
            getValue={getValue}
          />
          {/* 갯수표시 */}
          <p className='font-extrabold text-sm/[22px] my-[15px]'>총 {data.length}개</p>

          {filter === '브랜드' && (
            <div className='flex justify-between flex-wrap h-max overflow-y-scroll scrollbar-hide'>
              {test.map(item => (
                <LikeItems
                  key={item}
                  brand={'ddd'}
                  shoesImage={shoes}
                >
                  dfhdufhdjfsklfjdssadfasdffasdffsaffasdfasdfasdfaf
                </LikeItems>

                // <LikeItems
                //   key={item}
                //   brand={item.brand}
                //   shoesImage={item.image}
                // >
                //   {item.modelName}
                // </LikeItems>
              ))}
            </div>
          )}
          <LikeBrand
            image={nike}
            brand='NIKE'
          >
            나이키
          </LikeBrand>
        </div>
      </div>
    </>
  );
};
export default Like;
