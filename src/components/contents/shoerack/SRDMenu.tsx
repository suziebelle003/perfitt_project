import { useNavigate } from 'react-router-dom';
import { useShoeRackStore } from '../../../stores/shoerack.store';
import SRDMenuDetail from './SRDMenuDetail';
import { pencilIcon, pencilRedIcon, trashIcon, trashRedIcon } from '../../../assets/icons/icons';

type TSRDMenu = {
  uid: string;
  productId: string;
  isOpen: boolean;
};

function SRDMenu({ uid, productId, isOpen }: TSRDMenu) {
  const navigate = useNavigate();
  const deleteProductById = useShoeRackStore(state => state.deleteProductById);

  const deleteReview = async () => {
    const isConfirmed = confirm('정말로 삭제하시겠습니까?');
    if (isConfirmed) {
      const result = await deleteProductById(uid, productId);
      if (result === 'success') {
        alert('삭제가 완료되었습니다.');
        navigate('/shoerack/main');
      } else alert('삭제에 실패하였습니다.');
    }
  };

  if (isOpen)
    return (
      <div
        className='absolute right-0 top-full z-20
          rounded-[10px] bg-white shadow-[0_1px_4px_0px_rgba(0,0,0,0.25)]'
      >
        <SRDMenuDetail
          text='삭제하기'
          image={trashIcon}
          hoverImage={trashRedIcon}
          handleClick={deleteReview}
        />
        <hr className='h-[1px] border-none bg-[#E4E4E7]' />
        <SRDMenuDetail
          text='수정하기'
          image={pencilIcon}
          hoverImage={pencilRedIcon}
          handleClick={() => navigate(`/shoerack/review/edit?id=${productId}`)}
        />
      </div>
    );
  else return <></>;
}

export default SRDMenu;
