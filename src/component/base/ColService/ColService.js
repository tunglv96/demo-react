import React, { Component } from 'react';

class ColService extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col">
                    <span className={this.props.icon} />
                    <h4>{this.props.name}</h4>
                    <p>{this.props.text}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default ColService;