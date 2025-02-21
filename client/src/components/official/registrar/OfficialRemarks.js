import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRemarks } from '../../../actions/forward';

const OfficialRemarks = ({
    getRemarks,
    match,
    forward: { forwardRemarks },
}) => {
    useEffect(() => {
        const { id } = match.params;
        getRemarks(id);
    }, []);

    return (
        <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">
                Verifying Official Remarks
            </h1>
            <p className="mb-4">Remarks of the official</p>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Remarks
                    </h6>
                </div>
                <div className="card-body">
                    <p> {forwardRemarks}</p>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { forward: state.forward };
};

export default connect(mapStateToProps, { getRemarks })(OfficialRemarks);
