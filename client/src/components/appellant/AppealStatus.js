import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { getDateOfHearing, getDateForDocSub } from '../../actions/appeal';
import { revertCheck } from '../../actions/forward';

const AppealStatus = ({
    getDateOfHearing,
    getDateForDocSub,
    revertCheck,
    match,
    appeal: { dateOfHearing, dateOfDocSub },
    forward: { revertReason, forwardStatus },
}) => {
    const { id } = match.params;
    useEffect(() => {
        getDateForDocSub(id);
        getDateOfHearing(id);
        revertCheck(id);
    }, []);

    const getStatus = () => {
        let appealStatus;

        if (dateOfHearing) {
            appealStatus = `Date Of Hearing:  ${dateOfHearing}`;
            return appealStatus;
        } else if (revertReason && forwardStatus == 'R') {
            appealStatus = (
                <Fragment>
                    <p>Please update the appeal with following remarks:</p>
                    <p className="mt-3">{revertReason} </p>
                </Fragment>
            );
        } else if (dateOfDocSub) {
            appealStatus = (
                <p>
                    Please submit the hardcopies of documents in the REAT office
                    before <h1 className="mt-3">{dateOfDocSub} </h1>
                </p>
            );
            return appealStatus;
        } else {
            appealStatus = `Appeal is under process`;
        }

        // dateOfHearing
        //     ? (appealStatus = `Date Of Hearing:  ${dateOfHearing}`)
        //     : (appealStatus = 'Appeal is with REAT Official');

        return appealStatus;
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <div className={`card bg-primary text-white shadow`}>
                        <div className="card-body">{getStatus()}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { appeal: state.appeal, forward: state.forward };
};

export default connect(mapStateToProps, {
    getDateOfHearing,
    getDateForDocSub,
    revertCheck,
})(AppealStatus);
