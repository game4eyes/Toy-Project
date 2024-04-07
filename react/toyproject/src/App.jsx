import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes 추가
import Layout from './Layout';
import Header from './Header'; // Header 컴포넌트 import
import Sidebar from './Sidebar'; // Sidebar 컴포넌트 import
import Mypage from './page/Mypage'; // 예시로 만든 Home 컴포넌트 import
import AlarmList from './page/AlarmList'; // 예시로 만든 About 컴포넌트 import
import Navigation from './component/Nav';
import Signup from './page/Signup';
import MusicDetail from './page/MusicDetail';
import LoginPage from './page/LoginPage';  // 로그인 페이지 추가합니다 (04/01)
import Home from './page/Home';

/**@function_App path파일 생성예정 */

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
          <Route index element={<Home />} /> {/* 홈 페이지 라우팅 */}
          
          <Route path="/Mypage" element={<Mypage />} /> {/* 마이페이지 라우팅 */}
          <Route path="/AlarmList" element={<AlarmList />} /> {/* 알림온거 목록 경로 */}
          <Route path="/Signup/*" element={<Signup />} /> {/* 회원가입페이지 경로 */}
          <Route path="/MusicDetail/2" element={<MusicDetail />} />{/* 뮤직 디테일 경로*/}
          <Route path="/LoginPage" element={<LoginPage />} /> {/*경로추가. 제작자 확인부탁드림 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;