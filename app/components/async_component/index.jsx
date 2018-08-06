import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ComponentUnavailable = () => (
    <div className="wrong-import">
        <h2>Oops!</h2>
        <p>
            It looks like you provided a component but we were unable to import it.
            <br />Have you imported it right?
        </p>
    </div>
);

class AsyncComponent extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }

    componentWillMount() {
        const { Component } = this.state;
        const { componentProvider } = this.props;
        if (!Component) {
            componentProvider().then((result) => {
                this.setState({ Component: result.default });
            },
            () => {
                this.setState({ Component: ComponentUnavailable });
            });
        }
    }

    render() {
        const { Component } = this.state;
        const { componentProvider, ...rest } = this.props;

        return (
            <Fragment>
                {Component ? <Component {...rest} /> : <Fragment />}
            </Fragment>
        );
    }
}

AsyncComponent.propTypes = {
    componentProvider: PropTypes.func.isRequired,
};

export default AsyncComponent;
