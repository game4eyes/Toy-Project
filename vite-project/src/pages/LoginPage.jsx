// LoginPage.jsx 파일 내에 base64 인코딩 및 코드 챌린지 생성 함수 추가
import React, { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
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

    // 코드 확인자 생성
    const codeVerifier = generateRandomString(64);

    // 코드 확인자를 SHA256 해시로 변환
    sha256(codeVerifier)
      .then(hash => {
        // 변환된 해시 값을 Base64 인코딩하여 코드 챌린지 생성
        const codeChallenge = base64encode(hash);
        console.log('Code Challenge:', codeChallenge);

        // 나머지 코드 실행 (예: 로그인 요청)
      })
      .catch(error => {
        console.error('Error generating SHA256 hash:', error);
      });

  }, []);

  return (
    <div>
      {/* 로그인 페이지 UI 코드 */}
    </div>
  );
}

export default LoginPage;