import React from 'react';

const PreferencesSignup = ({ prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // 사용자 선호도 데이터를 서버로 전송하는 로직 추가
    // 회원가입 프로세스 완료 로직 추가
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>사용자 선호 설정</label>
      {/* 선호도 관련 입력 필드 추가 */}
      <button type="button" onClick={prevStep}>이전</button>
      <button type="submit">가입 완료</button>
    </form>
  );
};

export default PreferencesSignup;
