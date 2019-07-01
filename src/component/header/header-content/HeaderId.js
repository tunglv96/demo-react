import React, { Component } from 'react';
import Bg from './header-bg/Bg';
import Text from './header-text/Text';

class HeaderId extends Component {
    render() {
        return (
            <div id="header">
                <Bg />
                <Text />
            </div>
        );
    }
}

export default HeaderId;