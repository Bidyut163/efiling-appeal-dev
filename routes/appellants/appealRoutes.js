const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const validateInputAppeal = require('../../validation/appeal');
const appealPdf = require('../../documents/appealPdf');
const invoice = require('../../documents/invoice');

const fs = require('fs');
const path = require('path');

// Middlewares
const auth = require('../../middleware/auth');

// PdfKit
const PDFDocument = require('pdfkit');

//  Model
const Appeal = require('../../models/Appeal');
const AppealState = require('../../models/AppealState');
const BenchAppeal = require('../../models/BenchAppeal');
const Forward = require('../../models/Forward');
const Payment = require('../../models/Payment');

// @route Post api/appellant/appeals
// @desc  Create an  Appeal
// @access Private

router.post('/appeals', validateInputAppeal, auth, async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // return res.status(400).json({ errors: errors.array() });
        let errObj = {};
        errors.array().map((error) => {
            errObj[error.param] = error.msg;
        });
        return res.status(400).json(errObj);
    }

    // for file upload
    const doc = req.file;

    if (!doc) {
        return res.status(422).json({ msg: 'Attached file is not a pdf' });
    }

    const docUrl = doc.path;

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
    } = req.body;
    const appellantId = req.user.id;

    try {
        const appeal = Appeal.build({
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
            docUrl,
            appellantId,
        });

        await appeal.save();

        const appealState = AppealState.build({
            appellant: 1,
            receptionist: 0,
            registrar: 0,
            bench: 0,
            appealId: appeal.id,
        });

        await appealState.save();

        res.json(appeal);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route PATCH api/appellant/appeals/:appealId
// @desc  Update an  Appeal
// @access Private

router.patch(
    '/appeals/:appealId',
    validateInputAppeal,
    auth,
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // return res.status(400).json({ errors: errors.array() });
            let errObj = {};
            errors.array().map((error) => {
                errObj[error.param] = error.msg;
            });
            return res.status(400).json(errObj);
        }

        // existing appeal
        const existingAppeal = await Appeal.findOne({
            where: { id: req.params.appealId },
        });

        if (!existingAppeal) {
            return res.status(400).json({
                msg: 'no existing appeal',
            });
        }

        // check if the existing appeal belongs to the appellant
        if (existingAppeal && existingAppeal.appellantId !== req.user.id) {
            return res.status(400).json({
                msg: 'no such appeal belongs to the appellant',
            });
        }

        // check if the appeal is reverted

        // check for appealstate
        const appealState = await AppealState.findOne({
            where: {
                appealId: req.params.appealId,
            },
        });

        // console.log(appealState.get({ plain: true }).appellant);

        // check for forward table status
        const forward = await Forward.findOne({
            where: {
                appealId: req.params.appealId,
            },
        });

        // console.log(forward.get({ plain: true }).processStatus);

        // check if the appeal is with appellant and status is 'R'(reverted)
        if (
            appealState.get({ plain: true }).appellant &&
            forward &&
            forward.get({ plain: true }).processStatus === 'R'
        ) {
            // for file upload
            const doc = req.file;

            let docUrl;
            if (!doc) {
                // return res.status(422).json({ msg: 'Attached file is not a pdf' });
                docUrl = existingAppeal.docUrl;
            } else {
                docUrl = doc.path;
            }

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
            } = req.body;
            // const appellantId = req.user.id;

            try {
                await Appeal.update(
                    {
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
                        docUrl,
                        // appellantId,
                    },
                    { where: { id: req.params.appealId } }
                );

                // check payment status
                const payment = await Payment.findAll({
                    where: { appealId: req.params.appealId },
                });

                // return an array of payment
                const paymentArray = payment.map((payment) => {
                    return payment.get({ plain: true });
                });

                // find payment with status 'S'
                const successPayment = paymentArray.filter((payment) => {
                    return payment.status === 'S';
                });

                if (successPayment.length !== 0) {
                    await AppealState.update(
                        {
                            appellant: 0,
                            receptionist: 1,
                            registrar: 0,
                            bench: 0,
                        },
                        { where: { appealId: req.params.appealId } }
                    );
                }

                res.json({ msg: 'appeal updated' });
            } catch (err) {
                console.log(err.message);
                res.status(500).send('Server Error');
            }
        } else {
            res.json({ msg: 'Cannot update appeal' });
        }
    }
);

// @route GET api/appellant/appeals
// @desc  View all appeals
// @access Private

