import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// 회원가입 단계별 컴포넌트를 임포트합니다.
import EmailSignup from '../component/EmailSignup';
import PasswordSignup from '../component/PasswordSignup';
import UserInfoSignup from '../component/UserInfoSignup';
import PreferencesSignup from '../component/PreferencesSignup';

const Signup = () => {
  // 현재 단계를 상태로 관리합니다.
  const [currentStep, setCurrentStep] = useState(1);

  // 다음 단계로 이동하는 함수
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  // 이전 단계로 이동하는 함수
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/signup/step-1" element={<EmailSignup nextStep={nextStep} />} />
        <Route path="/signup/step-2" element={currentStep >= 2 ? <PasswordSignup nextStep={nextStep} prevStep={prevStep} /> : <Navigate replace to="/signup/step-1" />} />
        <Route path="/signup/step-3" element={currentStep >= 3 ? <UserInfoSignup nextStep={nextStep} prevStep={prevStep} /> : <Navigate replace to="/signup/step-1" />} />
        <Route path="/signup/step-4" element={currentStep >= 4 ? <PreferencesSignup prevStep={prevStep} /> : <Navigate replace to="/signup/step-1" />} />
        <Route path="/signup" element={<Navigate replace to="/signup/step-1" />} />
      </Routes>
    </Router>
  );
};

export default Signup;
