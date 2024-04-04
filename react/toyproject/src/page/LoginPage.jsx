// LoginPage.jsx

import React, { useEffect, useState } from 'react';
import './css/LoginPage.css';

const LoginPage = () => {
  // 코드 확인자 생성 함수
  const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }

  // SHA256 해시 함수
  const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
  }

  // Base64 인코딩 함수
  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
  }

  // 폼 제출 핸들러
  const handleLogin = async (e) => {
    e.preventDefault(); // 폼 제출 방지

    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;

    // 코드 확인자 생성
    const codeVerifier = generateRandomString(64);

    // 코드 확인자를 SHA256 해시로 변환
    sha256(codeVerifier)
      .then(hash => {
        // 변환된 해시 값을 Base64 인코딩하여 코드 챌린지 생성
        const codeChallenge = base64encode(hash);
        console.log('Code Challenge:', codeChallenge);

        // 로그인 요청 전에 코드 챌린지를 서버로 전송
        fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password, codeChallenge })
        })
        .then(response => {
          if (response.ok) {
            console.log('로그인 성공!');
          } else {
            console.error('로그인 실패!');
          }
        })
        .catch(error => {
          console.error('로그인 요청 실패:', error);
        });
      })
      .catch(error => {
        console.error('Error generating SHA256 hash:', error);
      });
  };

  useEffect(() => {
    // useEffect cleanup 함수
    return () => {
      // 여기서 필요한 정리 작업을 수행할 수 있습니다.
    };
  }, []);

  const [rememberMe, setRememberMe] = useState(false); // 아이디 저장 상태를 관리하는 state 추가

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe); // 아이디 저장 상태를 토글
  };

  return (
    <div className="login-container">
      <h1 className="login-title">DobbyMusic</h1>
      <form onSubmit={handleLogin} className="login-form">
        <label htmlFor="username" className="input-label">아이디:</label>
        <input type="text" id="username" name="username" placeholder="아이디를 입력하세요" />

        <label htmlFor="password" className="input-label">비밀번호:</label>
        <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />

        <div className="remember-me-container">
           <div className="toggle-switch">
                <input type="checkbox"
                  id="remember-me"
                  className="remember-me-checkbox"
                  checked={rememberMe}
                  onChange={toggleRememberMe}
                />
                <label htmlFor="remember-me" className="remember-me-label"></label>
            </div>
                <label htmlFor="remember-me" className="remember-me-text">나를 기억해!!!!!!!!!!!!!!</label>
         </div>


        <button type="submit">LOGIN</button>
      </form>
      
      <p className='links'><a href="/Signup">회원가입</a> | <a href="/AccountRecovery">계정 찾기</a> | <a href="/PasswordReset">비밀번호 찾기</a></p>
      
    </div>
  );
}

export default LoginPage;
