import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD:react/toyproject/src/Layout.jsx
import { Outlet } from 'react-router-dom'; // Outlet import
import Header from './Header';
import Sidebar from './Sidebar';
import MusicWidget from './component/MusicWidget';

function Layout() {
=======
=======
>>>>>>> main
import Header from './Header'; // Header 컴포넌트 import
import Sidebar from './Sidebar'; // Sidebar 컴포넌트 import

function Layout({ children }) {
<<<<<<< HEAD
>>>>>>> main:react/react/toyproject/src/Layout.jsx
=======
>>>>>>> main
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
<<<<<<< HEAD
<<<<<<< HEAD:react/toyproject/src/Layout.jsx
      <MusicWidget/>
      <main>
        <Outlet /> {/* 자식 컴포넌트가 렌더링될 위치 */}
      </main>
=======
      <main>{children}</main>
      {/* 다른페이지 내용 */}
>>>>>>> main:react/react/toyproject/src/Layout.jsx
=======
      <main>{children}</main>
      {/* 다른페이지 내용 */}
>>>>>>> main
    </div>
  );
}

export default Layout;