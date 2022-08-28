import React from 'react';
import Link from 'react-router-dom';
import '../Authentication/loginpagestyle.css';

function LoginPage() {
  return (
    <>
      <div className="auth__container absolute-container">
        <h2 className="heading">Login</h2>
        <form>
          <div className="text-field">
            <input type="email" required className="form-input" />
            <span></span>
            <label>Email Address</label>
          </div>
          <div className="text-field">
            <input type="password" required className="form-input" />
            <span></span>
            <label>Password</label>
          </div>
          <input type="checkbox" id="remember" />
          <label for="remember">Remember Me</label>
          <a href="#" className="f-pwd">
            Forgot your password?
          </a>
          <button className="form-btn primary-btn">Login</button>
          <a href="/signUp.html" className="center">
            Create New Account
          </a>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
