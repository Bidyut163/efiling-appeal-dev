const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const BenchAppeal = sequelize.define(
    'benchappeal',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        dateOfHearing: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { timestamps: false }
);

module.exports = BenchAppeal;
