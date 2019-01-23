import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Container } from 'reactstrap'
import Request from './Request'

class RequestList extends Component {

  render () {
    const { pulls } = this.props

    return (
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Pull Request Submitted By:</th>
              <th>Pull Request Title:</th>
              <th># of Commits</th>
              <th># of Comments</th>
            </tr>
          </thead>
          <tbody>
            {pulls.map((pull, i) => {
              return (
              <Request
                key={i}
                data={pull}
              />
              )
            })}
          </tbody>
        </Table>
      </Container>
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
)(RequestList)
