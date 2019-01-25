import React, { Component } from 'react'
import { Container, Jumbotron } from 'reactstrap'
import Notification from './Notification'
import SearchBar from './SearchBar'

class Header extends Component {
  render () {

    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-4">
              Explore GitHub Pull Requests
            </h1>
            <p className="lead">
              Enter a valid GitHub repository URL to retrieve associated pull request data. <i className="fab fa-github"></i>
            </p>
            <hr className="my-2" />
            <SearchBar />
            <hr className="my-2" />
            <Notification />
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Header
