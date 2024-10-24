import { useState } from 'react';
import { useUserStore } from '../../stores/user.store';
import { getAuth } from 'firebase/auth';
import { FormProvider, useForm } from 'react-hook-form';
import { TUserInfo } from '../../types/sign';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../service/firebase';
import SUInfo from '../../components/contents/signup/SUInfo';
import SUIdetails from '../../components/contents/signup/SUIdetails';
import Button from '../../components/common/Button';
import { useNavigate } from 'react-router-dom';
import HeaderLayout from '../../layout/HeaderLayout';
import { useAuthStore } from '../../stores/auth.store';

const UUInfo = () => {
  const [state, setState] = useState<'start' | 'end'>('start');
  const { user } = useUserStore();
  const navicate = useNavigate();

  const auth = getAuth();
  const gooleEmail = auth.currentUser?.email;
  const { uid } = useAuthStore();

  const methods = useForm<TUserInfo>({
    defaultValues: {
      email: user?.email || gooleEmail || '',
      password: uid || '',
      name: user?.name || '',
      gender: user?.gender || '',
      year: user?.birth?.year || '',
      month: user?.birth?.month || '',
      day: user?.birth?.day || '',
      size: user?.size || '',
    },
  });

  const { handleSubmit } = methods;
  const onSubmit = async (data: TUserInfo) => {
    if (uid) {
      const updateUserInfo = async (uid: string) => {
        try {
          const userDocRef = doc(db, 'user', uid);

          // Firestore 문서 업데이트
          await updateDoc(userDocRef, {
            name: data.name,
            gender: data.gender,
            birth: {
              year: data.year,
              month: data.month,
              day: data.day,
            },
            size: data.size.split('/')[0],
          });
          alert('업데이트되었습니다.');
          navicate('/mypage');
        } catch (error) {
          console.error('문서 업데이트 중 오류가 발생했습니다: ', error);
        }
      };

      // 사용자 UID로 업데이트 호출
      await updateUserInfo(uid);
    } else {
      console.error('사용자가 로그인되어 있지 않습니다.');
    }
  };

  const handleNextClick = handleSubmit(data => {
    if (state === 'start') {
      setState('end'); // 상태를 'end'로 변경
    } else {
      onSubmit(data); // 최종 제출
      console.log('입력된 데이터:', data);
    }
  });

  return (
    <>
      <FormProvider {...methods}>
        <HeaderLayout
          title='내 정보 수정'
          back
        >
          <div className='p-4 mb-[34px]'>
            {state === 'start' ? <SUInfo /> : <SUIdetails />}
            <Button onClick={handleNextClick}>{state === 'start' ? '다음' : '수정 완료'}</Button>
          </div>
        </HeaderLayout>
      </FormProvider>
    </>
  );
};
export default UUInfo;
