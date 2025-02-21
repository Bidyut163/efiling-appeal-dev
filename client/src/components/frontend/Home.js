import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    return (
        <>
            <div className="ripple-background">
                <div className="circle circle-xxlarge circle-shade1"></div>
                <div className="circle circle-xlarge circle-shade2"></div>
                <div className="circle circle-large circle-shade3"></div>
                <div className="circle circle-mediun circle-shade4"></div>
                <div className="circle circle-small circle-shade5"></div>
            </div>

            <div className="home-links">
                <Link
                    to="/appellant/login"
                    className="login-link appellant-link"
                >
                    <p>Appellant Login</p>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
                <Link to="/official/login" className="login-link reat-link">
                    <p>Offical Login</p>
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
            </div>
        </>
    );
};

export default Home;
