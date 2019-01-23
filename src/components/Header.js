import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { retrieveData, handleChange } from '../actions/main'
import { Container, Jumbotron, Button, InputGroup, InputGroupAddon, Input, Alert } from 'reactstrap'

class Header extends Component {
  render () {
    const {
      retrieveData,
      handleChange,
      input,
      error,
      success
    } = this.props

    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-4">Explore GitHub Pull Requests</h1>
            <p className="lead">Enter a valid GitHub repository URL to retrieve associated pull request data.</p>
            <hr className="my-2" />
            <InputGroup>
              <Input name="input" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
                <InputGroupAddon addonType="append">
                  <Button color="success" type="submit" onClick={() => retrieveData(input)}>Submit</Button>
                </InputGroupAddon>
            </InputGroup>
            {error && !success ?
              <Alert color="danger">
                {error}
              </Alert>
              : !error && success ?
              <Alert color="success">
                {success}
              </Alert>
              :
              <Alert color="info">
              e.g.: https://github.com/hapijs/hapi
              </Alert>
            }
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    input: state.main.input,
    error: state.main.error,
    success: state.main.success
  }
  return props
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  retrieveData,
  handleChange
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
