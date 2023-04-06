import React, { lazy } from 'react';
import { useRoutes } from "react-router-dom";
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
        }
      ]
    }
  ]);
}