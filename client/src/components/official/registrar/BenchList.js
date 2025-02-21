import React, { useEffect } from 'react';
import BenchItem from './BenchItem';
import { getAppealsBench } from '../../../actions/appeal';
import { connect } from 'react-redux';

const BenchList = ({ getAppealsBench, appeal: { appeals, loading } }) => {
    useEffect(() => {
        getAppealsBench();
    }, [getAppealsBench]);
    return loading ? (
        <div>loading</div>
    ) : (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Appeals on Bench</h1>
            <p className="mb-4">List of appeals on Bench</p>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Appeals on Bench
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
                                    <th>View</th>
                                </tr>
                            </thead>

                            <tbody>
                                {appeals.map((appeal) => (
                                    <BenchItem
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

export default connect(mapStateToProps, { getAppealsBench })(BenchList);
