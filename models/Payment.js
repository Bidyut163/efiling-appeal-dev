const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Payment = sequelize.define('payment', {
    order_id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },

    serviceId: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    status: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    NSDLResponse: {
        type: Sequelize.TEXT,
    },
});

module.exports = Payment;
