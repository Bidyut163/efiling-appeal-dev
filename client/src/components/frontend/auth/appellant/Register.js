import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../../../../actions/auth';
import { clearErrors } from '../../../../actions/errors';

const Register = ({
    auth: { isAuthenticated, userType },
    register,
    clearErrors,
    serverErrors,
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });

    const { email, password, password2 } = formData;

    const [formErrors, setFormErrors] = useState({});

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();

        // setFormErrors(validate(formData));

        register({ email, password, password2 });
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
        if (serverErrors.password2) {
            errors.password2 = serverErrors.password2;
            errors.passwordValidationClass = 'is-invalid';
        }

        setFormErrors(errors);
    });

    // const validate = (values) => {
    //     const errors = {};
    //     const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

    //     if (!values.email) {
    //         errors.email = 'Email is required';
    //     } else if (!email_regex.test(values.email)) {
    //         errors.email = 'Please enter a valid Email';
    //     }
    //     if (!values.password) {
    //         errors.password = 'password is required';
    //     } else if (values.password.length < 6) {
    //         errors.password = 'password needs to be atleast 6 characters long';
    //     }

    //     if (values.password !== values.password2) {
    //         errors.password2 = 'password do not match';
    //     }

    //     return errors;
    // };

    // Redirect if Logged in and Appellant
    if (isAuthenticated && userType === 'APPELLANT') {
        return <Redirect to="/appellant/dashboard" />;
    }
    return (
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mb-4 mx-4">
                            <div className="card-body p-4">
                                <form onSubmit={(e) => onSubmit(e)}>
                                    <h1>Register as an Appellant</h1>
                                    <p className="text-medium-emphasis">
                                        Create your account
                                    </p>
                                    {/* <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <svg className="icon">
                                                <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-user"></use>
                                            </svg>
                                        </span>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Name"
                                        />
                                    </div> */}
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-user"></i>
                                            {/* <svg className="icon">
                                            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open"></use>
                                        </svg> */}
                                        </span>
                                        <input
                                            className="form-control"
                                            type="text"
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
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-lock"></i>
                                            {/* <svg className="icon">
                                            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked"></use>
                                        </svg> */}
                                        </span>
                                        <input
                                            className="form-control"
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
                                    <div className="input-group mb-4">
                                        <span className="input-group-text">
                                            <i className="fa-solid fa-lock"></i>
                                            {/* <svg className="icon">
                                            <use xlink:href="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked"></use>
                                        </svg> */}
                                        </span>
                                        <input
                                            className="form-control"
                                            type="password"
                                            placeholder="Repeat password"
                                            name="password2"
                                            value={password2}
                                            onChange={(e) => onChange(e)}
                                        />
                                        {formErrors.password2 ? (
                                            <p className="invalid-feedback d-block">
                                                {formErrors.password2}
                                            </p>
                                        ) : null}
                                    </div>
                                    <button
                                        className="btn btn-block btn-success"
                                        type="submit"
                                    >
                                        Create Account
                                    </button>
                                </form>
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

export default connect(mapStateToProps, { register, clearErrors })(Register);
