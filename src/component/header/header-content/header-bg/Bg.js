import React, { Component } from 'react';
import Bg from  '../../../../images/bg-masthead.jpg';

class Logo extends Component {
    render() {
        return (
            <React.Fragment>
                <img src={Bg} alt={Bg} />
            </React.Fragment>
        );
    }
}

export default Logo;