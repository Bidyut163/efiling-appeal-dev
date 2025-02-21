import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { appellantGetAppeal } from '../../actions/appeal';
import { paymentStatus } from '../../actions/payment';
import { revertCheck } from '../../actions/forward';
import { Link } from 'react-router-dom';

import axios from 'axios';
const fileDownload = require('js-file-download');

const AppealShow = ({
    appellantGetAppeal,
    paymentStatus,
    payment: { status },
    revertCheck,
    forward,
    match,
    appeal: { appeal },
}) => {
    useEffect(() => {
        const { id } = match.params;
        appellantGetAppeal(id);
        paymentStatus(id);
        revertCheck(id);
    }, []);
    return !appeal ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">All Details</h1>
            <p className="mb-4">All the details</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between align-items-center">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Details of the Appeal
                    </h6>
                    <div>
                        {forward.forwardStatus === 'R' &&
                        forward.isWithAppellant ? (
                            <Link
                                className="btn btn-sm btn-primary fw-bold mr-3"
                                to={`/appellant/appeals/${appeal.id}/edit`}
                            >
                                <i className="fa-solid fa-pen-to-square"></i>{' '}
                                Edit Appeal
                            </Link>
                        ) : (
                            <div></div>
                        )}
                        {status && status.status === 'S' ? (
                            <button
                                className="btn btn-sm btn-primary fw-bold mr-3"
                                onClick={async () => {
                                    const res = await axios.get(
                                        `/api/appellant/appeals/${appeal.id}/printreceipt`,
                                        {
                                            responseType: 'blob',
                                        }
                                    );

                                    fileDownload(
                                        res.data,
                                        'receipt-' + appeal.id + '.pdf'
                                    );
                                }}
                            >
                                <i class="fa-solid fa-receipt"></i> Print
                                Receipt
                            </button>
                        ) : (
                            <div></div>
                        )}

                        <button
                            className="btn btn-sm btn-primary fw-bold"
                            onClick={async () => {
                                const res = await axios.get(
                                    `/api/appellant/appeals/${appeal.id}/printappeal`,
                                    {
                                        responseType: 'blob',
                                    }
                                );

                                fileDownload(
                                    res.data,
                                    'appeal-' + appeal.id + '.pdf'
                                );
                            }}
                        >
                            <i className="fa-solid fa-download"></i> Download
                            PDF
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="container mt-5">
                        <section className="section-printout mb-5">
                            <div className="container mt-5">
                                <section className="section-header">
                                    <h5 className="text-center">FORM C</h5>
                                    <h6 className="text-center">
                                        APPEAL TO APPELLATE TRIBUNAL
                                    </h6>
                                    <p className="text-center fw-bold">
                                        Appeal under Section 44
                                    </p>
                                </section>

                                <section className="section-office-use">
                                    <h6>
                                        For Use of Appellate Tribunal's office:
                                    </h6>
                                    <p>Date of filing:</p>
                                    <p>Date of receipt by post:</p>
                                    <p>Registration No.:</p>
                                    <p>Signature:</p>
                                    <p>Authorized Officer:</p>
                                </section>

                                <section className="section-appellant">
                                    <h2 className="text-center text-uppercase fs-5 mb-5">
                                        In the Assam Real Estate Appellate
                                        Tribunal
                                    </h2>
                                    <div className="appeal mb-5">
                                        <p className="fw-bold">Between</p>
                                        <p>
                                            {`${appeal.fullname} `}
                                            <span className="fw-bold">
                                                Appellant(s)
                                            </span>
                                        </p>

                                        <p className="fw-bold">And</p>
                                        <p>
                                            {`${appeal.res_fullname} `}
                                            <span className="fw-bold">
                                                Respondent(s)
                                            </span>
                                        </p>
                                    </div>

                                    <div className="appeal-details">
                                        <h5>Details of Appeal:</h5>

                                        <div className="particulars-appellant mb-5">
                                            <p className="fw-bold">
                                                1. Particulars of the
                                                Appellants:
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (i) Name of the appellant:
                                                </span>
                                                <span>{` ${appeal.fullname} `}</span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (ii) Address of the Existing
                                                    Office/ Residence of the
                                                    Appellant:
                                                </span>
                                                <span>
                                                    {` ${appeal.ar_line1}, ${appeal.ar_line2}, 
                                                     ${appeal.ar_landmark}, ${appeal.ar_city},
                                                     ${appeal.ar_district}, ${appeal.ar_state},
                                                      ${appeal.ar_country}, ${appeal.ar_pin}`}
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (iii) Address for Service of
                                                    all Notices:
                                                </span>
                                                <span>
                                                    {` ${appeal.as_line1}, ${appeal.as_line2}, 
                                                     ${appeal.as_landmark}, ${appeal.as_city},
                                                     ${appeal.as_district}, ${appeal.as_state},
                                                      ${appeal.as_country}, ${appeal.as_pin}`}
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (iv) Contact Details:
                                                </span>
                                                <span className="fw-bold">
                                                    &nbsp;Phone Number:
                                                </span>
                                                <span>{` ${appeal.appellant_mobile_no} `}</span>
                                                ;
                                                <span className="fw-bold">
                                                    &nbsp;Email Address:
                                                </span>
                                                <span>
                                                    {` ${appeal.appellant_email_id} `}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="particulars-respondent mb-5">
                                            <p className="fw-bold">
                                                2. Particulars of the
                                                Respondents:
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (i) Name(s) of Respondent:
                                                </span>
                                                <span>{` ${appeal.res_fullname} `}</span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (ii) Office Address of the
                                                    Respondent:
                                                </span>
                                                <span>
                                                    {` ${appeal.res_ao_line1}, ${appeal.res_ao_line2}, 
                                                     ${appeal.res_ao_landmark}, ${appeal.res_ao_city},
                                                     ${appeal.res_ao_district}, ${appeal.res_ao_state},
                                                      ${appeal.res_ao_country}, ${appeal.res_ao_pin}`}
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (iii) Address for Service of
                                                    all Notices:
                                                </span>
                                                <span>
                                                    {` ${appeal.res_as_line1}, ${appeal.res_as_line2}, 
                                                     ${appeal.res_as_landmark}, ${appeal.res_as_city},
                                                     ${appeal.res_as_district}, ${appeal.res_as_state},
                                                      ${appeal.res_as_country}, ${appeal.res_as_pin}`}
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (iv) Contact Details:
                                                </span>
                                                <span className="fw-bold">
                                                    &nbsp;Phone Number:
                                                </span>
                                                <span>{` ${appeal.res_mobile_no} `}</span>
                                                ;
                                                <span className="fw-bold">
                                                    &nbsp;Email Address:
                                                </span>
                                                <span>
                                                    {` ${appeal.res_email_id} `}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="jurisdiction mb-5">
                                            <p className="fw-bold">
                                                3. Jurisdiction of the Appellant
                                                Tribunal:
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (a) The appellant declares
                                                    that the subject matter of
                                                    the appeal falls within the
                                                    jurisdiction of the
                                                    Appellate Tribunal:
                                                </span>

                                                <span> Yes</span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    Project Registration Number:
                                                </span>
                                                <span>{appeal.reg_num}</span>
                                            </p>
                                        </div>

                                        <div className="limitation mb-5">
                                            <p className="fw-bold">
                                                4. Limition:
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    The appellant declares that
                                                    the appeal is within the
                                                    limitation specified in
                                                    sub-section (2) of section
                                                    44:
                                                </span>

                                                <span>
                                                    {appeal.is_limitation_specified
                                                        ? ' Yes '
                                                        : ' No'}
                                                </span>
                                            </p>
                                            <p className="text-center">OR</p>
                                            <div>
                                                <span className="fw-bold">
                                                    If the appeal is filed after
                                                    the expiry of the limitation
                                                    period specified under
                                                    sub-section (2) of section
                                                    44 specify reasons for
                                                    delay:
                                                </span>
                                                <p>
                                                    {appeal.reason_for_delay
                                                        ? appeal.reason_for_delay
                                                        : ''}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="facts-of-case mb-5">
                                            <p className="fw-bold">
                                                5. Facts of the case :
                                            </p>
                                            <p className="fw-bold">
                                                Give concise statement of facts
                                                and grounds of appeal against
                                                the specific order of the
                                                Authority of the Adjudicating
                                                Officer, as the case may be
                                                passed under:
                                            </p>
                                            <div>
                                                <p
                                                    style={{
                                                        whiteSpace: 'pre-wrap',
                                                    }}
                                                >
                                                    {` ${appeal.facts_of_case} `}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="grounds-of-appeal mb-5">
                                            <p className="fw-bold">
                                                6. Grounds of Appeal :
                                            </p>

                                            <div>
                                                <p
                                                    style={{
                                                        whiteSpace: 'pre-wrap',
                                                    }}
                                                >
                                                    {` ${appeal.ground_of_appeal} `}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="reliefs-sought mb-5">
                                            <p className="fw-bold">
                                                7. Relief(s) sought:
                                            </p>

                                            <p className="fw-bold">
                                                In view of the facts mentioned
                                                in paragraph 5 above, the
                                                appellant prays for the
                                                following relief(s) [Specify
                                                below the relief(s) sought
                                                explaining the grounds of
                                                relief(s) and the legal
                                                provisions(if any) relied upon]:
                                            </p>

                                            <div>
                                                <p
                                                    style={{
                                                        whiteSpace: 'pre-wrap',
                                                    }}
                                                >
                                                    {` ${appeal.reliefs_sought} `}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="interim-order mb-5">
                                            <p className="fw-bold">
                                                8. Interim order, if prayed for:
                                            </p>

                                            <p className="fw-bold">
                                                Pending final decision on the
                                                appeal, the appellant seeks
                                                issue of the following interim
                                                order: [Give here the nature of
                                                the interim order prayed for
                                                with reasons]:
                                            </p>

                                            <div>
                                                <p
                                                    style={{
                                                        whiteSpace: 'pre-wrap',
                                                    }}
                                                >
                                                    {` ${appeal.interim_order} `}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="pending-matter mb-5">
                                            <p className="fw-bold">
                                                9. Matter not pending with any
                                                other court, etc:
                                            </p>

                                            <p>
                                                <span className="fw-bold">
                                                    The appellant further
                                                    declares that the matter
                                                    regarding which this appeal
                                                    has been made, is not
                                                    pending before any court of
                                                    law or any other authority
                                                    or any other Tribunal(s):
                                                </span>
                                                <span>
                                                    {appeal.is_matter_pending
                                                        ? ' Yes '
                                                        : ' No'}
                                                </span>
                                            </p>
                                        </div>

                                        <div className="fees-amount mb-5">
                                            <p className="fw-bold">
                                                10. Particulars of the fee in
                                                terms of sub-rule A(1) of rule 9
                                                :
                                            </p>

                                            <p>
                                                <span className="fw-bold">
                                                    {' '}
                                                    (i) Amount:
                                                </span>
                                                <span> 1000</span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    {' '}
                                                    (i) Mode:
                                                </span>
                                                <span> Online</span>
                                            </p>
                                        </div>

                                        <div className="list-enclosures mb-5">
                                            <p className="fw-bold">
                                                11.List of enclosures :
                                            </p>

                                            <p>
                                                <span className="fw-bold">
                                                    (i) An attested true copy of
                                                    the order against which the
                                                    appeal is filed
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (ii) Copies of the documents
                                                    relied upon by the appellant
                                                    and referred to in the
                                                    appeal
                                                </span>
                                            </p>
                                            <p>
                                                <span className="fw-bold">
                                                    (iii) An index of the
                                                    documents
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="verification">
                                        <p className="text-center fs-5 fw-bold text-uppercase">
                                            verification
                                        </p>

                                        <p className="fw-bold mb-5">
                                            I________________________________________
                                            (name in full block letters)
                                            son/daughter of
                                            ______________________________________
                                            do hereby verify that the contents
                                            of paragraphs (1 to 10) are true to
                                            my personal knowledge and belief and
                                            that I have not suppressed any
                                            material fact(s).
                                        </p>

                                        <div className="signature d-flex justify-content-md-between">
                                            <div className="date-place">
                                                <div className="date fw-bold">
                                                    Date: 14-5-2022
                                                </div>
                                                <div className="place fw-bold">
                                                    Place: Guwahati
                                                </div>
                                            </div>
                                            <div className="signature">
                                                <p className="fw-bold">
                                                    Signature of the Appellants
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        appeal: state.appeal,
        forward: state.forward,
        payment: state.payment,
    };
};

export default connect(mapStateToProps, {
    appellantGetAppeal,
    paymentStatus,
    revertCheck,
})(AppealShow);
