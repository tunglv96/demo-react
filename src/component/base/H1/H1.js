import React, { Component } from 'react';

class H1 extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.text}</h1>
            </React.Fragment>
        );
    }
}

export default H1;