import LikeBrand from './Like/LikeBrand';
import LikeButton from './Like/LikeButton';
import LikeHeader from './Like/LikeHeader';
import LikeItems from './Like/LikeItems';

const Like = () => {
  return (
    <>
      {/* 뒤로가기 */}
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
    </>
  );
};
export default Like;
