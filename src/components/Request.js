import React, { Component } from 'react'
import { connect } from 'react-redux'

class Request extends Component {
  render() {
    const { data } = this.props
    console.log(data);
    return (
      <tr>
        <th scope="row">{data.author}</th>
        <td>{data.title}</td>
        <td>{data.commits.length}</td>
        <td>{data.comments.length}</td>
      </tr>
    )
  }
}

export default connect(
  null,
  null
)(Request)
