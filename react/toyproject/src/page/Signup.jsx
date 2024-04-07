import React, { useState } from 'react';
import EmailSignup from '../component/EmailSignup';
import PasswordSignup from '../component/PasswordSignup';
import UserInfoSignup from '../component/UserInfoSignup';
import PreferencesSignup from '../component/PreferencesSignup';
import ProgressIndicator from './ProgressIndicator';
import { useNavigate } from 'react-router-dom';

const totalSteps = 4; // 여기에 전체 단계 수를 설정합니다.

const Signup = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/LoginPage'); // 로그인 페이지로 이동
  };

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
  };

  let StepComponent;
  
  switch (currentStep) {
    case 1:
      StepComponent = <EmailSignup onNext={nextStep} onPrev={prevStep}/>;
      break;
    case 2:
      StepComponent = <PasswordSignup onNext={nextStep} onPrev={prevStep}/>;
      break;
    case 3:
      StepComponent = <UserInfoSignup onNext={nextStep} onPrev={prevStep} />;
      break;
    case 4:
      StepComponent = <PreferencesSignup onNext={nextStep} onPrev={prevStep} />;
      break;
      default:
        StepComponent = (
          <>
            <div>도비는 자유에요!!!!!!!!!!!!!!!!!!!!</div>
            <button onClick={handleLogin}>로그인</button>
          </>
        );
        break;
  }

  return (
    <div className="signup-container">
      <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
      {StepComponent}
    </div>
  );
};

export default Signup;