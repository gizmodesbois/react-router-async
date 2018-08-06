import React, { Fragment, PureComponent } from 'react';
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

class AsyncComponent extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            Component: null,
        };
    }

    componentWillMount() {
        const { componentProvider } = this.props;
        componentProvider().then((component) => {
            this.setState({ Component: component.default });
        },
        () => {
            this.setState({ Component: ComponentUnavailable });
        });
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
