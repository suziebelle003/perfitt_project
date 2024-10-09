import { Controller } from 'react-hook-form';
import { infoIcon } from '../../../../assets/icons/icons';
import { TUserInfo } from '../../../../types/sign';
import SignInputField from '../SignInputField';
import SUButton from './SUButton';

type TSUInfoSizeProps = {
  userInfo: TUserInfo;
  handleChange: (id: string, value: string) => void;
};

function SUInfoSize({ userInfo, handleChange }: TSUInfoSizeProps) {
  return (
    <>
      <SignInputField title='사이즈 타입'>
        <div className='w-full flex gap-2'>
          {['mm', 'EU', 'US'].map(type => (
            <SUButton
              isActive={userInfo.sizeType === type}
              onClick={() => handleChange('sizeType', type)}
            >
              {type}
            </SUButton>
          ))}
        </div>
      </SignInputField>
      <SignInputField title='평소 신는 스니커즈 사이즈'>
        {/* <Controller
          name='size'
          control={control}
          rules={{ required: { value: true, message: '사이즈를 선택해 주세요' } }}
          render={({ field, fieldState }) => (
            <SUSelect
              label='평소 신는 스니커즈 사이즈'
              optionData={sizeOptions.map(option => ({ key: option, value: option }))}
              className='w-full border border-[#E4E4E7] rounded text-[16px] leading-5 font-semibold placeholder-[#A1A1AA]'
              placeholder='사이즈를 선택해 주세요'
              {...field}
              helperText={fieldState.error?.message || ''}
            />
          )}
        /> */}
        <></>
      </SignInputField>
      <div className='w-full p-4 flex gap-2 rounded-lg bg-blue-50'>
        <img
          src={infoIcon}
          alt='Infomation'
          className='w-6 h-6'
        />
        <div className='text-base text-blue-700'>
          나에게 편한 신발 사이즈를 고려해서 추천사이즈를 알려드리기 위해 평소 신는 스니커즈 사이즈를 받고 있어요.
        </div>
      </div>
    </>
  );
}

export default SUInfoSize;
