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
        path: '/shoe-rack',
        children: [
          {
            path: 'main',
            element: <ShoeRack />,
          },
          {
            path: 'review/:mode',
            element: <ShoesReviewEdit />,
          },
          {
            path: 'review',
            element: <ShoesReviewDetail />,
          },
          {
            path: 'search',
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
