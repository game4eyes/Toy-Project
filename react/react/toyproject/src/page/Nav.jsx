import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
function Navigation({ isOpen }) {
    
    return (
        <div className={`nav ${isOpen ? 'open' : ''}`}> {/* 네비게이션 상태에 따라 CSS 클래스를 추가 */}
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Mypage">Mypage</Link>
            <Link to="/AlarmList">AlarmList</Link>
        </nav>
        </div>
    );
}

export default Navigation;