import React from 'react';
import Header from './Header'; // Header 컴포넌트 import
import Sidebar from './Sidebar'; // Sidebar 컴포넌트 import

function Layout({ children }) {
  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
      <main>{children}</main>
      {/* 다른페이지 내용 */}
    </div>
  );
}

export default Layout;