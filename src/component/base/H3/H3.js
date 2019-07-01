import React, { Component } from 'react';

class H3 extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>{this.props.text}</h3>
            </React.Fragment>
        );
    }
}

export default H3;