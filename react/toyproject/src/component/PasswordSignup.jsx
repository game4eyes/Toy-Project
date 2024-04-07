import React, { useState } from 'react';
import '../page/css/SignupCommon.css';

const PasswordSignup = ({ onNext, onPrev }) => {
  return (
    <div className="signup-container">
      <div className="back-button-container">
        <button className="back-button" onClick={onPrev}>&lt;</button>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
        <label htmlFor="password" className="form-label">비밀번호</label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder="비밀번호"
          required
        />
        <button type="submit" className="button-next">다음</button>
      </form>
    </div>
  );
};

export default PasswordSignup;