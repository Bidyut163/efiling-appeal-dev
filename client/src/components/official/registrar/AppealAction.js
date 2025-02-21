import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    forwardToBench,
    revertAppeal,
    setDateForDocSub,
    getDateForDocSub,
} from '../../../actions/appeal';

const AppealAction = ({
    match,
    forwardToBench,
    revertAppeal,
    setDateForDocSub,
    getDateForDocSub,
    appeal: { dateOfDocSub },
    history,
}) => {
    const [formData, setFormData] = useState({
        revertReason: '',
    });

    const [formError, setFormError] = useState({});

    const validate = (values) => {
        const errors = {};

        if (!values.revertReason)
            errors.revertReason = 'Field can not be empty';

        return errors;
    };

    const { revertReason } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onRevertSubmit = (e) => {
        e.preventDefault();

        setFormError(validate(formData));

        if (Object.keys(validate(formData)).length === 0) {
            const { id } = match.params;
            revertAppeal(formData, id, history);
        }
    };

    useEffect(() => {
        const { id } = match.params;
        getDateForDocSub(id);
    }, []);

    const [docdate, setDocdate] = useState({ dateOfSubmission: '' });
    const [docdateError, setDocdateError] = useState({});

    const validateDocDate = (values) => {
        const error = {};

        if (!values.dateOfSubmission)
            error.dateOfSubmission = 'Please select a date';

        return error;
    };

    const onDocdateChange = (e) => {
        setDocdate({ [e.target.name]: e.target.value });
    };

    const onDocDateSubmit = (e) => {
        e.preventDefault();

        setDocdateError(validateDocDate(docdate));

        if (Object.keys(validateDocDate(docdate)).length === 0) {
            const { id } = match.params;
            setDateForDocSub(docdate, id);
        }
    };

    const [benchdate, setBenchdate] = useState({ benchdate: '' });
    const [benchdateError, setBenchdateError] = useState({});

    const validateBench = (values) => {
        const error = {};

        if (!values.benchdate) error.benchdate = 'Please select a date';

        return error;
    };

    const onBenchdateChange = (e) => {
        console.log(e.target.value);
        setBenchdate({ benchdate: e.target.value });
    };

    const onBenchSubmit = (e) => {
        e.preventDefault();

        setBenchdateError(validateBench(benchdate));

        if (Object.keys(validateBench(benchdate)).length === 0) {
            const { id } = match.params;
            forwardToBench(benchdate, id, history);
        }
    };

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Notify Appellant</h1>
            <p className="mb-4">Please select a reponse to notify appellant</p>
            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Revert Back To Appellant
                            </h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={(e) => onRevertSubmit(e)}>
                                <div className="row mb-3">
                                    <div className="col-md-12">
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Reason for reverting back the appeal"
                                            name="revertReason"
                                            value={revertReason}
                                            onChange={(e) => onChange(e)}
                                        />
                                        {formError &&
                                            formError.revertReason && (
                                                <p className="invalid-feedback d-block">
                                                    {formError.revertReason}
                                                </p>
                                            )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-8 col-lg-6">
                                        <button
                                            to="#"
                                            className="btn btn-danger btn-icon-split"
                                        >
                                            <span className="icon text-white-50">
                                                <i className="fa-solid fa-angles-left"></i>
                                            </span>
                                            <span className="text">
                                                Revert Appeal
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {dateOfDocSub ? (
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Ask hard copies of documents
                                </h6>
                            </div>
                            <div className="card-body">
                                <p>
                                    Last Date for document submission{' '}
                                    <b>{dateOfDocSub}</b>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="col-xl-6 col-lg-6">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Ask hard copies of documents
                                </h6>
                            </div>
                            <div className="card-body">
                                <p>
                                    Please select a date before which hard
                                    copies of documents needs to be submitted.
                                </p>

                                <label htmlFor="benchdate">
                                    Date for documents submission
                                </label>
                                <input
                                    className="form-control mb-3"
                                    type="date"
                                    id="dateOfSubmission"
                                    name="dateOfSubmission"
                                    value={docdate.dateOfSubmission}
                                    onChange={(e) => onDocdateChange(e)}
                                ></input>

                                {docdateError &&
                                    docdateError.dateOfSubmission && (
                                        <p className="invalid-feedback d-block">
                                            {docdateError.dateOfSubmission}
                                        </p>
                                    )}
                                <button
                                    onClick={(e) => onDocDateSubmit(e)}
                                    className="btn btn-success btn-icon-split"
                                >
                                    <span className="icon text-white-50">
                                        <i className="fa-solid fa-angles-right"></i>
                                    </span>
                                    <span className="text">
                                        Ask for hardcopies
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="row">
                <div className="col-xl-6 col-lg-6">
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Date Of hearing of Appeal
                            </h6>
                        </div>
                        <div className="card-body">
                            <p>
                                If checklist has been filled up for the Appeal
                                and all the documents are fine please select the
                                date of hearing of the appeal.
                            </p>

                            <label htmlFor="benchdate">Date of hearing</label>
                            <input
                                className="form-control mb-3"
                                type="date"
                                id="benchdate"
                                name="benchdate"
                                value={benchdate.benchdate}
                                onChange={(e) => onBenchdateChange(e)}
                            ></input>

                            {benchdateError && benchdateError.benchdate && (
                                <p className="invalid-feedback d-block">
                                    {benchdateError.benchdate}
                                </p>
                            )}
                            <button
                                onClick={(e) => onBenchSubmit(e)}
                                className="btn btn-success btn-icon-split"
                            >
                                <span className="icon text-white-50">
                                    <i className="fa-solid fa-angles-right"></i>
                                </span>
                                <span className="text">Date of hearing</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        appeal: state.appeal,
    };
};

export default connect(mapStateToProps, {
    forwardToBench,
    revertAppeal,
    setDateForDocSub,
    getDateForDocSub,
})(withRouter(AppealAction));
