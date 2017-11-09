import React, { Component } from 'react'

export default class UserContainer extends Component {

  state = {
    username: ""
  }

  fetchData(){
    fetch("http://localhost:3000/api/users")
    .then((response) => response.json())
    .then((response) =>
      this.setState({
        username: response[0].username
      })
    )
  }

  componentDidMount(){
    this.fetchData()
  }

  render() {
    return (
      <div><h1>{this.state.username} </h1></div>
    )
  }
}
