import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { forwardToRegistrar } from '../../../actions/appeal';

const AppealForward = ({ match, forwardToRegistrar, history }) => {
    const [comments, setComments] = useState({ comments: '' });
    const [formError, setFormError] = useState({});

    const validate = (values) => {
        const errors = {};

        if (!values.comments) errors.comments = 'Field can not be empty';

        return errors;
    };

    const onChange = (e) => {
        setComments({ comments: e.target.value });
    };

    const onForward = (e) => {
        e.preventDefault();

        setFormError(validate(comments));

        if (Object.keys(validate(comments)).length === 0) {
            const { id } = match.params;
            forwardToRegistrar(comments, id, history);
        }
    };
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Forward Appeal </h1>
            <p className="mb-4">Forward Appeal to Registrar</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Forward Appeal To Registrar
                    </h6>
                </div>
                <div className="card-body">
                    <form onSubmit={onForward}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <textarea
                                    className="form-control"
                                    rows="5"
                                    placeholder="Comments..."
                                    name="commnets"
                                    value={comments.comments}
                                    onChange={(e) => onChange(e)}
                                />
                                {formError && formError.comments && (
                                    <p className="invalid-feedback d-block">
                                        {formError.comments}
                                    </p>
                                )}
                            </div>
                        </div>
                        <button
                            onClick={onForward}
                            className="btn btn-success btn-icon-split"
                        >
                            <span className="icon text-white-50">
                                <i className="fa-solid fa-angles-right"></i>
                            </span>
                            <span className="text">Forward to Registrar</span>
                        </button>
                    </form>
                    <div className="my-2"></div>
                </div>
            </div>
        </div>
    );
};

export default connect(null, { forwardToRegistrar })(withRouter(AppealForward));
