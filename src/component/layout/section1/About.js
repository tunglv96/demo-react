import React, { Component } from 'react';
import Hr from '../../base/hr/Hr';
import P from '../../base/P/P';
import Button from '../../base/button/Button';
import H3 from '../../base/H3/H3';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <H3 
                        text="We've got what you need!"
                    />
                    <Hr />
                    <P 
                        text="Start Bootstrap has everything you need to get your new website up and running in no time! Choose one of our open source, free to download, and easy to use themes! No strings attached!"
                    />
                    <Button 
                       text="get started!"
                    />
                </div>
            </section>
        );
    }
}

export default About;