router.get('/appeals', auth, async (req, res) => {
    try {
        const appeals = await Appeal.findAll({
            where: {
                appellantId: req.user.id,
            },
        });

        res.json(appeals);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/appellant/appeals/:id
// @desc  View single appeal
// @access Private
router.get('/appeals/:id', auth, async (req, res) => {
    try {
        const appeal = await Appeal.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (appeal.appellantId !== req.user.id) {
            return res.status(400).json({ msg: 'No such appeal' });
        }

        res.json(appeal);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route POST api/appellant/appeals/:id/printappeal
// @desc  Download filled form C for an appeal
// @access Private
router.get('/appeals/:id/printappeal', auth, async (req, res) => {
    try {
        const appeal = await Appeal.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!appeal) {
            return next(new Error('No appeal found'));
        }

        if (appeal.appellantId.toString() !== req.user.id.toString()) {
            return next(new Error('Unauthorized'));
        }

        const appealName = 'appeal-' + appeal.id + '.pdf';
        const appealPath = path.join('data', 'appeals', appealName);

        const pdfDoc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
            'Content-Disposition',
            'attachment; fileName="' + appealName + '"'
        );
        pdfDoc.pipe(fs.createWriteStream(appealPath));
        pdfDoc.pipe(res);

        // Design of the pdf document
        appealPdf(pdfDoc, appeal);
        pdfDoc.end();
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route POST api/appellant/appeals/:id/printreceipt
// @desc  Download receipt for an appeal
// @access Private
router.get('/appeals/:id/printreceipt', auth, async (req, res) => {
    try {
        const appeal = await Appeal.findOne({
            where: {
                id: req.params.id,
            },
        });

        if (!appeal) {
            return next(new Error('No appeal found'));
        }

        if (appeal.appellantId.toString() !== req.user.id.toString()) {
            return next(new Error('Unauthorized'));
        }

        // check payment status
        const payment = await Payment.findAll({
            where: { appealId: req.params.id },
        });

        // return an array of payment
        const paymentArray = payment.map((payment) => {
            return payment.get({ plain: true });
        });

        // find payment with status 'S'
        const successPayment = paymentArray.filter((payment) => {
            return payment.status === 'S';
        });

        if (successPayment.length === 0) {
            return next(new Error('No payment Made'));
        }

        const successMsg = successPayment[0].NSDLResponse;

        const successMsgArr = successMsg.split('|');

        const SuccessFlag = successMsgArr[0];
        const MessageType = successMsgArr[1];
        const SurePayMerchantId = successMsgArr[2];
        const ServiceId = successMsgArr[3];
        const OrderId = successMsgArr[4];
        const CustomerId = successMsgArr[5];
        const TransactionAmount = successMsgArr[6];
        const CurrencyCode = successMsgArr[7];
        const PaymentMode = successMsgArr[8];
        const ResponseDateTime = successMsgArr[9];
        const SurePayTxnId = successMsgArr[10];
        const BankTransactionNo = successMsgArr[11];
        const TransactionStatus = successMsgArr[12];
        const AdditionalInfo1 = successMsgArr[13];
        const AdditionalInfo2 = successMsgArr[14];
        const AdditionalInfo3 = successMsgArr[15];
        const AdditionalInfo4 = successMsgArr[16];
        const AdditionalInfo5 = successMsgArr[17];
        const ErrorCode = successMsgArr[18];
        const ErrorDescription = successMsgArr[19];
        const CheckSum = successMsgArr[20];

        const receipt = {
            SuccessFlag,
            MessageType,
            SurePayMerchantId,
            ServiceId,
            OrderId,
            CustomerId,
            TransactionAmount,
            CurrencyCode,
            PaymentMode,
            ResponseDateTime,
            SurePayTxnId,
            BankTransactionNo,
            TransactionStatus,
            AdditionalInfo1,
            AdditionalInfo2,
            AdditionalInfo3,
            AdditionalInfo4,
            AdditionalInfo5,
            ErrorCode,
            ErrorDescription,
            CheckSum,
        };

        const receiptName = 'receipt-' + appeal.id + '.pdf';
        const receiptPath = path.join('data', 'receipts', receiptName);

        const pdfDoc = new PDFDocument();
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
            'Content-Disposition',
            'attachment; fileName="' + receiptName + '"'
        );
        pdfDoc.pipe(fs.createWriteStream(receiptPath));
        pdfDoc.pipe(res);

        // Design of the pdf document for receipt
        // appealPdf(pdfDoc, appeal);
        invoice(pdfDoc, appeal, receipt);
        pdfDoc.end();
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/appellant/appeals/:id/revertcheck
// @desc  check if the appeal is reverted and with appellant
// @access Private
router.get('/appeals/:appealId/revertcheck', auth, async (req, res) => {
    try {
        const appealState = await AppealState.findOne({
            where: { appealId: req.params.appealId },
        });
        // console.log(appealState.get({ plain: true }).appellant);
        const isWithAppellant = appealState.get({ plain: true }).appellant;

        const forward = await Forward.findOne({
            where: { appealId: req.params.appealId },
        });

        const forwardStatus = forward
            ? forward.get({ plain: true }).processStatus
            : null;

        const revertReason = forward
            ? forward.get({ plain: true }).revertReason
            : null;

        res.json({ isWithAppellant, forwardStatus, revertReason });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/appellant/appeals/:id/getdate
// @desc  GET date of gearing of the appeal
// @access Private
router.get('/appeals/:appealId/getdate', auth, async (req, res) => {
    try {
        const benchappeal = await BenchAppeal.findOne({
            attributes: ['dateOfHearing'],
            where: { appealId: req.params.appealId },
        });

        if (!benchappeal) return res.json({ dateOfHearing: null });

        res.json(benchappeal);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
