import React, { lazy } from 'react';
import { Navigate, useRoutes } from "react-router-dom";
import LandingLayout from "./layouts/LandingLayout";

// --------------------------------------------------------------------------------------

const HomePage = lazy(() => import('./pages/HomePage'))

// --------------------------------------------------------------------------------------

export default function Routes() {
  return useRoutes([
    {
      element: <LandingLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '*',
          // element: <Navigate to="/" replace />
          element: <></>
        }
      ]
    }
  ]);
}