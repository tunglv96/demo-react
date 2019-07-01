import React, { Component } from 'react';
import Logo from './logo/Logo';
import NavItem from './navItem/NavItem';

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav id="navbar">
                    <div className="container">
                        <Logo 
                            text="Logo"
                            link="index.html"
                        />
                        <ul className="navbar-nav">
                            <NavItem
                                text="About"
                                navLink="#about"
                            />
                            <NavItem
                                text="Services"
                                navLink="#service"
                            />
                            <NavItem
                                text="Portfolio"
                                navLink="#portfolio"
                            />
                            <NavItem
                                text="Contact"
                                navLink="#contact"
                            />
                        </ul>
                    </div>
                </nav>
                <div className="clear" />
            </React.Fragment>
        );
    }
}

export default Navbar;