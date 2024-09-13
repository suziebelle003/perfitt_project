import Header from '../components/common/Header';
import LikeBrand from '../components/Like/LikeBrand';
import LikeButton from '../components/Like/LikeButton';
import LikeHeader from '../components/Like/LikeHeader';
import LikeItems from '../components/Like/LikeItems';

const Like = () => {
  return (
    <>
      <Header leftBtn='back' />
      <div className='p-4 pt-[37px]'>
        {/* header 좋아요 / 최근본  */}
        <LikeHeader />
        {/* 좋아요 / 브랜드 튼 */}
        <LikeButton />
        <br></br>
        {/* 갯수표시 */}
        <p className='font-extrabold text-sm/[22px] mb-[15px]'>총 5개</p>
        <LikeBrand />
        {/* <div>
        <LikeItems />
      </div> */}
      </div>
    </>
  );
};
export default Like;
