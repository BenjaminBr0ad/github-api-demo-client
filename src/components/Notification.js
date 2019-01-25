import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'reactstrap'

class Notification extends Component {

  render() {
    const {
      error,
      success
    } = this.props

    return (
      <div>
      {
        error && !success ?
        <Alert color="danger">{error}</Alert>
        : !error && success ?
        <Alert color="success">{success}</Alert>
        :
        <Alert color="info">e.g.: https://github.com/hapijs/hapi</Alert>
      }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    error: state.main.error,
    success: state.main.success
  }
  return props
}

export default connect(
  mapStateToProps,
  null
)(Notification)
