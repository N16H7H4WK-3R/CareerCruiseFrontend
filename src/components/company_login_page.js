import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CompanyLoginPage() {
    const [activeForm, setActiveForm] = useState('login');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupPasswordConfirm, setSignupPasswordConfirm] = useState('');
    const navigate = useNavigate();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const passwordMinLength = 6;

    const switchForm = (form) => {
        setActiveForm(form);
    };

    const validateEmail = (email) => {
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= passwordMinLength;
    };

    const handleLogin = (e) => {
        if (validateEmail(loginEmail) && validatePassword(loginPassword)) {
            navigate('/company');
        }
    };

    const handleSignup = (e) => {
        if (validateEmail(signupEmail) && validatePassword(signupPassword) && signupPassword === signupPasswordConfirm) {
            navigate('/company');
        }
    };

    return (
        <div className="login_screen">
            <section className="forms-section">
                <h1 className="section-title">Company Credentials Page</h1>
                <div className="forms">
                    <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
                        <button
                            type="button"
                            className="switcher switcher-login"
                            onClick={() => switchForm('login')}
                        >
                            Login
                            <span className="underline"></span>
                        </button>
                        <form className="form form-login">
                            <fieldset>
                                <legend>Please, enter your email and password for login.</legend>
                                <div className="input-block">
                                    <label htmlFor="login-email">E-mail</label>
                                    <input
                                        id="login-email"
                                        type="email"
                                        spellCheck="false"
                                        required
                                        autoComplete="off"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="login-password">Password</label>
                                    <input
                                        id="login-password"
                                        type="password"
                                        required
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                </div>
                            </fieldset>
                            <button type="submit" onClick={handleLogin} className="btn-login" disabled={!validateEmail(loginEmail) || !validatePassword(loginPassword)}>
                                Login
                            </button>
                        </form>
                    </div>
                    <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
                        <button
                            type="button"
                            className="switcher switcher-signup"
                            onClick={() => switchForm('signup')}
                        >
                            Sign Up
                            <span className="underline"></span>
                        </button>
                        <form className="form form-signup">
                            <fieldset>
                                <legend>Please, enter your email, password, and password confirmation for sign up.</legend>
                                <div className="input-block">
                                    <label htmlFor="signup-email">E-mail</label>
                                    <input
                                        id="signup-email"
                                        type="email"
                                        required
                                        value={signupEmail}
                                        onChange={(e) => setSignupEmail(e.target.value)}
                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-password">Password</label>
                                    <input
                                        id="signup-password"
                                        type="password"
                                        required
                                        value={signupPassword}
                                        onChange={(e) => setSignupPassword(e.target.value)}
                                    />
                                </div>
                                <div className="input-block">
                                    <label htmlFor="signup-password-confirm">Confirm password</label>
                                    <input
                                        id="signup-password-confirm"
                                        type="password"
                                        required
                                        value={signupPasswordConfirm}
                                        onChange={(e) => setSignupPasswordConfirm(e.target.value)}
                                    />
                                </div>
                            </fieldset>
                            <button type="submit" onClick={handleSignup} className="btn-signup" disabled={!validateEmail(signupEmail) || !validatePassword(signupPassword) || signupPassword !== signupPasswordConfirm}>
                                Continue
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CompanyLoginPage;
