import React from "react";

import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Header from "../Layouts/Header";
import ChangePassword from "../pages/Authentication/ChangePassword";

const authProtectedRoutes = [
  {
    path: "/dashboard",
    exact: true,
    component: <Header />,
  },
  { path: "/changePassword", component: <ChangePassword /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
];

export { authProtectedRoutes, publicRoutes };
