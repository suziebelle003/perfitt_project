import { deleteUser, EmailAuthProvider, getAuth, reauthenticateWithCredential } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { TUserInfo } from '../../types/sign';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../service/firebase';
import SUInput from '../../components/contents/signup/SUInput';
import Button from '../../components/common/Button';
import HeaderLayout from '../../layout/HeaderLayout';
import { useAuthStore } from '../../stores/auth.store';
import { useUserStore } from '../../stores/user.store';
import { infoIcon } from '../../assets/icons/icons';

const DeleteUser = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const { user } = useUserStore();
  const email = user?.email;
  const { uid } = useAuthStore();
  const methods = useForm<TUserInfo>({
    defaultValues: {
      email: email ?? undefined,
      password: '',
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = async (data: TUserInfo) => {
    const { email, password } = data;

    const currentUser = auth.currentUser;

    if (currentUser && uid) {
      try {
        const credential = EmailAuthProvider.credential(email, password);
        await reauthenticateWithCredential(currentUser, credential);

        // 계정 삭제
        await deleteUser(currentUser);
        await deleteDoc(doc(db, 'user', uid));

        alert('계정이 성공적으로 삭제되었습니다.');
        await auth.signOut();
        navigate('/');
      } catch (error) {
        alert('계정 삭제 중 오류 발생: ' + (error instanceof Error ? error.message : '알 수 없는 오류'));
      }
    } else {
      alert('사용자가 인증되지 않았습니다.');
    }
  };

  return (
    <>
      <HeaderLayout
        title='회원 탈퇴'
        back
      >
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-2 p-4'>
              <Controller
                name='email'
                control={control}
                rules={{
                  required: '이메일을 입력해 주세요',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    message: '이메일 형식이 아닙니다.',
                  },
                }}
                render={({ field, fieldState }) => (
                  <SUInput
                    label='아이디'
                    className='px-4 py-3.5'
                    id='email'
                    {...field}
                    readOnly
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
                    {...field}
                    placeholder='비밀번호를 입력해 주세요'
                    isError={!!fieldState.error}
                    helperText={fieldState.error?.message}
                  />
                )}
              />

              <div className='mt-[34px]'>
                <Button type='submit'>계정 삭제</Button>
              </div>
            </div>
          </form>
        </FormProvider>
      </HeaderLayout>
    </>
  );
};

export default DeleteUser;
