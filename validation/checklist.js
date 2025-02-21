const { body } = require('express-validator');

module.exports = [
    body('appealNum', 'Please enter a appeal number').isLength({ min: 1 }),
    body('complaintNum', 'Please enter a complaint number').isLength({
        min: 1,
    }),
    body('appellant', 'Please enter appellant name').isLength({ min: 1 }),
    body('respondent', 'Please enter respondent name').isLength({
        min: 1,
    }),
    body('sectionNum', 'Please mention section number').isLength({
        min: 1,
    }),
    // body('isAppealCompetent', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isNameAddressCorrect', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isOrdercopyAttached', 'Please select a response').isLength({
    //     min: 1,
    // }),
    body('dateOfOrder', 'This field is required').isLength({
        min: 1,
    }),
    body('dateOfCommunication', 'This field is required').isLength({
        min: 1,
    }),
    body('dateOfApplication', 'This field is required').isLength({
        min: 1,
    }),
    body('dateOnCopyReady', 'This field is required').isLength({
        min: 1,
    }),
    body('dateOfReceipt', 'This field is required').isLength({ min: 1 }),
    body('dateOfFiling', 'This field is required').isLength({
        min: 1,
    }),
    body('dateOfSubmissionHardcopy', 'This field is required').isLength({
        min: 1,
    }),
    // body('isDelayOnSubmission', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isAppealFiledWithinLimitation', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isDelayInFiling', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isCondonationOfDelayFiled', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isFeesPaid', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isPaginationCorrect', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isAppealMemoAnnexed', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isServedByPost', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isAuthStamped', 'Please select a response').isLength({
    //     min: 1,
    // }),
    // body('isEmailPhoneOnRecord', 'Please select a response').isLength({
    //     min: 1,
    // }),
];
