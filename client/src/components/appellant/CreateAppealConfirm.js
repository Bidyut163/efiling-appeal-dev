import React from 'react';
import './CreateAppealConfirm.css';

const CreateAppealConfirm = ({ prevStep, values, onSubmit }) => {
    return (
        <div className="receipt-content">
            <div className="container bootstrap snippets bootdey">
                <div className="row">
                    <div className="col-md-12">
                        <div className="invoice-wrapper">
                            <div className="intro">
                                <strong>
                                    1. Particulars of the Appellants:
                                </strong>
                                <br />
                            </div>

                            <div className="appeal-info">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>Name of the Appellant</strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <strong>{` ${values.fullname}`}</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>
                                            Address of the Existing Office/
                                            Residence of the Appellant
                                        </strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>
                                            {values.ar_line1}
                                            <br />
                                            {values.ar_line2}
                                            <br />
                                            {values.ar_landmark}{' '}
                                            {values.ar_city}{' '}
                                            {values.ar_district} <br />
                                            {values.ar_state}{' '}
                                            {values.ar_country} {values.ar_pin}{' '}
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>
                                            Address for Service of all Notices
                                        </strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>
                                            {values.as_line1}
                                            <br />
                                            {values.as_line2}
                                            <br />
                                            {values.as_landmark}{' '}
                                            {values.as_city}{' '}
                                            {values.as_district} <br />
                                            {values.as_state}{' '}
                                            {values.as_country} {values.as_pin}{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>Contact Details</strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>
                                            <strong>Phone Number</strong>:
                                            &nbsp;{values.appellant_mobile_no}{' '}
                                            <br />
                                            <strong> Email Address</strong>:
                                            &nbsp;{values.appellant_email_id}
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div>
                                    <div className="intro">
                                        <strong>
                                            2. Particulars of the Respondents:
                                        </strong>
                                        <br />
                                    </div>
                                    <div className="appeal-info">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <strong>
                                                    Name of the Respondent
                                                </strong>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                <strong>{` ${values.res_fullname} `}</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>
                                            Office Address of the Respondent
                                        </strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>
                                            {values.res_ao_line1}
                                            <br />
                                            {values.res_ao_line2}
                                            <br />
                                            {values.res_ao_landmark}{' '}
                                            {values.res_ao_city}{' '}
                                            {values.res_ao_district} <br />
                                            {values.res_ao_state}{' '}
                                            {values.res_ao_country}{' '}
                                            {values.res_ao_pin}{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>
                                            Address for Service of all Notices
                                        </strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>
                                            {values.res_as_line1}
                                            <br />
                                            {values.res_as_line2}
                                            <br />
                                            {values.res_as_landmark}{' '}
                                            {values.res_as_city}{' '}
                                            {values.res_as_district} <br />
                                            {values.res_as_state}{' '}
                                            {values.res_as_country}{' '}
                                            {values.res_as_pin}{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>Contact Details</strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <p>
                                            <strong>Phone Number</strong>:
                                            &nbsp;{values.res_mobile_no} <br />
                                            <strong> Email Address</strong>:
                                            &nbsp;{values.res_email_id}
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details">
                                <div>
                                    <div className="intro">
                                        <strong>
                                            3. Jurisdiction of the Appellate
                                            Tribunal:
                                        </strong>
                                        <br />
                                    </div>
                                    <div className="appeal-info">
                                        <div className="row">
                                            <div className="col-sm-6 mb-3">
                                                <strong>
                                                    (a) The appellant declares
                                                    that the subject matter of
                                                    the appeal falls within the
                                                    jurisdiction of the
                                                    Appellate Tribunal
                                                </strong>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                <strong>Yes</strong>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <strong>
                                                    Project Registration Number
                                                </strong>
                                            </div>
                                            <div className="col-sm-6 text-right">
                                                <strong>
                                                    {values.reg_num}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="appeal-details"></div>
                                </div>
                            </div>

                            <div className="intro">
                                <strong>4. Limition:</strong>
                                <br />
                            </div>

                            <div className="appeal-info">
                                <div className="row">
                                    <div className="col-sm-6 mb-3">
                                        <strong>
                                            The appellant declares that the
                                            appeal is within the limitation
                                            specified in sub-section (2) of
                                            section 44
                                        </strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <strong>
                                            {values.is_limitation_specified
                                                ? ' Yes '
                                                : ' No'}
                                        </strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 mb-3">
                                        <strong>OR</strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <strong></strong>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <strong>
                                            If the appeal is filed after the
                                            expiry of the limitation period
                                            specified under sub-section (2) of
                                            section 44, specify reasons for
                                            delay:
                                        </strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <strong>
                                            {values.reason_for_delay
                                                ? values.reason_for_delay
                                                : ''}
                                        </strong>
                                    </div>
                                </div>
                            </div>

                            <div className="appeal-details"></div>

                            <div className="intro">
                                <strong>5. Facts of the case :</strong>
                                <br />
                            </div>

                            <div className="appeal-info">
                                <div className="row mb-3">
                                    <strong>
                                        Give concise statement of facts and
                                        grounds of appeal against the specific
                                        order of the Authority or the
                                        Adjudicating Officer, as the case may be
                                        passed under:
                                    </strong>
                                </div>
                                <div className="row">
                                    <p
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {values.facts_of_case}
                                    </p>
                                </div>
                            </div>

                            <div className="appeal-details"></div>

                            <div className="intro">
                                <strong>6. Grounds of Appeal :</strong>
                                <br />
                            </div>

                            <div className="appeal-info">
                                <div className="row">
                                    <p
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {values.ground_of_appeal}
                                    </p>
                                </div>
                            </div>
                            <div className="appeal-details"></div>

                            <div className="intro">
                                <strong>7. Relief(s) sought :</strong>
                                <br />
                            </div>
                            <div className="appeal-info">
                                <div className="row mb-3">
                                    <strong>
                                        In view of the facts mentioned in
                                        paragraph 5 above, the appellant prays
                                        for the following relief(s) [Specify
                                        below the relief(s) sought explaining
                                        the grounds of relief(s) and the legal
                                        provisions(if any) relied upon]:
                                    </strong>
                                </div>
                                <div className="row">
                                    <p
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {values.reliefs_sought}
                                    </p>
                                </div>
                            </div>
                            <div className="appeal-details"></div>

                            <div className="intro">
                                <strong>
                                    8. Interim order, if prayed for :
                                </strong>
                                <br />
                            </div>
                            <div className="appeal-info">
                                <div className="row mb-3">
                                    <strong>
                                        Pending final decision on the appeal,
                                        the appellant seeks issue of the
                                        following interim order: [Give here the
                                        nature of the interim order prayed for
                                        with reasons]:
                                    </strong>
                                </div>
                                <div className="row">
                                    <p
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                        }}
                                    >
                                        {values.interim_order}
                                    </p>
                                </div>
                            </div>
                            <div className="appeal-details"></div>
                            <div className="intro">
                                <strong>
                                    9. Matter not pending with any other court,
                                    etc :
                                </strong>
                                <br />
                            </div>
                            <div className="appeal-info">
                                <div className="row">
                                    <div className="col-sm-6 mb-3">
                                        <strong>
                                            The appellant further declares that
                                            the matter regarding which this
                                            appeal has been made, is pending/not
                                            pending before any court of law or
                                            any other authority or any other
                                            Tribunal(s):
                                        </strong>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <strong>
                                            {values.is_matter_pending === '1'
                                                ? ' Not Pending '
                                                : ' Pending'}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                            <div className="appeal-details"></div>
                            <button
                                className="btn btn-outline-success mr-3"
                                onClick={onSubmit}
                            >
                                Confirm and Submit
                            </button>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={prevStep}
                            >
                                Previous
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAppealConfirm;
