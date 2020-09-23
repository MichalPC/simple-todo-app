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
        
        let noteTextClass = this.state.crossedOut ? "text-crossout" : ""
        noteTextClass = "note-text " + noteTextClass

        return (
            <div className="note-container" onClick={this.props.crossoutMethod}>
                <div className={ noteTextClass } onClick={ this.crossOut.bind(this) }>{this.props.noteText}</div>

                <div className="delete-button" onClick={this.props.deleteMethod}>
                    <div className="line" id="line-one"></div>
                    <div className="line" id="line-two"></div>
                </div>
            </div>
        )
    }
}

export default Note;