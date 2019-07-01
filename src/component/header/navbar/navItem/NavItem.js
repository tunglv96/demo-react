import React, { Component } from 'react';

class NavItem extends Component {
    render() {
        return (
            <React.Fragment>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#service">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </React.Fragment>
        );
    }
}

export default NavItem;