import { useState } from 'react';
import { TUserHandlers, TUserInfo } from '../../../types/sign';
import SUSelect from './SUSelect';
import SUIbtn from './SUIbtn';
import infoicon from '../../../assets/images/icon_info_blue400.png';

interface SUIdetailsProps {
  userInfo: TUserInfo;
  userHandlers: TUserHandlers;
}

const SUIdetails = ({ userInfo, userHandlers }: SUIdetailsProps) => {
  const [selectedSizeType, setSelectedSizeType] = useState<string>('');

  const userSizeType = [
    {
      type: 'mm',
      size: {
        female: [220, 270],
        male: [250, 310],
      },
      gap: 5,
    },
    {
      type: 'EU',
      size: {
        female: [35.5, 40.5],
        male: [40, 46],
      },
      gap: 0.5,
    },
    {
      type: 'US',
      size: {
        female: [5, 10],
        male: [7, 13],
      },
      gap: 0.5,
    },
  ];

  const getSizeOptions = (sizeType: string) => {
    const sizeTypeData = userSizeType.find(type => type.type === sizeType);
    if (!sizeTypeData) return [];

    const { female, male } = sizeTypeData.size;
    const { gap } = sizeTypeData;

    // 여성 사이즈 배열 생성
    const femaleSize = Array.from({ length: Math.floor((female[1] - female[0]) / gap) + 1 }, (_, i) => {
      const size = female[0] + i * gap;
      return sizeType === 'mm'
        ? `${size} mm / 여성` // mm일 때는 숫자 뒤에 단위 붙임
        : `${sizeType} ${size} / 여성`; // EU나 US일 때는 숫자 앞에 단위 붙임
    });

    // 남성 사이즈 배열 생성
    const maleSize = Array.from({ length: Math.floor((male[1] - male[0]) / gap) + 1 }, (_, i) => {
      const size = male[0] + i * gap;
      return sizeType === 'mm'
        ? `${size} mm / 남성` // mm일 때는 숫자 뒤에 단위 붙임
        : `${sizeType} ${size} / 남성`; // EU나 US일 때는 숫자 앞에 단위 붙임
    });

    return femaleSize.concat(maleSize);
  };

  const handleSizeTypeClick = (sizeType: string) => {
    setSelectedSizeType(sizeType);

    if (!getSizeOptions(sizeType).includes(userHandlers.userInfoSearch.usersize)) {
      userHandlers.handleSelectChange('usersize', '');
    }
  };

  const sizeOptions = getSizeOptions(selectedSizeType);

  return (
    <>
      <div>
        <label className='h-[17px] text-[14px] leading-[17px] font-semibold'>
          사이즈 타입
          <div className='mb-6 flex flex-row gap-2 w-full'>
            <SUIbtn
              title='mm'
              value='mm'
              onClick={() => handleSizeTypeClick('mm')}
              isActive={selectedSizeType === 'mm'}
              className='px-2.5 py-[12.5px]'
            />
            <SUIbtn
              title='EU'
              value='EU'
              onClick={() => handleSizeTypeClick('EU')}
              isActive={selectedSizeType === 'EU'}
              className='px-2.5 py-[12.5px]'
            />
            <SUIbtn
              title='US'
              value='US'
              onClick={() => handleSizeTypeClick('US')}
              isActive={selectedSizeType === 'US'}
              className='px-2.5 py-[12.5px]'
            />
          </div>
        </label>
        <div className='mb-6'>
          <SUSelect
            title='평소 신는 스니커즈 사이즈'
            className='px-4 py-3.5'
            type='text'
            id='usersize'
            value={userHandlers.userInfoSearch.usersize}
            placeholder='사이즈를 선택해 주세요'
            onChange={e => userHandlers.handleSelectChange(e.target.id, e.target.value)}
            handleSelectChange={value => userHandlers.handleSelectChange('usersize', value)}
            handleChange={value => userHandlers.handleChange('usersize', value)}
            options={sizeOptions}
            selectedOption={userInfo.usersize}
            selectOpen={userHandlers.selectOpen}
            setSelectOpen={userHandlers.setSelectOpen}
          />
        </div>
        <div className='w-full h-[104px] rounded-lg p-4 bg-[#EFF6FF] flex items-start mb-10'>
          <img
            className='w-[24px] h-[24px] mr-2'
            src={infoicon}
            alt='infologo'
          />
          <p className='text-base font-normal text-[#1D4ED8]'>
            나에게 편한 신발 사이즈를 고려해서 추천사이즈를 알려드리기 위해 평소 신는 스니커즈 사이즈를 받고 있어요.
          </p>
        </div>
      </div>
    </>
  );
};

export default SUIdetails;
