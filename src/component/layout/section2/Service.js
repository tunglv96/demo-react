import React, { Component } from 'react';
import H3 from '../../base/H3/H3';
import ColService from '../../base/ColService/ColService';

class Service extends Component {
    render() {
        return (
            <section id="service">
                <div className="container">
                    <H3 
                        text="At Your Service"
                    />
                    <hr />
                    <div className="row-container">
                        <ColService 
                            icon="fas fa-gem"
                            name="Sturdy Themes"
                            text="Our themes are updated regularly to keep them bug free!"
                        />
                        <ColService 
                            icon="fas fa-laptop-code"
                            name="Up to Date"
                            text="All dependencies are kept current to keep things fresh."
                        />
                        <ColService 
                            icon="fas fa-globe"
                            name="Ready to Publish"
                            text="You can use this design as is, or you can make changes!"
                        />
                        <ColService 
                            icon="fas fa-heart"
                            name="Made with Love"
                            text="Is it really open source if it's not made with love?"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Service;