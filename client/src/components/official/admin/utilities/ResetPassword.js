import React, { useState } from 'react';

import axios from 'axios';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        password2: '',
    });
    const [formErrors, setFormErrors] = useState({});
    const [alert, setAlert] = useState({
        message: '',
        alertType: '',
    });

    const { email, password, password2 } = formData;
    const { message, alertType } = alert;

    const onSetAlert = (msg, type) => {
        setAlert({ message: msg, alertType: type });
        setFormData({ ...formData, email: '', password: '', password2: '' });

        setTimeout(() => setAlert({ message: '', alertType: '' }), 10000);
    };

    const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if (!values.email) {
            errors.email = 'Email field can not be empty';
        } else if (!email_regex.test(values.email)) {
            errors.email = 'Please Enter a valid Email';
        }

        if (!values.password) {
            errors.password = 'Password field can not be empty';
        } else if (values.password.length < 6) {
            errors.password = 'Password needs to be atleast 6 characters long';
        } else if (!values.password2) {
            errors.password2 = 'Confirm password field can not be empty';
        } else if (values.password !== values.password2) {
            errors.password2 = "Confirm password doesn't match";
        }

        return errors;
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        setFormErrors(validate(formData));

        if (Object.keys(validate(formData)).length === 0) {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };

                const data = JSON.stringify(formData);

                const res = await axios.put(
                    '/api/users/appellant/reset-password',
                    data,
                    config
                );

                onSetAlert(res.data.msg, 'success');
            } catch (err) {
                if (err.response.data) {
                    onSetAlert(err.response.data.msg, 'danger');
                }
            }
        }
    };
    return (
        <div className="container-fluid">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Reset Password
                    </h6>
                </div>

                <div className="card-body p-0">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-2">
                                        Reset Appellant Password
                                    </h1>
                                    <p className="mb-4">
                                        Please enter the registered email
                                        address of the Appellant
                                    </p>
                                    {message && (
                                        <p className={`alert-${alertType} p-3`}>
                                            {message}
                                        </p>
                                    )}
                                </div>
                                <form className="user" onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-user"
                                            id="exampleInputEmail"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                        />
                                        {formErrors.password && (
                                            <p className="invalid-feedback d-block ml-3 ">
                                                {formErrors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-user"
                                            id="password"
                                            placeholder="Password..."
                                            name="password"
                                            value={password}
                                            onChange={onChange}
                                        />
                                        {formErrors.password && (
                                            <p className="invalid-feedback d-block ml-3 ">
                                                {formErrors.password}
                                            </p>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-user"
                                            id="password2"
                                            placeholder="Confirm Password..."
                                            name="password2"
                                            value={password2}
                                            onChange={onChange}
                                        />
                                        {formErrors.password2 && (
                                            <p className="invalid-feedback d-block ml-3 ">
                                                {formErrors.password2}
                                            </p>
                                        )}
                                    </div>

                                    <button className="btn btn-primary btn-user btn-block">
                                        Reset Password
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

export default ResetPassword;
