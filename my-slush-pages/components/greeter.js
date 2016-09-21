import React, { Component } from 'react'

class Greeter extends Component {

  constructor (props) {
    super(props)
  }

  render() {
    return <h1>Hello Cub {this.props.name} love Aunty Foxy xx</h1>
  }
}

export default Greeter
