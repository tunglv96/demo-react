import React, { Component } from 'react';

class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <a className="navbar-brand" href={this.props.link}>{this.props.text}</a>
            </React.Fragment>
        );
    }
}

export default Logo;