import FilterButton from '../components/common/FilterButton';
import LikeBrand from '../components/like/LikeBrand';
import LikeItems from '../components/like/LikeItems';
import nike from '../assets/images/nike.svg';
import LikeHeader from '../components/like/LikeHeader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import shoes from '../assets/images/shoes.svg';

const Like = () => {
  const [data, setData] = useState([]);

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
        {/* 좋아요 / 브랜드  */}
        <FilterButton arr={['상품', '브랜드']} />
        {/* 갯수표시 */}
        <p className='font-extrabold text-sm/[22px] my-[15px]'>총 {data.length}개</p>

        <div className='flex justify-between flex-wrap max-h-full overflow-y-scroll scrollbar-hide'>
          {test.map(item => (
            <LikeItems
              key={item}
              brand={'ddd'}
              shoesImage={shoes}
            >
              dfhdufhdjfsklfjdsklf
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
        {/* <LikeBrand
          image={nike}
          brand='NIKE'
        >
          나이키
        </LikeBrand> */}
      </div>
    </>
  );
};
export default Like;
