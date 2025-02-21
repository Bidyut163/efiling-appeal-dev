import React from 'react';
import AppealItem from './AppealItem';

const AppealList = () => {
    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">All Appeals</h1>
            <p className="mb-4">List of all new appeals</p>

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
                                    <th>id</th>
                                    <th>Appellant</th>
                                    <th>Respondent</th>
                                    <th>View</th>
                                    <th>Upload</th>
                                    <th>Action</th>
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

export default AppealList;
