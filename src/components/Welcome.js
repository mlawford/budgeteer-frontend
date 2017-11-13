import React from 'react'
import '../App.css';
import '../icons8-money_bag.png';

const Welcome = (props) => {
  return (
    <div>
      <div className="navbar">
        <a href="#home">Budgeteer</a>
        
      </div>

      <div className= "img-container">
        <div className= "layer"/>
        <h1 className= "banner"> Stop going overbudget. </h1>
        <p className= "banner"> Knowing where your money is going is a good thing. We track and visualize your monthly budget so that you dont have to. </p>
      </div>

        <div className="bottom">
            <button className="button button1"onClick={props.setDemoUser} type="button">Demo</button>
        </div>

        <div className="img-body-container">

        </div>
        <div className="logo"/>
    </div>
  )
}

export default Welcome
