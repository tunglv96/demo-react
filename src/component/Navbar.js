import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">Logo</a>
                        <ul className="navbar-nav">
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
                        </ul>
                    </div>
                </nav>
                <div className="clear" />
            </React.Fragment>
        );
    }
}

export default Navbar;