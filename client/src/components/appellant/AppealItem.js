import React from 'react';
import { Link } from 'react-router-dom';

const AppealItem = ({ appeal: { id, fullname, res_fullname } }) => {
    const appellantName =
        fullname.length < 25 ? fullname : fullname.slice(0, 25) + '...';
    const respondenttName =
        res_fullname.length < 25
            ? res_fullname
            : res_fullname.slice(0, 25) + '...';
    return (
        <tr>
            <td>{id}</td>
            <td>{`${appellantName} `}</td>
            <td>{`${respondenttName} `}</td>
            <td>
                <Link
                    to={`/appellant/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    view
                </Link>
            </td>
            <td>
                <Link
                    to={`/appellant/appeals/${id}/paymentstatus`}
                    className="text-primary"
                    style={{ fontSize: '1rem', padding: '0 .2rem' }}
                >
                    check payment status &raquo;
                </Link>
            </td>
            <td>
                <Link
                    to={`/appellant/appeals/${id}/appealstatus`}
                    className="text-primary"
                    style={{ fontSize: '1rem', padding: '0 .2rem' }}
                >
                    view &raquo;
                </Link>
            </td>
        </tr>
    );
};

export default AppealItem;
