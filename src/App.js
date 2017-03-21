import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola Mundo</h1>
        <OtroSaludo />
      </div>
    );
  }
}

class OtroSaludo extends Component {
  render() {
    return (
      <p>Hola desde otro componente</p>
    )
  }
}

class Formulario extends Component {
  render() {
    return (
      <p>Hola desde otro componente</p>
    )
  }
}

export default App;
