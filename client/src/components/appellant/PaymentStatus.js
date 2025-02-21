import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { paymentStatus } from '../../actions/payment';

const PaymentStatus = ({ paymentStatus, match, payment: { status } }) => {
    const { id } = match.params;
    useEffect(() => {
        paymentStatus(id);
    }, []);

    const paymentState = {
        message: '',
        bgclass: '',
        cta: '',
        destination: '',
    };

    if (status) {
        switch (status.status) {
            case 'I':
                paymentState.message = 'Payment not yet done';
                paymentState.bgclass = 'primary';
                paymentState.cta = 'pay now';
                paymentState.destination = `/appellant/appeals/${id}/payment`;

                break;

            case 'P':
                paymentState.message =
                    'Payment under process! Please wait for some time!';
                paymentState.bgclass = 'warning';
                paymentState.cta = 'Go to dashboard';
                paymentState.destination = `/appellant/dashboard`;

                break;

            case 'F':
                paymentState.message = 'Previous Payment Failed!';
                paymentState.bgclass = 'danger';
                paymentState.cta = 'Pay Now';
                paymentState.destination = `/appellant/appeals/${id}/payment`;

                break;

            case 'S':
                paymentState.message = 'Payment Successful!';
                paymentState.bgclass = 'success';
                paymentState.cta = 'Go to dashboard';
                paymentState.destination = `/appellant/dashboard`;

                break;
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div
                        className={`card bg-${paymentState.bgclass} text-white shadow`}
                    >
                        <div className="card-body">
                            Status
                            <div className="text-white-50 small">
                                {paymentState.message}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 mb-4">
                    <Link
                        to={paymentState.destination}
                        className={`btn btn-${paymentState.bgclass} btn-icon-split`}
                    >
                        <span className="icon text-white-50">
                            <i className="fas fa-check"></i>
                        </span>
                        <span className="text">{paymentState.cta}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { payment: state.payment };
};

export default connect(mapStateToProps, { paymentStatus })(PaymentStatus);
