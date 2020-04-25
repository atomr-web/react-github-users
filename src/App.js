import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import { Form } from './components/Form'
import { Users } from './components/Users'
import { Footer } from './components/Footer'

const url = 'https://api.github.com/search/users?q=';

export class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      users: [],
      isLoading: false,
      error: null
    }

    this.getUsers = this.getUsers.bind(this);
  }

  getUsers(e) {
    e.preventDefault();

    this.setState({
      isLoading: true
    })

    fetch(url + e.target.querySelector('input').value)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoading: false,
            users: result.items,
          })
        },
        (error) => {
          this.setState({
            isLoading: true,
            error
          })
        }
      )
      .then(
        e.target.querySelector('input').value = ''
      )
  }

  render() {
    return (
      <div className="app">
        <Container maxWidth="sm">
          <Typography variant="h4" align="center">
            Search github users
            </Typography>
          <Form
            inputText={this.state.inputText}
            getUsers={this.getUsers}
          />
        </Container>

        <Container maxWidth="lg">
          <Users
            users={this.state.users}
            isLoading={this.state.isLoading}
            error={this.state.error}
          />
        </Container>

        <Footer />
      </div>
    )
  }
}