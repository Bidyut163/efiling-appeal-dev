import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createAppeal } from '../../actions/appeal';
import { clearPaymentStatus } from '../../actions/payment';

import CreateAppealDetails from './CreateAppealDetails';
import CreateAppealFileUpload from './CreateAppealFileUpload';
import CreateAppealConfirm from './CreateAppealConfirm';
import './CreateAppeal.css';

const CreateAppeal = ({ createAppeal, history, clearPaymentStatus }) => {
    useEffect(() => {
        clearPaymentStatus();
    }, []);

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
        // is_within_jurisdiction: true,
        reg_num: '',
        is_limitation_specified: true,
        reason_for_delay: '',
        facts_of_case: '',
        ground_of_appeal: '',
        reliefs_sought: '',
        interim_order: '',
        is_matter_pending: '',
    });

    const [fileData, setFileData] = useState();
    const [filename, setFilename] = useState('Choose a file');

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

        createAppeal(data, history);
    };

    switch (step) {
        case 1:
            return (
                <CreateAppealDetails
                    formData={formData}
                    onChange={onChange}
                    handleCheck={handleCheck}
                    setFormData={setFormData}
                    nextStep={nextStep}
                />
            );

        case 2:
            return (
                <CreateAppealFileUpload
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
                        <div className="text-center mt-5">
                            File is uploading. This might take a while. Please
                            do not refresh the page
                        </div>
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

export default connect(null, { createAppeal, clearPaymentStatus })(
    withRouter(CreateAppeal)
);
