import React, { Component } from 'react';
import './Note.css';

class Note extends Component {

    constructor() {
        super();

        this.state = {
            crossedOut: false,
        };
    }

    crossOut() {
        this.setState({ crossedOut: !this.state.crossedOut })
    }

    render() {
        return (
            <div className="note-container" onClick={this.props.crossoutMethod}>
                <div className="note-text">{this.props.noteText}</div>

                <div className="delete-button" onClick={this.props.deleteMethod}>
                    <div className="line" id="line-one"></div>
                    <div className="line" id="line-two"></div>
                </div>
            </div>
        )
    }
}

export default Note;