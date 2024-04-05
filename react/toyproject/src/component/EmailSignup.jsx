import React, { useState } from 'react';

const EmailSignup = ({ nextStep }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // 이메일 유효성 검사 및 서버로 데이터 전송 로직 추가
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">이메일</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">다음</button>
    </form>
  );
};

export default EmailSignup;
