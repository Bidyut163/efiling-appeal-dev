const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Appeal = sequelize.define(
    'appeal',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        fullname: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        ar_line1: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        ar_line2: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ar_landmark: {
            type: Sequelize.STRING,
        },
        ar_city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ar_district: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ar_pin: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        ar_state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        ar_country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        as_line1: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        as_line2: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        as_landmark: {
            type: Sequelize.STRING,
        },
        as_city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        as_district: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        as_pin: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        as_state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        as_country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        appellant_mobile_no: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        appellant_email_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_fullname: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        res_ao_line1: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        res_ao_line2: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_ao_landmark: {
            type: Sequelize.STRING,
        },
        res_ao_city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_ao_district: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_ao_pin: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        res_ao_state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_ao_country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_as_line1: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        res_as_line2: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_as_landmark: {
            type: Sequelize.STRING,
        },
        res_as_city: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_as_district: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_as_pin: {
            type: Sequelize.STRING(10),
            allowNull: false,
        },
        res_as_state: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_as_country: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        res_mobile_no: {
            type: Sequelize.STRING(20),
            allowNull: false,
        },
        res_email_id: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        reg_num: {
            type: Sequelize.STRING,
            // allowNull: false,
        },
        is_limitation_specified: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },
        reason_for_delay: {
            type: Sequelize.TEXT,
        },
        facts_of_case: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        ground_of_appeal: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        reliefs_sought: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        interim_order: {
            type: Sequelize.TEXT,
        },
        is_matter_pending: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
        },

        docUrl: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { initialAutoIncrement: 100001, timestamps: false }
);

module.exports = Appeal;
