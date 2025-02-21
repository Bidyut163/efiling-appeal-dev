const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Checklist = sequelize.define(
    'checklist',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },

        appeal_num: {
            type: Sequelize.STRING,
        },

        complaint_num: {
            type: Sequelize.STRING,
        },

        appellant: {
            type: Sequelize.STRING,
        },

        respondent: {
            type: Sequelize.STRING,
        },

        section_num: {
            type: Sequelize.STRING,
        },

        is_appeal_competent: {
            type: Sequelize.STRING,
        },

        is_name_address_correct: {
            type: Sequelize.STRING,
        },
        is_ordercopy_attached: {
            type: Sequelize.STRING,
        },
        date_of_order: {
            type: Sequelize.DATEONLY,
        },
        date_of_communication: {
            type: Sequelize.DATEONLY,
        },
        date_of_application: {
            type: Sequelize.DATEONLY,
        },
        date_on_copy_ready: {
            type: Sequelize.DATEONLY,
        },
        date_of_receipt: {
            type: Sequelize.DATEONLY,
        },
        date_of_filing: {
            type: Sequelize.DATEONLY,
        },
        date_of_submission_hardcopy: {
            type: Sequelize.DATEONLY,
        },
        is_delay_on_submission: {
            type: Sequelize.STRING,
        },
        amount_of_delay_on_submission: {
            type: Sequelize.STRING,
        },

        is_appeal_filed_within_limitation: {
            type: Sequelize.STRING,
        },
        is_delay_in_filing: {
            type: Sequelize.STRING,
        },
        amount_of_delay_in_filing: {
            type: Sequelize.STRING,
        },

        is_condonation_of_delay_filed: {
            type: Sequelize.STRING,
        },
        objection_for_condonation: {
            type: Sequelize.STRING,
        },

        is_fees_paid: {
            type: Sequelize.STRING,
        },

        date_of_payment: {
            type: Sequelize.DATEONLY,
        },

        is_pagination_correct: {
            type: Sequelize.STRING,
        },

        legible_docs: {
            type: Sequelize.STRING,
        },
        is_appeal_memo_annexed: {
            type: Sequelize.STRING,
        },
        is_served_by_post: {
            type: Sequelize.STRING,
        },
        is_auth_stamped: {
            type: Sequelize.STRING,
        },
        is_email_phone_on_record: {
            type: Sequelize.STRING,
        },
    },
    { timestamps: false }
);

module.exports = Checklist;
