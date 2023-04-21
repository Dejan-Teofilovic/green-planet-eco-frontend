import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage";
import Loading from "../../components/Loading";
import useLoading from "../../hooks/useLoading";

// ------------------------------------------------------------------------------------

const Navbar = lazy(() => import('./Navbar'))
const Footer = lazy(() => import('./Footer'))

// ------------------------------------------------------------------------------------

export default function LandingLayout() {
  const { isLoading } = useLoading();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />
        <AlertMessage className="fixed top-5 w-full z_10000" />
        <div className="flex-1">
          <Outlet />
        </div>
        <Footer />
      </div>
      {isLoading && <Loading />}
    </>
  );
}
