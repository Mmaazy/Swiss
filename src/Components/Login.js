import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const Login = () => {
  return (
    <>
      <Container>
        <div className='d-flex justify-content-center mt-5'>
          <img
            src='images/swiss_logo.png'
            alt='Logo'
            style={{ width: '96px', height: '74px' }}
          />
        </div>

        <Row className='d-flex justify-content-center'>
          <Col className='form-adjustment'>
            <h1 className='my-4 login'>Login</h1>

            <Form>
              <Form.Group className='mb-4' controlId='formBasicEmail'>
                <Form.Control type='email' placeholder='Email Address' />
              </Form.Group>

              <Form.Group className='mb-4' controlId='formBasicPassword'>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>

              <Form.Group className='mb-4' controlId='formForgotPassword'>
                <a href='#' className='forgot-password'>
                  Forgot Password
                </a>
              </Form.Group>

              <Button
                variant='primary'
                type='submit'
                className='login-btn d-block w-100'
              >
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
