import React, { useState } from 'react';
import '../page/css/SignupCommon.css';

const UserInfoSignup = ({ onNext, onPrev }) => {
  return (
    <div className="signup-container">
      <button className="back-button" onClick={onPrev}>&lt;</button>
        <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
          <label htmlFor="name" className="user-info-label">이름</label>
          <input type="text" id="name" className="input-name" placeholder="이름" required />
          
          <label htmlFor="birthday" className="user-info-label">생년월일</label>
          <div className="birthday-field">
            <input type="number" className="input-year" placeholder="년(4자리)" required/>
            <input type="number" className="input-month" placeholder="월" required/>
            <input type="number" className="input-day" placeholder="일" required />
          </div>

          <fieldset className="gender-selection">
            <legend>성별</legend>
            <label>
              <input type="radio" name="gender" value="male" required/> 남성
            </label>
            <label>
              <input type="radio" name="gender" value="female" required/> 여성
            </label>
            <label>
              <input type="radio" name="gender" value="female" required/> 논바이너리
            </label>
            <label>
              <input type="radio" name="gender" value="female" required /> 기타
            </label>
            <label>
              <input type="radio" name="gender" value="female" required /> 도비
            </label>
          </fieldset>

          <button type="submit" className="button-next">다음</button>
        </form>
    </div>
  );
};

export default UserInfoSignup;