import React, { Component } from 'react'

// Update this component to use the Updating Component Lifecycle methods

export default class AboutPage extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }
componentWillReceiveProps() {
  console.log('component will receive props')
}
componentWillUpdate() {
  console.log('component will update')
}

  render() {
    return (
      <div>
        <h2>About</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }

  incrementCounter() {
    let { counter } = this.state
    counter++

    this.setState({
      counter
    })
  }

  decrementCounter() {
    let { counter } = this.state
    counter--

    this.setState({
      counter
    })
  }
}
