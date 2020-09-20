import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            noteText:'',
        }
    }

    updateNoteText(noteText) {
        this.setState({ noteText: noteText.target.value })
    }

    render() {
        return (
            <div className="main-container">
                <div className="header"> Simple To-Do App </div>

                <div className="btn">Add</div>

                <input type="text-box" 
                    ref={((input) => {this.textInput = input})}
                    className="textInput"
                    value={this.state.noteText}
                    onChangeText={noteText => this.updateNoteText(noteText)}
                    />
            </div>
        )
    }
}

export default App;