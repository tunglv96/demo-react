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
                        <H1 
                            text="Your Favorite Source of Free Bootstrap Themes"
                        />
                        <Hr />
                        <P 
                            text="Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!"
                        />
                        <Button 
                            text="find out more"
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Text;