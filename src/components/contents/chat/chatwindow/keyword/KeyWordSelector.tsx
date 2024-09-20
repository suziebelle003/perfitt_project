import { getKeywordListApi } from '../../../../../api/keyword/getKeywordListApi';
import Button from '../../../../common/Button';
import KeyWordButton from './KeyWordButton';
import { useQuery } from '@tanstack/react-query';

import { useState } from 'react';

const KeyWordSelector = () => {
  // 키워드 담는 배열 상태관리
  const [selected, setSelected] = useState<string[]>([]);

  const { data: keywordList } = useQuery<string[]>({
    queryKey: ['keywordList'],
    queryFn: getKeywordListApi,
  });

  const clickKeyword = (keyword: string) => {
    if (selected.includes(keyword)) {
      // 키워드 토글 (선택했으면 선택 해제)
      setSelected(selected.filter(item => item !== keyword));
    } else if (selected.length === selected.length) {
      // 선택하는 갯수 제한 없이 수정
      setSelected([...selected, keyword]);
    }
  };

  return (
    <>
      <div className=' w-full flex flex-col gap-4 px-4 py-3 bg-white rounded-t-3xl shadow-shadow-top z-10'>
        <div className='flex items-center justify-center p-3.5 gap-1 '>
          <span className='font-semibold text-lg '>관심 키워드</span>
        </div>

        <div className='flex flex-wrap gap-y-3 '>
          {keywordList?.map((keyword: string, index: number) => (
            <KeyWordButton
              key={index}
              text={keyword}
              isSelected={selected.includes(keyword)}
              isClicked={() => clickKeyword(keyword)}
            />
          ))}
        </div>

        <div className='flex justify-center pt-4 pb-3 px-1'>
          <Button onClick={() => {}}>{selected.length}개 선택 완료</Button>
        </div>
      </div>
    </>
  );
};

export default KeyWordSelector;
