const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const sequelize = require('sequelize');
const keys = require('../../config/keys');
// middlewares
const auth = require('../../middleware/auth');
const isAdmin = require('../../middleware/isAdmin');

// User Model
const User = require('../../models/User');
const Appellant = require('../../models/Appellant');

// @route POST api/users/admin
// @desc  Create Admin - needs to be deleted
// @access Public

router.post(
    '/admin',
    [
        body('firstName', 'Please enter a first name').isLength({ min: 1 }),
        body('lastName', 'Please enter a last name').isLength({ min: 1 }),
        body('email', 'Please include a valid email').isEmail(),
        body(
            'password',
            'Please enter a password with 6 or more character'
        ).isLength({
            min: 6,
        }),
        body('role', 'Please include an user role').isLength({ min: 1 }),
    ],
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
        const { firstName, lastName, email, password, role } = req.body;

        try {
            // See if user exists
            const existingUser = await User.findOne({
                where: { email: email },
            });

            if (existingUser) {
                return res.status(400).json({
                    email: 'User already exists',
                });
            }

            // Create a new User
            const user = User.build({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: role,
                active: 1,
            });

            // generate the salt
            const salt = await bcrypt.genSalt(10);

            // hash the password using bcryptjs
            user.password = await bcrypt.hash(password, salt);

            // save the user
            await user.save();

            // Return jsonwebtoken
            const payload = {
                user: {
                    id: `${keys.jwtPayload}${user.id}`,
                    // id: user.id,
                    type: 'GOVT',
                },
            };

            jwt.sign(
                payload,
                keys.jwtSecret,
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route POST api/users/
// @desc  create new user
// @access Private

router.post(
    '/',
    [
        body('firstName', 'Please enter a first name').isLength({ min: 1 }),
        body('lastName', 'Please enter a last name').isLength({ min: 1 }),
        body('email', 'Please include a valid email').isEmail(),
        body(
            'password',
            'Please enter a password with 6 or more character'
        ).isLength({
            min: 6,
        }),
        body('role', 'Please include an user role').isLength({ min: 1 }),
    ],
    auth,
    isAdmin,
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
        const { firstName, lastName, email, password, role } = req.body;

        try {
            // See if user exists
            const existingUser = await User.findOne({
                where: { email: email },
            });

            if (existingUser) {
                return res.status(400).json({
                    // errors: [{ msg: 'User already exists' }],
                    email: 'User already exists',
                });
            }

            // Create a new User
            const user = User.build({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                role: role,
                active: 1,
            });

            // generate the salt
            const salt = await bcrypt.genSalt(10);

            // hash the password using bcryptjs
            user.password = await bcrypt.hash(password, salt);

            // save the user
            await user.save();

            res.json(user);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route PATCH api/users/:id
// @desc  Edit user
// @access Private

router.patch(
    '/:id',
    [
        body('firstName', 'Please enter a first name').isLength({ min: 1 }),
        body('lastName', 'Please enter a last name').isLength({ min: 1 }),
        body('email', 'Please include a valid email').isEmail(),
        body(
            'password',
            'Please enter a password with 6 or more character'
        ).isLength({
            min: 6,
        }),
        body('role', 'Please include an user role').isLength({ min: 1 }),
    ],
    auth,
    isAdmin,
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
        const { firstName, lastName, email, password, role } = req.body;

        try {
            // generate the salt
            const salt = await bcrypt.genSalt(10);

            // hash the password using bcryptjs
            const hashedPassword = await bcrypt.hash(password, salt);

            await User.update(
                {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: hashedPassword,
                    role: role,
                },
                {
                    where: { id: req.params.id },
                }
            );

            const user = await User.findOne({
                attributes: { exclude: ['password'] },
                where: { id: req.params.id },
            });
            res.json(user);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// @route GET api/users/
// @desc  view all users
// @access Private

router.get('/', auth, isAdmin, async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: { exclude: ['password'] },
            where: {
                role: { [sequelize.Op.not]: 'ADMIN' },
            },
        });

        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// @route GET api/users/id
// @desc  View a single user
// @access Private
router.get('/:id', auth, isAdmin, async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: { exclude: ['password'] },
            where: {
                id: req.params.id,
            },
        });

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// @route PATCH api/users/:id/active
// @desc  Active/Deactivate a user
// @access Private

router.patch('/:id/active', auth, isAdmin, async (req, res) => {
    try {
        const active = await User.findOne({
            attributes: ['active'],
            where: {
                id: req.params.id,
            },
        });

        // check if the user is active or not
        if (active.get({ plain: true }).active) {
            await User.update(
                {
                    active: 0,
                },
                {
                    where: { id: req.params.id },
                }
            );

            res.json({ msg: 'User Deactivated' });
        } else {
            await User.update(
                {
                    active: 1,
                },
                {
                    where: { id: req.params.id },
                }
            );

            res.json({ msg: 'User Activated' });
        }
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

// @route DELETE api/users/id
// @desc  Delete a user
// @access Private

router.delete('/:id', auth, isAdmin, async (req, res) => {
    try {
        // Remove User
        await User.destroy({
            where: {
                id: req.params.id,
            },
        });

        res.json({ msg: 'User removed' });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

// @route PUT api/users/appellant/reset-password
// @desc  Reset password for Appellant
// @access Private

router.put('/appellant/reset-password', auth, isAdmin, async (req, res) => {
    const { email, password } = req.body;
    try {
        const appellant = await Appellant.findOne({
            where: { email: email },
        });

        if (!appellant) {
            return res.status(400).json({
                msg: 'email does not exist',
            });
        }

        // generate the salt
        const salt = await bcrypt.genSalt(10);

        // hash the password using bcryptjs
        hashedPassword = await bcrypt.hash(password, salt);

        await Appellant.update(
            { password: hashedPassword },
            { where: { email: email } }
        );

        res.json({ msg: 'password updated' });
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
