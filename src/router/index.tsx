import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DefaultLayout from '../layout/DefaultLayout';
import { getAuth } from 'firebase/auth';
import SignIn from '../pages/SignIn';
import AuthProvider from '../service/AuthProvider';
const auth = getAuth();
console.log(auth);

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/signin',
        element: (
          <AuthProvider>
            <SignIn />
          </AuthProvider>
        ),
      },
    ],
  },
]);

export default router;
