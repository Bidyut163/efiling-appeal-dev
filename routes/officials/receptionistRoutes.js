const express = require('express');
const router = express.Router();
// const { body, validationResult } = require('express-validator');

// Middlewares
const auth = require('../../middleware/auth');
const isReceptionist = require('../../middleware/isReceptionist');

// Models
const Appeal = require('../../models/Appeal');
const AppealState = require('../../models/AppealState');
const Forward = require('../../models/Forward');

// @route Post api/receptionist/appeals
// @desc  View new Appeals - with receptionist
// @access Private
router.get('/appeals', auth, isReceptionist, async (req, res) => {
    try {
        // find all appeal where appealState is receptionist:1
        const appealIds = await AppealState.findAll({
            attributes: ['appealId'],
            where: {
                receptionist: 1,
            },
        });

        // return an array of appealIds in the form [{appealId: 3}, {appealId: 4}]
        const appealIdsRaw = appealIds.map((appealId) => {
            return appealId.get({ plain: true });
        });

        // returns an array of appealIds in the form [3,4]
        const appealIdsArray = appealIdsRaw.map((appealId) => {
            return appealId.appealId;
        });

        const appeals = await Appeal.findAll({
            where: {
                id: appealIdsArray,
            },
        });

        res.json(appeals);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// @route GET api/receptionist/appeals/:id
// @desc  View a single appeal details
// @access Private

router.get('/appeals/:id', auth, isReceptionist, async (req, res) => {
    try {
        const appeal = await Appeal.findOne({
            where: {
                id: req.params.id,
            },
        });

        res.json(appeal);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route PUT api/receptionist/appeals/id/forward
// @desc  forward to registrar
// @access Private
router.put('/appeals/:id/forward', auth, isReceptionist, async (req, res) => {
    try {
        const receptionist = await AppealState.findOne({
            attributes: ['receptionist'],
            where: {
                appealId: req.params.id,
            },
        });
        // console.log(receptionist.get({ plain: true }).receptionist);
        // receptionist.get({ plain: true }).receptionist - check for receptionist value in status table AppealStates
        if (receptionist.get({ plain: true }).receptionist) {
            await AppealState.update(
                {
                    appellant: 0,
                    receptionist: 0,
                    registrar: 1,
                    bench: 0,
                },
                {
                    where: { appealId: req.params.id },
                }
            );

            // exiting forward
            const existingForward = await Forward.findOne({
                where: {
                    appealId: req.params.id,
                },
            });

            if (existingForward) {
                await Forward.update(
                    {
                        processStatus: 'F',
                        comments: req.body.comments,
                    },
                    {
                        where: {
                            appealId: req.params.id,
                        },
                    }
                );

                return res.json({ msg: 'Table updated' });
            }
            const forward = Forward.build({
                processStatus: 'F',
                comments: req.body.comments,
                appealId: req.params.id,
            });

            await forward.save();

            res.json(forward);
        } else {
            res.json({ msg: 'appeal is not with the receptionist' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route GET api/receptionist/appeals/:id/docs
// @desc  View the documents for an appeal
// @access Private

// router.get('/appeals/:id/docs', auth, isReceptionist, async (req, res) => {
//     try {
//         const appealDoc = await AppealDoc.findOne({
//             attributes: ['docURL'],
//             where: {
//                 appealId: req.params.id,
//             },
//         });
//         res.json(appealDoc);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send('Server Error');
//     }
// });

module.exports = router;
