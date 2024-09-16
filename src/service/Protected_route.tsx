import { Navigate } from 'react-router-dom';
import { auth } from './firebase';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const user = auth.currentUser;

  // 사용자가 로그인되어 있지 않은 경우, 로그인 페이지로 이동
  if (user === null) {
    return <Navigate to='/login' />;
  }

  // 사용자가 로그인되어 있는 경우, 요청된 페이지로 이동
  return children;
}
