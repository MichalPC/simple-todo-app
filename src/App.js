import React, { Component } from 'react';
import './App.css';
import './components/Note/Note.js'

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            noteText:'',
            notes: [],
        }
    }

    updateNoteText(noteText) {
        this.setState({ noteText: noteText.target.value })
    }

    addNote() {
        if (this.state.noteText === '') {return}

        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({ noteText: ''});
        this.textInput.focus();
    }

    render() {
        return (
            <div className="main-container">
                <div className="header"> Simple To-Do App </div>

                <div className="input-container">
                    <input type="text-box" 
                        ref={((input) => {this.textInput = input})}
                        className="textInput"
                        value={this.state.noteText}
                        onChange={noteText => this.updateNoteText(noteText)}
                        />

                    <div className="btn" onClick={this.addNote.bind(this)}>Add</div>
                </div>
            </div>
        )
    }
}

export default App;