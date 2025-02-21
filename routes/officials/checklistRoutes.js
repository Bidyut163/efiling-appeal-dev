const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');

// Models
const Appeal = require('../../models/Appeal');
const Checklist = require('../../models/Checklist');

// Middlewares
const auth = require('../../middleware/auth');
const isRecepOrReg = require('../../middleware/isRecepOrReg');

// @route POST api/appeals/:id/checklist
// @desc  create checklist (Form A)
// @access Private

router.post('/:id/checklist', auth, isRecepOrReg, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array() });

        let errObj = {};
        errors.array().map((error) => {
            errObj[error.param] = error.msg;
        });
        return res.status(400).json(errObj);
    }

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
    } = req.body;
    const appealId = req.params.id;

    try {
        // See if appeal exits or not
        const existingAppeal = await Appeal.findOne({
            where: { id: appealId },
        });

        if (!existingAppeal) {
            return res.status(400).json({
                msg: 'no existing appeal',
            });
        }

        // See if checklist is already filled
        const existingChecklist = await Checklist.findOne({
            where: { appealId: appealId },
        });

        if (existingChecklist) {
            await Checklist.update(
                {
                    appeal_num: appealNum,
                    complaint_num: complaintNum,
                    appellant: appellant,
                    respondent: respondent,
                    section_num: sectionNum,
                    is_appeal_competent: isAppealCompetent,
                    is_name_address_correct: isNameAddressCorrect,
                    is_ordercopy_attached: isOrdercopyAttached,
                    date_of_order: dateOfOrder || new Date(0),
                    date_of_communication: dateOfCommunication || new Date(0),
                    date_of_application: dateOfApplication || new Date(0),
                    date_on_copy_ready: dateOnCopyReady || new Date(0),
                    date_of_receipt: dateOfReceipt || new Date(0),
                    date_of_filing: dateOfFiling || new Date(0),
                    date_of_submission_hardcopy:
                        dateOfSubmissionHardcopy || new Date(0),
                    is_delay_on_submission: isDelayOnSubmission,
                    amount_of_delay_on_submission: amountOfDelayOnSubmission,
                    is_appeal_filed_within_limitation:
                        isAppealFiledWithinLimitation,
                    is_delay_in_filing: isDelayInFiling,
                    amount_of_delay_in_filing: amountOfDelayInFiling,
                    is_condonation_of_delay_filed: isCondonationOfDelayFiled,
                    objection_for_condonation: objectionForCondonation,
                    is_fees_paid: isFeesPaid,
                    date_of_payment: dateOfPayment || new Date(0),
                    is_pagination_correct: isPaginationCorrect,
                    legible_docs: legibleDocs,
                    is_appeal_memo_annexed: isAppealMemoAnnexed,
                    is_served_by_post: isServedByPost,
                    is_auth_stamped: isAuthStamped,
                    is_email_phone_on_record: isEmailPhoneOnRecord,
                    appealId: appealId,
                },
                { where: { appealId: appealId } }
            );

            const updatedChecklist = await Checklist.findOne({
                where: { appealId: appealId },
            });

            return res.json(updatedChecklist);
        }
        // Create a checklist instance
        const checklist = Checklist.build({
            appeal_num: appealNum,
            complaint_num: complaintNum,
            appellant: appellant,
            respondent: respondent,
            section_num: sectionNum,
            is_appeal_competent: isAppealCompetent,
            is_name_address_correct: isNameAddressCorrect,
            is_ordercopy_attached: isOrdercopyAttached,
            date_of_order: dateOfOrder,
            date_of_communication: dateOfCommunication,
            date_of_application: dateOfApplication,
            date_on_copy_ready: dateOnCopyReady,
            date_of_receipt: dateOfReceipt,
            date_of_filing: dateOfFiling,
            date_of_submission_hardcopy: dateOfSubmissionHardcopy,
            is_delay_on_submission: isDelayOnSubmission,
            amount_of_delay_on_submission: amountOfDelayOnSubmission,
            is_appeal_filed_within_limitation: isAppealFiledWithinLimitation,
            is_delay_in_filing: isDelayInFiling,
            amount_of_delay_in_filing: amountOfDelayInFiling,
            is_condonation_of_delay_filed: isCondonationOfDelayFiled,
            objection_for_condonation: objectionForCondonation,
            is_fees_paid: isFeesPaid,
            date_of_payment: dateOfPayment,
            is_pagination_correct: isPaginationCorrect,
            legible_docs: legibleDocs,
            is_appeal_memo_annexed: isAppealMemoAnnexed,
            is_served_by_post: isServedByPost,
            is_auth_stamped: isAuthStamped,
            is_email_phone_on_record: isEmailPhoneOnRecord,
            appealId: appealId,
        });

        await checklist.save();

        res.json(checklist);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/appeals/:id/checklist
// @desc  View details of filled Checklist (Form A)
// @access Private

router.get('/:id/checklist', auth, isRecepOrReg, async (req, res) => {
    try {
        const checklist = await Checklist.findOne({
            where: {
                appealId: req.params.id,
            },
        });

        res.json(checklist);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
