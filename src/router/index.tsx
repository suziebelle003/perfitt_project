import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DefaultLayout from "../layout/DefaultLayout";
import OnBoarding from "../pages/OnBoarding";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/onboarding",
        element: <OnBoarding />,
      },
    ],
  },
]);

export default router;
