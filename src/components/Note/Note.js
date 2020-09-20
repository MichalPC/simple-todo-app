import React, { Component } from 'react';
import './Note.css';

class Note extends Component {

    render() {
        return (
            <div className="note-container">
                <div className="noteText">{this.props.noteText}</div>

                <div id className="deleteBtn" onClick={this.props.deleteNote}>

                </div>
            </div>
        )
    }
}

export default Note;