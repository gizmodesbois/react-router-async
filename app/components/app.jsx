import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const App = () => (
    <Fragment>
        <h1 id="main-title">Welcome to the app</h1>
        <Link to="/dashboard">Dashboard</Link>
    </Fragment>
);

export default App;
