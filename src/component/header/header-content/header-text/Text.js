import React, { Component } from 'react';
import Button from '../../../base/button/Button';
import Hr from '../../../base/hr/Hr';
import P from '../../../base/P/P';
import H1 from '../../../base/H1/H1';

class Text extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header-text">
                    <div className="container">
                        <H1 />
                        <Hr />
                        <P />
                        <Button />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Text;