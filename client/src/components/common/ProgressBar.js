import React from 'react';

const ProgressBar = ({ percentage, errorFlag }) => {
    const erroclass = errorFlag ? `danger` : 'success';
    let percentageBar = 0;
    errorFlag ? (percentageBar = 0) : (percentageBar = percentage);
    return (
        <div className="progress">
            <div
                className={`progress-bar progress-bar-striped bg-${erroclass}`}
                role="progressbar"
                style={{ width: `${percentage}%` }}
            >
                {percentageBar}%
            </div>
        </div>
    );
};

export default ProgressBar;
