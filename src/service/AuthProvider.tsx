import { useEffect, ReactNode } from 'react';
import { auth } from './firebase';
import { AuthContext } from './AuthContext';
import { useAuthStore } from '../stores/auth.store';

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { fetchAuth, fetchLoading } = useAuthStore();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) fetchAuth(user);
      else fetchAuth(null);
      fetchLoading(false);
    });
    return () => unsubscribe();
  }, [fetchAuth]);

  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
