import React, { FC } from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
interface LoginProps {}

const LoginPage: FC<LoginProps> = () => (
  <div
    style={{
      maxWidth: 400 + 'px',
      margin: 'auto',
      padding: 40 + 'px',
    }}
  >
    <Form>
      <h2>Login</h2>
      <div>
        <Form.Group controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control type='text' placeholder='Username'></Form.Control>
        </Form.Group>
      </div>
      <div>
        <Form.Group controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password'></Form.Control>
        </Form.Group>
      </div>
      <div>
        <Form.Check label='Remember me'></Form.Check>
      </div>
      <div className='d-grid'>
        <Button type='submit'>Signin</Button>
      </div>
    </Form>
  </div>
);

export default LoginPage;
