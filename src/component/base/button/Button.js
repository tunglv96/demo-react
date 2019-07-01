import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <button><a href="#">{this.props.text}</a></button>
            </React.Fragment>
        );
    }
}

export default Button;