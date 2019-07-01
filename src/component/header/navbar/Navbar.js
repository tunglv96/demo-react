import React, { Component } from 'react';
import Logo from './logo/Logo';
import NavItem from './navItem/NavItem';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="navbar">
                    <div className="container">
                        <Logo />
                        <ul className="navbar-nav">
                            <NavItem />
                        </ul>
                    </div>
                </nav>
                <div className="clear" />
            </React.Fragment>
        );
    }
}

export default Navbar;