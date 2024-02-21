import React, { FC } from 'react';
import { Container, Row, Col, Form, Button, FormGroup } from 'react-bootstrap';
interface RegisterProps {}

const RegisterPage: FC<RegisterProps> = () => (
  <div
    style={{
      maxWidth: 400 + 'px',
      margin: 'auto',
      padding: 40 + 'px',
    }}
  >
    <Form>
      <h2>Register new user</h2>
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
        <Form.Group controlId='formPasswordConfirm'>
          <Form.Label>Re-enter password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Re-enter password'
          ></Form.Control>
        </Form.Group>
      </div>
      <div>
        <Form.Check
          inline
          type='radio'
          label='User'
          name='grp1'
          id='UserRole'
          checked
        />
        <Form.Check
          inline
          type='radio'
          label='Admin'
          name='grp1'
          id='AdminRole'
        />
      </div>
      <div className='d-grid'>
        <Button type='submit'>Register</Button>
      </div>
    </Form>
  </div>
);

export default RegisterPage;
