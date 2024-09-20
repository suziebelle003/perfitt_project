import { useState } from 'react';
import SUInput from './SUInput';
import SUSelect from './SUSelect';
import Button from '../../common/Button';
import SUIdetails from './SUIdetails';
import { Controller, useForm, FormProvider } from 'react-hook-form';
import { FormValues } from '../../../types/sign';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth, db } from '../../../service/firebase';
import { useNavigate } from 'react-router-dom';
import { customStyles_birth } from './SUISelectCss';
import { doc, setDoc } from 'firebase/firestore';

function SUInfo() {
  const [state, setState] = useState<'start' | 'end'>('start');
  const navigate = useNavigate();
  const methods = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      name: '',
      gender: '',
      year: '',
      month: '',
      day: '',
      usersize: '',
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = async (data: FormValues) => {
    console.log('최종 data:', data);
    setState('end');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      const userId = userCredential.user.uid;

      // Firestore에 사용자 데이터 저장
      await setDoc(doc(db, 'user', userId), {
        name: data.name,
        email: data.email,
        gender: data.gender,
        birth: `${data.year}-${data.month}-${data.day}`,
        size: data.usersize.split('/')[0],
      });

      alert('회원가입 성공');
      navigate('/signin');
    } catch (e) {
      if (e instanceof Error) {
        console.error('회원가입 실패:', e);
        alert(`회원가입 실패: ${e.message}`);
      } else {
        console.error('회원가입 실패:', e);
        alert('회원가입 실패: 알 수 없는 오류');
      }
    }
  };
  const yearList = Array.from({ length: 70 }, (_, i) => ({ key: i, value: `${i + 1955}년` }));
  const monthList = Array.from({ length: 12 }, (_, i) => ({ key: i, value: `${i + 1}월` }));
  const dayList = Array.from({ length: 31 }, (_, i) => ({ key: i, value: `${i + 1}일` }));

  const handleNextClick = () => {
    if (state === 'start') {
      handleSubmit(
        data => {
          console.log(data);
          setState('end');
        },
        errors => {
          console.log(errors);
        }
      )();
    } else {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <FormProvider {...methods}>
      <div className='p-4'>
        {state === 'start' ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <Header title='회원가입' /> */}
            <div className='flex flex-col gap-4 mb-10'>
              <Controller
                name='email'
                control={control}
                rules={{
                  required: '이메일을 입력해 주세요',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                    message: '이메일 형식이 아닙니다.',
                  },
                }}
                render={({ field, fieldState }) => (
                  <SUInput
                    label='아이디'
                    className='px-4 py-3.5'
                    id='email'
                    {...field}
                    placeholder='이메일을 입력해 주세요'
                    isError={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                rules={{
                  required: { value: true, message: '비밀번호를 입력해주세요' },
                  minLength: { value: 6, message: '비밀번호는 최소 6자 이상이어야 합니다' },
                }}
                render={({ field, fieldState }) => (
                  <SUInput
                    label='비밀번호'
                    className='px-4 py-3.5'
                    type='password'
                    id='password'
                    {...field}
                    placeholder='비밀번호를 입력해 주세요'
                    isError={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name='name'
                control={control}
                rules={{ required: { value: true, message: '이름을 입력해주세요' } }}
                render={({ field, fieldState }) => (
                  <SUInput
                    label='이름'
                    className='px-4 py-3.5'
                    type='text'
                    id='username'
                    {...field}
                    placeholder='이름을 입력해 주세요'
                    isError={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />
              <Controller
                name='gender'
                control={control}
                rules={{ required: { value: true, message: '성별을 선택해 주세요' } }}
                defaultValue='' // 기본 값 설정
                render={({ field, fieldState }) => (
                  <SUSelect
                    label='성별'
                    optionData={[
                      { key: 'female', value: '여자' },
                      { key: 'male', value: '남자' },
                    ]}
                    className='w-full rounded text-[16px] leading-5 font-semibold placeholder-[#A1A1AA]'
                    value={field.value}
                    onChange={field.onChange}
                    placeholder='성별을 선택해 주세요'
                    helperText={fieldState.error?.message || ''}
                  />
                )}
              />

              <div className='flex flex-row gap-1 '>
                <Controller
                  name='year'
                  control={control}
                  defaultValue=''
                  rules={{ required: { value: true, message: '연도를 선택해 주세요' } }}
                  render={({ field, fieldState }) => (
                    <SUSelect
                      label='생년월일'
                      optionData={yearList}
                      className='w-full rounded text-[16px] leading-5 font-semibold placeholder-[#A1A1AA]'
                      placeholder='년'
                      value={field.value}
                      onChange={field.onChange}
                      helperText={fieldState.error?.message || ''}
                      styles={customStyles_birth}
                    />
                  )}
                />
                <Controller
                  name='month'
                  control={control}
                  defaultValue=''
                  rules={{ required: { value: true, message: '월을 선택해 주세요' } }}
                  render={({ field, fieldState }) => (
                    <SUSelect
                      optionData={monthList}
                      className='w-full rounded text-[16px] leading-5 font-semibold placeholder-[#A1A1AA]'
                      value={field.value}
                      onChange={field.onChange}
                      placeholder='월'
                      helperText={fieldState.error?.message || ''}
                      styles={customStyles_birth}
                    />
                  )}
                />
                <Controller
                  name='day'
                  control={control}
                  defaultValue=''
                  rules={{ required: { value: true, message: '일을 선택해 주세요' } }}
                  render={({ field, fieldState }) => (
                    <SUSelect
                      optionData={dayList}
                      className='w-full rounded text-[16px] leading-5 font-semibold placeholder-[#A1A1AA]'
                      value={field.value}
                      onChange={field.onChange}
                      placeholder='일'
                      helperText={fieldState.error?.message || ''}
                      styles={customStyles_birth}
                    />
                  )}
                />
              </div>
            </div>
          </form>
        ) : (
          <SUIdetails />
        )}
        <Button onClick={handleNextClick}>{state === 'start' ? '다음' : '가입완료'}</Button>
      </div>
    </FormProvider>
  );
}

export default SUInfo;
