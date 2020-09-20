import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super();
        this.state = {
            noteText:'',
        }
    }

    render() {
        return (
            <div className="main-container">
                <div className="header"> Simple To-Do App </div>
            </div>
        )
    }
}

export default App;