import React, { Component } from 'react';

class P extends Component {
    render() {
        return (
            <React.Fragment>
                 <p>{this.props.text}</p>
            </React.Fragment>
        );
    }
}

export default P;