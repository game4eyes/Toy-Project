import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes 추가
import Layout from './Layout';
import Header from './Header'; // Header 컴포넌트 import
import Sidebar from './Sidebar'; // Sidebar 컴포넌트 import
import Mypage from './page/Mypage'; // 예시로 만든 Home 컴포넌트 import
import AlarmList from './page/AlarmList'; // 예시로 만든 About 컴포넌트 import
import Home from './page/Home';
import Navigation from './page/Nav';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation /> {/* 네비게이션은 루트에 추가 */}
              <Layout /> {/* 레이아웃은 루트에 추가 */}
            </>
          }
        >
          <Route path="/" element={<Home />} /> {/* 홈 페이지 라우팅 */}
          <Route path="/Mypage" element={<Mypage />} /> {/* 마이페이지 라우팅 */}
          <Route path="/AlarmList" element={<AlarmList />} /> {/* 마이페이지 라우팅 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;