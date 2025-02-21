import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChecklist, getChecklist } from '../../../actions/checklist';

import ChecklistForm from './ChecklistForm';
import ChecklistShow from './ChecklistShow';

const Checklist = ({
    createChecklist,
    getChecklist,
    match,
    history,
    checklist: { checklist },
}) => {
    useEffect(() => {
        const { id } = match.params;
        getChecklist(id);
    }, [getChecklist]);

    const [formData, setFormData] = useState({
        appealNum: '',
        complaintNum: '',
        appellant: '',
        respondent: '',
        sectionNum: '',
        isAppealCompetent: '',
        isNameAddressCorrect: '',
        isOrdercopyAttached: '',
        dateOfOrder: '',
        dateOfCommunication: '',
        dateOfApplication: '',
        dateOnCopyReady: '',
        dateOfReceipt: '',
        dateOfFiling: '',
        dateOfSubmissionHardcopy: '',
        isDelayOnSubmission: '',
        amountOfDelayOnSubmission: '',
        isAppealFiledWithinLimitation: '',
        isDelayInFiling: '',
        amountOfDelayInFiling: '',
        isCondonationOfDelayFiled: '',
        objectionForCondonation: '',
        isFeesPaid: '',
        dateOfPayment: new Date(0),
        isPaginationCorrect: '',
        legibleDocs: '',
        isAppealMemoAnnexed: '',
        isServedByPost: '',
        isAuthStamped: '',
        isEmailPhoneOnRecord: '',
    });

    const [formError, setFormError] = useState({});

    const validate = (values) => {
        const errors = {};

        if (!values.appealNum) {
            errors.appealNum = 'Appeal No. can not be empty';
        }

        if (!values.complaintNum) {
            errors.complaintNum = 'Complaint No. can not be empty';
        }
        if (!values.appellant) {
            errors.appellant = 'Appellants field can not be empty';
        }
        if (!values.respondent) {
            errors.respondent = 'Respondent field can not be empty';
        }

        if (!values.sectionNum) {
            errors.sectionNum = 'Section number can not be empty';
        }

        if (!values.isAppealCompetent) {
            errors.isAppealCompetent = 'Please select a response';
        }

        if (!values.isNameAddressCorrect) {
            errors.isNameAddressCorrect = 'Please select a response';
        }

        if (!values.isOrdercopyAttached) {
            errors.isOrdercopyAttached = 'Please select a response';
        }

        if (!values.dateOfOrder) {
            errors.dateOfOrder = 'Date of order can not be empty';
        }

        if (!values.dateOfCommunication) {
            errors.dateOfCommunication =
                'Date of communication can not be empty';
        }
        if (!values.dateOfApplication) {
            errors.dateOfApplication = 'Date of application can not be empty';
        }
        if (!values.dateOnCopyReady) {
            errors.dateOnCopyReady =
                'Date on which the copy was ready field can not be empty';
        }
        if (!values.dateOfReceipt) {
            errors.dateOfReceipt = 'Date of receipt can not be empty';
        }
        if (!values.dateOfFiling) {
            errors.dateOfFiling = 'Date of online filling can not be empty';
        }
        if (!values.dateOfSubmissionHardcopy) {
            errors.dateOfSubmissionHardcopy =
                'Date of submission of hard copy can not be empty';
        }

        if (!values.isDelayOnSubmission) {
            errors.isDelayOnSubmission = 'Please select a response';
        }

        if (
            values.isDelayOnSubmission === '1' &&
            !values.amountOfDelayOnSubmission
        ) {
            errors.amountOfDelayOnSubmission = 'This Field can not be empty';
        }

        if (!values.isAppealFiledWithinLimitation) {
            errors.isAppealFiledWithinLimitation = 'Please select a response';
        }

        if (!values.isDelayInFiling) {
            errors.isDelayInFiling = 'Please select a response';
        }

        if (values.isDelayInFiling === '1' && !values.amountOfDelayInFiling) {
            errors.amountOfDelayInFiling = 'This Field can not be empty';
        }

        if (!values.isCondonationOfDelayFiled) {
            errors.isCondonationOfDelayFiled = 'Please select a response';
        }

        if (
            values.isCondonationOfDelayFiled === '0' &&
            !values.objectionForCondonation
        ) {
            errors.objectionForCondonation = 'This Field can not be empty';
        }

        if (!values.isFeesPaid) {
            errors.isFeesPaid = 'Please select a response';
        }

        if (
            values.isFeesPaid === '1' &&
            values.dateOfPayment - new Date(0) === 0
        ) {
            errors.dateOfPayment = 'This Field can not be empty';
        }

        if (!values.isPaginationCorrect) {
            errors.isPaginationCorrect = 'Please select a response';
        }

        if (values.isPaginationCorrect === '1' && !values.legibleDocs) {
            errors.legibleDocs = 'This Field can not be empty';
        }

        if (!values.isAppealMemoAnnexed) {
            errors.isAppealMemoAnnexed = 'Please select a response';
        }

        if (!values.isServedByPost) {
            errors.isServedByPost = 'Please select a response';
        }

        if (!values.isAuthStamped) {
            errors.isAuthStamped = 'Please select a response';
        }

        if (!values.isEmailPhoneOnRecord) {
            errors.isEmailPhoneOnRecord = 'Please select a response';
        }

        return errors;
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setFormError(validate(formData));

        const err = Object.keys(validate(formData));

        if (err.length) {
            let input =
                document.querySelector(`input[name=${err[0]}]`) ||
                document.querySelector(`select[name=${err[0]}]`) ||
                document.querySelector(`textarea[name=${err[0]}]`);

            input.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'start',
            });
        }

        if (Object.keys(validate(formData)).length === 0) {
            const { id } = match.params;
            createChecklist(formData, id, history);
        }
    };

    if (checklist) {
        return <ChecklistShow checklist={checklist} />;
    }
    return (
        <ChecklistForm
            formData={formData}
            onChange={onChange}
            onSubmit={onSubmit}
            formError={formError}
            setFormData={setFormData}
        />
    );
};

const mapStateToProps = (state) => {
    return { checklist: state.checklist };
};

export default connect(mapStateToProps, { createChecklist, getChecklist })(
    withRouter(Checklist)
);
