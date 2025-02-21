import React from 'react';
import { Link } from 'react-router-dom';

const BenchItem = ({ appeal: { id, fullname, res_fullname } }) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{`${fullname}`}</td>
            <td>{`${res_fullname}`}</td>
            <td>
                <Link
                    to={`/official/registrar/appeals/${id}`}
                    className="btn btn-sm btn-primary"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-hurricane"></i> view
                </Link>
            </td>
            {/* <td>
                <button
                    className="btn btn-sm btn-warning"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                    onClick={async () => {
                        const res = await axios.get(`/api/download/${id}`, {
                            responseType: 'blob',
                        });

                        fileDownload(res.data, 'doc-appeal-' + id + '.pdf');
                    }}
                >
                    <i className="fas fa-download"></i> download
                </button>
            </td>
            <td>
                <Link
                    to={`/official/registrar/appeals/${id}/checklist`}
                    className="btn btn-sm btn-info"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    <i className="fa-solid fa-clipboard-list"></i> Checklist
                </Link>
            </td> */}
        </tr>
    );
};

export default BenchItem;
