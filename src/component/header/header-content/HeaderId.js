import React, { Component } from 'react';
import Background from './header-bg/Background';
import Text from './header-text/Text';

class HeaderId extends Component {
    render() {
        return (
            <div id="header">
                <Background />
                <Text />
            </div>
        );
    }
}

export default HeaderId;