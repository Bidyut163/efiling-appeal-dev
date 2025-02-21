import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { appellantGetAppeal } from '../../actions/appeal';
import { createOrder, paymentStatus, getPayment } from '../../actions/payment';
import axios from 'axios';

const ConfirmPayment = ({
    appellantGetAppeal,
    createOrder,
    paymentStatus,
    getPayment,
    match,
    payment: { payment, order, status },
    appeal: { appeal },
    history,
}) => {
    const { id } = match.params;
    useEffect(() => {
        appellantGetAppeal(id);
        paymentStatus(id);
        (async () => {
            await createOrder(id);
            getPayment(id);
        })();
    }, []);

    if (!order || !payment || !appeal) {
        return <div>Loading</div>;
    }

    if (
        status &&
        (status.status === 'S' || status.status === 'P') &&
        status.appealId === id
    ) {
        return <Redirect to={`/appellant/appeals/${id}/paymentstatus`} />;
    }

    const handlePayment = async (appealId) => {
        console.log('pay now clicked for appeal', appealId);

        const res = await axios.post(
            `/payment/success/development/${appealId}`
        );
        console.log(res.data);
        history.push('/appellant/dashboard');
    };

    // if (order && order.status === 'P') {
    //     return (
    //         <div className="bg-primary p-5" style={{ minHeight: '100vh' }}>
    //             <div
    //                 className="card"
    //                 style={{ width: '60%', margin: '0 auto' }}
    //             >
    //                 <div className="card-body mx-4">
    //                     <div className="container text-center">
    //                         <p>
    //                             Previous Payment is Under Process! Please wait
    //                             for sometime!
    //                         </p>
    //                         <Link
    //                             to="/appellant/dashboard"
    //                             className="btn btn-primary mt-3"
    //                         >
    //                             Go to dashboard
    //                         </Link>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    return (
        <div className="bg-primary p-5" style={{ minHeight: '100vh' }}>
            <div className="card" style={{ width: '60%', margin: '0 auto' }}>
                <div className="card-body mx-4">
                    <div className="container">
                        <p
                            className="my-5 mx-5 text-center"
                            style={{ fontSize: '30px' }}
                        >
                            Assam Real Estate Appellate Tribunal
                        </p>
                        <div className="row">
                            <ul className="list-unstyled">
                                <li className="text-black">
                                    Assam Real Estate Appellate Tribunal
                                </li>
                                <li className="text-muted mt-1">
                                    <span className="text-black">
                                        3rd Floor, Aditya Tower, Rukmini Gaon,
                                        G.S. Road
                                    </span>
                                </li>
                                <li className="text-black mt-1">
                                    Guwahati-781036
                                </li>
                            </ul>
                            <hr />
                            <div className="col-xl-10">
                                <p>Appeal ID</p>
                            </div>
                            <div className="col-xl-2">
                                <p className="float-end">{appeal.id}</p>
                            </div>
                            <hr />
                            <div className="col-xl-4">
                                <p>Appellant Name</p>
                            </div>
                            <div className="col-xl-8">
                                <p className="float-end">{appeal.fullname}</p>
                            </div>
                            <hr />
                            <div className="col-xl-4">
                                <p>Respondent Name</p>
                            </div>
                            <div className="col-xl-8">
                                <p className="float-end">
                                    {appeal.res_fullname}
                                </p>
                            </div>
                            <hr />
                            <div className="col-xl-10">
                                <p>Appeal Fee</p>
                            </div>
                            <div className="col-xl-2">
                                <p className="float-end">
                                    {' '}
                                    <i className="fa-solid fa-indian-rupee-sign"></i>{' '}
                                    1000
                                </p>
                            </div>
                            <hr />
                        </div>

                        <div className="row text-black">
                            <div className="col-xl-12">
                                <p className="float-end fw-bold">
                                    Total:{' '}
                                    <i className="fa-solid fa-indian-rupee-sign"></i>{' '}
                                    1000
                                </p>
                            </div>
                            <hr style={{ border: '2px solid black' }} />
                        </div>
                        <div className="row">
                            <div className="col-md-10"></div>
                            <div
                                className="col-md-2 text-center"
                                style={{ marginTop: '50px' }}
                            >
                                <button
                                    onClick={() => handlePayment(appeal.id)}
                                    type="submit"
                                    className="btn btn-success"
                                >
                                    Pay Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { payment: state.payment, appeal: state.appeal };
};

export default connect(mapStateToProps, {
    appellantGetAppeal,
    createOrder,
    paymentStatus,
    getPayment,
})(withRouter(ConfirmPayment));
