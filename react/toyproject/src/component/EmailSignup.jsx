import React, { useState } from 'react';
import '../page/css/SignupCommon.css';

const EmailSignup = ({ onNext }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <label htmlFor="email" className="form-label">이메일 주소</label>
      <input
        type="email"
        id="email"
        className="input-field"
        placeholder="name@domain.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="button-next">다음</button>
    </form>
  );
};

export default EmailSignup;
