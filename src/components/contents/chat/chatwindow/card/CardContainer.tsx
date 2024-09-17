import { useEffect, useState } from 'react';
import { exportIcon, thumbsDown } from '../../../../../assets/images/images';
import BrandCard from './BrandCard';
import MoreButton from './MoreButton';
import { useChatResponseMutation } from '../../../../../hooks/useChatMutation';
import { IBrandCard } from '../../../../../types/chat';

const CardContainer = () => {
  const { mutate, data, isError } = useChatResponseMutation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    mutate('장마철에 신기 좋은 레인부츠 브랜드 알려줘', {
      onSuccess: () => {
        setIsLoading(false);
      },
      onError: () => {
        setIsLoading(false);
      },
    });
  }, [mutate]);

  if (isLoading) {
    return <div>로딩...</div>;
  }

  if (isError) {
    return <div>에러</div>;
  }
  return (
    <div className='pl-7 pt-2'>
      <div className='flex gap-2 overflow-x-auto pb-3 scrollbar-hide'>
        {data?.brands?.map((brand: IBrandCard, index: number) => (
          <BrandCard
            key={index}
            brand={brand}
          />
        ))}

        <MoreButton />
      </div>
      <div>
        <div className='flex px-0.2 gap-3 pb-3'>
          <button>
            <img
              src={exportIcon}
              alt='export-Icon'
            />
          </button>
          <button>
            <img
              src={thumbsDown}
              alt='thumbsDown'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
