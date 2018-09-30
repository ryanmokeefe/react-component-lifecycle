import React, { Component } from 'react'

// Update this component to use the Mounting Component Lifecycle methods

export default class HomePage extends Component {
  constructor() {
    super()

    console.log("Home: In the constructor")
  }
  componentDidMount() {
    console.log('home comp Did mount')
  }
  componentWillUnmount() {
    console.log('home comp will unmount')
  }
  componentWillMount() {
    console.log('home component will mount')
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
