const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const HardCopiesDate = sequelize.define(
    'hardCopiesDate',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        dateOfSubmission: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = HardCopiesDate;
