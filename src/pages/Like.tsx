import FilterButton from '../components/common/FilterButton';
import LikeBrand from '../components/like/LikeBrand';
import LikeHeader from '../components/like/LikeHeader';
import LikeItems from '../components/like/LikeItems';
import nike from '../assets/images/nike.svg';

const Like = () => {
  const filter = ['상품', '브랜드'];
  return (
    <>
      {/* 뒤로가기 */}
      {/* header 좋아요 / 최근본  */}
      <LikeHeader />
      {/* 좋아요 / 브랜드  */}
      <FilterButton arr={filter} />
      {/* 갯수표시 */}
      <p className='font-extrabold text-sm/[22px] my-[15px]'>총 5개</p>
      <LikeBrand
        image={nike}
        brand='NIKE'
      >
        나이키
      </LikeBrand>
      {/* <div>
        <LikeItems>호카 카하2 로우 고어텍스</LikeItems>
      </div> */}
    </>
  );
};
export default Like;
