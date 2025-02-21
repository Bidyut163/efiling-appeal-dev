import React from 'react';

const Footer = () => {
    const getYear = () => {
        const date = new Date();
        return date.getFullYear();
    };

    return (
        <footer className="sticky-footer bg-white">
            <div className="container my-auto">
                <div className="copyright text-center my-auto">
                    <span>
                        Copyright &copy; Real Estate Appellate Tribunal, Assam{' '}
                        {getYear()}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
