import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, InputGroup, InputGroupAddon, Input } from 'reactstrap'
import { retrieveData, handleChange} from '../actions/main'


class SearchBar extends Component {
  render() {
    
    const {
      retrieveData,
      handleChange,
      input
    } = this.props

    return (
      <InputGroup>
        <Input name="input" onChange={(e) => handleChange(e.target.name, e.target.value)}/>
        <InputGroupAddon addonType="append">
          <Button color="success" type="submit" onClick={() => retrieveData(input)}>
            Submit
          </Button>
        </InputGroupAddon>
      </InputGroup>
    )
  }
}

const mapStateToProps = state => {
  const props = {
    input: state.main.input
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
)(SearchBar)
