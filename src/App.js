import React, { Component } from 'react';
import NavBar from './components/NavBar'
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import BudgetContainer from './components/BudgetContainer'

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: ""
    }
    this.fetchData()
  }

  fetchData = () => {
    fetch("http://localhost:3000/api/users/1")
    .then((response) => response.json())
    .then((response) => this.setState({
      user: response
    }))
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Welcome} />
        <Route exact path="/budgets" render={() => <BudgetContainer user={this.state.user}/>}/>

      </div>
    );
  }
}

export default App;
