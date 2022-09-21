import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class greeting extends Component {

    constructor(props){
        super(props);
        // this.state = {
        //     age : 20
        // }
    }
  render() {
    return (
      <div>
      <h1>Hola {this.props.name}</h1>
      <h2>Tu edad es de  {this.props.age}</h2>
      </div>
    )
  }
}

greeting.propTypes={
    name: PropTypes.string,
    
}