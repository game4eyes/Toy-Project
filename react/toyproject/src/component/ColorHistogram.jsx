import React, { useEffect, useRef, useState } from 'react';
import './cpcss/ColorHistogram.css';

function ColorHistogram({ imageUrl, className }) {
    const canvasRef = useRef(null);
    const [backgroundColor, setBackgroundColor] = useState('white');
    const canvasWidth = 180; // canvas 요소의 가로 길이
    const canvasHeight = 180; // canvas 요소의 세로 길이
  
    useEffect(() => {
        // 이미지 URL이 유효한지 확인
        if (isValidImageUrl(imageUrl)) {
            console.log('Valid image URL:', imageUrl);
        } else {
            console.log('Invalid image URL:', imageUrl);
        }
    }, [imageUrl]);

    // 이미지 URL이 유효한지 확인하는 함수
    const isValidImageUrl = (url) => {
        return !!url && (url.startsWith('http://') || url.startsWith('https://'));
    };
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
  
      // 이미지 로드
      const image = new Image();
      image.crossOrigin = 'Anonymous'; // 이미지를 CORS 요청으로 로드하기 위해 crossOrigin 설정
      image.onload = () => {
        // canvas 요소의 크기 설정
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        
        // 캔버스에 이미지 그리기
        context.drawImage(image, 0, 0, canvasWidth, canvasHeight);
  
        // 이미지 데이터 가져오기
        const imageData = context.getImageData(0, 0, canvasWidth, canvasHeight);
        const data = imageData.data;
  
        // 히스토그램 생성
        const histogram = {};
        for (let i = 0; i < data.length; i += 4) {
          const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
          const key = `${r},${g},${b}`; // RGB 값을 문자열로 조합하여 키로 사용
          histogram[key] = (histogram[key] || 0) + 1;
        }
  
        // 생성된 히스토그램을 기반으로 배경색 결정
        const dominantColor = getDominantColor(histogram);
        setBackgroundColor(dominantColor);
      };
  
      image.src = imageUrl;
    }, [imageUrl]);
  
    // 히스토그램에서 가장 많은 빈도수를 가진 색상을 찾아 반환
    const getDominantColor = (histogram) => {
      let maxCount = 0;
      let dominantColor = '';
      for (const color in histogram) {
        if (histogram[color] > maxCount) {
          maxCount = histogram[color];
          dominantColor = color;
        }
      }
      // 배경색 콘솔에 출력
    console.log('Dominant color:', dominantColor);
      return dominantColor;
      
    };
  
    return (
        <div className={className} style={{ backgroundColor: backgroundColor }}>
          <canvas ref={canvasRef} />
        </div>
      );
  }
  
  export default ColorHistogram;