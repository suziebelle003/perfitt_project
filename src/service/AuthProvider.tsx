import { useEffect, ReactNode } from 'react';
import { auth } from './firebase';
import { AuthContext } from './AuthContext';
import { useAuthStore } from '../stores/auth.store';

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { setAuth, setLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) setAuth(user);
      else setAuth(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [setAuth]);

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
