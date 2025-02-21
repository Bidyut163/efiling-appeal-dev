import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { paymentDetail } from '../../../actions/payment';

const PaymentDetail = ({ paymentDetail, match, payment: { detail } }) => {
    const { id } = match.params;
    useEffect(() => {
        paymentDetail(id);
    }, []);

    if (!detail) {
        return <div>Loading</div>;
    }

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Payment Details</h1>
            <p className="mb-4">Payment details of the appeal</p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Appeals Table
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead>
                                <tr>
                                    <th>Appeal Id</th>
                                    <th>Date of Payment</th>
                                    <th>Payment Mode</th>
                                    <th>Amount</th>
                                    <th>Order Id</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>{id}</td>
                                    <td>{detail.ResponseDateTime}</td>
                                    <td>{detail.PaymentMode}</td>
                                    <td>{detail.TransactionAmount}</td>
                                    <td>{detail.OrderId}</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-success"
                                            style={{
                                                fontSize: '.7rem',
                                                padding: '0 .2rem',
                                            }}
                                        >
                                            <i className="fa-solid fa-circle-check"></i>{' '}
                                            Success
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { payment: state.payment };
};

export default connect(mapStateToProps, { paymentDetail })(PaymentDetail);
