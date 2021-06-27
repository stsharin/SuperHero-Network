import userEvent from '@testing-library/user-event';
import React from 'react';
import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    // const user = JSON.parse(localStorage.getItem('user')) || {};
    return (
        <Route
            {...rest}
            render={({ location }) =>
                true ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;