import React from 'react'

const Welcome = (props) => {
  return (
    <div>
      <p>Welcome</p>
      <button onClick={props.setDemoUser} type="button">Demo</button>
    </div>
  )
}

export default Welcome
