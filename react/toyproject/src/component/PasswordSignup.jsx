import React, { useState } from 'react';

const PasswordSignup = ({ nextStep, prevStep }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 비밀번호 유효성 검사 및 서버로 데이터 전송 로직 추가
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="button" onClick={prevStep}>이전</button>
      <button type="submit">다음</button>
    </form>
  );
};

export default PasswordSignup;
