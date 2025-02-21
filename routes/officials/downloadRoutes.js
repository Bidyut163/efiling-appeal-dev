const express = require('express');
const router = express.Router();

const fs = require('fs');

// Model
const Appeal = require('../../models/Appeal');

// @route POST api/download/:id
// @desc  Download files for an appeal
// @access Private
router.get('/:id', async (req, res) => {
    try {
        const docURL = await Appeal.findOne({
            attributes: ['docUrl'],
            where: {
                id: req.params.id,
            },
        });

        const filePath = docURL.get({ plain: true }).docUrl;

        // fs.readFile(filePath, (err, data) => {
        //     if (err) {
        //         return next(err);
        //     }
        //     res.setHeader('Content-Type', 'application/pdf');
        //     res.setHeader(
        //         'Content-Disposition',
        //         'attachment; fileName="' + filePath + '"'
        //     );

        //     res.send(data);
        // });

        const file = fs.createReadStream(filePath);
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader(
            'Content-Disposition',
            'attachment; fileName="' + filePath + '"'
        );
        file.pipe(res);
    } catch (err) {
        console.log(err);
        res.status(500).send('SERVER ERROR');
    }
});

module.exports = router;
