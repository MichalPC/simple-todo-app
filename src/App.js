import React, { Component } from 'react';
import './App.css';
import Note from './components/Note/Note'

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

    crossoutNote() {

    }

    deleteNote(index) {
        let notesArr = this.state.notes;
        notesArr.splice(index, 1);
        this.setState({ notes: notesArr })
    }

    setNotes(newNotes) {
        this.setState({ notes: newNotes})
    }

    render() {

        let notes = this.state.notes.map((val, key) => {
            return <Note key={key} noteText={val} 
                    deleteMethod={ () => this.deleteNote(key) }/>
        })

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

                {notes}
            </div>
        )
    }
}

export default App;