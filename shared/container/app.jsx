import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Header } from '../component' 

function mapStateToProps(state) {
  return {}
}

@connect(mapStateToProps)
class App extends Component {
  
  constructor(){
    super()
  }

  render(){
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default App
