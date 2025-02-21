import React, { useState } from 'react';

import './FileUpload.css';

const CreateAppealFileUpload = ({
    fileData,
    filename,
    onFileChange,
    prevStep,
    nextStep,
    edit,
}) => {
    const [fileError, setFileError] = useState('');

    const next = () => {
        setFileError(validate(fileData));
        let errLen = validate(fileData).length;

        if (errLen === 0) {
            nextStep();
            document.documentElement.scrollTop = 0;
        }
    };

    const validate = (file) => {
        let error = '';

        if (!edit && !file) {
            error = 'No file selected';
        }

        if (file && file.size > 26214400) {
            console.log(file);
            error = 'File size needs to be less than 25Mb';
        }

        if (file && file.type !== 'application/pdf') {
            error = 'only pdf file supported';
        }

        return error;
    };

    return (
        <div className="ca_body ca_div testbox">
            <div className="ca_form">
                <div
                    className="container mt-5 p-5"
                    style={{ minHeight: '80vh' }}
                >
                    <div className="page-header mb-5">
                        <h1 className="mb-3">Upload Documents</h1>
                        <h3>
                            Please Upload the following Douments (merged in a
                            single pdf)(file size needs to be less than 25 mb)
                        </h3>
                        <h6>
                            i. An attested true copy of the order against which
                            the appeal is filed
                        </h6>
                        <h6>
                            ii. Copies of the documents relied upon by the
                            appellant and referred to in the appeal
                        </h6>
                        <h6>iii. An index of the documents</h6>
                    </div>

                    {/* <div className="alert alert-info">
                        Don't forget to display the console in CodePen to see
                        the uploaded file !
                    </div> */}

                    <div className="input-group mb-5">
                        {/* <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    accept="application/pdf"
                    onChange={onFileChange}
                />
                <label className="input-group-text">{filename}</label> */}

                        <input
                            type="file"
                            id="file"
                            accept="application/pdf"
                            onChange={onFileChange}
                        />
                        <label htmlFor="file">choose a file</label>
                        <div className="ml-5 filename">{filename}</div>
                        <div className="invalid-feedback d-block">
                            {fileError ? fileError : ''}
                        </div>
                    </div>

                    <button
                        onClick={prevStep}
                        className="btn btn-outline-secondary mr-3"
                        style={{
                            padding: '.5rem 1rem',
                        }}
                    >
                        Previous
                    </button>
                    <button
                        onClick={next}
                        className="btn "
                        style={{
                            background: '#095484',
                            color: '#fff',
                            padding: '.5rem 2rem',
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateAppealFileUpload;
