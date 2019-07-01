import React, { Component } from 'react';

class NavItem extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link" href={this.props.navLink}>{this.props.text}</a>
                </li>
            </React.Fragment>
        );
    }
}

export default NavItem;