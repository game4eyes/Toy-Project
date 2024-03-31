import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './page/css/Header.css'; // Header 스타일 import
import { FaSpotify } from "react-icons/fa6";
import { AiFillRightSquare } from "react-icons/ai";
import { AiFillLeftSquare } from "react-icons/ai";

function Header({ toggleSidebar }) {
  // 사용자 로그인 상태를 추적하는 state 설정
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 로그인 상태 변경 함수
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
   
  };

  const handlePageNavigation = () => {
    if (isLoggedIn) {
      console.log("로그인");
      // 이미 로그인된 상태라면 마이페이지로 이동
      navigate('/Mypage');
    } else {
      // 아직 로그인되지 않은 상태라면 가입 페이지로 이동
      navigate('/Signup');
    }
  };

  // 토글 아이콘 클릭 시 사이드바를 열도록 핸들러 추가
  const handleToggleSidebar = (e) => {
    // 토글 아이콘 클릭 시에만 사이드바를 토글하도록 설정
    if (e.target.classList.contains("toggle-sidebar-icon") || e.target.classList.contains("sidebar-text")) {
      toggleSidebar(); // 사이드바를 열도록 토글 함수 호출
    }
  };

  return (
    <header id="header">
      <div className="toggle-sidebar-wrapper" onClick={handleToggleSidebar}>
        <FaSpotify className="toggle-sidebar-icon" size={32} />
        <span className="sidebar-text">DobbyMusic</span>
        <div className="header-container">
          <div className="header-buttons">
            {/* 로그인 버튼 또는 로그아웃 버튼 렌더링 */}
            <button className='loginHeader' onClick={toggleLogin}>
              {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
            {/* 가입하기 버튼 또는 마이페이지 버튼 렌더링 */}
            <button className='joinHeader' onClick={handlePageNavigation}>
              {isLoggedIn ? '마이페이지' : '가입하기'}
            </button>
          </div>
          {/* 페이징 버튼 */}
          <div className="paging-buttons">
            <AiFillLeftSquare className='returnpage-btn' size={32}/>
            <AiFillRightSquare className='nextpage-btn' size={32}/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;