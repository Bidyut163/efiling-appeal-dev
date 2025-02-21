import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CreateAppeal.css';

const CreateAppealDetails = ({
    formData,
    onChange,
    handleCheck,
    setFormData,
    nextStep,
}) => {
    const [formErrors, setFormErrors] = useState({});

    const next = () => {
        setFormErrors(validate(formData));
        const err = Object.keys(validate(formData));

        if (err.length) {
            const input =
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
            nextStep();
            document.documentElement.scrollTop = 0;
        }
    };

    const validate = (values) => {
        const errors = {};
        const email_regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        const mobile_regex = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;

        if (!values.fullname) {
            errors.fullname = 'Name can not be empty';
            errors.fullname_err = 'ca_danger';
        }
        if (!values.ar_line1) {
            errors.ar_line1 = 'ca_danger';
        }
        if (!values.ar_line2) {
            errors.ar_line2 = 'ca_danger';
        }
        if (!values.ar_country) {
            errors.ar_country = 'ca_danger';
        }
        if (!values.ar_state) {
            errors.ar_state = 'ca_danger';
        }
        if (!values.ar_city) {
            errors.ar_city = 'ca_danger';
        }
        if (!values.ar_district) {
            errors.ar_district = 'ca_danger';
        }
        if (!values.ar_pin) {
            errors.ar_pin = 'ca_danger';
        }
        if (
            errors.ar_line1 ||
            errors.ar_line2 ||
            errors.ar_country ||
            errors.ar_state ||
            errors.ar_city ||
            errors.ar_district ||
            errors.ar_pin
        ) {
            errors.ar = 'Address of residence fields can not be empty';
        }
        if (!values.as_line1) {
            errors.as_line1 = 'ca_danger';
        }
        if (!values.as_line2) {
            errors.as_line2 = 'ca_danger';
        }
        if (!values.as_country) {
            errors.as_country = 'ca_danger';
        }
        if (!values.as_state) {
            errors.as_state = 'ca_danger';
        }
        if (!values.as_city) {
            errors.as_city = 'ca_danger';
        }
        if (!values.as_district) {
            errors.as_district = 'ca_danger';
        }
        if (!values.as_pin) {
            errors.as_pin = 'ca_danger';
        }

        if (
            errors.as_line1 ||
            errors.as_line2 ||
            errors.as_country ||
            errors.as_state ||
            errors.as_city ||
            errors.as_district ||
            errors.as_pin
        ) {
            errors.as = 'Address of service fields can not be empty';
        }
        if (!values.appellant_mobile_no) {
            errors.appellant_mobile_no = 'Mobile Number is required';
            errors.appellant_mobile_err = 'ca_danger';
        } else if (!mobile_regex.test(values.appellant_mobile_no)) {
            errors.appellant_mobile_no = 'Please enter a valid Mobile Number';
            errors.appellant_mobile_err = 'ca_danger';
        }

        if (!values.appellant_email_id) {
            errors.appellant_email_id = 'Email Address is required';
            errors.appellant_email_err = 'ca_danger';
        } else if (!email_regex.test(values.appellant_email_id)) {
            errors.appellant_email_id = 'Please enter a valid Email';
            errors.appellant_email_err = 'ca_danger';
        }

        if (!values.res_fullname) {
            errors.res_fullname_err = 'ca_danger';
            errors.res_fullname = 'Respondent name can not be empty';
        }

        if (!values.res_ao_line1) {
            errors.res_ao_line1 = 'ca_danger';
        }
        if (!values.res_ao_line2) {
            errors.res_ao_line2 = 'ca_danger';
        }
        if (!values.res_ao_country) {
            errors.res_ao_country = 'ca_danger';
        }
        if (!values.res_ao_state) {
            errors.res_ao_state = 'ca_danger';
        }
        if (!values.res_ao_city) {
            errors.res_ao_city = 'ca_danger';
        }
        if (!values.res_ao_district) {
            errors.res_ao_district = 'ca_danger';
        }
        if (!values.res_ao_pin) {
            errors.res_ao_pin = 'ca_danger';
        }
        if (
            errors.res_ao_line1 ||
            errors.res_ao_line2 ||
            errors.res_ao_country ||
            errors.res_ao_state ||
            errors.res_ao_city ||
            errors.res_ao_district ||
            errors.res_ao_pin
        ) {
            errors.res_ao = 'Address of Office fields can not be empty';
        }
        if (!values.res_as_line1) {
            errors.res_as_line1 = 'ca_danger';
        }
        if (!values.res_as_line2) {
            errors.res_as_line2 = 'ca_danger';
        }
        if (!values.res_as_country) {
            errors.res_as_country = 'ca_danger';
        }
        if (!values.res_as_state) {
            errors.res_as_state = 'ca_danger';
        }
        if (!values.res_as_city) {
            errors.res_as_city = 'ca_danger';
        }
        if (!values.res_as_district) {
            errors.res_as_district = 'ca_danger';
        }
        if (!values.res_as_pin) {
            errors.res_as_pin = 'ca_danger';
        }

        if (
            errors.res_as_line1 ||
            errors.res_as_line2 ||
            errors.res_as_country ||
            errors.res_as_state ||
            errors.res_as_city ||
            errors.res_as_district ||
            errors.res_as_pin
        ) {
            errors.res_as = 'Address of service fields can not be empty';
        }
        if (!values.res_mobile_no) {
            errors.res_mobile_no = 'Mobile Number is required';
            errors.res_mobile_err = 'ca_danger';
        } else if (!mobile_regex.test(values.res_mobile_no)) {
            errors.res_mobile_no = 'Please enter a valid Mobile Number';
            errors.res_mobile_err = 'ca_danger';
        }

        if (!values.res_email_id) {
            errors.res_email_id = 'Email Address is required';
            errors.res_email_err = 'ca_danger';
        } else if (!email_regex.test(values.res_email_id)) {
            errors.res_email_id = 'Please enter a valid Email';
            errors.res_email_err = 'ca_danger';
        }

        // if (!values.reg_num) {
        //     errors.reg_num = 'Project Registration Number is required';
        //     errors.reg_num_err = 'ca_danger';
        // }
        if (!values.facts_of_case) {
            errors.facts_of_case = 'Please specify Facts of the case';
            errors.facts_of_case_err = 'ca_danger';
        }
        if (!values.ground_of_appeal) {
            errors.ground_of_appeal = 'Please specify Grounds of Appeal';
            errors.ground_of_appeal_err = 'ca_danger';
        }
        if (!values.reliefs_sought) {
            errors.reliefs_sought = 'Please specify Relief(s) Sought';
            errors.reliefs_sought_err = 'ca_danger';
        }

        if (!values.is_matter_pending) {
            errors.is_matter_pending = 'Please select a response';
        }

        return errors;
    };

    const {
        fullname,
        ar_line1,
        ar_line2,
        ar_landmark,
        ar_city,
        ar_district,
        ar_pin,
        ar_state,
        ar_country,
        as_line1,
        as_line2,
        as_landmark,
        as_city,
        as_district,
        as_pin,
        as_state,
        as_country,
        appellant_mobile_no,
        appellant_email_id,
        res_fullname,
        res_ao_line1,
        res_ao_line2,
        res_ao_landmark,
        res_ao_city,
        res_ao_district,
        res_ao_pin,
        res_ao_state,
        res_ao_country,
        res_as_line1,
        res_as_line2,
        res_as_landmark,
        res_as_city,
        res_as_district,
        res_as_pin,
        res_as_state,
        res_as_country,
        res_mobile_no,
        res_email_id,
        reg_num,
        is_limitation_specified,
        reason_for_delay,
        facts_of_case,
        ground_of_appeal,
        reliefs_sought,
        interim_order,
        is_matter_pending,
    } = formData;

    const handleAutoFromFill = () => {
        setFormData({
            ...formData,
            fullname: 'Guest Appellant',
            ar_line1: '4-158/9 5th Cross Road Sainikpuri',
            ar_line2: 'Secunderabad 500094, TS IND',
            ar_landmark: 'Golden state bridge',
            ar_city: 'Pune',
            ar_district: 'Pune',
            ar_pin: '426550',
            ar_state: 'Maharashtra',
            ar_country: 'India',
            as_line1: '4-158/9 5th Cross Road Sainikpuri',
            as_line2: 'Secunderabad 500094, TS IND',
            as_landmark: 'Golden state bridge',
            as_city: 'Pune',
            as_district: 'Pune',
            as_pin: '426550',
            as_state: 'Maharashtra',
            as_country: 'India',
            appellant_mobile_no: '9864270020',
            appellant_email_id: 'guest@gmail.com',
            res_fullname: 'RERA Assam',
            res_ao_line1: 'Schlosshoferstrasse 20',
            res_ao_line2: '1210 Vienna',
            res_ao_landmark: 'Empire State Building',
            res_ao_city: 'Bengaluru',
            res_ao_district: 'Bengaluru',
            res_ao_pin: '885719',
            res_ao_state: 'Karnataka',
            res_ao_country: 'India',
            res_as_line1: 'Schlosshoferstrasse 20',
            res_as_line2: '1210 Vienna',
            res_as_landmark: 'Empire State Building',
            res_as_city: 'Bengaluru',
            res_as_district: 'Bengaluru',
            res_as_pin: '885719',
            res_as_state: 'Karnataka',
            res_as_country: 'India',
            res_mobile_no: '8876345122',
            res_email_id: 'reraassam@hmail.com',
            reg_num: '4571247866',
            is_limitation_specified: true,

            facts_of_case:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et felis quis ex scelerisque sollicitudin. Nunc nec ante vitae tortor euismod consectetur. Quisque tincidunt nunc molestie diam sollicitudin ornare. Curabitur eu tellus diam. Aenean ut ullamcorper quam. Nulla ante diam, rhoncus eget vulputate eget, vulputate id eros. Curabitur quis magna a nibh sollicitudin ullamcorper aliquet quis sem. Nullam euismod lacus eget nisi finibus, ac elementum leo rhoncus. Nullam quis tempus augue. Praesent interdum volutpat finibus. Aliquam vel diam ac nulla imperdiet blandit ut placerat purus. Etiam quis interdum nisi. Sed eget accumsan quam. Duis hendrerit rhoncus metus ut aliquam. Vivamus a purus dui. Phasellus commodo accumsan diam, eu suscipit diam pulvinar at.',
            ground_of_appeal:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et felis quis ex scelerisque sollicitudin. Nunc nec ante vitae tortor euismod consectetur. Quisque tincidunt nunc molestie diam sollicitudin ornare. Curabitur eu tellus diam. Aenean ut ullamcorper quam. Nulla ante diam, rhoncus eget vulputate eget, vulputate id eros. Curabitur quis magna a nibh sollicitudin ullamcorper aliquet quis sem. Nullam euismod lacus eget nisi finibus, ac elementum leo rhoncus. Nullam quis tempus augue. Praesent interdum volutpat finibus. Aliquam vel diam ac nulla imperdiet blandit ut placerat purus. Etiam quis interdum nisi. Sed eget accumsan quam. Duis hendrerit rhoncus metus ut aliquam. Vivamus a purus dui. Phasellus commodo accumsan diam, eu suscipit diam pulvinar at.',
            reliefs_sought:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et felis quis ex scelerisque sollicitudin. Nunc nec ante vitae tortor euismod consectetur. Quisque tincidunt nunc molestie diam sollicitudin ornare. Curabitur eu tellus diam. Aenean ut ullamcorper quam. Nulla ante diam, rhoncus eget vulputate eget, vulputate id eros. Curabitur quis magna a nibh sollicitudin ullamcorper aliquet quis sem. Nullam euismod lacus eget nisi finibus, ac elementum leo rhoncus. Nullam quis tempus augue. Praesent interdum volutpat finibus. Aliquam vel diam ac nulla imperdiet blandit ut placerat purus. Etiam quis interdum nisi. Sed eget accumsan quam. Duis hendrerit rhoncus metus ut aliquam. Vivamus a purus dui. Phasellus commodo accumsan diam, eu suscipit diam pulvinar at.',
            interim_order:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse et felis quis ex scelerisque sollicitudin. Nunc nec ante vitae tortor euismod consectetur. Quisque tincidunt nunc molestie diam sollicitudin ornare. Curabitur eu tellus diam. Aenean ut ullamcorper quam. Nulla ante diam, rhoncus eget vulputate eget, vulputate id eros.',
            is_matter_pending: '1',
        });
    };
    return (
        <div className="ca_body ca_div testbox">
            <div className="ca_form">
                <nav className="ca_nav">
                    <Link to="/appellant/dashboard" className="ca_nav_item">
                        &larr; Go to Dashboard
                    </Link>
                    <button
                        onClick={handleAutoFromFill}
                        className="ca_nav_item"
                    >
                        Auto Fill Form
                    </button>
                </nav>
                <div className="ca_div banner">
                    <h1 className="ca_h1">Form C</h1>
                </div>

                <h5 className="ca_h5">1. Particulars of the Appellant</h5>
                <div className="ca_div item">
                    <p className="ca_p">
                        Name of the Appellant<span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.fullname
                                ? `(${formErrors.fullname})`
                                : null}
                        </span>
                    </p>

                    <input
                        className={`ca_input ${formErrors.fullname_err}`}
                        type="text"
                        placeholder="Full Name of the Appellant"
                        name="fullname"
                        value={fullname}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="ca_div item">
                    <p className="ca_p">
                        Address of the Existing Office/ Residence of the
                        Appellant<span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.ar ? `(${formErrors.ar})` : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.ar_line1}`}
                        type="text"
                        placeholder="Address Line 1"
                        name="ar_line1"
                        value={ar_line1}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        className={`ca_input ${formErrors.ar_line2}`}
                        type="text"
                        placeholder="Address Line 2"
                        name="ar_line2"
                        value={ar_line2}
                        onChange={(e) => onChange(e)}
                    />
                    <div className="ca_div city-item">
                        {/* <select className="ca_select" required>
                            <option value="">Country</option>
                            <option value="1">Russia</option>
                            <option value="2">Germany</option>
                            <option value="3">France</option>
                            <option value="4">Armenia</option>
                            <option value="5">USA</option>
                        </select> */}
                        <input
                            className={`ca_input ${formErrors.ar_country}`}
                            type="text"
                            placeholder="Country"
                            name="ar_country"
                            value={ar_country}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.ar_state}`}
                            type="text"
                            placeholder="State"
                            name="ar_state"
                            value={ar_state}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.ar_district}`}
                            type="text"
                            placeholder="District"
                            name="ar_district"
                            value={ar_district}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.ar_city}`}
                            type="text"
                            placeholder="City"
                            name="ar_city"
                            value={ar_city}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className="ca_input"
                            type="text"
                            placeholder="Landmark/region"
                            name="ar_landmark"
                            value={ar_landmark}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.ar_pin}`}
                            type="text"
                            placeholder="Postal / Zip code"
                            name="ar_pin"
                            value={ar_pin}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                </div>

                <div className="ca_div item">
                    <p className="ca_p">
                        Address for Service of all Notices
                        <span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.as ? `(${formErrors.as})` : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.as_line1}`}
                        type="text"
                        placeholder="Address Line 1"
                        name="as_line1"
                        value={as_line1}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        className={`ca_input ${formErrors.as_line2}`}
                        type="text"
                        placeholder="Address Line 2"
                        name="as_line2"
                        value={as_line2}
                        onChange={(e) => onChange(e)}
                    />
                    <div className="ca_div city-item">
                        {/* <select className="ca_select" required>
                            <option value="">Country</option>
                            <option value="1">Russia</option>
                            <option value="2">Germany</option>
                            <option value="3">France</option>
                            <option value="4">Armenia</option>
                            <option value="5">USA</option>
                        </select> */}
                        <input
                            className={`ca_input ${formErrors.as_country}`}
                            type="text"
                            placeholder="Country"
                            name="as_country"
                            value={as_country}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.as_state}`}
                            type="text"
                            placeholder="State"
                            name="as_state"
                            value={as_state}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.as_district}`}
                            type="text"
                            placeholder="District"
                            name="as_district"
                            value={as_district}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.as_city}`}
                            type="text"
                            placeholder="City"
                            name="as_city"
                            value={as_city}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className="ca_input"
                            type="text"
                            placeholder="Landmark/region"
                            name="as_landmark"
                            value={as_landmark}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.as_pin}`}
                            type="text"
                            placeholder="Postal / Zip code"
                            name="as_pin"
                            value={as_pin}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                </div>
                <div className="ca_div item">
                    <p className="ca_p">
                        Contact Details<span className="required">*</span>
                    </p>
                </div>
                <div className="ca_div item">
                    <p className="ca_p">
                        Phone<span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.appellant_mobile_no
                                ? `(${formErrors.appellant_mobile_no})`
                                : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.appellant_mobile_err}`}
                        type="text"
                        placeholder="Mobile number"
                        name="appellant_mobile_no"
                        value={appellant_mobile_no}
                        onChange={(e) => onChange(e)}
                    />
                </div>

                <div className="ca_div item">
                    <p className="ca_p">
                        Email<span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.appellant_email_id
                                ? `(${formErrors.appellant_email_id})`
                                : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.appellant_email_err}`}
                        type="email"
                        name="appellant_email_id"
                        value={appellant_email_id}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <h5 className="ca_h5">2. Particulars of the Respondent:</h5>
                <div className="ca_div item">
                    <p className="ca_p">
                        Name of the Respondent
                        <span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.res_fullname
                                ? `(${formErrors.res_fullname})`
                                : null}
                        </span>
                    </p>

                    <input
                        className={`ca_input ${formErrors.res_fullname_err}`}
                        type="text"
                        placeholder="Full Name of the Respondent"
                        name="res_fullname"
                        value={res_fullname}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <div className="ca_div item">
                    <p className="ca_p">
                        Official Address of the Respondent
                        <span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.res_ao
                                ? `(${formErrors.res_ao})`
                                : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.res_ao_line1}`}
                        type="text"
                        placeholder="Address Line 1"
                        name="res_ao_line1"
                        value={res_ao_line1}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        className={`ca_input ${formErrors.res_ao_line2}`}
                        type="text"
                        placeholder="Address Line 2"
                        name="res_ao_line2"
                        value={res_ao_line2}
                        onChange={(e) => onChange(e)}
                    />
                    <div className="ca_div city-item">
                        {/* <select className="ca_select" required>
                            <option value="">Country</option>
                            <option value="1">Russia</option>
                            <option value="2">Germany</option>
                            <option value="3">France</option>
                            <option value="4">Armenia</option>
                            <option value="5">USA</option>
                        </select> */}
                        <input
                            className={`ca_input ${formErrors.res_ao_country}`}
                            type="text"
                            placeholder="Country"
                            name="res_ao_country"
                            value={res_ao_country}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_ao_state}`}
                            type="text"
                            placeholder="State"
                            name="res_ao_state"
                            value={res_ao_state}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_ao_district}`}
                            type="text"
                            placeholder="District"
                            name="res_ao_district"
                            value={res_ao_district}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_ao_city}`}
                            type="text"
                            placeholder="City"
                            name="res_ao_city"
                            value={res_ao_city}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className="ca_input"
                            type="text"
                            placeholder="Landmark/region"
                            name="res_ao_landmark"
                            value={res_ao_landmark}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_ao_pin}`}
                            type="text"
                            placeholder="Postal / Zip code"
                            name="res_ao_pin"
                            value={res_ao_pin}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                </div>

                <div className="ca_div item">
                    <p className="ca_p">
                        Address for Service of all Notices
                        <span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.res_as
                                ? `(${formErrors.res_as})`
                                : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.res_as_line1}`}
                        type="text"
                        placeholder="Address Line 1"
                        name="res_as_line1"
                        value={res_as_line1}
                        onChange={(e) => onChange(e)}
                    />
                    <input
                        className={`ca_input ${formErrors.res_as_line2}`}
                        type="text"
                        placeholder="Address Line 2"
                        name="res_as_line2"
                        value={res_as_line2}
                        onChange={(e) => onChange(e)}
                    />
                    <div className="ca_div city-item">
                        {/* <select className="ca_select" required>
                            <option value="">Country</option>
                            <option value="1">Russia</option>
                            <option value="2">Germany</option>
                            <option value="3">France</option>
                            <option value="4">Armenia</option>
                            <option value="5">USA</option>
                        </select> */}
                        <input
                            className={`ca_input ${formErrors.res_as_country}`}
                            type="text"
                            placeholder="Country"
                            name="res_as_country"
                            value={res_as_country}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_as_state}`}
                            type="text"
                            placeholder="State"
                            name="res_as_state"
                            value={res_as_state}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_as_district}`}
                            type="text"
                            placeholder="District"
                            name="res_as_district"
                            value={res_as_district}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_as_city}`}
                            type="text"
                            placeholder="City"
                            name="res_as_city"
                            value={res_as_city}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className="ca_input"
                            type="text"
                            placeholder="Landmark/region"
                            name="res_as_landmark"
                            value={res_as_landmark}
                            onChange={(e) => onChange(e)}
                        />
                        <input
                            className={`ca_input ${formErrors.res_as_pin}`}
                            type="text"
                            placeholder="Postal / Zip code"
                            name="res_as_pin"
                            value={res_as_pin}
                            onChange={(e) => onChange(e)}
                        />
                    </div>
                </div>

                <div className="ca_div item">
                    <p className="ca_p">
                        Contact Details<span className="required">*</span>
                    </p>
                </div>

                <div className="ca_div item">
                    <p className="ca_p">
                        Phone<span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.res_mobile_no
                                ? `(${formErrors.res_mobile_no})`
                                : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.res_mobile_err}`}
                        type="text"
                        placeholder="Mobile Number"
                        name="res_mobile_no"
                        value={res_mobile_no}
                        onChange={(e) => onChange(e)}
                    />
                </div>

                <div className="ca_div item">
                    <p className="ca_p">
                        Email<span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.res_email_id
                                ? `(${formErrors.res_email_id})`
                                : null}
                        </span>
                    </p>
                    <input
                        className={`ca_input ${formErrors.res_email_err}`}
                        type="email"
                        name="res_email_id"
                        value={res_email_id}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <h5 className="ca_h5">
                    3. Jurisdiction of the Appellate Tribunal
                </h5>
                <div className="ca_div question">
                    <div className="ca_div question-answer checkbox-item">
                        <div className="ca_div">
                            <p>
                                The appellant declares that the subject matter
                                of the appeal falls within the jurisdiction of
                                the Appellate Tribunal
                            </p>
                        </div>
                    </div>
                </div>
                <div className="ca_div item">
                    <p className="ca_p">
                        Project Registration Number
                        {/* <span className="required">*</span> */}
                        &nbsp;
                        {/* <span className="text-danger">
                            {formErrors.reg_num
                                ? `(${formErrors.reg_num})`
                                : null}
                        </span> */}
                    </p>
                    <input
                        className="ca_input"
                        type="text"
                        placeholder="Project Registration Number"
                        name="reg_num"
                        value={reg_num}
                        onChange={(e) => onChange(e)}
                    />
                </div>
                <h5 className="ca_h5">4. Limitation</h5>
                <div className="ca_div question">
                    <div className="ca_div question-answer checkbox-item">
                        <div className="ca_div">
                            <input
                                className="ca_input"
                                type="checkbox"
                                id="check_4"
                                name="is_limitation_specified"
                                value={is_limitation_specified}
                                checked={is_limitation_specified}
                                onChange={(e) => {
                                    handleCheck(e);
                                    if (!is_limitation_specified) {
                                        setFormData({
                                            ...formData,
                                            is_limitation_specified:
                                                e.target.checked,
                                            reason_for_delay: '',
                                        });
                                    }
                                }}
                            />
                            <label htmlFor="check_4" className="check">
                                <span>
                                    The appellant declares that the appeal is
                                    within the limitation specified in
                                    sub-section (2) of section 44
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="ca_div item">
                    <p className="ca_p">Or</p>
                </div>
                <div className="ca_div item">
                    <p className="ca_p">
                        If the appeal is filed after the expiry of the
                        limitation period specified under sub-section (2) of
                        section 44, specify reasons for delay.
                    </p>
                    <textarea
                        className="ca_textarea"
                        rows="3"
                        name="reason_for_delay"
                        disabled={is_limitation_specified}
                        value={reason_for_delay}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <h5 className="ca_h5">5. Facts of the case</h5>
                <div className="ca_div item">
                    <p className="ca_p">
                        Give concise statement of facts and grounds of appeal
                        against the specific order of the Authority or the
                        Adjudicating Officer, as the case may be passed under.
                        <span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.facts_of_case
                                ? `(${formErrors.facts_of_case})`
                                : null}
                        </span>
                    </p>
                    <textarea
                        className={`ca_textarea ${formErrors.facts_of_case_err}`}
                        rows="6"
                        name="facts_of_case"
                        value={facts_of_case}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <h5 className="ca_h5">6. Grounds of Appeal</h5>
                <div className="ca_div item">
                    <p className="ca_p">
                        Please Specify the grounds of the Appeal.
                        <span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.ground_of_appeal
                                ? `(${formErrors.ground_of_appeal})`
                                : null}
                        </span>
                    </p>
                    <textarea
                        className={`ca_textarea ${formErrors.ground_of_appeal_err}`}
                        rows="6"
                        name="ground_of_appeal"
                        value={ground_of_appeal}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>

                <h5 className="ca_h5">7. Relief(s) sought</h5>
                <div className="ca_div item">
                    <p className="ca_p">
                        Specify the relief(s) sought explaining the grounds of
                        relief(s) and the legal provisions(if any) relied upon.
                        <span className="required">*</span>
                        &nbsp;
                        <span className="text-danger">
                            {formErrors.reliefs_sought
                                ? `(${formErrors.reliefs_sought})`
                                : null}
                        </span>
                    </p>
                    <textarea
                        className={`ca_textarea ${formErrors.reliefs_sought_err}`}
                        rows="6"
                        name="reliefs_sought"
                        value={reliefs_sought}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <h5 className="ca_h5">8. Interim order, if prayed for</h5>
                <div className="ca_div item">
                    <p className="ca_p">
                        Pending final decision on the appeal, the appellant
                        seeks issue of the following interim order: [Give here
                        the nature of the interim order prayed for with reasons]
                    </p>
                    <textarea
                        className="ca_textarea"
                        rows="6"
                        name="interim_order"
                        value={interim_order}
                        onChange={(e) => onChange(e)}
                    ></textarea>
                </div>
                <h5 className="ca_h5">
                    9. Matter not pending with any other court, etc:
                </h5>
                <div className="ca_div question">
                    <p>
                        The appellant further declares that the matter regarding
                        which this appeal has been made, is pending/not pending
                        before any court of law or any other authority or any
                        other Tribunal(s).<span className="required">*</span>
                        <span className="invalid-feedback d-block">
                            {formErrors.is_matter_pending}
                        </span>
                    </p>
                    <div className="question-answer">
                        <input
                            className="ca_input"
                            type="radio"
                            value="1"
                            id="is_matter_pending1"
                            name="is_matter_pending"
                            checked={is_matter_pending === '1'}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <label htmlFor="is_matter_pending1" className="radio">
                            <span>Not Pending</span>
                        </label>
                        <input
                            className="ca_input"
                            type="radio"
                            value="0"
                            id="is_matter_pending0"
                            name="is_matter_pending"
                            checked={is_matter_pending === '0'}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <label htmlFor="is_matter_pending0" className="radio">
                            <span>Pending</span>
                        </label>
                    </div>
                </div>

                <div className="ca_div btn-block">
                    <button onClick={next} className="ca_button">
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateAppealDetails;
