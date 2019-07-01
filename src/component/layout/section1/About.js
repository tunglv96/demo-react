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
                    <H3 />
                    <Hr />
                    <P />
                    <Button />
                </div>
            </section>
        );
    }
}

export default About;