import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAppealsAppellant } from '../../actions/appeal';
import { clearPaymentStatus } from '../../actions/payment';

import AppealItem from './AppealItem';

const Dashboard = ({
    getAppealsAppellant,
    appeal: { appeals, loading },
    clearPaymentStatus,
}) => {
    useEffect(() => {
        clearPaymentStatus();
        getAppealsAppellant();
    }, []);
    return loading ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Appeals Filed</h1>
            <p className="mb-4">
                Please download a copy of the filled in form and submit along
                with the documents after receiving instruction
            </p>

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
                                    <th>Appeal id</th>
                                    <th>Appellant</th>
                                    <th>Respondent</th>
                                    <th>Details</th>
                                    <th>Payment Status</th>
                                    <th>Track Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {appeals.map((appeal) => (
                                    <AppealItem
                                        key={appeal.id}
                                        appeal={appeal}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { appeal: state.appeal };
};

export default connect(mapStateToProps, {
    getAppealsAppellant,
    clearPaymentStatus,
})(Dashboard);
