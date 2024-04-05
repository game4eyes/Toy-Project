import React, { useState } from 'react';

const UserInfoSignup = ({ nextStep, prevStep }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 사용자 정보 유효성 검사 및 서버로 데이터 전송 로직 추가
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름</label>
      <input
        type="text"
        id="name"
        name="name"
        value={userInfo.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="age">나이</label>
      <input
        type="number"
        id="age"
        name="age"
        value={userInfo.age}
        onChange={handleChange}
        required
      />
      <button type="button" onClick={prevStep}>이전</button>
      <button type="submit">다음</button>
    </form>
  );
};

export default UserInfoSignup;
