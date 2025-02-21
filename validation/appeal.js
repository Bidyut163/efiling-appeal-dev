const { body } = require('express-validator');

module.exports = [
    body('fullname', 'Please enter a name of the appellant').isLength({
        min: 1,
    }),
    body('ar_line1', 'Please include an address Line 1').isLength({
        min: 1,
    }),
    body('ar_line2', 'Please include an address Line 2').isLength({
        min: 1,
    }),
    body('ar_city', 'Please include a City').isLength({
        min: 1,
    }),
    body('ar_district', 'Please include a District').isLength({
        min: 1,
    }),
    body('ar_pin', 'Please include a valid pin').isLength({
        min: 1,
        max: 10,
    }),
    body('ar_state', 'Please include state').isLength({
        min: 1,
    }),
    body('ar_country', 'Please include country').isLength({
        min: 1,
    }),
    body('as_line1', 'Please include an address Line 1').isLength({
        min: 1,
    }),
    body('as_line2', 'Please include an address Line 2').isLength({
        min: 1,
    }),
    body('as_city', 'Please include City').isLength({
        min: 1,
    }),
    body('as_district', 'Please include District').isLength({
        min: 1,
    }),
    body('as_pin', 'Please include a valid pin').isLength({
        min: 1,
    }),
    body('as_state', 'Please include state').isLength({
        min: 1,
    }),
    body('as_country', 'Please include country').isLength({
        min: 1,
    }),
    body('appellant_mobile_no', 'Please include mobile number').isLength({
        min: 1,
    }),
    body('appellant_email_id', 'Please include a valid email').isLength({
        min: 1,
    }),
    body('res_fullname', 'Please include name of the respondent').isLength({
        min: 1,
    }),
    body('res_ao_line1', 'Please include an address Line 1').isLength({
        min: 1,
    }),
    body('res_ao_line2', 'Please include an address Line 2').isLength({
        min: 1,
    }),
    body('res_ao_city', 'Please include a city').isLength({
        min: 1,
    }),
    body('res_ao_district', 'Please include district').isLength({
        min: 1,
    }),
    body('res_ao_pin', 'Please include pin').isLength({
        min: 1,
    }),
    body('res_ao_state', 'Please include state').isLength({
        min: 1,
    }),
    body('res_ao_country', 'Please include country').isLength({
        min: 1,
    }),
    body('res_as_line1', 'Please include an address Line 1').isLength({
        min: 1,
    }),
    body('res_as_line2', 'Please include an address Line 2').isLength({
        min: 1,
    }),

    body('res_as_city', 'Please include city').isLength({
        min: 1,
    }),
    body('res_as_district', 'Please include district').isLength({
        min: 1,
    }),
    body('res_as_pin', 'Please include pin').isLength({
        min: 1,
    }),
    body('res_as_state', 'Please include state').isLength({
        min: 1,
    }),
    body('res_as_country', 'Please include country').isLength({
        min: 1,
    }),
    body('res_mobile_no', 'Please include a valid mobile number').isLength({
        min: 1,
    }),
    body('res_email_id', 'Please include a valid email').isEmail(),
    // body('reg_num', 'Please include registration number').isLength({
    //     min: 1,
    // }),

    // body('reason_for_delay', 'Please include reasons for delay').isLength({
    //     min: 1,
    // }),
    body('facts_of_case', 'Please include facts of case').isLength({
        min: 1,
    }),
    body('ground_of_appeal', 'Please include grounds of appeal').isLength({
        min: 1,
    }),
    body('reliefs_sought', 'Please include relief sought').isLength({
        min: 1,
    }),
];
