import React, { Component } from 'react';
import './Note.css';

class Note extends Component {

    render() {
        return (
            <div className="note-container" onClick={this.props.crossoutMethod}>
                <div className="noteText">{this.props.noteText}</div>

                <div id className="delete-button" onClick={this.props.deleteMethod}>
                    <div className="line" id="line-one"></div>
                    <div className="line" id="line-two"></div>
                </div>
            </div>
        )
    }
}

export default Note;