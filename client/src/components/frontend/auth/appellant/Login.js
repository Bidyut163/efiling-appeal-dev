import React, { useState, useRef, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { appellantLogin } from '../../../../actions/auth';
import { clearErrors } from '../../../../actions/errors';

const Login = ({
    appellantLogin,
    clearErrors,
    auth: { isAuthenticated, userType },
    serverErrors,
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const [formErrors, setFormErrors] = useState({});

    const [message, setMessage] = useState('');

    const onForgotPassword = () => {
        setMessage('Please contact REAT office to reset password');

        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        appellantLogin(email, password);
    };

    const handleGuestLogin = () => {
        const guestUser = process.env.REACT_APP_GUEST_EMAIL;
        const guestPassword = process.env.REACT_APP_GUEST_PASSWORD;

        setFormData({
            ...formData,
            email: guestUser,
            password: guestPassword,
        });

        appellantLogin(guestUser, guestPassword);
    };

    useEffect(() => {
        clearErrors();
    }, []);

    const isFirstRender = useRef(true);
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const errors = {};
        if (serverErrors.email) {
            errors.email = serverErrors.email;
            errors.emailValidationClass = 'is-invalid';
        }
        if (serverErrors.password) {
            errors.password = serverErrors.password;
            errors.passwordValidationClass = 'is-invalid';
        }

        setFormErrors(errors);
    });

    // Redirect if Logged in and Appellant
    if (isAuthenticated && userType === 'APPELLANT') {
        return <Redirect to="/appellant/dashboard" />;
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    {message && (
                        <div className="col-lg-8 alert-info p-3 mb-3">
                            {message}
                        </div>
                    )}
                    <div className="col-lg-8">
                        <div className="card-group d-block d-md-flex row">
                            <div className="card col-md-7 p-4 mb-0">
                                <div className="card-body">
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <h1>Login</h1>
                                        <p className="text-medium-emphasis">
                                            Sign In to your account
                                        </p>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">
                                                <i className="fa-solid fa-user"></i>
                                                {/* <svg className="icon">
                                                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
                                            </svg> */}
                                            </span>
                                            <input
                                                className={`form-control ${formErrors.emailValidationClass}`}
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => onChange(e)}
                                            />
                                            {formErrors.email ? (
                                                <p className="invalid-feedback d-block">
                                                    {formErrors.email}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className="input-group mb-4">
                                            <span className="input-group-text">
                                                <i className="fa-solid fa-lock"></i>
                                                {/* <svg className="icon">
                                                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked"></use>
                                            </svg> */}
                                            </span>
                                            <input
                                                className={`form-control ${formErrors.passwordValidationClass}`}
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={password}
                                                onChange={(e) => onChange(e)}
                                            />
                                            {formErrors.password ? (
                                                <p className="invalid-feedback d-block">
                                                    {formErrors.password}
                                                </p>
                                            ) : null}
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <button
                                                    className="btn btn-primary px-4"
                                                    type="submit"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <div className="col-6 text-end">
                                                <button
                                                    className="btn btn-link px-0"
                                                    type="button"
                                                    onClick={onForgotPassword}
                                                >
                                                    Forgot password?
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="card body p-2 col-12 mt-4">
                                        <button
                                            onClick={handleGuestLogin}
                                            className="btn btn-primary px-4"
                                            type="submit"
                                        >
                                            Guest Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="card col-md-5 text-white bg-primary py-5">
                                <div className="card-body text-center">
                                    <div>
                                        <h2 className="mb-4">Sign up</h2>
                                        <p>
                                            Haven't reigistered yet? Register as
                                            an appellant to file appeal. You
                                            need to create an account to file
                                            appeals. Please click below to
                                            register.
                                        </p>
                                        <Link
                                            className="btn btn-lg btn-outline-light mt-3"
                                            to="/appellant/register"
                                        >
                                            Register Now!
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        serverErrors: state.errors,
    };
};

export default connect(mapStateToProps, { appellantLogin, clearErrors })(Login);
