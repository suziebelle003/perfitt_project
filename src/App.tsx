import { useEffect, useState } from 'react';
import ChatWindow from './components/contents/chat/chatwindow/ChatWindow';
import SignIn from './pages/SignIn';
import Signup from './pages/SignUp';
import { auth } from './service/firebase';
import Like from './pages/Like';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const init = async () => {
    // 최초 인증 상태가 완료될 때 실행되는 Promise를 return
    // Firebase가 쿠키와 토큰을 읽고 백엔드와 소통해서 로그인 여부를 확인하는 동안 기다림
    await auth.authStateReady();
    setIsLoading(false);
  };

  useEffect(() => {
    init();
  }, []);
  return <></>;
}
