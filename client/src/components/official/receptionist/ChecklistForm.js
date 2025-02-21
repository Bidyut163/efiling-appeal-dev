import React from 'react';

const ChecklistForm = ({
    formData,
    onChange,
    onSubmit,
    formError,
    setFormData,
}) => {
    const {
        appealNum,
        complaintNum,
        appellant,
        respondent,
        sectionNum,
        isAppealCompetent,
        isNameAddressCorrect,
        isOrdercopyAttached,
        dateOfOrder,
        dateOfCommunication,
        dateOfApplication,
        dateOnCopyReady,
        dateOfReceipt,
        dateOfFiling,
        dateOfSubmissionHardcopy,
        isDelayOnSubmission,
        amountOfDelayOnSubmission,
        isAppealFiledWithinLimitation,
        isDelayInFiling,
        amountOfDelayInFiling,
        isCondonationOfDelayFiled,
        objectionForCondonation,
        isFeesPaid,
        dateOfPayment,
        isPaginationCorrect,
        legibleDocs,
        isAppealMemoAnnexed,
        isServedByPost,
        isAuthStamped,
        isEmailPhoneOnRecord,
    } = formData;

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Checklist - FORM A</h1>
            <p className="mb-4">Checklist for Scrutiny Appeal</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3"></div>
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

                        <form className="row g-4" onSubmit={(e) => onSubmit(e)}>
                            <div className="col-md-2">
                                <label
                                    htmlFor="appealNum"
                                    className="form-label"
                                >
                                    <b>Appeal No.</b>
                                </label>
                            </div>

                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="appealNum"
                                    name="appealNum"
                                    value={appealNum}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.appealNum}
                                </p>
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
                                <input
                                    type="text"
                                    className="form-control"
                                    id="complaintNum"
                                    name="complaintNum"
                                    value={complaintNum}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.complaintNum}
                                </p>
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>Parties:</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Appellants"
                                    name="appellant"
                                    value={appellant}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.appellant}
                                </p>
                            </div>

                            <div className="col-md-2">
                                <label className="form-label">
                                    <b>vs</b>
                                </label>
                            </div>

                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Respondent"
                                    name="respondent"
                                    value={respondent}
                                    onChange={(e) => onChange(e)}
                                />
                                <p className="invalid-feedback d-block">
                                    {formError.respondent}
                                </p>
                            </div>

                            <div className="col-md-6">
                                <label
                                    htmlFor="legalProvisions"
                                    className="form-label"
                                >
                                    1. Legal Provisions:U/sec.
                                </label>
                            </div>

                            <div className="col-md-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="legalProvisions"
                                    name="sectionNum"
                                    value={sectionNum}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="legalProvisions">
                                    of RERA ACT
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label
                                    className="form-label"
                                    htmlFor="isAppealCompetent"
                                >
                                    2. Whether the appeal is competent
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAppealCompetent"
                                    value="1"
                                    id="isAppealCompetent1"
                                    checked={isAppealCompetent === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAppealCompetent1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAppealCompetent"
                                    value="0"
                                    id="isAppealCompetent0"
                                    checked={isAppealCompetent === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAppealCompetent0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    3. Whether the name of the parties and their
                                    addresses are properly mentioned in the
                                    Appeal Memo
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isNameAddressCorrect"
                                    value="1"
                                    id="isNameAddressCorrect1"
                                    checked={isNameAddressCorrect === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isNameAddressCorrect1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isNameAddressCorrect"
                                    value="0"
                                    id="isNameAddressCorrect0"
                                    checked={isNameAddressCorrect === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isNameAddressCorrect0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    4. Whether the copy of impugned
                                    order/Judgement is filed with the appeal
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isOrdercopyAttached"
                                    value="1"
                                    id="isOrdercopyAttached1"
                                    checked={isOrdercopyAttached === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isOrdercopyAttached1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isOrdercopyAttached"
                                    value="0"
                                    id="isOrdercopyAttached0"
                                    checked={isOrdercopyAttached === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isOrdercopyAttached0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-12">
                                <label className="form-label">
                                    5. What is the
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfOrder"
                                    className="form-label"
                                >
                                    a. Date of order
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfOrder"
                                    name="dateOfOrder"
                                    value={dateOfOrder}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfCommunication"
                                    className="form-label"
                                >
                                    b. Date of communication to the party by
                                    RERA
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfCommunication"
                                    name="dateOfCommunication"
                                    value={dateOfCommunication}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfApplication"
                                    className="form-label"
                                >
                                    c. Date of application for the certified
                                    copy
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfApplication"
                                    name="dateOfApplication"
                                    value={dateOfApplication}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfCopy"
                                    className="form-label"
                                >
                                    d. Date on which the copy was ready
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfCopy"
                                    name="dateOnCopyReady"
                                    value={dateOnCopyReady}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfReceipt"
                                    className="form-label"
                                >
                                    e. Date of receipt of certified copy
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfReceipt"
                                    name="dateOfReceipt"
                                    value={dateOfReceipt}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfOnline"
                                    className="form-label"
                                >
                                    f. Date of online filling of appeal
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfOnline"
                                    name="dateOfFiling"
                                    value={dateOfFiling}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfSubmissionHardcopy"
                                    className="form-label"
                                >
                                    g. Date of submission of hard copy of Appeal
                                    Memo
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfSubmissionHardcopy"
                                    name="dateOfSubmissionHardcopy"
                                    value={dateOfSubmissionHardcopy}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    h. Whether there is any delay in submission
                                    of hard copy of Appeal Memo:
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDelayOnSubmission"
                                    value="1"
                                    id="isDelayOnSubmission1"
                                    checked={isDelayOnSubmission === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isDelayOnSubmission1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDelayOnSubmission"
                                    value="0"
                                    id="isDelayOnSubmission0"
                                    checked={isDelayOnSubmission === '0'}
                                    onChange={(e) => {
                                        onChange(e);
                                        setFormData({
                                            ...formData,
                                            isDelayOnSubmission: '0',
                                            amountOfDelayOnSubmission: '',
                                        });
                                    }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isDelayOnSubmission0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label htmlFor="days" className="form-label">
                                    if yes,how many days
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="days"
                                    disabled={
                                        isDelayOnSubmission === '0' ||
                                        isDelayOnSubmission === ''
                                            ? true
                                            : false
                                    }
                                    name="amountOfDelayOnSubmission"
                                    value={amountOfDelayOnSubmission}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    6. Is appeal filed within limitation(60)
                                    days (from the date of receipt of order)
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAppealFiledWithinLimitation"
                                    value="1"
                                    id="isAppealFiledWithinLimitation1"
                                    checked={
                                        isAppealFiledWithinLimitation === '1'
                                    }
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAppealFiledWithinLimitation1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAppealFiledWithinLimitation"
                                    value="0"
                                    id="isAppealFiledWithinLimitation0"
                                    checked={
                                        isAppealFiledWithinLimitation === '0'
                                    }
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAppealFiledWithinLimitation0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    7. Whether there is any delay in filing of
                                    appeal
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDelayInFiling"
                                    value="1"
                                    id="isDelayInFiling1"
                                    checked={isDelayInFiling === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isDelayInFiling1"
                                >
                                    Yes
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isDelayInFiling"
                                    value="0"
                                    id="isDelayInFiling0"
                                    checked={isDelayInFiling === '0'}
                                    onChange={(e) => {
                                        onChange(e);
                                        setFormData({
                                            ...formData,
                                            isDelayInFiling: '0',
                                            amountOfDelayInFiling: '',
                                        });
                                    }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isDelayInFiling0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="delayDays"
                                    className="form-label"
                                >
                                    if yes,how many days
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="delayDays"
                                    disabled={
                                        isDelayInFiling === '0' ||
                                        isDelayInFiling === ''
                                            ? true
                                            : false
                                    }
                                    name="amountOfDelayInFiling"
                                    value={amountOfDelayInFiling}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    8. Whether application for condonation of
                                    delay is filed with appeal
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCondonationOfDelayFiled"
                                    value="1"
                                    id="isCondonationOfDelayFiled1"
                                    checked={isCondonationOfDelayFiled === '1'}
                                    onChange={(e) => {
                                        onChange(e);
                                        setFormData({
                                            ...formData,
                                            isCondonationOfDelayFiled: '1',
                                            objectionForCondonation: '',
                                        });
                                    }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isCondonationOfDelayFiled1"
                                >
                                    Yes
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isCondonationOfDelayFiled"
                                    value="0"
                                    id="isCondonationOfDelayFiled0"
                                    checked={isCondonationOfDelayFiled === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isCondonationOfDelayFiled0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="objection"
                                    className="form-label"
                                >
                                    If not, raise its objection
                                </label>
                            </div>

                            <div className="col-md-6">
                                <textarea
                                    className="form-control"
                                    id="objection"
                                    rows="3"
                                    disabled={
                                        isCondonationOfDelayFiled === '1' ||
                                        isCondonationOfDelayFiled === ''
                                            ? true
                                            : false
                                    }
                                    name="objectionForCondonation"
                                    value={objectionForCondonation}
                                    onChange={(e) => onChange(e)}
                                ></textarea>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    9. Whether requisite fees paid
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isFeesPaid"
                                    value="1"
                                    id="isFeesPaid1"
                                    checked={isFeesPaid === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isFeesPaid1"
                                >
                                    Yes
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isFeesPaid"
                                    value="0"
                                    id="isFeesPaid0"
                                    checked={isFeesPaid === '0'}
                                    onChange={(e) => {
                                        onChange(e);
                                        setFormData({
                                            ...formData,
                                            isFeesPaid: '0',
                                            dateOfPayment: new Date(0),
                                        });
                                    }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isFeesPaid0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label
                                    htmlFor="dateOfPayment"
                                    className="form-label"
                                >
                                    if yes,date of payment
                                </label>
                            </div>

                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dateOfPayment"
                                    disabled={
                                        isFeesPaid === '0' || isFeesPaid === ''
                                            ? true
                                            : false
                                    }
                                    name="dateOfPayment"
                                    value={dateOfPayment}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    10. Whether the required documents are
                                    filled with Index & Pagination
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPaginationCorrect"
                                    value="1"
                                    id="isPaginationCorrect1"
                                    checked={isPaginationCorrect === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isPaginationCorrect1"
                                >
                                    Yes
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isPaginationCorrect"
                                    value="0"
                                    id="isPaginationCorrect0"
                                    checked={isPaginationCorrect === '0'}
                                    onChange={(e) => {
                                        onChange(e);
                                        setFormData({
                                            ...formData,
                                            isPaginationCorrect: '0',
                                            legibleDocs: '',
                                        });
                                    }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isPaginationCorrect0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label htmlFor="legible" className="form-label">
                                    If yes, whether the documents are legible
                                </label>
                            </div>

                            <div className="col-md-6">
                                <textarea
                                    className="form-control"
                                    id="legible"
                                    rows="3"
                                    disabled={
                                        isPaginationCorrect === '0' ||
                                        isPaginationCorrect === ''
                                            ? true
                                            : false
                                    }
                                    name="legibleDocs"
                                    value={legibleDocs}
                                    onChange={(e) => onChange(e)}
                                ></textarea>
                            </div>

                            <div className="col-12">
                                <label htmlFor="11.">11.</label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    i. Whether copy of Appeal Memo is annexed
                                    for giving the same to the other side
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAppealMemoAnnexed"
                                    value="1"
                                    id="isAppealMemoAnnexed1"
                                    checked={isAppealMemoAnnexed === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAppealMemoAnnexed1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAppealMemoAnnexed"
                                    value="0"
                                    id="isAppealMemoAnnexed0"
                                    checked={isAppealMemoAnnexed === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAppealMemoAnnexed0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-1"></div>

                            <div className="col-md-5">
                                <label className="form-label">
                                    ii. Or served to other side by post/courier
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isServedByPost"
                                    value="1"
                                    id="isServedByPost1"
                                    checked={isServedByPost === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isServedByPost1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isServedByPost"
                                    value="0"
                                    id="isServedByPost0"
                                    checked={isServedByPost === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isServedByPost0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    12. Whether Vakalatnama/ Authorization is
                                    filed and properly stamped
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAuthStamped"
                                    value="1"
                                    id="isAuthStamped1"
                                    checked={isAuthStamped === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAuthStamped1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isAuthStamped"
                                    value="0"
                                    id="isAuthStamped0"
                                    checked={isAuthStamped === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isAuthStamped0"
                                >
                                    No
                                </label>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">
                                    13. Whether e-mail/phone/Mobile No. is on
                                    record
                                </label>
                            </div>

                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isEmailPhoneOnRecord"
                                    value="1"
                                    id="isEmailPhoneOnRecord1"
                                    checked={isEmailPhoneOnRecord === '1'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isEmailPhoneOnRecord1"
                                >
                                    Yes
                                </label>
                            </div>
                            <div className="col-md-3 form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="isEmailPhoneOnRecord"
                                    value="0"
                                    id="isEmailPhoneOnRecord0"
                                    checked={isEmailPhoneOnRecord === '0'}
                                    onChange={(e) => onChange(e)}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="isEmailPhoneOnRecord0"
                                >
                                    No
                                </label>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-success btn-icon-split">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-check"></i>
                                    </span>
                                    <span className="text">Submit Form A</span>
                                </button>
                                <div className="my-2"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChecklistForm;
