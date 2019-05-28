import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contactList from './contacts.json'
const contactListCopy=contactList.splice(0,5);

class App extends Component {

  constructor(){

    super();
  
    this.state={
        contacts: contactListCopy
    }

    console.log(contactListCopy);

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <table>
        

        </table>
      </div>
    );
  }
}

export default App;
