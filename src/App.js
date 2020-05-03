import React, { useState } from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import { Form } from './components/Form'
import { Users } from './components/Users'
import { Footer } from './components/Footer'

const url = 'https://api.github.com/search/users?q=';

export const App = () => {

  const [users, setUsers] = useState( [] );
  const [isLoading, setIsLoading] = useState( false );
  const [error, setError] = useState( null );

  const getUsers = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch(url + e.target.querySelector('input').value)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setUsers(result.items)
        },
        (error) => {
          setIsLoading(true);
          setError(error);
        }
      )
      .then(
        e.target.querySelector('input').value = ''
      )
  }
  
  return (
    <div className="app">
      <Container maxWidth="sm">
        <Typography variant="h4" align="center">
          Search github users
          </Typography>
        <Form
          getUsers={getUsers}
        />
      </Container>

      <Container maxWidth="lg">
        <Users
          users={users}
          isLoading={isLoading}
          error={error}
        />
      </Container>

      <Footer />
    </div>
  )
}