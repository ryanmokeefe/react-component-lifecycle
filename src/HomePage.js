import React, { Component } from 'react'

// Update this component to use the Mounting Component Lifecycle methods

export default class HomePage extends Component {
  constructor() {
    super()

    console.log("Home: In the constructor")
  }

  render() {
    console.log("Home: In render")
    return (
      <div>
        <h2>Home</h2>
        <p>{this.props.message}</p>
      </div>
    )
  }

}