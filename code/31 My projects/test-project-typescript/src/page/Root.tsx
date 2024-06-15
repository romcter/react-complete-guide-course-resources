import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import React from "react";

const RootLayout : React.FC = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
