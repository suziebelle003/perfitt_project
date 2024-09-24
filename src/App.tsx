import { useEffect, useState } from 'react';
import { auth } from './service/firebase';
import SUIBar from './components/common/ModalBar';
import SignUp from './pages/SignUp';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isBarOpen, setIsBarOpen] = useState(false);

  const init = async () => {
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);

  const closeBar = () => {
    setIsBarOpen(false);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='relative'>
      <button onClick={() => setIsBarOpen(true)}>회원가입</button> {/* 예시 버튼 */}
      {isBarOpen && (
        <SUIBar
          isBarOpen={isBarOpen}
          closeBar={closeBar}
          children={<SignUp />}
        />
      )}
    </div>
  );
}
