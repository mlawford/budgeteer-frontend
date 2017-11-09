import React, { Component } from 'react';
import NavBar from './components/NavBar'
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import BudgetContainer from './components/BudgetContainer'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/budgets" component={BudgetContainer} />
      </div>
    );
  }
}

export default App;
