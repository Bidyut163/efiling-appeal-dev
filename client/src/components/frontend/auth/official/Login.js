import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../../../../actions/auth';
import { clearErrors } from '../../../../actions/errors';

const Login = ({
    login,
    clearErrors,
    serverErrors,
    auth: { isAuthenticated, user },
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const [formErrors, setFormErrors] = useState({});

    const [message, setMessage] = useState('');

    const onForgotPassword = () => {
        setMessage('Please contact Admin');

        setTimeout(() => {
            setMessage('');
        }, 5000);
    };

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        login(email, password);
    };

    const handleLoginGuestAdmin = () => {
        const guestUser = process.env.REACT_APP_GUEST_ADMIN_EMAIL;
        const guestPassword = process.env.REACT_APP_GUEST_ADMIN_PASSWORD;

        setFormData({
            ...formData,
            email: guestUser,
            password: guestPassword,
        });

        login(guestUser, guestPassword);
    };

    const handleLoginGuestReceiptionist = () => {
        const guestUser = process.env.REACT_APP_GUEST_RECEIPTIONIST_EMAIL;
        const guestPassword =
            process.env.REACT_APP_GUEST_RECEIPTIONIST_PASSWORD;

        setFormData({
            ...formData,
            email: guestUser,
            password: guestPassword,
        });

        login(guestUser, guestPassword);
    };

    const handleLoginGuestRegistrar = () => {
        const guestUser = process.env.REACT_APP_GUEST_REGISTRAR_EMAIL;
        const guestPassword = process.env.REACT_APP_GUEST_REGISTRAR_PASSWORD;

        setFormData({
            ...formData,
            email: guestUser,
            password: guestPassword,
        });

        login(guestUser, guestPassword);
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

    // Redirect if Logged in and Admin
    if (isAuthenticated && user && user.role === 'ADMIN' && user.active) {
        return <Redirect to="/official/admin/dashboard" />;
    }

    // Redirect if Logged in and Receptionist
    if (
        isAuthenticated &&
        user &&
        user.role === 'RECEPTIONIST' &&
        user.active
    ) {
        return <Redirect to="/official/receptionist/panel" />;
    }

    // Redirect if Logged in and Registrar
    if (isAuthenticated && user && user.role === 'REGISTRAR' && user.active) {
        return <Redirect to="/official/registrar/panel" />;
    }

    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    {message && (
                        <div className="col-md-6 alert-info p-3 mb-3">
                            {message}
                        </div>
                    )}
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8">
                        <div className="card mb-4 mx-4">
                            <div className="card-body p-4">
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <h1>REAT Login</h1>
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
                                                onClick={onForgotPassword}
                                                className="btn btn-link px-0"
                                                type="button"
                                            >
                                                Forgot password?
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="card body p-4 col-12">
                                <button
                                    onClick={handleLoginGuestReceiptionist}
                                    className="btn btn-primary px-4 my-2"
                                    type="submit"
                                >
                                    Guest Login As Verifying Official
                                </button>
                                <button
                                    onClick={handleLoginGuestRegistrar}
                                    className="btn btn-primary px-4 my-2"
                                    type="submit"
                                >
                                    Guest Login As Registrar
                                </button>
                                <button
                                    onClick={handleLoginGuestAdmin}
                                    className="btn btn-primary px-4 my-2"
                                    type="submit"
                                >
                                    Guest Login As Admin
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth, serverErrors: state.errors };
};

export default connect(mapStateToProps, { login, clearErrors })(Login);
