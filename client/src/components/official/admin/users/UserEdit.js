import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editUser, getUser } from '../../../../actions/user';

const UserEdit = ({
    editUser,
    getUser,
    match,
    history,
    user: { user, loading },
}) => {
    const options = [
        {
            label: 'ADMIN',
            value: 'ADMIN',
        },
        {
            label: 'REGISTRAR',
            value: 'REGISTRAR',
        },
        {
            label: 'RECEPTIONIST',
            value: 'RECEPTIONIST',
        },
    ];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: '',
        role: '',
    });

    const [debouncedUserId, setDebouncedUserId] = useState('');

    useEffect(() => {
        if (user) setDebouncedUserId(user.id);
    }, [user]);

    useEffect(() => {
        const { id } = match.params;
        getUser(id);

        if (debouncedUserId) {
            setFormData({
                firstName: loading || !user.firstName ? '' : user.firstName,
                lastName: loading || !user.lastName ? '' : user.lastName,
                email: loading || !user.email ? '' : user.email,
                role: loading || !user.role ? '' : user.role,
                password: '',
                password2: '',
            });
        }
    }, [loading, debouncedUserId]);

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const { firstName, lastName, email, password, password2, role } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formData));
        setIsSubmit(true);

        if (password !== password2) {
            console.log('password do not match');
        } else {
            editUser(
                { firstName, lastName, email, password, role },
                match.params.id,
                history
            );
        }
    };

    const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        // const password_regex =
        //     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        // passwords needs to be atleast 6 characters long, should have a number and a special character
        if (!values.firstName) {
            errors.firstName = 'First name is required';
        }
        if (!values.lastName) {
            errors.lastName = 'Last name is required';
        }
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!email_regex.test(values.email)) {
            errors.email = 'Please enter a valid Email';
        }
        if (!values.role) {
            errors.role = 'role is required';
        }
        if (!values.password) {
            errors.password = 'password is required';
        } else if (values.password.length < 6) {
            errors.password = 'password needs to be atleast 6 characters long';
        }

        if (values.password !== values.password2) {
            errors.password2 = 'password do not match';
        }
        return errors;
    };
    return !user ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Edit User</h1>
            <p className="mb-4">Update the User</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Edit User
                    </h6>
                </div>
                <div className="card-body">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="card shadow-lg border-0 rounded-lg mt-5">
                                <div className="card-header">
                                    <h3 className="text-center font-weight-light my-4">
                                        Update User
                                    </h3>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                        className="form-control"
                                                        id="inputFirstName"
                                                        type="text"
                                                        name="firstName"
                                                        value={firstName}
                                                        onChange={(e) =>
                                                            onChange(e)
                                                        }
                                                        placeholder="Enter your first name"
                                                    />
                                                    <label htmlFor="inputFirstName">
                                                        First Name
                                                    </label>
                                                </div>
                                                <p className="invalid-feedback d-block">
                                                    {formErrors.firstName}
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input
                                                        className="form-control"
                                                        id="inputLastName"
                                                        type="text"
                                                        name="lastName"
                                                        value={lastName}
                                                        onChange={(e) =>
                                                            onChange(e)
                                                        }
                                                        placeholder="Enter your last name"
                                                    />
                                                    <label htmlFor="inputLastName">
                                                        Last Name
                                                    </label>
                                                </div>
                                                <p className="invalid-feedback d-block">
                                                    {formErrors.lastName}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input
                                                className="form-control"
                                                id="inputEmail"
                                                type="email"
                                                name="email"
                                                value={email}
                                                onChange={(e) => onChange(e)}
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="inputEmail">
                                                Email address
                                            </label>
                                            <p className="invalid-feedback d-block">
                                                {formErrors.email}
                                            </p>
                                        </div>
                                        <div className="form-floating mb-3">
                                            {/* <input
                                        className="form-control"
                                        id="inputRole"
                                        type="text"
                                        name="role"
                                        value={role}
                                        onChange={(e) => onChange(e)}
                                        placeholder="User Role"
                                    /> */}
                                            <select
                                                className="custom-select form-select"
                                                id="inputRole"
                                                name="role"
                                                value={role}
                                                onChange={(e) => onChange(e)}
                                            >
                                                {options.map((option) => {
                                                    return (
                                                        <option
                                                            key={option.value}
                                                            value={option.value}
                                                        >
                                                            {option.label}
                                                        </option>
                                                    );
                                                })}
                                            </select>

                                            <label htmlFor="inputRole">
                                                User Role
                                            </label>
                                            <p className="invalid-feedback d-block">
                                                {formErrors.role}
                                            </p>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                        className="form-control"
                                                        id="inputPassword"
                                                        type="password"
                                                        name="password"
                                                        value={password}
                                                        onChange={(e) =>
                                                            onChange(e)
                                                        }
                                                        placeholder="Create a password"
                                                    />
                                                    <label htmlFor="inputPassword">
                                                        Password
                                                    </label>
                                                </div>
                                                <p className="invalid-feedback d-block">
                                                    {formErrors.password}
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating mb-3 mb-md-0">
                                                    <input
                                                        className="form-control"
                                                        id="inputPasswordConfirm"
                                                        type="password"
                                                        name="password2"
                                                        value={password2}
                                                        onChange={(e) =>
                                                            onChange(e)
                                                        }
                                                        placeholder="Confirm password"
                                                    />
                                                    <label htmlFor="inputPasswordConfirm">
                                                        Confirm Password
                                                    </label>
                                                </div>
                                                <p className="invalid-feedback d-block">
                                                    {formErrors.password2}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-0">
                                            <div className="d-grid">
                                                <button className="btn btn-primary btn-block">
                                                    Update User
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                {/* <div className="card-footer text-center py-3">
                            <div className="small">
                                <a href="login.html">
                                    Have an account? Go to login
                                </a>
                            </div>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, { editUser, getUser })(
    withRouter(UserEdit)
);
