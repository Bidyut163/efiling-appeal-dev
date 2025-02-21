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
        dateOfOrder: new Date(0),
        dateOfCommunication: new Date(0),
        dateOfApplication: new Date(0),
        dateOnCopyReady: new Date(0),
        dateOfReceipt: new Date(0),
        dateOfFiling: new Date(0),
        dateOfSubmissionHardcopy: new Date(0),
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
