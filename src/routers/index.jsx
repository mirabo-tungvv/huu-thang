/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/Login"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1>Đây là trang Dashboard</h1>,
      },
      {
        path: "/profile",
        element: <h1>profile</h1>,
      },
      {
        path: "/users",
        element: <h1>Đây là trang users</h1>,
      },
      {
        path: "/product",
        element: <h1>Đây là trang product</h1>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
