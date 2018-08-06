import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import App from '@components/app';
import AsyncComponent from '@components/async_component';
import UnauthenticatedRoute from '@components/unauthenticated_route';
import AuthenticatedRoute from '@components/authenticated_route';
import routeList from './routes';

const authenticated = true;

const Root = () => (
    <Router>
        <Switch>
            <UnauthenticatedRoute path="/" component={App} exact authenticated={authenticated} />
            <UnauthenticatedRoute path="/login" component={props => <AsyncComponent componentProvider={routeList.login} {...props} />} authenticated={authenticated} />
            <AuthenticatedRoute path="/dashboard" component={props => <AsyncComponent componentProvider={routeList.dashboard} {...props} />} authenticated={authenticated} />
        </Switch>
    </Router>
);

export default Root;
