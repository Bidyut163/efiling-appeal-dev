import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
const fileDownload = require('js-file-download');

const ChecklistShow = ({ checklist }) => {
    const radioValue = (value) => {
        switch (value) {
            case '':
                return '';
            case '1':
                return 'Yes';
            case '0':
                return 'No';
        }
    };
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Checklist - FORM A</h1>
            <p className="mb-4">Checklist for Scrutiny of Appeal</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between align-items-center">
                    <h6 className="m-0 font-weight-bold ">CHECKLIST</h6>
                    <div>
                        <Link
                            to={`/official/registrar/appeals/${checklist.appealId}/checklist/edit`}
                            className="btn btn-sm btn-primary btn-icon-split mr-3"
                        >
                            <span className="icon text-white-50">
                                <i className="fas fa-flag"></i>
                            </span>
                            <span className="text">Edit Form A</span>
                        </Link>
                        <button
                            className="btn btn-sm btn-primary fw-bold"
                            onClick={async () => {
                                const res = await axios.get(
                                    `/api/registrar/checklist/${checklist.id}/print`,
                                    {
                                        responseType: 'blob',
                                    }
                                );

                                fileDownload(
                                    res.data,
                                    'checklist-' + checklist.id + '.pdf'
                                );
                            }}
                        >
                            <i className="fa-solid fa-download"></i> Download
                            PDF
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row g-3">
                        <div className="col-12">
                            <h4 className="text-center fw-bold">FORM A</h4>
                        </div>

                        <div className="col-12">
                            <h4 className="text-center">
                                CHECKLIST FOR SCRUTINY OF APPEAL
                            </h4>
                        </div>

                        <form className="row g-4">
                            <div className="col-md-2">
                                <label
                                    htmlFor="appealNum"
                                    className="form-label"
                                >
                                    <b>Appeal No.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <h6>{checklist.appeal_num}</h6>
                            </div>

                            <div className="col-md-2">
                                <label
                                    htmlFor="complaintNum"
                                    className="form-label"
                                >
                                    <b>Complaint No.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <h6>{checklist.complaint_num}</h6>
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>Parties:</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <h6>{checklist.appellant}</h6>
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>Vs</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <h6>{checklist.respondent}</h6>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    <b>1. Legal provisions: U/sec.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <h6>{checklist.section_num}</h6>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label">
                                    <b>of RERA ACT</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>2. Whether the appeal is competent:</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(checklist.is_appeal_competent)}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        3. Whether the name of the parties and
                                        their addresses are properly mentioned
                                        in the Appeal Memo
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_name_address_correct
                                    )}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        4. Whether certified copy of impugned
                                        Order/Judgment is filed with the appeal
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_ordercopy_attached
                                    )}
                                </h6>
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">
                                    <b>5. What is the :</b>
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>a) Date of the order :-</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_of_order === '1970-01-01'
                                        ? ''
                                        : checklist.date_of_order}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        b) Date of its communication to the
                                        party by RERA :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_of_communication ===
                                    '1970-01-01'
                                        ? ''
                                        : checklist.date_of_communication}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        c) Date of application for certified
                                        copy :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_of_application ===
                                    '1970-01-01'
                                        ? ''
                                        : checklist.date_of_application}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>d) Date on which copy was ready :-</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_on_copy_ready ===
                                    '1970-01-01'
                                        ? ''
                                        : checklist.date_on_copy_ready}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        e) Date of receipt of certified copy :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_of_receipt === '1970-01-01'
                                        ? ''
                                        : checklist.date_of_receipt}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        f) Date of Online filling of appeal :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_of_filing === '1970-01-01'
                                        ? ''
                                        : checklist.date_of_filing}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        g) Date of submission of hard copy of
                                        Appeal Memo :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_of_submission_hardcopy ===
                                    '1970-01-01'
                                        ? ''
                                        : checklist.date_of_submission_hardcopy}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        h) Whether there is any delay in
                                        submission of hard copy of Appeal Memo :
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_delay_on_submission
                                    )}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>If yes,how many days :-</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.amount_of_delay_on_submission}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        6. Is appeal filed within limitation(60)
                                        days (from the date of receipt of order)
                                        :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_appeal_filed_within_limitation
                                    )}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        7. Whether there is any delay in filing
                                        of appeal :
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(checklist.is_delay_in_filing)}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>If yes,how many days :-</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>{checklist.amount_of_delay_in_filing}</h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        8. Whether application for condonation
                                        of delay is filed with appeal :
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_condonation_of_delay_filed
                                    )}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>If not, raise its objection.</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>{checklist.objection_for_condonation}</h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>9. Whether requisite fees paid :-</b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>{radioValue(checklist.is_fees_paid)}</h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        If yes, copy of the receipt & date of
                                        payment :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {checklist.date_of_payment === '1970-01-01'
                                        ? ''
                                        : checklist.date_of_payment}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        10. Whether the required documents are
                                        filled with Index & pagination :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_pagination_correct
                                    )}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        If yes, whether the documents are
                                        legible :-
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>{checklist.legible_docs}</h6>
                            </div>

                            <div className="col-md-12">
                                <label className="form-label">
                                    <b>11.</b>
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        i) Whether copy of appeal memo is
                                        annexed for giving the same to the other
                                        side :
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_appeal_memo_annexed
                                    )}
                                </h6>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    <b>
                                        ii) Or served to other side by
                                        post/courier
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(checklist.is_served_by_post)}
                                </h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        12. Whether Vakalatnama/ Authorization
                                        is filed and properly stamped
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>{radioValue(checklist.is_auth_stamped)}</h6>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    <b>
                                        13. Whether e-mail/phone/Mobile No. is
                                        on record :
                                    </b>
                                </label>
                            </div>

                            <div className="col-md-6">
                                <h6>
                                    {radioValue(
                                        checklist.is_email_phone_on_record
                                    )}
                                </h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChecklistShow;
