import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante conFusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
