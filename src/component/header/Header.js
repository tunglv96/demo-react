import React, { Component } from 'react';
import HeaderId from './header-content/HeaderId';
import Navbar from './navbar/Navbar';

class Header extends Component {
    render() {
        return (
            <header>
                <Navbar />
                <HeaderId />
            </header>
        );
    }
}

export default Header;