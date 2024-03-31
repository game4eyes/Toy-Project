import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import './Sidebar.css'; // Sidebar 스타일 import
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import Header from './Header';
<<<<<<< HEAD
<<<<<<< HEAD:react/toyproject/src/Sidebar.jsx
import Navigation from './component/Nav';
=======
import Navigation from './page/Nav';
>>>>>>> main:react/react/toyproject/src/Sidebar.jsx
=======
import Navigation from './page/Nav';
>>>>>>> main

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // 네비게이션 상태를 관리할 상태 변수

  const sidebarRef = useRef(null);
  const resizeHandleRef = useRef(null);
  const startX = useRef(0);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

   // 네비게이션을 열거나 닫는 함수
   const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
};


  const startResize = (e) => {
    setIsResizing(true);
    startX.current = e.pageX;
  };

  const stopResize = () => {
    setIsResizing(false);
  };

  const resizeSidebar = (e) => {
    if (!isResizing) return;

    const newWidth = sidebarRef.current.offsetWidth + e.pageX - startX.current;
    sidebarRef.current.style.width = `${newWidth}px`;

    startX.current = e.pageX;
  };

  const handleOutsideClick = (event) => {
    if (showSidebar && !sidebarRef.current.contains(event.target)) {
      setShowSidebar(false);
    }
  };

  return (
    <div>
      {/* Header */}
      {/* toggleSidebar 함수를 전달 */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Sidebar */}
      {createPortal(
        <CSSTransition
          in={showSidebar}
          timeout={300}
          classNames="sidebar"
          unmountOnExit
          nodeRef={sidebarRef}
        >
          <div ref={sidebarRef} className="sidebar" onMouseMove={resizeSidebar}>
            {/* 사이드바 내용 */}
            <div className="sidebar-header">
            <Navigation isOpen={isNavOpen} /> {/* 수정된 부분: isOpen 상태를 Navigation 컴포넌트에 전달 */}
              <FaRegBell size={25} onClick={toggleNavigation}/> {/* 수정된 부분: 버튼 클릭 시 toggleNavigation 함수 호출 */}
            Sidebar Header
            
            </div>
            {/* 홈 버튼과 검색하기 버튼 추가 */}
            <div className="sidebar-buttons">
              <div className="button-with-text">
                <GoHomeFill className='home-btn'/>
                <span>홈</span>
              </div>
              <div className="button-with-text">
                <IoSearch className='search-btn'/>
                <span>검색하기</span>
              </div>
            </div>
            {/* 라이브러리 */}
            <div className='sidebar-library'><LuLibrary className='library-btn' size={23}/>내 라이브러리<GoPlus className="library-plus" size={23}/></div>
                {/* 사이드바 컨텐츠1 */}
                <div className='sidebar-contents1'>
              첫번째 플레이리스트를 만드세요.
              <button className="sidebar-button1">플레이리스트 만들기</button>
            </div>
            {/* 사이드바 컨텐츠2 */}
            <div className='sidebar-contents2'>
              팔로우할 팟캐스트를 찾아보세요
              <button className="sidebar-button2">팟캐스트 둘러보기</button>
            </div>
            {/* 푸터 추가 */}
            <div className="sidebar-footer">
              
              법률정보 개인정보처리방침 접근성 쿠키
             
            </div>
          </div>
        </CSSTransition>,
        document.body
      )}

      {/* Sidebar 백드롭 */}
      {showSidebar && <div className="sidebar-backdrop" onClick={handleOutsideClick}></div>}
      {/* 사이즈 조절 핸들 */}
      {showSidebar && <div className="resize-handle" ref={resizeHandleRef} onMouseDown={startResize} onMouseUp={stopResize}></div>}
    </div>
  );
}

export default Sidebar;