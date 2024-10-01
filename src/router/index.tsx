import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
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
        path: '/chat/:id',
        element: <Chat />,
      },
      {
        path: '/bridge',
        element: <Bridge />,
      },
      {
        path: '/mypage',
        children: [
          {
            path: 'main',
            element: <MyPage />,
          },
          {
            path: 'item',
            element: <MyItem />,
          },
          {
            path: 'foot',
            element: <MyFootInfo />,
          },
        ],
      },
      {
        path: '/shoerack',
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
