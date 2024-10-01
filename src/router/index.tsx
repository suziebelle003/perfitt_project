import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import ProtectedLayout from '../layout/ProtectedLayout';
import SplashScreen from '../pages/SplashScreen';
import OnBoarding from '../pages/OnBoarding';
import Chat from '../pages/Chat';
import Bridge from '../pages/Bridge';
import MyPage from '../pages/mypage/MyPage';
import MyItem from '../pages/mypage/MyItem';
import MyFootInfo from '../pages/mypage/MyFootInfo';
import ShoeRack from '../pages/shoerack/ShoeRack';
import ShoesReviewEdit from '../pages/shoerack/ShoesReviewEdit';
import ShoesReviewDetail from '../pages/shoerack/ShoesReviewDetail';
import ShoesSearch from '../pages/shoerack/ShoesSearch';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <SplashScreen />,
      },
      {
        path: '/onboarding',
        element: <OnBoarding />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
      {
        path: '/myfoot',
        element: <MyFootInfo />,
      },
      {
        path: '/bridge',
        element: <Bridge />,
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: '/mypage',
            element: <MyPage />,
          },
          {
            path: '/mypage/item',
            element: <MyItem />,
          },
          {
            path: '/shoerack',
            element: <ShoeRack />,
          },
          {
            path: '/shoerack/review/:mode',
            element: <ShoesReviewEdit />,
          },
          {
            path: '/shoerack/review',
            element: <ShoesReviewDetail />,
          },
          {
            path: '/shoerack/search',
            element: <ShoesSearch />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
