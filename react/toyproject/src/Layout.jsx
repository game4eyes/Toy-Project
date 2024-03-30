import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet import
import Header from './Header';
import Sidebar from './Sidebar';

function Layout() {
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
      <main>
        <Outlet /> {/* 자식 컴포넌트가 렌더링될 위치 */}
      </main>
    </div>
  );
}

export default Layout;