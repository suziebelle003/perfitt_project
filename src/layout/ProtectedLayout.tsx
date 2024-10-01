import { useEffect } from 'react';
import { useAuthStore } from '../stores/auth.store';
import { Outlet, useNavigate } from 'react-router-dom';

function ProtectedLayout() {
  const navigate = useNavigate();
  const { uid, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !uid) navigate('/chat?context=sign');
  }, [isLoading]);

  return <Outlet />;
}

export default ProtectedLayout;
