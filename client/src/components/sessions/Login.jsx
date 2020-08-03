import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import { Form, Container, Button } from 'react-bootstrap';

const Login = props => {

    return (
    <Container className="my-5">
    <header>
    <h1>Register New User</h1>
    </header>
    <hr/>

    <Form>
      <Form.Group>
        <label for="email">Email:</label>
        <input class="form-control" type="email" name="email"/>
      </Form.Group>

      <Form.Group>
        <label for="password">Password:</label>
        <input class="form-control" type="password" name="password"/>
        </Form.Group>

      <Form.Group>
        <button class="btn btn-primary">Login</button>
        </Form.Group>
    </Form>
  
</Container>
    );

};

export default Login;