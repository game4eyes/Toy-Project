import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Login = () => {
  const [accessToken, setAccessToken] = useState('');
  const history = useHistory();

  // 로그인이 성공했을 때 호출되는 함수
  const handleLoginSuccess = (accessToken) => {
    // 액세스 토큰을 localStorage에 저장
    localStorage.setItem('access_token', accessToken);
    
    // 프로필 가져오기 함수 호출
    getProfile();
  };

  // 프로필을 가져오는 함수
  const getProfile = async () => {
    // 저장된 액세스 토큰 가져오기
    const accessToken = localStorage.getItem('access_token');

    try {
      const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: 'Bearer ' + accessToken
        }
      });

      const data = await response.json();
      console.log('User profile:', data);

      // 프로필을 가져온 후, 필요한 작업 수행 (예: UI 업데이트)
      // 예를 들어, 프로필을 가져온 후에는 다음 페이지로 리다이렉트할 수 있습니다.
      history.push('/profile');
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  // 로그인 버튼 클릭 시 호출되는 함수
  const handleLoginClick = () => {
    // 로그인 API 호출 등 로그인 과정 수행

    // 로그인이 성공했다고 가정하고, 받아온 액세스 토큰을 전달하여 로그인 성공 처리
    const mockAccessToken = 'your_mock_access_token'; // 실제 액세스 토큰을 여기에 넣어주세요
    handleLoginSuccess(mockAccessToken);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default Login;