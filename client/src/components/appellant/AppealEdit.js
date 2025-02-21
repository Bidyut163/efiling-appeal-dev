import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateAppeal, appellantGetAppeal } from '../../actions/appeal';
import { clearPaymentStatus } from '../../actions/payment';
import { revertCheck } from '../../actions/forward';

import CreateAppealDetails from './CreateAppealDetails';
import CreateAppealFileUpload from './CreateAppealFileUpload';
import CreateAppealConfirm from './CreateAppealConfirm';
import './CreateAppeal.css';

const AppealEdit = ({
    updateAppeal,
    appellantGetAppeal,
    history,
    clearPaymentStatus,
    revertCheck,
    forward,
    appeal: { appeal, loading },
    match,
}) => {
    const edit = true;
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullname: '',
        ar_line1: '',
        ar_line2: '',
        ar_landmark: '',
        ar_city: '',
        ar_district: '',
        ar_pin: '',
        ar_state: '',
        ar_country: '',
        as_line1: '',
        as_line2: '',
        as_landmark: '',
        as_city: '',
        as_district: '',
        as_pin: '',
        as_state: '',
        as_country: '',
        appellant_mobile_no: '',
        appellant_email_id: '',
        res_fullname: '',
        res_ao_line1: '',
        res_ao_line2: '',
        res_ao_landmark: '',
        res_ao_city: '',
        res_ao_district: '',
        res_ao_pin: '',
        res_ao_state: '',
        res_ao_country: '',
        res_as_line1: '',
        res_as_line2: '',
        res_as_landmark: '',
        res_as_city: '',
        res_as_district: '',
        res_as_pin: '',
        res_as_state: '',
        res_as_country: '',
        res_mobile_no: '',
        res_email_id: '',
        reg_num: '',
        is_limitation_specified: true,
        reason_for_delay: '',
        facts_of_case: '',
        ground_of_appeal: '',
        reliefs_sought: '',
        interim_order: '',
        is_matter_pending: true,
    });

    const [fileData, setFileData] = useState();
    const [filename, setFilename] = useState('Choose a file');

    useEffect(() => {
        clearPaymentStatus();

        const { appealId } = match.params;
        revertCheck(appealId);

        appellantGetAppeal(appealId);

        setFormData({
            fullname: loading || !appeal.fullname ? '' : appeal.fullname,
            ar_line1: loading || !appeal.ar_line1 ? '' : appeal.ar_line1,
            ar_line2: loading || !appeal.ar_line2 ? '' : appeal.ar_line2,
            ar_landmark:
                loading || !appeal.ar_landmark ? '' : appeal.ar_landmark,
            ar_city: loading || !appeal.ar_city ? '' : appeal.ar_city,
            ar_district:
                loading || !appeal.ar_district ? '' : appeal.ar_district,
            ar_pin: loading || !appeal.ar_pin ? '' : appeal.ar_pin,
            ar_state: loading || !appeal.ar_state ? '' : appeal.ar_state,
            ar_country: loading || !appeal.ar_country ? '' : appeal.ar_country,
            as_line1: loading || !appeal.as_line1 ? '' : appeal.as_line1,
            as_line2: loading || !appeal.as_line2 ? '' : appeal.as_line2,
            as_landmark:
                loading || !appeal.as_landmark ? '' : appeal.as_landmark,
            as_city: loading || !appeal.as_city ? '' : appeal.as_city,
            as_district:
                loading || !appeal.as_district ? '' : appeal.as_district,
            as_pin: loading || !appeal.as_pin ? '' : appeal.as_pin,
            as_state: loading || !appeal.as_state ? '' : appeal.as_state,
            as_country: loading || !appeal.as_country ? '' : appeal.as_country,
            appellant_mobile_no:
                loading || !appeal.appellant_mobile_no
                    ? ''
                    : appeal.appellant_mobile_no,
            appellant_email_id:
                loading || !appeal.appellant_email_id
                    ? ''
                    : appeal.appellant_email_id,
            res_fullname:
                loading || !appeal.res_fullname ? '' : appeal.res_fullname,
            res_ao_line1:
                loading || !appeal.res_ao_line1 ? '' : appeal.res_ao_line1,
            res_ao_line2:
                loading || !appeal.res_ao_line2 ? '' : appeal.res_ao_line2,
            res_ao_landmark:
                loading || !appeal.res_ao_landmark
                    ? ''
                    : appeal.res_ao_landmark,
            res_ao_city:
                loading || !appeal.res_ao_city ? '' : appeal.res_ao_city,
            res_ao_district:
                loading || !appeal.res_ao_district
                    ? ''
                    : appeal.res_ao_district,
            res_ao_pin: loading || !appeal.res_ao_pin ? '' : appeal.res_ao_pin,
            res_ao_state:
                loading || !appeal.res_ao_state ? '' : appeal.res_ao_state,
            res_ao_country:
                loading || !appeal.res_ao_country ? '' : appeal.res_ao_country,
            res_as_line1:
                loading || !appeal.res_as_line1 ? '' : appeal.res_as_line1,
            res_as_line2:
                loading || !appeal.res_as_line2 ? '' : appeal.res_as_line2,
            res_as_landmark:
                loading || !appeal.res_as_landmark
                    ? ''
                    : appeal.res_as_landmark,
            res_as_city:
                loading || !appeal.res_as_city ? '' : appeal.res_as_city,
            res_as_district:
                loading || !appeal.res_as_district
                    ? ''
                    : appeal.res_as_district,
            res_as_pin: loading || !appeal.res_as_pin ? '' : appeal.res_as_pin,
            res_as_state:
                loading || !appeal.res_as_state ? '' : appeal.res_as_state,
            res_as_country:
                loading || !appeal.res_as_country ? '' : appeal.res_as_country,
            res_mobile_no:
                loading || !appeal.res_mobile_no ? '' : appeal.res_mobile_no,
            res_email_id:
                loading || !appeal.res_email_id ? '' : appeal.res_email_id,
            reg_num: loading || !appeal.reg_num ? '' : appeal.reg_num,
            is_limitation_specified:
                loading || !appeal.is_limitation_specified
                    ? ''
                    : appeal.is_limitation_specified,
            reason_for_delay:
                loading || !appeal.reason_for_delay
                    ? ''
                    : appeal.reason_for_delay,
            facts_of_case:
                loading || !appeal.facts_of_case ? '' : appeal.facts_of_case,
            ground_of_appeal:
                loading || !appeal.ground_of_appeal
                    ? ''
                    : appeal.ground_of_appeal,
            reliefs_sought:
                loading || !appeal.reliefs_sought ? '' : appeal.reliefs_sought,
            interim_order:
                loading || !appeal.interim_order ? '' : appeal.interim_order,
            is_matter_pending:
                loading || !appeal.is_matter_pending
                    ? '0'
                    : String(Number(appeal.is_matter_pending)),
        });

        // setFileData({});

        setFilename(
            loading || !appeal.docUrl
                ? ''
                : appeal.docUrl.split('-').slice(3).join('-')
        );
    }, [loading]);

    // Proceed to next step
    const nextStep = () => {
        setStep(step + 1);
    };

    // Go back to previous step
    const prevStep = () => {
        setStep(step - 1);
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheck = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.checked });
    };

    // on change handler for Files
    const onFileChange = (e) => {
        setFileData(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const data = new FormData();
        _.mapKeys(formData, (value, key) => {
            data.append(key, value);
        });
        data.append('file', fileData);

        updateAppeal(data, history, appeal.id);
    };

    switch (step) {
        case 1:
            if (forward.loading) {
                return <div>Loading</div>;
            }
            return forward.forwardStatus === 'R' && forward.isWithAppellant ? (
                <CreateAppealDetails
                    formData={formData}
                    onChange={onChange}
                    handleCheck={handleCheck}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            ) : (
                <Redirect to="/appellant/dashboard" />
            );

        case 2:
            return (
                <CreateAppealFileUpload
                    edit={edit}
                    fileData={fileData}
                    filename={filename}
                    onFileChange={onFileChange}
                    prevStep={prevStep}
                    nextStep={nextStep}
                />
            );
        case 3:
            if (isLoading) {
                return (
                    <div className="container text-center">
                        <ReactLoading
                            type={'cylon'}
                            color={'#095484'}
                            height={'50%'}
                            width={'50%'}
                        />
                    </div>
                );
            }

            return (
                <CreateAppealConfirm
                    prevStep={prevStep}
                    values={formData}
                    onSubmit={onSubmit}
                />
            );
    }
};

const mapStateToProps = (state) => {
    return { appeal: state.appeal, forward: state.forward };
};

export default connect(mapStateToProps, {
    updateAppeal,
    appellantGetAppeal,
    clearPaymentStatus,
    revertCheck,
})(withRouter(AppealEdit));
