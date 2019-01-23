import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Header from './components/Header'
import RequestList from './components/RequestList'

class App extends Component {
  render() {
    const { pulls } = this.props

    return (
      <div>
        <Header/>
        {pulls.length > 0 ? <RequestList/> : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    pulls: state.main.pulls
  }
  return props
}

export default connect(
  mapStateToProps,
  null
)(App)
