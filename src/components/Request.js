import React, { Component } from 'react'

class Request extends Component {
  render() {
    const { data } = this.props

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

export default Request
