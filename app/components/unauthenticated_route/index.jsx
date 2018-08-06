import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { location } from '@utils/route_props';

const UnauthenticatedRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) => {
            return authenticated ? (
                <Redirect
                    to={{
                        pathname: '/dashboard',
                        state: { from: props.location },
                    }}
                />
            ) : (
                <Component {...props} />
            );
        }}
    />
);

UnauthenticatedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    location,
};

UnauthenticatedRoute.defaultProps = {
    location: {},
};

export default UnauthenticatedRoute;
