import React, { useState } from 'react';
import '../page/css/SignupCommon.css';

const PreferencesSignup = ({ onNext, onPrev }) => {
  return (
    <div className="signup-container">
      <button className="back-button" onClick={onPrev}>&lt;</button>
          <form onSubmit={(e) => { e.preventDefault(); onNext(); }}>
            <label>
              <input type="checkbox" />
              옵션 1
            </label>
            <label>
              <input type="checkbox" />
              옵션 2
            </label>
            <button type="submit">가입 완료</button>
          </form>
    </div>
  );
};

export default PreferencesSignup;