import React from 'react';
import { User } from '@firebase/auth';

//Firebase 인증 상태를 애플리케이션의 하위 컴포넌트에 전달
export const AuthContext = React.createContext<User | null>(null);
