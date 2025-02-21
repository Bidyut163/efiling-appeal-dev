import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUserAppellant } from '../../actions/auth';

import MasterLayout from '../../layouts/official/appellant/MasterLayout';

const AppellantDashboardRoute = ({
    loadUserAppellant,
    auth: { isAuthenticated, loading, userType },
    ...rest
}) => {
    useEffect(() => {
        loadUserAppellant();
    }, [loadUserAppellant]);

    if (loading) {
        return <h1>Loaing...</h1>;
    }

    return isAuthenticated && userType === 'APPELLANT' ? (
        <Route {...rest} render={(props) => <MasterLayout {...props} />} />
    ) : (
        <Redirect to="/appellant/login" />
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { loadUserAppellant })(
    AppellantDashboardRoute
);
