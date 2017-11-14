import React, { Component } from 'react';
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
  }

  setDemoUser = () => {
    fetch("http://localhost:3000/api/users/1")
    .then((response) => response.json())
    .then((response) => this.setState({
      user: response
    }))
  }


  render() {
    return (
      <div className="App">

        {(this.state.user === "") ? <Route exact path="/" render={() => <Welcome setDemoUser={this.setDemoUser} />} /> :
        <Route exact path="/" render={() => <BudgetContainer user={this.state.user}/>}/>}

      </div>
    );
  }
}

export default App;
