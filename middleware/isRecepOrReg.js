const keys = require('../config/keys');

// User model
const User = require('../models/User');

module.exports = async function (req, res, next) {
    try {
        let user_id = req.user.id.replace(keys.jwtPayload, '');

        const user = await User.findByPk(user_id, {
            attributes: { exclude: ['password'] },
        });

        // verify active user
        if (!user.active) {
            return res
                .status(401)
                .json({ msg: 'Not a active user, authorization denied' });
        }

        // verify RECEPTIONIST or REGISTRAR

        if (user.role == 'RECEPTIONIST' || user.role == 'REGISTRAR') {
            next();
        } else {
            return res.status(401).json({ msg: 'Authorization denied' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
};
