import React from 'react';

const Message = ({ msg, errorFlag }) => {
    const erroclass = errorFlag ? `danger` : 'info';
    return (
        <div
            className={`alert alert-${erroclass} alert-dismissible fade show`}
            role="alert"
        >
            {msg}

            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
};

export default Message;
