const axios = require('axios');
const { Op } = require('sequelize');

// Models
const Payment = require('../models/Payment');
const AppealState = require('../models/AppealState');

const queryApi = async () => {
    const username = process.env.NSDL_USERNAME;
    const password = process.env.NSDL_PASSWORD;
    const merchantId = process.env.MERCHANT_ID;
    const queryApiUrl = process.env.QUERY_API_URL;

    // find the order ids for which status is 'I' or 'P'
    const pendingOrderIds = await Payment.findAll({
        attributes: ['order_id'],
        where: { status: { [Op.or]: ['I', 'P'] } },
    });

    // return an array of orderIds in the form [{order_id: 3}, {order_id: 4}]
    const pendingOrderIdsRaw = pendingOrderIds.map((orderId) => {
        return orderId.get({ plain: true });
    });

    // returns an array of orderIds in the form [3,4]
    const pendingOrderIdsArray = pendingOrderIdsRaw.map((orderId) => {
        return orderId.order_id;
    });

    // console.log(pendingOrderIdsArray);
    if (pendingOrderIdsArray.length !== 0) {
        pendingOrderIdsArray.forEach(async (orderId) => {
            const message = `|${merchantId}|${orderId}`;

            const data = {
                requestMsg: message,
            };

            const config = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },

                auth: {
                    username: username,
                    password: password,
                },
            };

            try {
                const res = await axios.post(queryApiUrl, data, config);
                const msg = res.data;

                const msgArr = msg.split('|');

                const statusFlag = msgArr[0];

                await Payment.update(
                    {
                        status: statusFlag,
                        NSDLResponse: msg,
                    },
                    {
                        where: {
                            order_id: orderId,
                        },
                    }
                );

                // In case of success payment
                if (statusFlag === 'S') {
                    // forward the appeal to receptionist - update appealState
                    await AppealState.update(
                        {
                            appellant: 0,
                            receptionist: 1,
                            registrar: 0,
                            bench: 0,
                        },
                        {
                            where: { appealId: CustomerId },
                        }
                    );
                }
            } catch (err) {
                console.log(err);
            }
        });
    }

    // console.log(res);
};

module.exports = queryApi;
