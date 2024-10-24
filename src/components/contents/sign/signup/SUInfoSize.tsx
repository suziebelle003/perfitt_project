import { useEffect, useMemo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import SignInputField from '../SignInputField';
import SUButton from './SUButton';
import SignSelect from '../SignSelect';
import { infoIcon } from '../../../../assets/icons/icons';

function SUInfoSize() {
  const { control, setValue } = useFormContext();
  const [sizeType, setSizeType] = useState('');

  const sizeData = [
    {
      type: 'mm',
      size: [220, 310],
      gap: 5,
    },
    {
      type: 'EU',
      size: [35.5, 46],
      gap: 0.5,
    },
    {
      type: 'US',
      size: [5, 13],
      gap: 0.5,
    },
  ];

  const sizeOptions = useMemo(() => {
    const sizeTypeData = sizeData.find(data => data.type === sizeType);
    if (!sizeTypeData) return [];

    const { type, size, gap } = sizeTypeData;
    const sizeOptions = Array.from({ length: Math.floor((size[1] - size[0]) / gap) + 1 }, (_, i) => {
      const optionSize = size[0] + i * gap;
      const option = type === 'mm' ? `${optionSize}mm` : `${type} ${optionSize}`;
      return { value: option, label: option };
    });

    return sizeOptions;
  }, [sizeType]);

  useEffect(() => {
    setValue('size', '');
  }, [sizeType]);

  return (
    <>
      <SignInputField title='사이즈 타입'>
        <div className='w-full flex gap-2'>
          {['mm', 'EU', 'US'].map(type => (
            <SUButton
              key={type}
              isActive={sizeType === type}
              onClick={() => setSizeType(type)}
            >
              {type}
            </SUButton>
          ))}
        </div>
      </SignInputField>
      <SignInputField
        title='평소 신는 스니커즈 사이즈'
        htmlFor='size'
      >
        <Controller
          name='size'
          control={control}
          rules={{ required: '* 사이즈를 선택해 주세요.' }}
          render={({ field }) => (
            <SignSelect
              {...field}
              id={field.name}
              options={sizeOptions}
              placeholder='사이즈를 선택해 주세요'
              fieldChange={field.onChange}
            />
          )}
        />
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
