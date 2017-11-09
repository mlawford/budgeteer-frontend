import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {

  render() {
    return (
      <div className="Nav">


          <div><NavLink to="/"> Home </NavLink></div>

          <div><NavLink to="/budgets"> Budgets </NavLink></div>


      </div>
    )
  }
}
