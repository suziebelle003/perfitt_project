import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import SplashScreen from '../pages/SplashScreen';
import OnBoarding from '../pages/OnBoarding';
import ShoeRack from '../pages/shoerack/ShoeRack';
import ShoesReviewEdit from '../pages/shoerack/ShoesReviewEdit';
import ShoesReviewDetail from '../pages/shoerack/ShoesReviewDetail';
import ShoesSearch from '../pages/shoerack/ShoesSearch';
import NotFound from '../pages/NotFound';
import Chat from '../pages/Chat';
import Like from '../pages/Like';
import MyFootInfo from '../pages/MyFootInfo';
import MyPage from '../pages/MyPage';
import SignIn from '../pages/SignIn';
import AuthProvider from '../service/AuthProvider';
import SignUp from '../pages/SignUp';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <SplashScreen />,
      },
      {
        path: '/signin',
        element: (
          <AuthProvider>
            <SignIn />
          </AuthProvider>
        ),
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/onboarding',
        element: <OnBoarding />,
      },
      {
        path: '/chat/:id',
        element: <Chat />,
      },
      {
        path: '/mypage',
        element: <MyPage />,
      },
      {
        path: '/mypage/item',
        element: <Like />,
      },
      {
        path: '/mypage/foot',
        element: <MyFootInfo />,
      },
      {
        path: '/shoe-rack/main',
        element: <ShoeRack />,
      },
      {
        path: '/shoe-rack/review/:mode',
        element: <ShoesReviewEdit />,
      },
      {
        path: '/shoe-rack/review',
        element: <ShoesReviewDetail />,
      },
      {
        path: '/shoe-rack/search',
        element: <ShoesSearch />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
